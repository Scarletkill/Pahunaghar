import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

import { FaCircleChevronRight, FaCircleChevronLeft } from 'react-icons/fa6';
import { LuListFilter } from 'react-icons/lu';

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
    { src: kaala, title: 'कला घर' },
    { src: chitra, title: 'चित्र घर' },
    { src: sangit, title: 'संगीत घर' },
    { src: sapana, title: 'सपना घर' },
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
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    useEffect(() => {
        if (
            swiperRef.current &&
            swiperRef.current.params &&
            swiperRef.current.params.navigation
        ) {
            swiperRef.current.params.navigation.prevEl = prevRef.current;
            swiperRef.current.params.navigation.nextEl = nextRef.current;
            swiperRef.current.navigation.init();
            swiperRef.current.navigation.update();
        }
    }, []);

    return (
        <div className="mt-36 flex items-center justify-between max-w-7xl mx-auto gap-16 px-10">
            <div className="relative w-full max-w-5xl">
                <Swiper
                    spaceBetween={12}
                    slidesPerView={7}
                    modules={[Navigation]}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                >
                    {icons.map((icon, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col items-center gap-2">
                                <img
                                    src={icon.src}
                                    alt={icon.title}
                                    className="w-10 h-10 object-contain grayscale hover:grayscale-0 transition duration-300"
                                />
                                <p className="text-sm text-black text-center">{icon.title}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Navigation Buttons */}
                <button
                    ref={prevRef}
                    className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 text-2xl text-gray-600 hover:text-black"
                >
                    <FaCircleChevronLeft />
                </button>
                <button
                    ref={nextRef}
                    className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 text-2xl text-gray-600 hover:text-black"
                >
                    <FaCircleChevronRight />
                </button>
            </div>

            <button className="flex items-center gap-2 px-4 py-2 border border-black rounded-xl shadow-sm transition-all hover:bg-gray-300 hover:scale-105">
                <LuListFilter className="text-lg" />
                <span>Filter</span>
            </button>
        </div>
    );
};

export default Middle;
