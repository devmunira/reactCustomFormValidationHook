import styled , {css} from "styled-components";


const Label = styled.label`
    ${(props) => {
        switch(props.type){
            case "inline":
            return css `
            font-family: system-ui, sans-serif;
            font-size: 2rem;
            font-weight: bold;
            line-height: 1.1;
            display: grid !important;
            grid-template-columns: 1em auto;
            gap: 0.5em;
            `
            default : 
            return css `
            font-size: 12px;
            margin: 5px 0px;
            display: block;
            
            `
        }
    }}

`




export default Label;