import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import errorImage from '../../../src/images/errorpage.jpg';

const ErrorPage = () => {
    const {error, status} = useRouteError();
    return (
        <div className='bg-violet-200 py-20'>
            <div className='text-center'>
                <div className='w-80 mx-auto p-4'>
                    <img className='' src={errorImage}  alt="" />
                </div>
               <h1 className=' text-4xl'>
                  <p>Page not found</p> 
                  
               </h1>
               <p className='text-2xl'>{error?.message}</p>
              <div className='my-4'>
                 <button  className="bg-violet-500 rounded-lg btn-md">
                    <Link to="/">Back to Home Page</Link>
                 </button>
              </div>
            </div>
        </div>
    );
};

export default ErrorPage;