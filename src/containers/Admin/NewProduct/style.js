import styled from "styled-components";
import ReactSelect from "react-select";
import { Button } from "../../../components/Button";

export const Select = styled(ReactSelect)`


`


export const Form = styled.form`

border-radius: 8px;
background-color: #363636;
padding: 20px;
width: 447px;
height:668px;
border-radius:10px;
display: flex;
flex-direction: column;
gap: 20px;


`


export const ContainerUpload = styled.div`


display: flex;
align-items: center;
justify-content: center;
min-height: 100vh;


`

export const InputGroup = styled.div`


display: flex;
flex-direction: column;
gap: 10px;
padding: 10px;
border-radius: 8px;




`

export const Label = styled.label`

color: #fff;
font-size: 18px;
font-weight: 400;
font-family: 'Poppins', sans-serif;
line-height: 109%;
letter-spacing:0;



`

export const Input = styled.input`

width: 100%;
height: 40px;
border-radius: 8px;
border: 1px solid #fff;
background-color: #fff;
padding: 10px 12px


`

export const LabelUpload = styled.label`

cursor: pointer;
border: 1px dashed #fff;
border-radius: 8px;
padding: 12px 12px;
display: flex;
align-items: center;
justify-content: center;
gap: 20px

> svg {

    
   
}

 > input {display: none;}
> span {
    color: #fff;
    font-size: 14px;
    font-weight: 400;
    margin-left: 10px;
}

.rVCbC {color:transparent;}


` 

export const SubmitButton = styled(Button)`

font-size: 22px;
margin-top: 40px;

`



export const ErrorMessage = styled.span`

color: red;
font-size: 12px;
`
