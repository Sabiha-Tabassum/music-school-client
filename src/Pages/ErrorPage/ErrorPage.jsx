import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const {error, status} = useRouteError();
    return (
        <div className=''>
            <div className='text-center'>
                <div className='w-96 mx-auto mt-4'>
                    <img src="https://i.ibb.co/wSv49gh/errorpage.jpg"  alt="" />
                </div>
               <h1 className=' text-6xl'>
                  <p>Error</p> 
                  {status || 404}
               </h1>
               <p className='text-2xl'>{error?.message}</p>
              <div className='my-4'>
                 <button  className="bg-fuchsia-300 rounded-lg btn-lg">
                    <Link to="/">Back to Home Page</Link>
                 </button>
              </div>
            </div>
        </div>
    );
};

export default ErrorPage;