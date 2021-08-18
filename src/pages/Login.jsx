import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { authSlice } from "../store/slices";
import { FormTypes } from "../utils/enums";
import { Form } from "../components/Form";

export const Login = () => {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.auth);
  const history = useHistory();

  useEffect(() => {
    if (error) {
      setTimeout(() => dispatch(authSlice.actions.resetError()), 3000);
    }
  }, [error, dispatch]);

  const onSubmit = async (formVal) => {
    const data = await dispatch(authSlice.effects.loginThunk(formVal));
    if (!!data.payload.token) {
      history.push("/users");
    }
  };

  return (
    <>
      <Form type={FormTypes.LOGIN} submitHandler={onSubmit} />
    </>
  );
};
