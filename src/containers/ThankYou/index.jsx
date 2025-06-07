
import {
    BannerHeader,
    ContainerMenuMain,
    TitleMenu,
    Content,
} from "./style";
import { useNavigate } from "react-router-dom";
import ImgHead from "../../assets/Checkout.png";
import IconVerification from "../../assets/icon_message-check.png";
import LogoHeader from "../../assets/Logo4.png";




export function ThankYouPage() {

    const navigate = useNavigate()

    return (


        <ContainerMenuMain>



            <BannerHeader>

                <img className="backgrond_header" src={ImgHead} alt="Imagem de fundo do checkout" />
                <img className="logo_header" src={LogoHeader} alt="Imagem de fundo do checkout" />

            </BannerHeader>



            <Content>

                <TitleMenu>Checkout - Pedido concluido
                    <hr></hr>
                </TitleMenu>

                <img src={IconVerification} alt="Icone de verificação" />
                <h2>Obrigado por comprar conosco!</h2>
                <p>Seu pedido já está em produção e logo sairá<br></br>
                    para entrega. Agradecemos a preferência!</p>
                <span onClick={() => { navigate("/home") }} > &lt; Voltar para o início</span>

            </Content>


        </ContainerMenuMain>


    )

}