
import { ButtonCart } from "./style";
import IconCart from '../../assets/IconCart.svg';

export  function CardButton(...props){

return(


    <ButtonCart {...props}>
        
        
        <img src={IconCart} alt="Icone de carrinho" />
        
    
    </ButtonCart>


)


}