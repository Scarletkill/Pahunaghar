import React from 'react';

import img1 from '../assets/places/bancha-ghar2.jpg';
import img2 from '../assets/places/pattharkot.jpg';
import img3 from '../assets/places/hyatrung.jpg';
import img4 from '../assets/places/belauri.jpg';

import hostimg from '../assets/host/archana-dahal.jpg';
import helper from '../assets/host/female1.jpg';
import helper1 from '../assets/host/female2.jpg';
import helper2 from '../assets/host/female3.jpg';
import helper3 from '../assets/host/female4.jpg';



const Host1 = () => {
    const help = [
        { img: helper1, name: 'sita' },
        { img: helper, name: 'rita' },
        { img: helper2, name: 'gita' },
        { img: helper3, name: 'neeta' }
    ]
    return (
        <div className="pt-14">
            <h2 className=' flex left-2 font-bold text-3xl'>
                भान्छा घर ~ पाहुनाको सेवा, हाम्रो धर्म।
            </h2>
            <div className="grid grid-cols-4 grid-rows-2 gap-2 rounded-xl overflow-hidden mt-2 h-[400px]">
                <div className="col-span-2 row-span-2">
                    <img src={img1} classname="w-full h-full object-cover" alt="Main Image" />
                </div>
                <div classname="col-span-1 row-span-1">
                    <img src={img2} classname="w-full h-full object-cover " alt="Image 2" />
                </div>
                <div classname="col-span-1 row-span-1">
                    <img src={img3} classname="w-full h-full object-cover" alt="Image 3" />
                </div>
                <div classname="col-span-1 row-span-1">
                    <img src={img4} classname="w-full h-full object-cover" alt="Image 4" />
                </div>
                <div classname="col-span-1 row-span-1 z-10">
                    <img src={img1} classname="w-full h-full object-cover" alt="Image 5" />
                    <button className='flex bg-white rounded-lg p-2 z-50 right-0'>
                        See all image
                    </button>
                </div>
            </div>
            <div className='left-2 p-4 mt-2 ' >
                <h3 className='text-3xl font-semibold px-4 text-left'>Dinner at Belauri,Nepal</h3>
                <p className='text-2x1 font-normal text-left px-4'>Opening time: 7AM to 7PM</p>
                <p className='text-sm font-thin text-left px-4'>4.3  250 Rating</p>
            </div>
            <hr className="my-4 border-t border-gray-300 " />
            <div className="flex items-center gap-4 p-4">
                <img
                    src={hostimg}
                    alt="profile of host"
                    className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                    <h2 className="text-lg font-semibold">Hosted by Archana Dahal</h2>
                    <p className="text-sm text-gray-600 text-left">6 years of hosting</p>
                </div>
                <ul>
                    <li>Registered Date: 26 Magh, 2076</li>
                    <li>DOB: 2</li>
                </ul>
                <ul className="text-sm text-left list-disc pl-10">
                    <li>Belauri, Kanchanpur, Nepal</li>
                    <li>Bancha Ghar</li>
                    <li>BLR153</li>
                </ul>
                <ul className="text-sm text-left list-disc pl-8">
                    <li>Gender:female</li>
                    <li>Age: 30</li>
                    <li>Blood Group: A+</li>
                </ul>
            </div>
            <hr className="my-4 border-t border-gray-300 " />
            <div className='grid grid-cols-2 grid-rows-1 gap-4 rounded-lg'>
                <div className='grid-cols-1 p-4 bg-white rounded-lg shadow-md text-left'>
                    <h3 className="text-xl font-bold mb-2">
                        अर्चना दाहाल को बारेमा
                    </h3>
                    <p className="text-justify text-sm leading-relaxed">
                        पाहुनाघर BLR153 मा यहाहरुलाई स्वागत गर्दछु । म अर्चना दाहाल, कंचनपुर बेलौरी बाट, बेलौरी श्रीपुर गाउपालिका अन्तर्गत पर्दछ, जुन महाकाली जिल्लाको दक्षिण पश्चिमी भागमा पर्दछ पुरानो गाउँ विकास समिति ४ जेठ २०७१ मा विद्यमान रामपुर बिलासपुर, लक्ष्मीपुर, महाकाली र श्रीपुर गाउँ विकास समितिसँग गाभिएपछि नगरपालिकामा परिणत भएको थियो । म यहाहरुलाई मेरो पाहुनाघरमा स्वागत गर्न चाहन्छु ।
                    </p>
                    <div className='flex gap-6 overflow-x-auto'>
                        {help.map((person, idx) => (
                            <div key={idx} className='flex flex-col items-center min-w-[100px]'>
                                <img src={person.img} alt={`helper-${idx}`} className='w-16 h-16 rounded-full object-cover' />
                                <h2 className="mt-2 text-base font-medium text-gray-800">{person.name}</h2>
                            </div>
                        ))}
                    </div>


                </div>
            </div>


        </div>
    );
}

export default Host1;
