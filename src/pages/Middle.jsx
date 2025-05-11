import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

import { FaCircleChevronRight, FaCircleChevronLeft } from "react-icons/fa6";
import { LuListFilter } from "react-icons/lu";

// Import your images
import Achamaghar from '../assets/icons/achammako-ghar.png';
import bhansaghar from '../assets/icons/bhansa-ghar.png';
import chalchitra from '../assets/icons/chalchitra-ghar.png';
import charaghar from '../assets/icons/chara-ghar.png';
import chitra from '../assets/icons/chitra-ghar.png';
import farm from '../assets/icons/farm-house.png';
import kaala from '../assets/icons/kaala-ghar.png';
import sangit from '../assets/icons/sangit-ghar.png';
import dinner from '../assets/icons/dinner-ghar.png';
import jaato from '../assets/icons/jaato-ghar.png';
import sapana from '../assets/icons/sapanaghar.png';
import sambad from '../assets/icons/sambad-ghar.png';
import khaja from '../assets/icons/khaja-ghar.png';
import maha from '../assets/icons/maha-ghar.png';

const icons = [
    { src: charaghar, title: 'चरा घर' },
    { src: kaala, title: 'kala ghar' },
    { src: chitra, title: 'chitra ghar' },
    { src: sangit, title: 'संगीत घर' },
    { src: sapana, title: ' सपना घर' },
    { src: dinner, title: 'डिनर घर' },
    { src: Achamaghar, title: 'अचम्म घर' },
    { src: khaja, title: 'खाजा घर' },
    { src: bhansaghar, title: 'भान्सा घर' },
    { src: maha, title: 'हस्य घर' },
    { src: chalchitra, title: 'चलचित्र घर' },
    { src: jaato, title: 'टिकी घर' },
    { src: sambad, title: 'गोठ घर' },
    { src: farm, title: 'फार्म घर' },
];

const Middle = () => {
    return (
        <div className='mt-[100px] flex items-center w-9/10 mx-auto gap-[4rem]'>
            <div className='relative w-2/3 px-4'>
                <Swiper
                    spaceBetween={4}
                    slidesPerView={7}
                    modules={[Navigation]}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}>

                    {icons.map((icon, index) => (
                        <SwiperSlide key={index}>
                            <div className='flex flex-col items-center gap-1'>
                                <img
                                    src={icon.src}
                                    alt={icon.title}
                                    className='w-6 h-6 object-contain grayscale-[100]'
                                />
                                <p className="text-black text-sm mt-2">{icon.title}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                {/* Custom Arrows */}
                <div className='swiper-button-prev absolute left-0 top-4 -translate-y-1/2 text-2xl z-10 cursor-pointer text-gray-600 hover:text-black'>
                    <FaCircleChevronLeft />
                </div>
                <div className='swiper-button-next absolute right-0 top-4 -translate-y-1/2 text-2xl z-10 cursor-pointer text-gray-600 hover:text-black'>
                    <FaCircleChevronRight />
                </div>

            </div>
            <button className='flex items-center gap-2 mb-3 p-2 px-4 rounded-xl whitespace-nowrap border border-black shadow-sm transition-all duration-200 hover:bg-gray-400 hover:scale-105'>
                <LuListFilter className='text-lg' />
                Filter
            </button>

        </div>
    );
};

export default Middle;
