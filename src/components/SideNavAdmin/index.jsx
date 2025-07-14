
import { NavLinks } from "./NavLinks"
import Logo from "../../assets/Logo-Login.svg"
import { Container, FooterMenuAdmin, NavegatioLink, NavLinksContainer } from "./style"
import { SignOut } from "@phosphor-icons/react"
import { useUser } from "../../hooks/UserContext"
import { useResolvedPath } from "react-router-dom"


export default function SideNavAdmin() {

    const {logout} = useUser()
    const { pathname } = useResolvedPath()

    return (
        <Container>
            <img src={Logo} alt="Logo do menu" />
            <NavLinksContainer>
            {NavLinks.map((link) => (

                <NavegatioLink key={link.id} to={link.path} $isActive={pathname === link.path}>
                    
                    {link.icon}
                    <span>{link.label}</span>
                    
                   
                </NavegatioLink>

            ))}
            </NavLinksContainer>

            <FooterMenuAdmin>

            <NavegatioLink to={"/login"} onClick={logout} >
                <SignOut size={28} />
                <span>Sair</span>
            </NavegatioLink>
               

            </FooterMenuAdmin>
        </Container>
    )

}