import { Button } from "../Button";
import { ContainerResume } from "./style";
import { useCart } from '../../hooks/CartContext'
import { formatPrice } from '../../utils/formatPrice'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { number } from "prop-types";



export function CartResume() {

  const [finalPrice, setFinalPrice ] = useState(0)
  const [deliverytax] = useState(500)
  const {cartProducts, clearCart}= useCart()
  const navigate = useNavigate()

  

  useEffect(() => {

    const sumallPrice = cartProducts.reduce((acc, product) => {
      return product.price * product.quantity + acc
    }, 0)
    
     setFinalPrice(sumallPrice)
  }, [cartProducts])


  const subimitOrder = async () => {

    const products = cartProducts.map((product) => {
      return {
        id: product.id,
        quantity: product.quantity,
        price: product.price,
      }

    })

    try {

      const {data} = await api.post('/create-payment-intent', {products})

      setTimeout(() => {
        
        navigate('/finalizar-pedido', {state: data,})
       
        //clearCart()
      }, 200);

    } catch (error) {

      toast.error("Falha ao realizar pedido.");
      
      
    }

  }
  

  return (

    <div className="container-resume-all">
      <ContainerResume>
        <div className="container-top">

          <h2 className="titleresume">Resumo do pedido</h2>
          <p className="itemsresume">Itens</p>
          <p className="items-price">{formatPrice(finalPrice)}</p>
          <p className="delivery-tax">Taxa de entrega</p>
          <p className="delivery-tax-price">{formatPrice(deliverytax)}</p>

        </div>

        <div className="container-bottom">

          <p className="">Total</p>
          <p className="">{formatPrice(finalPrice + deliverytax)}</p>

        </div>

      </ContainerResume>
      <Button onClick={subimitOrder}>Finalizar Pedido</Button>

    </div>
  )

}