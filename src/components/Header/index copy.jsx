


import { useNavigate, useResolvedPath } from "react-router-dom";
import { useUser } from "../../hooks/UserContext";
import { ShoppingCart, UserCircle } from "@phosphor-icons/react";
import LogoHeader from "../../assets/Logo_Header.png";

import {

    Container, Navigation, Options, Profile, LinkContainer, HeaderLink,
    Logout,
    Content,

} from "./style"
import { useEffect } from "react";


export function Header() {

    const navigate = useNavigate();
    const { logout, userInfo } = useUser();
    


    const { pathname } = useResolvedPath()

    // funcao chamada para fazer o logout do usuario no hook UserContext
    function logoutuser() {

        logout();
        navigate('/login')
    }


    return (

        <Container>
            <Content>
                <Navigation>

                    <HeaderLink to='/home' >
                    <img src={LogoHeader} alt="Logo do restaurante" />
                    </HeaderLink>

                    <div>
                        <HeaderLink to='/home' $isAcive={pathname === '/home'}>Home</HeaderLink>
                        <hr></hr>
                        <HeaderLink to='/cardapio' $isAcive={pathname === '/cardapio'} >Cardapio</HeaderLink>
                        <hr></hr>
                        <HeaderLink to='/contato' $isAcive={pathname === '/contato'} >Contato</HeaderLink>
                    </div>

                </Navigation>

                <Options>

                    <Profile>
                        <UserCircle size={22} color="white" />
                        <div>
                            <p>{userInfo.name}</p>
                            <Logout onClick={logoutuser}>Sair</Logout>
                        </div>


                    </Profile>
                    <LinkContainer>
                        <HeaderLink to={'/Carrinho'} ><ShoppingCart size={22} color="white" />Pedidos</HeaderLink>
                    </LinkContainer>

                </Options>


            </Content>

        </Container>



    )


}

