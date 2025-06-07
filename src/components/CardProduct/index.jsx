import PropTypes from 'prop-types'
import { ButtonADDProduct, CardContainer, CardImage, ContainerButtonADDProduct, ContainerFavorite, ContainerRating } from './style'
import { useCart } from '../../hooks/CartContext'
import { formatPrice } from '../../utils/formatPrice'
import IconCart from '../../assets/IconCart.svg';
import { toast } from 'react-toastify';
import IconFavorite from '../../assets/Vector_Favorite.png'
import IconRating from '../../assets/Rating.png';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      {/* Seus componentes */}
      <Routes />

      {/* Toast container deve estar aqui */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </>
  );
}



//import { ButtonCart } from '../CardButton/style'

export function CardProduct({ product }) {

  const { putProductInCart } = useCart()


  return (


    <CardContainer>

      <CardImage src={product.url} alt={product.name} ></CardImage>

      <div>


        <ContainerFavorite>
          <p>{product.name}</p>
          <img src={IconFavorite} alt='Ícone de favorito' />
        </ContainerFavorite>

        <p className='description' >{product.description}</p>
        {/* Arquivos de formatação dentro da pasta utils */}
        <strong>{formatPrice(product.price)}</strong>
      </div>


      {/* <ButtonADDProduct onClick={()=> putProductInCart(product)  }><img src={IconCart} alt="Icone de carrinho" /></ButtonADDProduct> */}



      <ContainerButtonADDProduct>

        <div className='icon-rate'>
          <ContainerRating>
            <img src={IconRating} alt='Ícone de avaliação' />
          </ContainerRating>
        </div>
        <div className='icon-button'>
          <ButtonADDProduct
            onClick={() => {
              putProductInCart(product);
              toast.success(`${product.name} foi adicionado!`, {
                position: "bottom-right",
                autoClose: 2000,
              })

            }}
          >
            <img src={IconCart} alt="Ícone de carrinho" />

          </ButtonADDProduct>
        </div>



      </ContainerButtonADDProduct>

      {/* toast.success(`${product.name} foi adicionado!`, {
  position: "bottom-left",
  autoClose: 2000,
  icon: "🛒",
}); */}

      {/* putProductInCart(product);
                        toast.success(`${product.name} adicionado ao carrinho!`)   */}




    </CardContainer>


  )


}

CardProduct.propTypes = {
  product: PropTypes.object,
}