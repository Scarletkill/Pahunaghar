import React from 'react'

const Footer = () => {
    return (
        <div className='bg-gray-400 w-full mt-4'>
            <div className='text-black text-left text-lg grid-cols-1 grid-rows-1'>
                Support
                <ul className='text-black font-normal'>
                    <li className='grid-rows-2'>
                        Contact
                    </li>
                    <li className='grid-rows-3'>
                        Help
                    </li>
                    <li className='grid-rows-4'>
                        Issue
                    </li>
                </ul>
            </div>
            <div className='text-black text-left text-lg grid-cols-2'>
                Hosting
            </div>
            <hr className="my-4 border-t border-black" />
            <div className='text-left mt-3'>
                copyright pahunaghar
            </div>
        </div>
    )
}

export default Footer
