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
import CalendarGrid from "../singlepg/Calender"; // Ensure this path is correct

const Host1 = () => {
  const [showModal, setShowModal] = useState(false);
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);

  const help = [
    { img: helper1, name: "sita" },
    { img: helper, name: "rita" },
    { img: helper2, name: "gita" },
    { img: helper3, name: "neeta" },
  ];

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const handleDateSelect = (date) => {
    if (!checkIn || (checkIn && checkOut)) {
      setCheckIn(date);
      setCheckOut(null);
    } else if (date < checkIn) {
      setCheckIn(date);
      setCheckOut(null);
    } else {
      setCheckOut(date);
    }
  };

  return (
    <div className="container mx-auto pt-[5.5rem] relative md:px-8">
      {showModal && <Modal setShowModal={setShowModal} showModal={showModal} />}

      <h2 className="text-3xl font-bold py-2">भान्छा घर ~ पाहुनाको सेवा, हाम्रो धर्म।</h2>

      {/* Image grid */}
      <div className="grid grid-cols-4 grid-rows-2 gap-2 rounded-xl overflow-hidden mt-2 h-[400px]">
        <div className="col-span-2 row-span-2"><img src={img1} className="w-full h-full object-cover" alt="Main" /></div>
        <div><img src={img2} className="w-full h-full object-cover" alt="img2" /></div>
        <div><img src={img3} className="w-full h-full object-cover" alt="img3" /></div>
        <div><img src={img4} className="w-full h-full object-cover" alt="img4" /></div>
        <div>
          <img src={img1} className="w-full h-full object-cover" alt="img5" />
          <button className="flex bg-white rounded-lg p-2 z-50 right-0">See all images</button>
        </div>
      </div>

      <div className="p-4 mt-2">
        <h3 className="text-3xl font-semibold">Dinner at Belauri, Nepal</h3>
        <p className="text-2xl font-normal">Opening time: 7AM to 7PM</p>
        <p className="text-sm font-thin">4.3 ⭐ 250 Rating</p>
      </div>

      <hr className="my-4" />

      {/* Host info */}
      <div className="flex items-center gap-4 p-4">
        <img src={hosting} alt="host" className="w-16 h-16 rounded-full" />
        <div>
          <h2 className="text-lg font-semibold">Hosted by Archana Dahal</h2>
          <p className="text-sm text-gray-600">6 years of hosting</p>
        </div>
        <ul className="text-sm pl-10"><li>Registered Date: 26 Magh, 2076</li><li>DOB: 1999, Magh 30</li></ul>
        <ul className="text-sm list-disc pl-10"><li>Belauri</li><li>Bancha Ghar</li><li>BLR153</li></ul>
        <ul className="text-sm list-disc pl-8"><li>Gender: female</li><li>Age: 30</li><li>Blood Group: A+</li></ul>
      </div>

      <hr className="my-4" />

      {/* About host */}
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">अर्चना दाहाल को बारेमा</h3>
          <p className="text-sm text-justify">
            पाहुनाघर BLR153 मा यहाहरुलाई स्वागत गर्दछु...
          </p>
          <div className="flex gap-6 overflow-x-auto mt-4">
            {help.map((person, idx) => (
              <div key={idx} className="flex flex-col items-center min-w-[100px]">
                <img src={person.img} alt={person.name} className="w-16 h-16 rounded-full" />
                <h2 className="mt-2 text-base">{person.name}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>

      <hr className="my-4 w-1/2" />

      {/* Amenities */}
      <div className="text-left">
        <h2 className="font-bold text-lg">What this place offers</h2>
        <div className="grid grid-cols-4">
          <ul><li>घर पालुवा जनावर</li><li>पोखरी</li><li>भाँडा माझ्ने</li><li>केतली</li></ul>
          <ul><li>टोस्टर</li><li>पानि तताउने</li><li>वासिंग मेसिन</li><li>टिभी</li></ul>
        </div>
        <button
          className="mt-2 rounded-lg px-4 py-2 bg-gray-400 shadow-md"
          onClick={handleShowModal}
        >
          Show all 11 amenities
        </button>
      </div>

      <hr className="my-4 w-1/2" />

      {/* Calendar */}
      <div className="mt-6 flex justify-start items-start gap-6">
        <div className="text-left">
          <h1 className="text-lg font-bold">Select Booking Dates</h1>
          <p className="text-sm text-gray-400">Opening time: 7AM TO 8PM</p>
          <div className="mt-2">
            <p className="text-sm">
              ✅ Check-in: {checkIn ? checkIn.toDateString() : "Not selected"}
            </p>
            <p className="text-sm">
              ✅ Check-out: {checkOut ? checkOut.toDateString() : "Not selected"}
            </p>
          </div>
          <CalendarGrid
            checkIn={checkIn}
            checkOut={checkOut}
            onDateSelect={handleDateSelect}
          />
          <div className="mt-4">
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md">
              Book
            </button>
          </div>
        </div>
      </div>

      <hr className="my-4 w-1/2" />
    </div>
  );
};

export default Host1;
