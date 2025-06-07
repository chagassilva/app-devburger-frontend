import styled from 'styled-components';
import BackgrounMain from '../../assets/Background_1.png';
import BannerHome from '../../assets/Banner_Home.svg';


export const ContainerMain = styled.div`

background: linear-gradient(rgba(255, 255, 255,0.8), rgba(255, 255, 255,0.8));
background-image: url(${BackgrounMain});
height: auto;

@media (min-width: 620px) and (max-width: 12080px) {

    width:100%;
  /* … */
}


`


export const Banner = styled.div`


height: 480px;
background-image: url(${BannerHome});
background-position: center;
background-size: cover;

h1{
    font-family: 'Road Rage', sans-serif;
    font-weight: 800;
    font-size: 80px;
    font-style: normal;
    line-height: 100%;
    color: #FFFFFF;
    display: flex;
    justify-content: flex-end;
    padding: 0 100px;
    width: auto;
    
}

`

export const ContainerBanner = styled.div`

height: auto;
width: auto;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

img{
    width: 100%;
    height: 500px;
}

`


export const ContainerCarrosel = styled.section`

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin: auto;
`

