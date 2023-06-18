import styled from "styled-components"

export const DefaultButton = styled.button`
    margin: 20px 10px 0px 0px;
    border-radius: 5px;
    color: #345812;
    font-weight : bold;
    font-size: 14px;
    box-shadow: 2px 2px 15px #34581270;
    background-color: #345812;
    color: #dff4cc;

`

export const PrimaryButton = styled(DefaultButton)`
    background-color: #dff4cc;
    color: #345812;

`