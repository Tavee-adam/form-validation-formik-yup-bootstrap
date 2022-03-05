import React from "react";
import "./Signup.css";
import { Formik, Form } from "formik";
import TextField from "./TextField";
import * as Yup from "yup";

const initialValues = {
  Firstname: "",
  Lastname: "",
  email: "",
  password: "",
  confirmpassword: "",
};

const Signup = () => {
  const validate = Yup.object({
    Firstname: Yup.string()
      .max(15, "not much than 15")
      .required("the firstname is required")
      .matches(/^[a-z]*$/, "First must be charecters"),
    Lastname: Yup.string()
      .max(20, "not much than 20")
      .required("the lastname is required")
      .matches(/^[a-z]*$/, "First must be charecters"),
    email: Yup.string()
      .email("email is invalid")
      .required("the email is required"),
    password: Yup.string()
      .min(8, "not less than 8")
      .max(15, "not much than 15")
      .required("the password is required"),
    confirmpassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("the confirm password is required"),
  });
  return (
    <>
      <Formik
        className="formik"
        initialValues={initialValues}
        validationSchema={validate}
      >
        {(formik) => {
          return (
            <>
              <h1 className="my-4 font-weight-bold-display-4">
                This is a Signup page
              </h1>
              <Form>
                {console.log(formik.values)}
                <TextField
                  label="First Name :"
                  name="Firstname"
                  type="text"
                  placeholder="Firstname"
                />
                <TextField
                  label="Last Name :"
                  name="Lastname"
                  type="text"
                  placeholder="Lastname"
                />
                <TextField
                  label="Email :"
                  name="email"
                  type="email"
                  placeholder="email@test.com"
                />
                <TextField
                  label="Password :"
                  name="password"
                  type="password"
                  placeholder="Password"
                />
                <TextField
                  label="Confirm Password :"
                  name="confirmpassword"
                  type="password"
                  placeholder="Confirm Password"
                />
                <button className="btn btn-dark mt-3" type="sibmit">
                  Register
                </button>
                <button className="btn btn-danger mt-3 ml-3" type="reset">
                  Reset
                </button>
              </Form>
            </>
          );
        }}
      </Formik>
    </>
  );
};

export default Signup;
