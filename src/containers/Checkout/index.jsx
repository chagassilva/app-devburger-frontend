

import { Elements } from "@stripe/react-stripe-js"
import { useLocation } from "react-router-dom"
import stripePromise from "../../config/stripeConfig"
import { CheckoutForm } from "../../components/stripe/CheckoutForm"


export function Checkout() {

    const loader = 'auto';
    const appearance = {theme: 'flat',};
    const {state: {clientSecret}} = useLocation()
    //console.log(clientSecret)

    if(!clientSecret) {

        return <p>Loading...</p>

    } 

return(

    <Elements stripe={stripePromise} options={{clientSecret, appearance, loader}} >

    <CheckoutForm />

    </Elements>


)

}

