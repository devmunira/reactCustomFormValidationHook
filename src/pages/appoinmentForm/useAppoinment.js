import useAppoinment from "../../hooks/shared/useForm";
import {useState} from 'react'

const useAppoinment = () => {
    const [state, setstate] = useState(initialState);
    const {handleBlur,handleChange,handleFocus,handleSumnit,getError} = useAppoinment()
    return {
        handleBlur,
        handleChange,
        handleFocus,
        handleSumnit,
        getError,

    }
}

export default useAppoinment;