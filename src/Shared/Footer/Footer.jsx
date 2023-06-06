import React from 'react';
import logo from '../../images/images.jpg';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
            <div>
                <img style={{height: '80px'}} src={logo} alt="" />
                <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
            </div>
            <div>
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