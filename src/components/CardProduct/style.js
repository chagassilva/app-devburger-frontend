import styled from "styled-components"
import IconRating from '../../assets/Vector_Rating.png';
//import IconFavorite from '../../assets/Vector_Favorite.png';
import BackgrounMain from '../../assets/Background_2.png';


export const ContainerMain = styled.div`

background-image: url(${BackgrounMain});


`



export const CardContainer = styled.div`

display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
padding: 10px 20px;
margin-bottom: 10px;
border-radius: 33px;
background-color:rgb(255, 255, 255);
box-shadow: 0px 5px 15px  rgba(0,0,0,0.35);
position: relative;
height: 328px;
width: 313px;

div{

    width: 100%;
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    margin-top: 20px;
}

p{
        width: 100%;   
        color: #FF8C05;
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
        font-size: 21px;
        line-height: 81%;
        margin-top: 50px;
        letter-spacing: 0%;
        justify-content: center;
        
    }

strong{

    font-size: 22px;
    font-weight: 800;
    color: #363636;
    line-height: 20px;
    display: flex;
    margin-top: 10px;
    
}

.description {

    font-family: 'Poppins', sans-serif;
    color: #363636;
    font-weight: 500;
    font-size: 16px;
    line-height: 143%;
    margin-bottom: 10px;
    width: 100%;
    margin-top: 20px;
}

`

export const CardImage = styled.img`

height: 100px;
position: absolute;
top: -50px;


`


export const ContainerButtonADDProduct = styled.div`


position: relative;
height: 80px !important;
align-items: center;
top: 50px;

.icon-button{
    display: flex;
    align-items: flex-end;   
    position: absolute;
    margin-top: 20px;
}

.icon-rate{
    display: flex;
    align-items: flex-start;   
    position: absolute;
    margin-top: 20px;
}


`

export const ButtonADDProduct = styled.button`

background-color: #9758A6 !important ;
border:0;
width: 43px;
height: 43px;
border-radius: 8px;
color:rgb(255, 255, 255);

&:hover{
    background-color:#6f357c !important;
}

`

// export const IconRate = styled.div`

// background-image: url(${IconRating});
// background-repeat: no-repeat;
// background-size: 19px 19px;
// cursor: pointer;
// `

export const ContainerFavorite = styled.div`


display: flex;
justify-content: center;
align-items: flex-end;
position: relative;

img{
    position: absolute;
    top: -30px;
    cursor: pointer;
}

&:hover img {
    opacity: 0.7;
    transition: opacity 0.3s ease-in-out;
}


`



export const ContainerRating = styled.div`


display: flex;
justify-content: center;
align-items: flex-start;


img{
    
    cursor: pointer;
    z-index: 1;
    width: 100px;
    height: 100px;
    position: absolute;
    top: -30px;
    left: 0;
}

&:hover img {
    opacity: 0.7;
    transition: opacity 0.3s ease-in-out;
}

`
