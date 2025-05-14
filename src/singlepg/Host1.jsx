import React, { useState } from "react";

import img1 from "../assets/places/bancha-ghar2.jpg";
import img2 from "../assets/places/pattharkot.jpg";
import img3 from "../assets/places/hyatrung.jpg";
import img4 from "../assets/places/belauri.jpg";

import hosting from "../assets/host/archana-dahal.jpg";
import helper from "../assets/host/female1.jpg";
import helper1 from "../assets/host/female2.jpg";
import helper2 from "../assets/host/female3.jpg";
import helper3 from "../assets/host/female4.jpg";
import Modal from "../Components/Modal";

const Host1 = () => {
  const [showModal, setShowModal] = useState(false);
  const help = [
    { img: helper1, name: "sita" },
    { img: helper, name: "rita" },
    { img: helper2, name: "gita" },
    { img: helper3, name: "neeta" },
  ];

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="container mx-auto pt-[5.5rem] relative md:px-8">
      {showModal && <Modal setShowModal={setShowModal} showModal={showModal} />}
      <h2 className=" flex left-2 font-bold text-3xl py-2">
        भान्छा घर ~ पाहुनाको सेवा, हाम्रो धर्म।
      </h2>
      <div className="grid grid-cols-4 grid-rows-2 gap-2 rounded-xl overflow-hidden mt-2 h-[400px]">
        <div className="col-span-2 row-span-2">
          <img
            src={img1}
            className="w-full h-full object-cover"
            alt="Main Image"
          />
        </div>
        <div className="col-span-1 row-span-1">
          <img
            src={img2}
            className="w-full h-full object-cover "
            alt="Image 2"
          />
        </div>
        <div className="col-span-1 row-span-1">
          <img
            src={img3}
            className="w-full h-full object-cover"
            alt="Image 3"
          />
        </div>
        <div className="col-span-1 row-span-1">
          <img
            src={img4}
            className="w-full h-full object-cover"
            alt="Image 4"
          />
        </div>
        <div className="col-span-1 row-span-1">
          <img
            src={img1}
            className="w-full h-full object-cover"
            alt="Image 5"
          />
          <button className="flex bg-white rounded-lg p-2 z-50 right-0">
            See all image
          </button>
        </div>
      </div>
      <div className="left-2 p-4 mt-2 ">
        <h3 className="text-3xl font-semibold px-4 text-left">
          Dinner at Belauri,Nepal
        </h3>
        <p className="text-2x1 font-normal text-left px-4">
          Opening time: 7AM to 7PM
        </p>
        <p className="text-sm font-thin text-left px-4">4.3 250 Rating</p>
      </div>
      <hr className="my-4 border-t border-gray-300 " />
      <div className="flex items-center gap-4 p-4">
        <img
          src={hosting}
          alt="profile of host"
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h2 className="text-lg font-semibold">Hosted by Archana Dahal</h2>
          <p className="text-sm text-gray-600 text-left">6 years of hosting</p>
        </div>
        <ul className="text-sm text-left  pl-10">
          <li>Registered Date: 26 Magh, 2076</li>
          <li>DOB: 1999, Magh 30</li>
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
      <div className="grid grid-cols-2 grid-rows-1 gap-4 rounded-lg">
        <div className="grid-cols-1 p-4 bg-white rounded-lg shadow-md text-left">
          <h3 className="text-xl font-bold mb-2">अर्चना दाहाल को बारेमा</h3>
          <p className="text-justify text-sm leading-relaxed">
            पाहुनाघर BLR153 मा यहाहरुलाई स्वागत गर्दछु । म अर्चना दाहाल, कंचनपुर
            बेलौरी बाट, बेलौरी श्रीपुर गाउपालिका अन्तर्गत पर्दछ, जुन महाकाली
            जिल्लाको दक्षिण पश्चिमी भागमा पर्दछ पुरानो गाउँ विकास समिति ४ जेठ
            २०७१ मा विद्यमान रामपुर बिलासपुर, लक्ष्मीपुर, महाकाली र श्रीपुर गाउँ
            विकास समितिसँग गाभिएपछि नगरपालिकामा परिणत भएको थियो । म यहाहरुलाई
            मेरो पाहुनाघरमा स्वागत गर्न चाहन्छु ।
          </p>
          <div className="flex gap-6 overflow-x-auto">
            {help.map((person, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center min-w-[100px] mt-4"
              >
                <img
                  src={person.img}
                  alt={`helper-${idx}`}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <h2 className="mt-2 text-base font-medium text-gray-800">
                  {person.name}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr className="my-4 w-1/2 border-t border-gray-300" />
      <div className="text-left">
        <h2 className="text-left font-bold leading-relaxed text-lg">
          What this place offers
        </h2>
        <div className="grid grid-cols-4 gap-0">
          <ul className="m-0 p-0">
            <li>घर पालुवा जनावर</li>
            <li>पोखरी</li>
            <li>भाँडा माझ्ने</li>
            <li>केतली</li>
          </ul>
          <ul className="m-0 p-0">
            <li>टोस्टर</li>
            <li>पानि तताउने</li>
            <li>वासिंग मेसिन</li>
            <li>टिभी</li>
          </ul>
        </div>
        <button
          className="border-spacing-1 shadow-md bg-gray-400 mt-2 rounded-lg px-4 py-2"
          onClick={handleShowModal}
        >
          Show all 11 amenities
        </button>
      </div>
      <hr className="my-4 w-1/2 border-t border-gray-300" />
      <div className="text-left">
        <h1 className="text-lg font-bold">Select the Booking Date</h1>
        <p className="text-sm font-thin text-gray-400">
          Opening time: 7AM TO 8PM
        </p>
        Calender
      </div>
      <hr className="my-4 w-1/2 border-t border-gray-300" />
    </div>
  );
};

export default Host1;
