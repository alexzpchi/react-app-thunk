import React from "react";
import { useField } from "formik";
import Button from "@material-ui/core/Button";
// import * as yup from "yup";

// const validationPassword = yup.object({
//     password: yup.string("Enter password").required("Required field")
//   });

export const MyButton = ({ text, handleClick, ...props }) => {
  const [field] = useField(props);
  return (
    <Button {...field} {...props} onClick={handleClick}>
      {text}
    </Button>
  );
};
