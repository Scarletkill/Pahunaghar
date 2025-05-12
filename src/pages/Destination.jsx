import React, { useState } from 'react';

import jhorahat from '../assets/places/jhorahat.jpg';
import jefale from '../assets/places/jefale.jpg';
import dodhar from '../assets/places/dodhara-chandani.jpg';
import taplejung from '../assets/places/taplejung.jpg';

import female1 from '../assets/testimonials/1.jpg';
import female2 from '../assets/testimonials/2.jpg';
import female3 from '../assets/testimonials/3.jpg';


import { FaHandPointRight } from "react-icons/fa";
import { BsQuote } from "react-icons/bs";

const destinations = [
    { src: jhorahat, title: 'लेटाङ', guest: '२३ पाहुनाघर', span: 2, row: 1 },
    { src: jefale, title: 'ज्याफाले डाँडा', guest: '१५० पाहूनाघर', span: 1, row: 2 },
    { src: taplejung, title: 'ताप्लेजुङ', guest: '१३५  पाहूनाघर', span: 1, row: 1 },
    { src: dodhar, title: 'दोघारा चाँदनी', guest: '९० पाहूनाघर', span: 1, row: 1 },
];

const testimonials = [
    { src: female1, Name: 'भगवती बर्तौला', address: 'चितवन', review: ' प्रविधिको विकास र सामाजिक सञ्जालको प्रयोगसँगै परिवर्तनशील सोचले सुरु भएको पाहुनाघरको विचार निकै उत्कृष्ट लाग्यो, यसले समुदायमा पर्यटन र समृद्धिको सम्भावना बढाउँछ।' },
    { src: female2, Name: 'पुर्णिमा उप्रेती', address: 'बिराटनगर', review: 'घरमै बसेर उधमशीलता र अतिथि सत्कारलाई जोड दिंदै लुकेका ठाउँमा पर्यटन प्रवर्द्धन गर्ने कार्य, आर्थिक रूपमा सक्षम र सामाजिक रूपमा उदाहरणीय बन्ने बाटो हो।' },
    { src: female3, Name: 'राम प्रसाद अधिकारी', address: 'भोजपुर', review: 'घुमफिर भन्नाले मन पर्ने स्थानमा पुग्ने स्वतन्त्रता हो, प्रत्येक ठाउँमा पाहुनाघर भएमा सबैले सजिलै जानकारी लिई जुनसुकै ठाउँमा पुग्न सक्छन्, जसले पर्यटन बृद्धि गर्छ।' },

];

const Destination = () => {
    const [hoverIndex, setHoverIndex] = useState(null);

    return (
        <div className="mt-8 text-black font-bold text-center">
            <h3 className='text-[50px]'>लोकप्रिय गन्तव्यहरू</h3>
            <p className='text-[30px] font-normal mt-4'>नेपालमा लुकेका कुनाहरू अवलोकन गर्नुहोस् । #Freedom of Living.</p>

            <div className="grid grid-cols-3 grid-rows-2 gap-6 h-[700px] m-10 mt-2 border-spacing-6 p-20">
                {destinations.map((place, index) => (
                    <div
                        key={index}
                        className={`relative row-span-${place.row} col-span-${place.span} transition-transform duration-300 transform hover:scale-105`}
                        onMouseEnter={() => setHoverIndex(index)}
                        onMouseLeave={() => setHoverIndex(null)}
                    >
                        <img
                            src={place.src}
                            alt={place.title}
                            className="w-full h-full object-cover rounded-lg"
                        />

                        {/* Info Overlay */}
                        <ul className="absolute top-2 right-2 text-white text-right">
                            <li className='text-2xl font-bold flex items-center gap-1'>
                                {place.title}
                                {place.guest && <FaHandPointRight />}
                            </li>
                            {place.guest && <li className='text-sm text-black font-light'>{place.guest}</li>}
                        </ul>

                        {/* Button on Hover */}
                        {hoverIndex === index && (
                            <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-black text-white rounded-md shadow-lg hover:bg-gray-800 transition">
                                थप हेर्नुहोस्
                            </button>
                        )}
                    </div>
                ))}
            </div>

            <div className='text-center mt-6'>
                <h3 className='text-[50px] font-bold text-black'>प्रतिक्रिया</h3>
                <p className='text-[15px] font-thin text-gray-500'>
                    स्थानीय श्रोत र साधनको उच्चतम उपयोग गरी आर्थिक उपार्जनका लागि सांस्कृतिक आतिथ्य र स्थानीय खानाको प्रबन्ध मिलाउने<br />
                    जसले सांस्कृतिक, ग्रामिण र सामाजिक पर्यटनको विकास गर्दै राष्ट्रलाई पर्यटन-मैत्री पहिचान बनाउन र स्थानीय स्तरमा उधमशीलता विकास अनि बिस्तार गर्नेछ
                </p>
            </div>

            <div className='grid grid-cols-3 gap-6 mt-10'>
                {testimonials.map((review, index) => (
                    <div key={index} className="flex flex-col items-center p-4 ">
                        <img
                            src={review.src}
                            alt={review.Name}
                            className="w-24 h-24 rounded-full object-cover mb-4"
                        />
                        <h4 className="text-xl font-semibold">{review.Name}</h4>
                        <p className="text-gray-500 text-sm">{review.address}</p>
                        <p className='text-black text-[15px] font-light mt-3 flex items-start gap-2'>
                            <BsQuote className="text-xl text-black" />
                            {review.review}
                        </p>

                    </div>
                ))}
            </div>

        </div>
    );
};

export default Destination;
