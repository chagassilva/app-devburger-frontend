import styled from "styled-components"


export const CardContainer = styled.div`

display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
padding: 10px 20px;
margin-bottom: 20px;
border-radius: 10px;
background-color:rgb(255, 255, 255);
cursor: grab;
box-shadow: 0px 5px 15px  rgba(0,0,0,0.35);
position: relative;


div{

    width: 100%;
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
}

p{
        width: 100%;   
        color: #FF8C05;
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
        font-size: 18px;
        line-height: 20px;
        display: flex;
       margin-top: 70px;
    }

strong{

    font-size: 22px;
    font-weight: 800;
    color: #363636;
    line-height: 20px;
    display: flex;
    
}

`

export const CardImage = styled.img`

height: 100px;
position: absolute;
top: -50px;


`

export const ButtonADDProduct = styled.button`

background-color: #9758A6 !important ;
border:0;
width: 100%;
height: 40px;
border-radius: 8px;
color: #fff;

&:hover{
    background-color:#6f357c !important;
}

`