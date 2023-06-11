import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckOutForm from '../CheckOutForm/CheckOutForm';

import { useLoaderData } from 'react-router-dom';
import MyClassHook from '../../hooks/MyClassHook/MyClassHook';


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    const paymentData = useLoaderData();
    console.log(paymentData)
    const [myClasses] = MyClassHook();
   
    return (
        <div>
           
            <Elements stripe={stripePromise}>
                <CheckOutForm price={paymentData.price}
                instructorName={paymentData.name}
                className={paymentData.class_name}
                image={paymentData.image}
                seats={paymentData.seats}
                myClasses={myClasses}></CheckOutForm>
            </Elements>
        </div>
    );
};

export default Payment;