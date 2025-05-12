import React from 'react';
import { Link } from 'react-router-dom';
import icon1 from '../assets/icon.png';

const Navbar = () => {
    return (
        <div className='fixed top-0 left-0 w-full z-50 bg-white shadow-md'>
            <div className='max-w-[1920px]  mx-auto p-4 flex justify-between whitespace-nowrap rounded-lg z-50 bg-white-200 shadow-md text-black'>
                <div className='flex items-center gap-1'>
                    <img src={icon1} alt='icon' className='size-10' />
                    <span className='text-base md:text-lg font-semibold'>पाहुनाघर</span>
                </div>
                <div className='flex space-x-7'>
                    <Link to='/'>
                        <button className='flex-shrink-0 px-2 text-base md:text-sm'>
                            पाहुनाघर</button>
                    </Link>

                    <button className='flex-shrink-0 px-2 text-base md:text-sm'>कसरी काम गर्दछ?</button>
                    <button className='flex-shrink-0 px-2 text-base md:text-sm'>हाम्रो बारेमा</button>
                    <button className='flex-shrink-0 px-2 text-base md:text-sm'>ब्लग</button>
                    <button className='flex-shrink-0 px-2 text-base md:text-sm'>प्रश्नोतर</button>
                    <button className='flex-shrink-0 px-2 text-base md:text-sm'>होम</button>

                </div>
            </div>
        </div>
    )
}

export default Navbar
