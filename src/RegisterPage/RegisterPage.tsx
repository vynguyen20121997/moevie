import React, { useState } from "react";
import {
  withFormik,
  FormikProps,
  FormikErrors,
  Form,
  Field,
  FormikHelpers,
  Formik,
  useFormik,
  useFormikContext,
} from "formik";
import * as yup from "yup";
import "./style4.css";
import TextField from "@mui/material/TextField";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Button, IconButton, OutlinedInput } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import LocalPostOfficeRoundedIcon from "@mui/icons-material/LocalPostOfficeRounded";
import { useNavigate } from "react-router-dom";

const signupFormValidationScheme = yup.object().shape({
  fullname: yup.string().required("Fullname is required"),
  email: yup
    .string()
    .email("Email does not valid format")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});
const RegisterPage = () => {
  const [login, setLogin] = useState<boolean>(false);
  const navigate = useNavigate();
  localStorage.setItem("loginStatus", JSON.stringify(login));
  const formik: any = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      setLogin(true);
      // console.log("Submit values:", login);
      localStorage.setItem("values", JSON.stringify(values));
      localStorage.setItem("loginStatus", JSON.stringify(login));

      alert("Signup successfully");
      resetForm({
        fullname: "",
        email: "",
        password: "",
      });
      navigate(`/`);
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
    <div className="signup-wrapper">
      <form className="signup-form-container" onSubmit={handleSubmit}>
        <div>
          <h1>Create an account</h1>
          <div className="form-control">
            <FormControl
              sx={{ marginTop: "4%", width: "100%" }}
              variant="standard"
            >
              <InputLabel htmlFor="standard-adornment-password">
                Fullname
              </InputLabel>
              <Input
                id="fullname"
                name="fullname"
                value={values.fullname}
                onChange={handleChange}
                startAdornment={
                  <InputAdornment position="start">
                    <IconButton>
                      <AccountCircle />
                    </IconButton>
                  </InputAdornment>
                }
              />
              {errors.fullname && (
                <p className="error-message">{errors.fullname}</p>
              )}
            </FormControl>
          </div>
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
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
