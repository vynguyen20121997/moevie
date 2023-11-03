import { Visibility, VisibilityOff } from "@mui/icons-material";
import LocalPostOfficeRoundedIcon from "@mui/icons-material/LocalPostOfficeRounded";
import { Button, IconButton } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import AuthAPI from "../Compoment/BE_API/AuthAPI";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../Compoment/redux/auth/authSlice";

const signupFormValidationScheme = yup.object().shape({
  email: yup
    .string()
    .email("Email does not valid format")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});
const LoginPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const formik: any = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: async (values) => {
      try {
        setLoading(true);
        setErrorMessage(null);
        const response = await AuthAPI.login(values);
        const accessToken = response.data.accessToken;
        if (accessToken) {
          localStorage.setItem("accessToken", JSON.stringify(accessToken));
          const currentUserData = await AuthAPI.fetchCurrentUser(accessToken);
          dispatch(setCurrentUser(currentUserData));
        }
      } catch (error: any) {
        setErrorMessage(error.data?.message);
        console.log("eror", error);
      } finally {
        setLoading(false);
        alert("Login successfully");
        resetForm({
          fullname: "",
          email: "",
          password: "",
        });
        navigate(`/`);
      }
    },
    validationSchema: signupFormValidationScheme,
  });
  const { handleSubmit, values, handleChange, errors, resetForm } = formik;
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <div className="signin-wrapper">
      <form className="signup-form-container" onSubmit={handleSubmit}>
        <div>
          <h1>Login</h1>
          <div className="form-control">
            <FormControl
              sx={{ marginTop: "4%", width: "100%" }}
              variant="standard"
            >
              <InputLabel htmlFor="standard-adornment-password">
                Email
              </InputLabel>
              <Input
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                startAdornment={
                  <InputAdornment position="start">
                    <IconButton>
                      <LocalPostOfficeRoundedIcon />
                    </IconButton>
                  </InputAdornment>
                }
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
            </FormControl>
          </div>
          <div className="form-control">
            <FormControl
              sx={{ marginTop: "4%", width: "100%" }}
              variant="standard"
            >
              <InputLabel htmlFor="standard-adornment-password">
                Password
              </InputLabel>
              <Input
                id="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              {errors.password && (
                <p className="error-message">{errors.password}</p>
              )}
            </FormControl>
          </div>
          <div className="submit-btn">
            <Button variant="outlined" type="submit">
              Submit
            </Button>
          </div>{" "}
          <div className="register-btn" style={{ marginTop: "5%" }}>
            <Button variant="outlined" onClick={() => navigate(`/register`)}>
              Dont Have An Account Yet?
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default LoginPage;
