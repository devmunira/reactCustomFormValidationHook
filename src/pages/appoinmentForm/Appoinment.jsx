import React from 'react'
import Heading from '../../components/shared/Heading'
import { DefaultButton, PrimaryButton } from '../../components/ui/buttons/Button'
import InputGroup from '../../components/ui/form/InputGroup'
import Label from '../../components/ui/form/Label'
import RadioGroup from '../../components/ui/form/RadioGroup'
import Select from '../../components/ui/form/Select'
import useForm from '../../hooks/shared/useForm'
import { isEmptyObj } from '../../utils/helpers'

const init = {
  patients:'',
  name : '',
  email : '',
  number : '',
  date : '',
  location : '',
  file : '',
}

const validate = (values) => {
  const errors = {};
  if(!values.patients){
    errors.patients = 'Patients Fields is required';
  }
  if(!values.name){
    errors.name = 'name Fields is required';
  }
  if(!values.email){
    errors.email = 'email Fields is required';
  }
  if(!values.number){
    errors.number = 'number Fields is required';
  }
  if(!values.date){
    errors.date = 'date Fields is required';
  }
  if(!values.location){
    errors.location = 'location Fields is required';
  }
  if(!values.file){
    errors.file = 'file Fields is required';
  }

  return errors;
}

const Appoinment = () => {
  const {handleBlur, handleChange, handleFocus, handleSubmit,getError,formState,handleClear} = useForm({init , validate})
  
  const onSubmitFunc = ({errors , values}) => {
    if(!isEmptyObj(errors)){
      console.log(errors)
    }else{
      console.log(values)
      handleClear()
    }
  }

  return (
    <div className='container'>
        <Heading>Request For Appoinment</Heading>
        <form onSubmit={(e) => handleSubmit(e, onSubmitFunc)}>
            <Label block>Are you a Paitents?</Label>
            <RadioGroup
                name={'patients'}
                value={'yes'}
                label={'Yes'}
                handleChange={handleChange}
                handleBlur={handleBlur}
                handleFocus={handleFocus}
                error=''
            ></RadioGroup>

            <RadioGroup
                name={'patients'}
                value={'no'}
                label={'No'}
                handleChange={handleChange}
                handleBlur={handleBlur}
                handleFocus={handleFocus}
                error={formState.patients.error}
            ></RadioGroup>

            <InputGroup
            type={'text'}
            label={'Patient Name'} 
            placeholder={'Full Name'}
            name={'name'}
            value={formState.name.value}
            handleChange={handleChange}
            handleBlur={handleBlur}
            handleFocus={handleFocus}
            error={formState.name.error}
            ></InputGroup>

            <InputGroup
            type={'email'}
            label={'Patient Email'} 
            placeholder={'Email Address'}
            name={'email'}
            value={formState.email.value}
            handleChange={handleChange}
            handleBlur={handleBlur}
            handleFocus={handleFocus}
            error={formState.email.error}
            ></InputGroup>

            <InputGroup
            type={'number'}
            label={'Patient Phone Number'} 
            placeholder={'Phone Number'}
            name={'number'}
            value={formState.number.value}
            handleChange={handleChange}
            handleBlur={handleBlur}
            handleFocus={handleFocus}
            error={formState.number.error}
            ></InputGroup>

            <InputGroup
            type={'date'}
            label={'Date of Birth'} 
            placeholder={'mm/dd/yyyy'}
            name={'date'}
            value={formState.date.value}
            handleChange={handleChange}
            handleBlur={handleBlur}
            handleFocus={handleFocus}
            error={formState.date.error}
            ></InputGroup>


            <InputGroup
            type={'file'}
            label={'Previous Prescription (if have)'}
            placeholder={'mm/dd/yyyy'}
            name={'file'}
            value={formState.file.value}
            handleChange={handleChange}
            handleBlur={handleBlur}
            handleFocus={handleFocus}
            error={formState.file.error}
            ></InputGroup>
            
            <Select name={'location'} 
            value={formState.location.value} 
            label={'Your Area'} 
            options={['Dhaka' , 'Cumilla' , 'Noyakhali']} 
            handleChange={handleChange}
            handleBlur={handleBlur}
            handleFocus={handleFocus}
            error={formState.location.error}>
            </Select>

            <PrimaryButton type="sumbit">Add More</PrimaryButton>
            <DefaultButton type='reset'>Reset</DefaultButton>


            
        </form>

    </div>
  )
}

export default Appoinment