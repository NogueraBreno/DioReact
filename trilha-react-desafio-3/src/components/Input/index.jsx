import React , { useId } from 'react'
import { Controller } from "react-hook-form";

import {InputContainer, InputText, IconContainer } from './styles';

const Input = ({leftIcon, name, control, ...rest}) => {

  const rgn_id = useId();

  return (
    <InputContainer>
        {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
        <Controller
        rgn_id={rgn_id}
        name={name}
        control={control}
        render={({ field }) =>  <InputText {...field} {...rest} />}
      />
       
    </InputContainer>
  )
}

export { Input }; 
