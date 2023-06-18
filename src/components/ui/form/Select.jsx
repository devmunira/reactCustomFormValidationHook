import Label from "./Label"
import ErrorMessage from './ErrorMessage'


const style = {
    display: 'block',
    backgroundColor: '#eeeeee',
    border: '1px solid #777',
    width: '100%',
    padding: '8px 15px',
    boxSizing: 'border-box',
    fontFamily: 'Courier New',
    color: '#345812',
    margin: '10px 0px',
}
const Select = ({name,options , value , label , handleChange , error , handleFocus , handleBlur}) => {
  return (
    <>
        <Label>{label}</Label>
        <select name={name} value={value} style={style} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur}>
        {
            options.map((item,index) => (
                <option value={item} key={index}>{item}</option>
            ))
        }
        </select>
    {error && <ErrorMessage>{error}</ErrorMessage>}
    </>
  )
}

export default Select