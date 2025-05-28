import styled from 'styled-components';



export const Root = styled.table`

width: 100%;
border-collapse: collapse;
border-spacing: 0;
border-radius: 20px;
margin-top: 50px;
background-color: #fff;
box-shadow: 0px 5px 15px  rgba(0,0,0,0.15);

`


export const Body = styled.tbody`

padding: 10px;
text-align: left;
color: #484848;
/* border-bottom: 1px solid #484848; */
font-weight: 600;
line-height: 100%;


`

export const Header = styled.thead`

background-color: #61A120;


`

export const Tr = styled.tr`


`
export const Th = styled.th`

padding: 12px;
text-align: center;
color: #fff;
background-color: #484848;
border-bottom: 1px solid #484848;


&:first-child{
    border-top-left-radius: 20px;
    
}

&:last-child{
    border-top-right-radius: 20px;
    
}

`

export const Td = styled.td`

padding: 20px;
text-align: center;
color:rgb(0, 0, 0);
border-bottom: 1px solid rgba(72, 72, 72, 0.12);
font-weight: 600;
line-height: 100%;



button{

margin: 10px;
justify-content: center;
align-items: center;
width: 30px;
height: 30px;
color: #fff;
border-radius: 4px;
background-color: #9758a6;
transition: 0.3s ease-in-out;
cursor: pointer;
border: none;

&:hover{
background-color: #6f357c;

}

}

.deleteproductcart{
    
background-color:rgb(255, 255, 255);
margin: 10px;
justify-content: center;
align-items: center;
width: 30px;
height: 30px;
color: #000;
font-size: 17px;
font-weight: 600;
transition: 0.3s ease-in-out;
cursor: pointer;
border: none;

    &:hover{
    background-color:rgb(255, 255, 255);
    }
}

`

