import React from 'react'

import kanyam from '../assets/places/kanyam.jpg';
import jhorahat from '../assets/places/jhorahat.jpg';
import jefale from '../assets/places/jefale.jpg';
import dodhar from '../assets/places/dodhara-chandani.jpg';
import taplejung from '../assets/places/taplejung.jpg'; // Assuming this exists

const Destination = () => {
    return (
        <div className="mt-6 text-3xl text-black font-bold">
            लोकप्रिय गन्तव्यहरू
            <div className="grid grid-cols-3 grid-rows-2 gap-6 h-[700px] m-6 border-spacing-6 p-16 ">
                {/* Top-left (लेटाङ) */}
                <div className="relative row-span-1 col-span-2 transition-transform duration-300 transform hover:scale-105">
                    <img
                        src={jhorahat}
                        alt="लेटाङ"
                        className="w-full h-full object-cover rounded-lg"
                    />
                    <ul className="absolute top-2 right-2 text-white">
                        <li className='text-2xl font-bold'>लेटाङ</li>
                        <li className='text-sm text-gray-400 font-light'>144 पाहुनाघर</li>
                    </ul>
                </div>

                {/* Top-right (ज्याफाले डाँडा) */}
                <div className="row-span-2 col-span-1">
                    <img
                        src={jefale}
                        alt="ज्याफाले डाँडा"
                        className="w-full h-full object-cover rounded-lg transition-transform duration-300 transform hover:scale-105"
                    />
                </div>

                {/* Bottom-left (ताप्लेजुङ) */}
                <div className="row-span-1 col-span-1">
                    <img
                        src={taplejung}
                        alt="ताप्लेजुङ"
                        className="w-full h-full object-cover rounded-lg transition-transform duration-300 transform hover:scale-105"
                    />
                </div>

                {/* Bottom-center (दोधारा चाँदनी) */}
                <div className="row-span-1 col-span-1">
                    <img
                        src={dodhar}
                        alt="दोघारा चाँदनी"
                        className="w-full h-full object-cover rounded-lg transition-transform duration-300 transform hover:scale-105"
                    />
                </div>

                {/* Bottom-right is already taken by ज्याफाले डाँडा */}
            </div>
        </div>
    );
};

export default Destination;
