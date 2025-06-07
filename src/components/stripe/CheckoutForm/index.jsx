
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"
import '../styles.css'
import {
  PaymentElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import { useCart } from "../../../hooks/CartContext";
import { toast } from "react-toastify";
import { api } from "../../../services/api";


export function CheckoutForm() {

  const { cartProducts, clearCart } = useCart()
  const navigate = useNavigate()
  const stripe = useStripe();
  const elements = useElements();

  const { state: { dpmCheckerLink } } = useLocation()
  console.log(elements)

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      console.error("Stripe.js hasn't yet loaded");
      return;
    }

    setIsLoading(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      redirect: "if_required",
      //   confirmParams: {
      //     // Make sure to change this to your payment completion page
      //     return_url: "http://localhost:3000/finalizar-pedido",
      //   },
    });


    if (error?.type === "card_error" || error?.type === "validation_error") {
      setMessage(error.message);
      toast.error(error.message);
    } else if (paymentIntent && paymentIntent.status === 'succeeded') {

      try {

        const products = cartProducts.map((product) => {
          return {
            id: product.id,
            quantity: product.quantity,
            price: product.price,           
          }

        })

        const { status } = await api.post('/orders', { products }, {

          validateStatus: () => true,

        })

        if (status === 200 || status === 201) {


          setTimeout(() => {
            navigate(`/pedido-realizado?payment_intent_client_secret=${paymentIntent.client_secret}`)
            clearCart()
          }, 2000);

          toast.success("pedido realizado com sucesso");

        } else if (status === 409) {

          toast.error("Falha ao realizar pedido");
        } else {
          throw new Error();
        }

      } catch (error) {
        toast.error("Falahou um erro ao fazer pedido.");
      }
      //toast.error("Falha ao realizar pedido");          
    }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: "accordion"
  }

  return (

    <div className="container-payment-stripe">
      <form id="payment-form" onSubmit={handleSubmit}>

        <PaymentElement id="payment-element" options={paymentElementOptions} />
        <button className="buttonstripe" disabled={isLoading || !stripe || !elements} id="submit">
          <span id="button-text">
            {isLoading ? <div className="spinner" id="spinner"></div> : "Realizar pagamento"}
          </span>
        </button>
        {/* Show any error or success messages */}
        {message && <div id="payment-message">{message}</div>}
      </form>
    </div>
  );
}