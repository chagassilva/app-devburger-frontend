import styled from 'styled-components';
import {Link} from 'react-router-dom';






export const Container = styled.header`

background-color: #fff;
width: 100%;
width: 72px;
padding: 20px 0;

`

export const Content = styled.div`

display: flex;
align-items: center;
justify-content: space-between;
max-width: 1280px;
margin: 0 auto;

`

export const Navigation = styled.nav`

display: flex;
align-items: center;
justify-content: center;
height: 72px;

div{

    margin-left: 20px;
    display: flex;
    align-items: center;
    gap: 20px;

    hr{
        height: 20px;
        border: 1px solid #bababa;
    }
}

`

export const HeaderLink = styled(Link)`

text-decoration: none;
font-size: 16px;
font-weight: 400;
color: ${props => props.$isAcive ? '#d88704' : '#9758a6'};

&:hover{
    color: #9758a6;
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
font-size: 14px;

p{

    font-size: 14px;
    font-weight: 300;
    color: ${(props) => props.theme.darkRed};
    line-height: 90%;

    span{

        font-weight: 600;
        color: #9758a6;
        font-size: 14px;
        line-height: 90%;
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