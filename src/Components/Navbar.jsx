import React from 'react';
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
                    <h3 className='flex-shrink-0 px-2 text-base md:text-sm'>नयाँ ठाउँ</h3>
                    <h3 className='flex-shrink-0 px-2 text-base md:text-sm'>गृहपृष्ठ</h3>
                    <h3 className='flex-shrink-0 px-2 text-base md:text-sm'>अनुभवहरू</h3>
                    <h3 className='flex-shrink-0 px-2 text-base md:text-sm'>प्रतिक्रिया</h3>
                </div>
            </div>
        </div>
    )
}

export default Navbar
