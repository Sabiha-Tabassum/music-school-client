import React from 'react';

const Footer = () => {
    return (
        <footer className=" p-10 bg-neutral text-neutral-content">
            <div >
                <div className='md:flex justify-center gap-4 mx-auto'>

                    <a className="link link-hover">About</a>
                    <a className="link link-hover">Services</a>
                    <a className="link link-hover">FAQ</a>
                    <a className="link link-hover">Legal</a>
                    <a className="link link-hover">Contact</a>

                </div>
                <div className='md:ml-96 md:pl-40 mt-4'>
                    <h4 className=''>Stay in touch</h4>
                    {/* todo icon */}
                </div>
                <div className='md:ml-96 mt-16'>
                    <p>Copyright © 2023 - All right reserved by </p>
                </div>


            </div>
        </footer>
    );
};

export default Footer;