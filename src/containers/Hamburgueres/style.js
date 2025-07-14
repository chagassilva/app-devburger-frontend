import styled from 'styled-components';
import BackgroundBannerMenu from '../../assets/BackgroundBannerMenu.svg';
import BackgrounMain2 from '../../assets/Background_1.png';
import { Link } from 'react-router-dom';


export const ContainerMenuMain = styled.div`

width: 100%;
min-height: 100vh;
background-image: url(${BackgrounMain2});
`

export const BannerMenu = styled.div`

background-image: url(${BackgroundBannerMenu});
height: 480px;
background-position: center;
background-size: cover;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
opacity: 1;
background-color: rgb(0, 0, 0);
position: relative;

h1{

    width:388px;
    font-family: 'Road Rage', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 97px;
    line-height: 69%;
    color: #FFFFFF;
    text-align: center;
   position: absolute;
   right:20%;
   top: 30%;
}

span{

    font-size: 20px;
    font-weight: 400;
    color: #fff;
    margin-top: 10px;
    line-height: 69%;
    font-family:'Poppins', sans-serif;
}

`

export const CategoryMenu = styled.div`

 display: flex;
 justify-content: center;
 align-items: center;
 gap: 20px;

`
export const CategoryButton = styled(Link)`

text-decoration: none;
color:${(props) => (props.$isactive ? '#FF8C05' : '#9758A6')};
border-bottom: ${(props) => (props.$isactive ? '3px solid #FF8C05' : 'none')};

`


export const ProductsContainer = styled.div`

display:grid;
grid-template-columns: repeat(3, 1fr);
padding: 40px;
gap: 60px;
justify-content: center;
max-width: 1280px;
margin: 50px auto;

`

export const TitleMenu = styled.div`

    margin: 50px 0;
    color:#61A120;
    font-family: 'Poppins', sans-serif;
    font-weight: 800;
    font-size: 32px;
    line-height: 100%;
    text-align: center;

`

export const ButtonBack = styled.button`

position: fixed;
border: solid 1px #9758A6;
border-radius: 20px;
height: 50px;
width: 200px;

`

