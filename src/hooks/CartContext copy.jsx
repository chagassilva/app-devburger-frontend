import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext({});

export const CartProvider = ({ children }) => {

  const [cartProducts, setCartProducts] = useState([]);

  // Adiciona ou incrementa produto no carrinho
  const putProductInCart = (product) => {
    console.log(product);
    const cartIndex = cartProducts.findIndex((prd) => prd.id === product.id);

    let updatedProducts = []

    if (cartIndex >= 0) {
      updatedProducts = [...cartProducts];
      updatedProducts[cartIndex].quantity += 1;
    } else {
      product.quantity = 1;
      updatedProducts = [...cartProducts, product];
    }

    setCartProducts(updatedProducts);
    updateLocalStorage(updatedProducts);
  };


    // Aumenta quantidade
  const increaseProducts = (productId) => {
    const newCart = cartProducts.map((prd) =>
      prd.id === productId ? { ...prd, quantity: prd.quantity + 1 } : prd
    );
    setCartProducts(newCart);
    updateLocalStorage(newCart);
  };

  // Diminui quantidade
  const decreaseProducts = (productId) => {
    const newCart = cartProducts.map((prd) =>
      prd.id === productId && prd.quantity > 1
        ? { ...prd, quantity: prd.quantity - 1 }
        : prd
    );
    setCartProducts(newCart);
    updateLocalStorage(newCart);
  };

  // Remove produto do carrinho
  const removeProductInCart = (productId) => {
    const newCart = cartProducts.filter((product) => product.id !== productId);
    setCartProducts(newCart);
    updateLocalStorage(newCart);
  };

 // Limpa o carrinho
  const clearCart = () => {
    setCartProducts([]);
    updateLocalStorage([]);
  };


  // Atualiza localStorage
  const updateLocalStorage = (products) => {
    localStorage.setItem("devburger:cartInfo", JSON.stringify(products));
  };

  // Carrega o carrinho salvo do localStorage
  useEffect(() => {

    const clienteCartData = localStorage.getItem("devburger:cartInfo");

      if (clienteCartData){
        setCartProducts(JSON.parse(clienteCartData));
      } 

  }, []);


  return (
    <CartContext.Provider
      value={{
        cartProducts,
        putProductInCart,
        removeProductInCart,
        increaseProducts,
        decreaseProducts,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );

};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
};
