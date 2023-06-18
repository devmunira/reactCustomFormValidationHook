import React from 'react'
import Label from './Label'
import Radio from './Radio'
import ErrorMessage from './ErrorMessage'

const RadioGroup = ({label,name,value,handleChange,error}) => {
  return (
    <>
        <Label htmlFor={value} $type={'inline'}>
            <Radio type={'radio'} id={value} value={value} onChange={handleChange} name={name}></Radio>
        {label}</Label>
        {error && <ErrorMessage>{error}</ErrorMessage>}
    </>
  )
}

export default RadioGroup