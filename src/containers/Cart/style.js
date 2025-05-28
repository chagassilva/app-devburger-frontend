import styled from "styled-components";
import BackgoundBannerCart from "../../assets/Banner_Cart.svg";
import BackgrounMain from '../../assets/Background_2.png';

export const Container = styled.div`

background: linear-gradient(rgba(255, 255, 255,0.8), rgba(255, 255, 255,0.8));
background-image: url(${BackgrounMain});
height: 100vh;

`

export const Banner = styled.div`

background-image: url(${BackgoundBannerCart});
background-size: cover;
background-position: center;
height: 193px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;


img{

    width: 180px;
    height: 165px;
}

`

export const Title = styled.h1`

color: #61A120;
font-family: Poppins;
font-weight: 800;
font-size: 32px;
line-height: 100%;
letter-spacing: 0%;
text-align: center;
margin-top: 50px;
display: flex;
justify-content: center;
align-items: center;
position: relative;

&::after{

    content: "";
    display: block;
    width: 57px;
    height: 4px;
    background-color: #61A120;
    position: absolute;
    bottom: -20px;
    left: calc(50% -28px);
}

`

export const Content = styled.div`

display: grid;
grid-template-columns: 1fr 30%;
width: 100%;
max-width: 1280px;
padding: 0 20px;
margin: 0 auto;
gap: 20px;

`

// export const CartItems = styled.div`


// `

// export const CartResume = styled.div`


// `