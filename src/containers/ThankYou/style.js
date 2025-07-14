import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BackgrounMain2 from '../../assets/Background_1.png';




export const ContainerMenuMain = styled.div`

display:flex;
flex-direction: column;
height:100vh;
display: flex;
background-image: url(${BackgrounMain2});

`

export const BannerHeader = styled.div`
display: flex;
justify-content: center;
align-items: center;
opacity: 1;
background-color: rgb(0, 0, 0);
position: relative;


.logo_header{

   position:absolute;
   width:180px;
   height:165px;
}

.backgrond_header{

background-position: center;
background-size: cover;
display: flex;
width:100%;
}

`




export const Content = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap:20px;
margin:auto;

h2{

    font-size:32px;
    color:#9758A6;
    font-family: 'Poppins', sans-serif;
    font-weight:800;

}

p{


    width: 541;
height: 72;
top: 657px;
left: 452px;

    font-family: Poppins;
    font-weight: 400;
    font-size: 24px;
    line-height: 100%;
    letter-spacing: 0%;
    text-align: center;

}

span{

font-family: Poppins;
font-weight: 600;
font-size: 16px;
line-height: 100%;
letter-spacing: 0%;
text-align: center;
text-decoration: underline;
text-decoration-style: solid;
text-decoration-thickness: 0%;
cursor:pointer;
color:#9758A6;

margin-bottom:15px;

}

`


export const TitleMenu = styled.div`

    margin: 50px 0;
    color:#61A120;
    font-family: 'Poppins', sans-serif;
    font-weight: 800;
    font-size: 32px;
    line-height: 100%;
    text-align: center;
    display:flex;
    justify-content: center;
align-items: center;
position:relative;



    hr{

        width:60px;
        height:4px;
        border-bottom: solid   #61A120;
        display:flex;
        justify-content: center;
        align-items: center;
        position:absolute;
        top:46px;
    }



`
