
import React from "react";
//import Banner from "../../assets/Banner_Home.svg";
import { CategoryCarousel } from "../../components/CategoryCarousel";
import { OffersCarousel } from "../../components/OffersCarousel";

import {

    Banner,
    ContainerCarrosel,
    ContainerMain,

} from "./style";

export function Home() {

    
    return (


        <ContainerMain>



            <Banner>
                <h1>Bem-Vindo!</h1>
            </Banner>

            <ContainerCarrosel>


                <CategoryCarousel/>
                <OffersCarousel />


            </ContainerCarrosel>

        </ContainerMain>


    )

}