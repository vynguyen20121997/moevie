import React from "react";
import {
  withFormik,
  FormikProps,
  FormikErrors,
  Form,
  Field,
  FormikHelpers,
  Formik,
  useFormik,
} from "formik";
import * as yup from "yup";
import "./style4.css";
import TextField from "@mui/material/TextField";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { IconButton, OutlinedInput } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
interface Values {
  firstName: string;
  lastName: string;
  email: string;
}

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
  const formik: any = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log("Submit values:", values);
      // Call API to create new account
      // Logic code ...
      alert("Signup successfully");
      resetForm({
        // fullname: "",
        // email: "",
        // password: "",
      });
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
        <h2>Create an account</h2>
        <div className="form-control">
          <TextField
            id="fullname"
            name="fullname"
            label="Fullname"
            value={values.fullname}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
            variant="standard"
          />

          {errors.fullname && (
            <p className="error-message">{errors.fullname}</p>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && (
            <p className="error-message">{errors.password}</p>
          )}
        </div>

        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

        <button className="btn-submit">Submit</button>
      </form>
    </div>
  );
};

export default RegisterPage;
