import styled from 'styled-components';
import {Link} from 'react-router-dom';






export const Container = styled.header`

background-color: #1F1F1F;
width: 100%;
padding: 20px 0;

@media (min-width: 620px) and (max-width: 900px) {

    display:flex;
    flex-direction: column;
  /* … */
}

`

export const Content = styled.div`

display: flex;
align-items: center;
justify-content: space-between;
margin: 0 55px;

`

export const Navigation = styled.nav`

display: flex;
align-items: center;
justify-content: center;
height: 72px;

div{

    margin-left: 80px;
    display: flex;
    align-items: center;
    gap: 20px;

    hr{
        height: 15px;
        border: 1px solid #bababa;
    }
}

`


export const HeaderLink = styled(Link)`

text-decoration: none;
display: flex;
align-items: center;
justify-content: center;
font-family: 'Poppins', sans-serif;
gap: 5px;
font-size: 14px;
font-weight: 400;
color: ${props => props.$isAcive ? '#d88704' : '#fff'};

&:hover{
    color:rgb(192, 192, 192);
    transition: 0.2s;
}


`

export const Options = styled.div`

display: flex;
align-items: center;
justify-content: center;
gap: 20px;



`

export const Profile = styled.div`

display: flex;
align-items: center;
justify-content: center;
gap: 10px;
font-family: 'Poppins', sans-serif;
font-size: 12px;
color: #9758a6;


p{

    font-size: 14px;
    font-weight: 300;
    color: ${(props) => props.theme.darkRed};
    line-height: 100%;

    span{

        font-weight: 600;
        color: #9758a6;
        font-size: 13px;
        line-height: 100%;
    }
}

`

export const Logout = styled.button`

font-size: 14px;
font-weight: 400;
color:rgb(238, 8, 123);
text-decoration: none;
background-color: transparent;
border: none;

`

export const LinkContainer = styled.div`

display: flex;
align-items: center;
justify-content: center;
gap: 20px;
margin-right: 20px;

`

