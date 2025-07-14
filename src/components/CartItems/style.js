import { Link } from "react-router-dom";
import styled from "styled-components";



export const ProductImage = styled.img`

height: 80px;
width: 80px;
border-radius: 16px;

`

export const ButtonGroup = styled.div`

display: flex;
justify-content: space-between;
align-items: center;
gap: 12px;


button{

    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    color: #fff;
    border-radius: 4px;
    background-color: #9758a6;
    transition: 0.3s ease-in-out;
    cursor: pointer;

&:hover{
    background-color: #6f357c;

}
}

`

export const EmptyCartProduct = styled.div`

font-size: 20px;
text-align: center;
font-weight: bold;
margin: 10px 5px


`

export const MooreProducts = styled(Link)`

display: flex;
width: 100%;
justify-content: center;
align-items: center;
padding: 10px;
position: relative;

p{

    font-size: 16px;
    color: #9758a6;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    border-bottom: 1px solid #9758a6;
    line-height: 15px;
     position: absolute
     
    &:hover{
        color: #6f357c;
    } 

}

`