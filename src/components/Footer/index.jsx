

import { useNavigate, useResolvedPath } from "react-router-dom";
import { useUser } from "../../hooks/UserContext";
import {ShoppingCart, UserCircle } from "@phosphor-icons/react";

import {

    
    ContainerFooter,

} from "./style"



export function Footer() {



    return (

        <ContainerFooter>
            
            <p>Desenvolvido por DevBurger- 2025 - Todos os direitos reservados</p>

        </ContainerFooter>



    )


}

