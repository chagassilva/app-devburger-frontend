import styled from "styled-components";



export const ContainerResume = styled.div`

/* background-color:rgba(92, 84, 84, 0.45); */
background-color: #fff;
box-shadow: 0px 5px 15px  rgba(0,0,0,0.15);

border-radius: 20px;
display: flex;
flex-direction: column;
justify-content:space-between;
margin-top: 50px;




*{

color: #484848;
font-weight: 500;

}

.container-top{

   
    display: grid;
    /* grid-gap: 10px 60%; */
    grid-template-areas: 'title title'
    'items items-price'
    'delivery-tax delivery-tax-price'
    ;

    .titleresume{
        grid-area: title;
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 20px;
        background-color: #484848;
        color:#fff;
        text-align: center;
        padding: 10px;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        
    }

    .itemsresume{
        grid-area: items;
        padding: 10px;
        
    }

    .items{

        grid-area: items;
        padding: 10px;

    }

    .items-price{
        grid-area: items-price;
        padding: 20px;
        text-align: center;
    }

    .delivery-tax{
        grid-area: delivery-tax;
        padding: 10px;
        text-align: left;
    }

    .delivery-tax-price{
        grid-area: delivery-tax-price;
        padding: 0px;
        text-align: center;
    }
}

.container-bottom{

display: flex;
justify-content: space-between;
padding: 20px;
font-size: 20px;
font-weight: 700;
margin-top: 24px;

*{

    font-weight:700;
}

}

`
