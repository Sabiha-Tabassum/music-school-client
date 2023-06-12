import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider/AuthProvider';
import UseAxiosSecure from '../../hooks/UseAxiosSecure/UseAxiosSecure';
import Swal from 'sweetalert2';
import './CheckOutForm.css';

const CheckOutForm = ({price, className, instructorName, image, seats,  myClasses}) => {
    // console.log(price)
   
    const {user} = useContext(AuthContext);
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [axiosSecure] = UseAxiosSecure();
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');

   

    useEffect(() => {
       if(price > 0){
        axiosSecure.post('/create-payment-intent', { price })
        .then(res => {
           setClientSecret(res.data.clientSecret)
        })
       }
           

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

        setProcessing(true);

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
          setProcessing(false);
          if(paymentIntent.status === 'succeeded'){
            setTransactionId( paymentIntent.id)
             const payment = {email: user?.email, transactionId: paymentIntent.id, date: new Date(), price, className, image, instructorName, 
            mySelectedClass: myClasses.map(myClass => myClass._id) } 
             axiosSecure.post('/payment', payment)
             .then(res => {
                // console.log(res.data);
                if(res.data.insertResult.insertId){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'payment confirmed',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
             })

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
                <button className='btn btn-outline btn-primary btn-sm mt-4' type="submit" disabled={!stripe || !clientSecret || processing }>
                    Pay
                </button>


            </form>

            {cardError && <p className='text-red-500'>{cardError}</p>}
            {transactionId && <p className='text-green-500'>Transaction complete with transaction id: {transactionId}</p>}
        </>




    );
};

export default CheckOutForm;