import React from "react";
import Button from "@material-ui/core/Button";

export const CustomButton = ({ color, text, disabled, type }) => {
    console.log(disabled)
  return (
    <Button color={color} variant="contained" disabled={disabled} >
      {text}
    </Button>
  );
};
