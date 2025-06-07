

import { useCart } from '../../hooks/CartContext';
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
    const { cartQuantity } = useCart();


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
                    </div>

                </Navigation>

                <Options>

                    <Profile>
                        <UserCircle size={32} color="white" />
                        <div>
                            <p>{userInfo.name}</p>
                            <Logout onClick={logoutuser}>Sair</Logout>
                        </div>


                    </Profile>
                    <LinkContainer>
                        <HeaderLink to={'/Carrinho'} style={{ position: 'relative' }} >
                            <ShoppingCart size={22} color="white" />
                            {cartQuantity > 0 && (
                                <span style={{
                                    position: 'absolute',
                                    top: '-20px',
                                    right: '48px',
                                    backgroundColor: 'red',
                                    color: 'white',
                                    borderRadius: '50%',
                                    padding: '2px 6px',
                                    fontSize: '12px',
                                    fontWeight: 'normal'
                                }}>
                                    {cartQuantity}
                                </span>
                            )}
                            Pedidos
                        </HeaderLink>
                    </LinkContainer>

                </Options>


            </Content>

        </Container>



    )


}

