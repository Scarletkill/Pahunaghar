import React, { useState } from 'react';
import Nepal from '../assets/Header1.jpg';
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDropdown } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { FaCamera } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Home = () => {
    // const [typeDropdown, settypeDropdown] = useState(false);
    // const [whatDowndrop, setwhatDowndrop] = useState(false);

    return (
        <div className='absolute top-0 left-0'>
            <img src={Nepal} alt='herophoto' className=' w-screen h-[80vh] object-cover object-top' />
            <div className='absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white px-4 py-2 flex justify-between items-center text-sm'>
                <p className="font-thin">
                    अन्तुडाँडा पूर्वी नेपालको एक प्रसिद्ध पर्यटकीय क्षेत्र हो ।
                </p>
                <span className="font-thin">फोटो स्रोत |</span>
            </div>
            <div className='absolute w-full flex justify-center'>
                <form className='bg-white rounded-full shadow-lg flex justify-between items-center w-full max-w-5xl mx-auto mt-5 overflow-hidden border border-gray-300  divide-x divide-gray-300 p-2 space-x-2 '>
                    <div className='flex items-center gap-1'>
                        <input
                            type="text"
                            placeholder="के खोज्दै हुनु हुन्छ ?"
                            className="flex-1 outline-none bg-transparent text-black placeholder-gray-500 px-4"
                        />
                    </div>
                    <button className='flex items-center px-4 space-x-2'>
                        <span>कहाँ खोज्दै हुनु हुन्छ ?</span>
                        <IoIosArrowDropdown />
                    </button>
                    <button className='flex items-center px-4 space-x-2'>
                        <span>पाहुनाघरको प्रकार</span>
                        <IoIosArrowDropdown />
                    </button>
                    <button className='flex items-center space-x-2 bg-green-500 px-4 py-2 rounded-full'>
                        <span>खोज्नुहोस्</span>
                        <CiSearch />
                    </button>
                </form>

            </div>
        </div>
        // <div className='relative h-[70vh] w-screen object-cover z-0'>
        //     <img src={Nepal} alt='Homepagebanner' className='absolute top-0 left-0 transform  h-[70vh] w-screen object-cover object-top z-0 blur-[1px]' />
        //     <div className='absolute top-2/3 left-2/3 transform -transmate-x-2/3 -transmate-y-2/3 w-full p-9'>
        //         <form className="bg-white rounded-full shadow-md flex w-full overflow-hidden divide-x divide-gray-300 pt-70">
        //             <div className='flex items-center px-6 basis-1/4'>
        //                 <input
        //                     type="text"
        //                     placeholder="के खोज्दै हुनु हुन्छ ?"
        //                     className="w-full outline-none bg-transparent text-gray-800 placeholder-gray-500"
        //                 />

        //             </div>
        //             <div className='relative flex items-center bg-transparent px-6 basis-1/4'>
        //                 <button className='flex items-center gap-4 text-gray-800 bg-white' onClick={() => setwhatDowndrop(!whatDowndrop)}>
        //                     कहाँ खोज्दै हुनु हुन्छ ?
        //                     <IoIosArrowDropdown className={`transition-transform ${whatDowndrop ? 'rotate' : ''}`} />
        //                 </button>
        //                 {whatDowndrop && (
        //                     <div className='absolute left-0 bg-white shadow-lg rounded-md z-0'>
        //                         <ul>
        //                             <li>लेटांग</li>
        //                             <li>दोधारा</li>
        //                             <li>जेफाले</li>
        //                             <li>ईलाम</li>
        //                             <li>ताप्लेजुंग</li>
        //                         </ul>
        //                     </div>
        //                 )}
        //             </div>
        //             <div className='relative flex items-center px-6 basis-1/4'>
        //  <button className='flex items-center gap-2 text-gray-800 bg-white'
        //          onClick={(e) => { e.preventDefault(); settypeDropdown(!typeDropdown); }}>
        //          पाहुनाघरको प्रकार
        //      <IoIosArrowDropdown className={`transition-transform ${typeDropdown ? 'rotate' : ''}`} />
        //      </button>
        //                 {typeDropdown && (
        //                     <div className='absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md z-10 w-48'>
        //                         <ul className="py-2 text-sm text-gray-700">
        //                             <li className="px-4 py-1 hover:bg-gray-100 cursor-pointer">पाहुनाघर</li>
        //                             <li className="px-4 py-1 hover:bg-gray-100 cursor-pointer">मामाघर</li>
        //                             <li className="px-4 py-1 hover:bg-gray-100 cursor-pointer">ढिकी घर</li>
        //                             <li className="px-4 py-1 hover:bg-gray-100 cursor-pointer">फारमघर</li>
        //                             <li className="px-4 py-1 hover:bg-gray-100 cursor-pointer">संबाद घर</li>
        //                         </ul>
        //                     </div>
        //                 )}
        //             </div>
        //             <div className="flex items-center justify-center px-6 basis-1/4 ">
        //                 <button className=" text-gray-800 px-4 py-2 rounded-full flex items-center cursor-pointer gap-1 bg-white">
        //                     <CiSearch className="text-xl" />
        //                     खोज्नुहोस्
        //                 </button>
        //             </div>
        //         </form>

        //     </div>

        //     <div className='flex justify-between items-center px-8 md:px-4 py-4 text-white absolute bottom-1 transform -transmate-x-2 -transmate-y-2  bg-black bg-opacity-50 w-full z-100'>
        //         <div className='flex items-center gap-2 '>
        //             <IoLocation className='flex object-cover' />अन्तुडाँडा पूर्वी नेपालको एक प्रसिद्ध पर्यटकीय क्षेत्र हो ।
        //         </div>
        //         <div className='flex items-center gap-2'>
        //             <FaCamera className='icon' />फोटो स्रोत |
        //             <Link to='https://en.wikipedia.org/wiki/Shree_Antu' className="underline text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">विकिपिडिया</Link>
        //         </div>
        //     </div>
        // </div >
    );


};

export default Home;