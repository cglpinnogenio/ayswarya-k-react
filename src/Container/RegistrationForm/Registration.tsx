import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Input from "../../Components/LoginForm/login";
import "./Registration.css"

interface registrationForm {
  username: string;
  phonenumber: string;
  email: string;
  password: string;
  confirmpassword: string;
  label: string;
}
const validationSchema = yup.object({
  username: yup.string().required("UserName is a required field "),
  phonenumber: yup
    .string()
    .min(10)
    .max(10, "Phone Number is not valid!.")
    .required("Phone Number is a required field"),
  email: yup
    .string()
    .required("Email is a required field")
    .email("Email is not valid!."),
  password: yup
    .string()
    .min(8, "Password is too short.")
    .matches(/(?=.*[0-9])/, "Must Contain Number.")
    .required("Required*"),
  confirmpassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password must be match.").required("Required*"),
});

function ArusaForm() {
  const { handleSubmit, handleChange, errors, values,touched } = useFormik({
    initialValues: {
      username: "",
      phonenumber: "",
      email: "",
      password: "",
      confirmpassword: "",
      label: "",
    },
    validationSchema,
    onSubmit:(values) => {
      console.log(values);
    },
  });
  return (
    <form onSubmit={handleSubmit}>
      <h1>Arusa</h1>
      <p>Seamless furniture with natural fabrics !</p>
      <Input
        label="Username"
        id="username"
        name="username"
        type="text"
        placeholder="Enter UserName"
        onChange={handleChange}
        values={values.username}
        isError={touched.username && errors.username}
        errorText={errors.username}
      />
      <Input
        label="Phonenumber"
        id="phonenumber"
        type="text"
        name="phonenumber"
        placeholder="Enter Phone Number"
        onChange={handleChange}
        values={values.phonenumber}
        isError={touched.username && errors.phonenumber}
        errorText={errors.phonenumber}
      />
      <Input
        label="Email"
        id="email"
        type="text"
        name="email"
        placeholder="Enter Email"
        onChange={handleChange}
        values={values.email}
        isError={touched.username && errors.email}
        errorText={errors.email}
      />
      <Input
        label="Password"
        id="password"
        type="password"
        name="password"
        placeholder="Enter Password"
        onChange={handleChange}
        values={values.password}
        isError={touched.username && errors.password}
        errorText={errors.password}
      />
      <Input
        label="Confirmpassword"
        id="confirmpassword"
        type="text"
        name="confirmpassword"
        placeholder="Enter Confirm Password"
        onChange={handleChange}
        values={values.confirmpassword}
        isError={touched.username && errors.confirmpassword}
        errorText={errors.confirmpassword}
      />
      <button type="submit">Sign Up</button>
    </form>
  );
}
export default ArusaForm;
