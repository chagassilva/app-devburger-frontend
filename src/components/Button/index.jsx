import { ContainerButton } from "./style"; // Importando o componente de estilo ContainerButton
import PropTypes from "prop-types"; // Importando PropTypes para validação de tipos de dados


// o props é uma propriedade do componente Button que recebe um objeto com as 
// propriedades children.

export function Button({children, ...props}){

    console.log(props)
    
    return (

    <ContainerButton {...props}>{children}</ContainerButton>  

)
 
}



// Identicação de tipo de dado

Button.propTypes = {
    children: PropTypes.string,
}

