import styled from "styled-components";


const TextInputs = styled.input`
    display: block;
    background-color: #eeeeee;
    border: 1px solid #777;
    width: 100%;
    padding: 8px 15px;
    box-sizing: border-box;
    font-family: 'Courier New', Courier, monospace;
    color: #345812;
    margin: 10px 0px;
    &::placeholder{
        color: #345812;
    }
`

export default TextInputs;