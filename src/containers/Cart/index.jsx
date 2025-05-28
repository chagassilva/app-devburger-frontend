
import { Car } from "@phosphor-icons/react";
import Logo from "../../assets/Logo-Login.svg";
import {Container, Banner, Content, Title } from "./style";
import {CartItems, CartResume} from "../../components";
import {formatPrice} from '../../utils/formatPrice'




export function Cart() {
    return (
        <Container>
            <Banner >
                <img src={Logo} alt="Logo carrinho" />
            </Banner>
            <Title>Checkout - Pedido</Title>
            <Content>
                <CartItems/>
                <CartResume />
            </Content>
        </Container>
    );
}