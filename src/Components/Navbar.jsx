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
                    <h3 className='flex-shrink-0 px-2 text-base md:text-sm'>पाहुनाघर</h3>
                    <h3 className='flex-shrink-0 px-2 text-base md:text-sm'>कसरी काम गर्दछ?</h3>
                    <h3 className='flex-shrink-0 px-2 text-base md:text-sm'>हाम्रो बारेमा</h3>
                    <h3 className='flex-shrink-0 px-2 text-base md:text-sm'>ब्लग</h3>
                    <h3 className='flex-shrink-0 px-2 text-base md:text-sm'>प्रश्नोतर</h3>
                    <h3 className='flex-shrink-0 px-2 text-base md:text-sm'>होम</h3>

                </div>
            </div>
        </div>
    )
}

export default Navbar
