import React from 'react';
import sfooter from '../assets/sfooter.png';

const Footer = () => {
    return (
        <div className='mt-4'>
            <div className='text-black text-left text-lg'>
                <p>Support</p>
                <ul className='text-black font-normal'>
                    <li>Contact</li>
                    <li>Help</li>
                    <li>Issue</li>
                </ul>
                <p>Hosting</p>
            </div>

            {/* Full-width footer image */}
            <div className='w-full'>
                <img
                    src={sfooter}
                    alt='footerimg'
                    className='mt-2 w-full h-auto object-cover'
                />
            </div>

            <hr className="my-4 border-t border-black" />
            <div className='text-left mt-3'>
                copyright pahunaghar
            </div>
        </div>
    );
}

export default Footer;
