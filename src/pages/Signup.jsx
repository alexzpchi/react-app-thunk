import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { authSlice } from "../store/slices";
import { FormTypes } from "../utils/enums";
import { Form } from "../components";

export const Signup = () => {
  const dispatch = useDispatch();
  const { error, token } = useSelector((state) => state.auth);
  const history = useHistory();

  useEffect(() => {
    if (error) {
      setTimeout(() => dispatch(authSlice.actions.resetError()), 3000);
    }
  }, [error, dispatch]);
  useEffect(() => {
    if (token) {
      history.push("/users")
    }
  }, [token, history]);

  const onSubmit = (formVal) => {
    dispatch(authSlice.effects.signupThunk(formVal));
  };

  return (
    <>
      <Form type={FormTypes.SIGNUP} submitHandler={onSubmit} />
    </>
  );
};
