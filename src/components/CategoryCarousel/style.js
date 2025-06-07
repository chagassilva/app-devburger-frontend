import { Link } from "react-router-dom";
import styled from "styled-components";







export const Container = styled.div`
text-align: center;
width: 45%;


.carousel-item{
    height:auto;
    width: auto;
    background-size: cover;
    background-position: center;
    margin: 25px 0;
    padding-right: 10px;
    padding-left: 10px;

    h4{
        background-color:rgb(0, 0, 0, 0.5);
        width: auto;
        padding: 10px 10px;
        margin-left: 8px;
        border-radius: 30px;
        color: #fff;
    }

}

.react-multi-carousel-list{

margin: 0 0 40px 0;

}

.react-multiple-carousel__arrow--right {
    right: calc(0% + 1px);
}

.react-multiple-carousel__arrow--left {
    left: calc(0% + 1px);

}


button{

    background-color:#ccc;
    &::before{color:rgb(0, 0, 0);}
}

button:hover{
    background-color:rgb(87, 88, 88);
}

`


export const Title = styled.h2`

`

export const ContainerItens = styled.div`

height: 250px;
width: 100%;
background: url('${(props) => props.ImageURL}');
background-position: center;
background-size: cover;
border-radius: 20px;
display: flex;
align-items:center;


`


export const TitleCategories = styled.div`

    margin: 50px 0;
    color:#9758A6;
    font-family: 'Poppins', sans-serif;
    font-weight: 800;
    font-size: 32px;
    line-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    

   img{
        margin: 10px 0 10px 0;
        width:57px;
        height: 6px;
    }
        
    

`

export const TitleOffertoday = styled.div`

    margin: 30px 0;
    color:#61A120;
    font-family: 'Poppins', sans-serif;
    font-weight: 800;
    font-size: 32px;
    line-height: 100%;

`

export const CategoryHomeButton = styled(Link)`

background-color:rgb(0, 0, 0, 0.5);
        width: auto;
        padding: 10px 10px;
        margin-left: 8px;
        border-radius: 30px;
        color: #fff;
        text-decoration: none;

`