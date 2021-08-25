import React from "react";
import { useField } from "formik";
import TextField from "@material-ui/core/TextField";

export const MyTextField = ({ label, handleChange, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <TextField
      label={label}
      {...field}
      {...props}
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
    />
  );
};
