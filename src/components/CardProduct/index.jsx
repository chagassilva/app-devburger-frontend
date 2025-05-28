import PropTypes from 'prop-types'
import {ButtonADDProduct, CardContainer, CardImage } from './style'
import { useCart } from '../../hooks/CartContext'
import {formatPrice} from '../../utils/formatPrice'
import IconCart from '../../assets/IconCart.svg';

//import { ButtonCart } from '../CardButton/style'

export function CardProduct({product}){

    const { putProductInCart } = useCart()


    return(


            <CardContainer>

            <CardImage src={product.url} alt={product.name} ></CardImage>

            <div>
                <p>{product.name}</p>
                {/* Arquivos de formatação dentro da pasta utils */}
                <strong>{formatPrice(product.price)}</strong>
            </div>

             
             <ButtonADDProduct onClick={()=> putProductInCart(product)  }><img src={IconCart} alt="Icone de carrinho" /></ButtonADDProduct>

           

            </CardContainer>


    )


}

CardProduct.propTypes = {
    product: PropTypes.object,
}