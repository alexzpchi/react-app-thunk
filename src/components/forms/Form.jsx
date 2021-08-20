import React from "react";
import { FormTypes } from "../../utils/enums";
import {FormSignup} from './FormSignup'
import {FormLogin} from './FormLogin'


export const Form = ({ type, submitHandler }) => {
  
  if(type === FormTypes.SIGNUP){
    return <FormSignup submitHandler={submitHandler} />
  }

  return <FormLogin submitHandler={submitHandler} />
};
