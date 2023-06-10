import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckOutForm from '../CheckOutForm/CheckOutForm';

import { useLoaderData } from 'react-router-dom';


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    const paymentData = useLoaderData();
   
    return (
        <div>
           
            <Elements stripe={stripePromise}>
                <CheckOutForm price={paymentData.price}></CheckOutForm>
            </Elements>
        </div>
    );
};

export default Payment;