import React from "react";
import TextField from "@material-ui/core/TextField";

export const CustomInput = ({ placeholder, name, onChangeVal }) => {
  const onChangeHandler = (e) => {
    onChangeVal({val: e.target.value, name});
  };
  return (
    <TextField
      placeholder={placeholder}
      variant="outlined"
      onChange={onChangeHandler}
    />
  );
};
