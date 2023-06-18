import { useState } from "react";
import  { ConvertStateToKeys ,ConvertKeysToState }  from "../../utils/Convert";
import { deepClone, isEmptyObj } from "../../utils/helpers";

/**
* @typedef {object} params
* @property {object} init
* @property {[boolean | function]} validate
* @params {object} params
* @returns {object} handleChange,hanldeBlur,handleFocus,handleSubmit,handleClear
*/

const useForm = ({init , validate}) => {
    const [state, setstate] = useState(ConvertKeysToState(init));
    const handleChange = (e) => {
        /**
        * - First Add Value to SetState
        * - Check Validity and update State
         */
        e.preventDefault();
        const {name,value} = e.target;
        const obj = deepClone(state)
        obj[name].value = value;
        
        // After add data into state we need to check error for update error state       
        const errors = validate(ConvertStateToKeys(state,'value'))
        if(obj[name].touched && errors[name]){
            obj[name].error = errors[name]
        }else{
            obj[name].error = ''
        }
        setstate(obj)
    }
    const handleFocus = (e) => {
        /**
        * - Focus & Touched True
         */
        const {name,value} = e.target;
        const obj = deepClone(state)
        obj[name].focused = true;

        if(!obj[name].touched){
            obj[name].touched = true;
        }

        setstate(obj)
        
    }
    const handleBlur = (e) => {
        /**
        * - First Check Error with condtions
        * - Focused false
        */
        const {name,value} = e.target;
        const obj = deepClone(state)
        
        // After add data into state we need to check error for update error state       
        const errors = validate(ConvertStateToKeys(state,'value'))
        if(obj[name].touched && errors[name]){
            obj[name].error = errors[name]
        }else{
            obj[name].error = ''
        }

        obj[name].focused = false;
        setstate(obj)

        
    }
    const handleSubmit = (e , cb) => {
        e.preventDefault()
        /**
        * -  Error Check
        * - return all data
        */
        const values = ConvertStateToKeys(state,'value');
        const errors = validate(values)

        const obj = deepClone(state)
    
        if(!isEmptyObj(errors)){
            for (const [key, value] of Object.entries(errors)) {
                obj[key].error = value;
            }
            setstate(obj)
            cb({errors})
        }else{
            cb({
                values,
                errors,
                touched: ConvertStateToKeys(state, 'touched'),
                focused: ConvertStateToKeys(state, 'focused'),
            }) 
        }
        
    }

    const handleClear = () => {
        /**
        * - SetState to Initial State
         */

        setstate(ConvertKeysToState(init))
    }
    const getError = () => {
        /**
        * - Check validity boolen or func 
        * - return hasError & Errors
        */

        const hasError = null, errors = null;

        const values = ConvertStateToKeys(state,'value');

        const validityError = validate(values)

        if(typeof validate === 'boolean'){
            hasError = validate;
            errors = ConvertStateToKeys(state,'error');
        }else if(typeof validate === 'function'){
            hasError = isEmptyObj(validityError)
            errors = validityError; 
        }else{
            throw new Error('Invaild type of validate')
        }

        return {
            hasError,
            errors,
            values
        }

        
    }

    return {
        handleBlur,
        handleChange,
        handleFocus,
        handleSubmit,
        getError,
        handleClear,
        formState : state
    }
}

export default useForm;