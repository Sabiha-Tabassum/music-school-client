import React from 'react';
import logo from '../../images/logo.jpg';

const Footer = () => {
    return (
        <>


            <footer className='bg-indigo-100 pb-14'>
                <div className=''>
                    <div className='text-center'>
                        <img className='h-10 px-96 pt-2 mt-8 ml-32' src={logo} alt="" />
                        <p ><small>Life Tune music academy</small><br /><small>Established in 2022</small></p>
                        <p><small>Level-5,Postmount Street,USA</small></p>
                        <p>Helpline: <a className="link link-hover">012345678</a></p>
                    </div>




                </div>


            </footer>
            <footer className="footer p-10 bg-indigo-300 mb-5 w-1/2 ml-64 -mt-8 text-base-content">

                <div className=''>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
              


            </footer>


        </>
    );
};

export default Footer;

{/* <div className='md:ml-96 md:pl-40 mt-4'>
<h4 className=''>Stay in touch</h4>
{/* todo icon */}
// </div>
// <div className='md:ml-96 mt-16'>
// <p>Copyright © 2023 - All right reserved by </p>
// </div> */}