import styled from "styled-components";




export const Container = styled.div`
text-align: center;
max-width: 1482px;
height: auto;
margin-top: 80px;
margin-bottom: 80px;
overflow: hidden;
/* background-color:rgb(27, 177, 139); */
padding-left: 48px;

.carousel-item-offer{

    padding-right: 40px;
    margin-top: 60px;

}

.react-multi-carousel-list{

overflow: visible;
    width: 100%;
    height: 100%;

}

.react-multiple-carousel__arrow--right {
    right: calc(0% + 1px);
}

.react-multiple-carousel__arrow--left {
    left: calc(-3% + 1px);

}



button{

    background-color:transparent;
    color:#9758A6;
 

    &::before{color:rgb(0, 0, 0);}
    

}

button:hover{
    background-color:rgb(87, 88, 88);
}

`


export const ContainerOffers = styled.div`

height: 94px;
width: 177px;
background: url('${(props) => props.ImageURL}');
background-position: center;
background-size: cover;
border-radius: 20px;
display: flex;
align-items:center;
background-color:rgb(16, 206, 149); 
padding-right: 15px;
`

export const TitleOffertoday = styled.div`

    margin: 20px 0;
    color:#61A120;
    font-family: 'Poppins', sans-serif;
    font-weight: 800;
    font-size: 32px;
    line-height: 100%;

`
