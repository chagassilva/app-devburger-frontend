import React from "react";
import ReactDOM from "react-dom";
import { Trash } from "@phosphor-icons/react";
import { TableCart } from '../index'
import { useCart } from '../../hooks/CartContext'
import { EmptyCartProduct, MooreProducts, ProductImage } from './style';
import PropTypes from 'prop-types';
import { formatPrice } from '../../utils/formatPrice';


export function CartItems() {


  const { cartProducts, increaseProducts, decreaseProducts, removeProductInCart  } = useCart();

  console.log(cartProducts);

  return (

    <TableCart.Root>

      <TableCart.Header>

        <TableCart.Tr>

          <TableCart.Th></TableCart.Th>
          <TableCart.Th>Itens</TableCart.Th>
          <TableCart.Th>Preço</TableCart.Th>
          <TableCart.Th>Quantidade</TableCart.Th>
          <TableCart.Th>Total</TableCart.Th>
          <TableCart.Th></TableCart.Th>

        </TableCart.Tr>

      </TableCart.Header>


      <TableCart.Body>

         {cartProducts?.length ? (

          cartProducts.map(product => (
            <TableCart.Tr key={product.id}>
              <TableCart.Td>
                <ProductImage src={product.url} alt={product.name} />
              </TableCart.Td>
              <TableCart.Td>{product.name}</TableCart.Td>
              <TableCart.Td>{formatPrice(product.price)}</TableCart.Td>
              <TableCart.Td>
                <button onClick={() => decreaseProducts(product.id)}>-</button>
                {product.quantity}
                <button onClick={() => increaseProducts(product.id)}>+</button>
                
              </TableCart.Td>             
              <TableCart.Td>{formatPrice(product.price * product.quantity)}</TableCart.Td>
              <TableCart.Td>
              <button className="deleteproductcart" onClick={() => removeProductInCart(product.id)}>X</button>
              </TableCart.Td>
              
            </TableCart.Tr>
            
          ))

         ) : (
          <EmptyCartProduct>  🛒 Nenhum produto no carrinho</EmptyCartProduct>
          
         )}

      </TableCart.Body>

        <MooreProducts to='/home'  ><p>&lt; Adicionar mais produtos</p></MooreProducts>


    </TableCart.Root>

  )
}



{/* <EmptyCartProduct>🛒 Nenhum produto no carrinho</EmptyCartProduct> */}
