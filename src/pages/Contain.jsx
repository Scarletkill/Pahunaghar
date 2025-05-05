import React from 'react';
import list1 from '../assets/list/1.jpg';
import list2 from '../assets/list/2.jpg';
import list3 from '../assets/list/3.jpg';
import list4 from '../assets/list/4.jpg';
import host1 from '../assets/host/female1.jpg';
import host2 from '../assets/host/female2.jpg';
import host3 from '../assets/host/female3.jpg';
import host4 from '../assets/host/female4.jpg';
import { IoHeartCircleOutline } from "react-icons/io5";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { MdHotel } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaDog } from "react-icons/fa";
import { FaSwimmer } from "react-icons/fa";
import { FaSink } from "react-icons/fa";
import { GiToaster } from "react-icons/gi";
import { LuCircleParking } from "react-icons/lu";
import { TbTeapot } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';

const Contain = () => {
  const navigate = useNavigate();

  const cards = [
    { img: list1, buton: 'धरान' },
    { img: list2, buton: 'पोखरा' },
    { img: list3, buton: 'सर्लाही' },
    { img: list4, buton: 'जनकपुर' },
  ];

  const hosts = [
    { image: host1, name: 'गङ्गा रिजाल', serv: 'पाहुनाघर', loc: 'पानमारा' },
    { image: host2, name: 'नानी थापा', serv: 'पेयिंग गेस्ट', loc: 'एअरपोर्ट रोड' },
    { image: host3, name: 'साधना पौडेल', serv: 'चराघर', loc: 'नयाँ टोल' },
    { image: host4, name: 'देविका पौडेल', serv: 'ढिकी घर', loc: 'कन्यम' },
  ]

  return (
    <div className="flex justify-start gap-8 mt-3">
      {cards.map((card, index) => (
        <div
          key={index}
          onClick={() => navigate(`/host/${index+1}`)}
          className="w-[500px] h-[470px] bg-white rounded-lg shadow-md overflow-hidden"
        >
          <div className="relative">
            <img
              src={card.img}
              alt={`card-${index}`}
              className="w-full h-40 object-cover"
            />
            <button className='absolute top-2 right-2 bg-green-400 text-white text-sm px-3 py-1 rounded-lg shadow-md hover:bg-green-500 transition'>
              {card.buton}
            </button>
            <button className='absolute top-1 left-1 text-lg bg-white rounded-lg'>
              <IoHeartCircleOutline className='rounded-lg hover:bg-pink-400 transition-all' />
            </button>
          </div>
          <div className="p-4 flex items-center gap-3">
            <img
              src={hosts[index].image}
              alt={`hosts-${index}`}
              className='w-10 h-10 rounded-full object-cover border-2 shadow-md'
            />
            <h2 className="text-base font-semibold text-gray-800">
              {hosts[index].name}
            </h2>
            <span className='rounded-lg bg-blue-400 '><IoCheckmarkCircleOutline /></span>
          </div>
          <ul className="px-6 pt-2 space-y-2">
            <li className="flex items-center gap-2 text-sm text-gray-700">
              <MdHotel className="text-lg" />
              {hosts[index].serv}
            </li>
            <li className="flex items-center gap-2 text-sm text-gray-700">
              <IoLocationOutline className="text-lg" />
              {hosts[index].loc}
            </li>
          </ul>
          <hr className="my-4 mx-8 border-t border-gray-300 " />
          <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-gray-700 text-sm px-6 py-2">
            <li className="flex items-center gap-2">
              <FaDog />
              Pet
            </li>
            <li className="flex items-center gap-2">
              <FaSwimmer />
              Swim
            </li>
            <li className="flex items-center gap-2">
              <FaSink />
              sink
            </li>
            <li className="flex items-center gap-2">
              <GiToaster />
              Toster
            </li>
            <li className="flex items-center gap-2">
              <LuCircleParking />
              Parking
            </li>
            <li className="flex items-center gap-2">
              <TbTeapot />
              Kettle
            </li>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Contain;
