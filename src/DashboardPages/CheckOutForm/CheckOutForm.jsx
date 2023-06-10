import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider/AuthProvider';
import UseAxiosSecure from '../../hooks/UseAxiosSecure/UseAxiosSecure';

const CheckOutForm = ({price}) => {
    // console.log(price)
   
    const {user} = useContext(AuthContext);
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [axiosSecure] = UseAxiosSecure();

    // useEffect(() => {
    //     // Create PaymentIntent as soon as the page loads
    //     fetch("/create-payment-intent", {
    //       method: "POST",
    //       headers: { "Content-Type": "application/json" },
    //       body: JSON.stringify({ price }),
    //     })
    //       .then((res) => res.json())
    //       .then((data) => setClientSecret(data.clientSecret));
    //   }, []);


    useEffect(() => {
        console.log(price)
       axiosSecure.post('/create-payment-intent', { price })
            .then(res => {
               setClientSecret(res.data.clientSecret)
            })

    }, [price])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('error', error);
            setCardError(error.message);
        }
        else {
            setCardError('');
            console.log('payment method', paymentMethod)
        }

        const { paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
            clientSecret,
             {
               payment_method: {
                 card: card,
                 billing_details: {
                   email: user?.email || 'unknown',
                   name: user?.displayName || 'anonymous'
                 },
               },
             },
           );
             
           
 
           if(confirmError){
             console.log(confirmError)
           }
          
          console.log('payment intent', paymentIntent);
          if(paymentIntent.status === 'succeeded'){
             const transectionId = paymentIntent.id;
          }
            

    }

    return (
        <>

            <form className='m-4' onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-outline btn-primary btn-sm mt-4' type="submit" disabled={!stripe }>
                    Pay
                </button>


            </form>

            {cardError && <p className='text-red-500'>{cardError}</p>}
        </>




    );
};

export default CheckOutForm;