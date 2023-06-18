import React from 'react'
import Label from './Label'
import TextInputs from './TextInput'
import ErrorMessage from './ErrorMessage'

const InputGroup = ({label,name,value,placeholder,type,handleChange,error,handleFocus,handleBlur}) => {
  console.log(error)
  return (
    <>
        <Label htmlFor={name} $type={'block'}>{label}</Label>
        <TextInputs type={type} id={name} value={value}
          placeholder={placeholder}
          onChange={handleChange}
          name={name}
          onBlur={handleBlur}
          onFocus={handleFocus}
          error
        ></TextInputs>
         <ErrorMessage>{error}</ErrorMessage>
    </>
  )
}

export default InputGroup