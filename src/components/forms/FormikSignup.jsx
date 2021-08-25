import React from "react";
import { Form, Formik } from "formik";
import * as yup from "yup";
import { makeStyles } from "@material-ui/core/styles";
import { styles } from "./styled";
import { MyTextField } from "../textField";
import { MyButton } from "../button";

const useStyles = makeStyles(() => styles);

export const FormikSignup = ({ submitHandler, redirectHandler }) => {
  const classes = useStyles();
  
  const validationSchemaSignup = yup.object({
    username: yup.string("Enter your username").required("Required field"),
    password: yup.string("Enter password").required("Required field"),
    email: yup.string("Enter your email").required("Required field"),
  });

  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
        email: "",
      }}
      validationSchema={validationSchemaSignup}
      onSubmit={(values) => {
        submitHandler(values);
      }}
    >
      {(props, errors) => (
        <Form>
          <MyTextField name="username" type="text" label="Username" fullWidth />
          <MyTextField
            name="password"
            type="password"
            label="Password"
            fullWidth
          />
          <MyTextField name="email" type="email" label="Email" fullWidth />
          <MyButton
            className={classes.formRow}
            name="submit"
            type="submit"
            text="submit"
            color="primary"
            variant="contained"
            fullWidth
          />
          <MyButton
            className={classes.formRow}
            name="tologin"
            handleClick={redirectHandler}
            text="login"
            color="secondary"
            variant="contained"
            fullWidth
          />
        </Form>
      )}
    </Formik>
  );
};
