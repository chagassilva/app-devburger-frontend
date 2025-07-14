
import styled from "styled-components";
import Select from 'react-select'


export const ProductImageAdmin = styled.img`

    width: 80px;
    height: 80px;
    padding: 10px;
    border-radius: 50%;
  
`

export const SelectSatus = styled(Select)`
    width: 200px;
    margin-left: 10px;
    margin-top: 10px;
 
`

export const FilterContainer = styled.div`

display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
border:none;

`

export const FilterOptinsAdmin = styled.button`

margin-bottom: 40px;
height: auto;
display: flex;
align-items: center;
justify-content: center;
font-weight: 700;
padding: 10px 20px;
border: transparent;
border-bottom: ${(props) => props.$isActiveStatus ? '3px solid #5c2669' : 'none'};
color: ${(props) => props.$isActiveStatus ? 'rgb(153, 66, 175)' : 'none'};


&:hover {
    cursor: pointer;
    transition: 0.3s;
    
}



`
