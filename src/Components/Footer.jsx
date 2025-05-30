import React from 'react';
import sfooter from '../assets/sfooter.png';
import pahunagharlogo from '../assets/pahuna-ghar-logo_green.png';
import { TbPhoneCall } from "react-icons/tb";
import { IoLocation } from "react-icons/io5";
import { SlEnvolopeLetter } from "react-icons/sl";

import applestore from '../assets/logo/apple-store.png';
import googlestore from '../assets/logo/google-play-store.png';

import facebook from "../assets/logo/facebook-logo.png";
import linkedin from '../assets/logo/linkedin-logo.png';
import twiter from '../assets/logo/twitter-logo.png';

const Footer = () => {
    return (
        <footer className='mt-4 bg-gray-200'>
            <div className='container mx-auto grid grid-cols-5 gap-6 p-6 text-gray-600 text-sm'>
                {/* Column 1 */}
                <ul className='space-y-2'>
                    <li>ब्लग</li>
                    <li>कसरि काम गर्छ ?</li>
                    <li>विशेषताहरु</li>
                    <li>लक्ष्य र दृष्टिकोण</li>
                </ul>
                <ul className='space-y-2'>
                    <li>हाम्रो बारेमा</li>
                    <li>डाउनलोड</li>
                    <li>दर्ता गर्नुहोस</li>
                    <li>सानो समूह</li>
                </ul>
                <ul className='space-y-2'>
                    <li>अपिल</li>
                    <li>प्रश्नोतर</li>
                    <li>सम्पर्क</li>
                    <li>रजिस्टर</li>
                </ul>
                <ul className='space-y-2'>
                    <li>गोपनीयता नीति</li>
                    <li>सेवा सर्तहरू</li>
                    <li>ईयुयलए</li>
                    <li>अस्वीकरण</li>
                </ul>
                <div className='bg-white p-6 rounded-xl shadow-md border border-gray-200'>
                    <img src={pahunagharlogo} alt='pahunaGhar logo' className='w-[160px] mb-2' />
                    <hr className='my-2 border-green-500' />
                    <ul className='text-[12px] text-gray-700 mt-4 space-y-1'>
                        <li>श्रीयोग कन्सल्टिंग प्रा. लि. को</li>
                        <li>सामाजिक पहल (नमुना)</li>

                        <li className="flex items-start gap-2">
                            <IoLocation className="mt-[2px]" />
                            <span>पोखरिया, बिराटनगर-३, नेपाल</span>
                        </li>

                        <li className="flex items-center gap-2">
                            <SlEnvolopeLetter />
                            <span>pG@Sriyog.Com</span>
                        </li>

                        <li className="flex items-center gap-2">
                            <TbPhoneCall />
                            <span>+977-98520-24-365</span>
                        </li>

                        <li className="flex items-center gap-2">
                            <TbPhoneCall />
                            <span>टोल फ्री नम्बर</span>
                        </li>

                        <li className="pl-6">1660-215-2020</li>
                    </ul>
                </div>

            </div>
            <div className="w-full">
                <img src={sfooter} alt="footer img" className="w-full h-auto object-cover" />
            </div>

            <hr className="my-4 border-t border-black" />

            <div className="w-full flex justify-between items-center px-8 py-6 flex-wrap gap-4">
                {/* Left: Copyright */}
                <div className="text-xs text-gray-800">
                    <p>सर्बाधिकार सुरक्षित. © pahunaGhar™</p>
                    <p>श्रीयोग कन्सल्टिंग प्रा. लि. को सामाजिक पहल</p>
                </div>

                {/* Center: App Store Buttons */}
                <div className="flex gap-4">
                    <img src={applestore} alt="storeapple" className="w-28 h-auto" />
                    <img src={googlestore} alt="storegoogle" className="w-28 h-auto" />
                </div>

                {/* Right: Social Icons */}
                <div className="flex gap-4">
                    <img src={facebook} alt="facebook" className="w-6 h-6" />
                    <img src={linkedin} alt="linkedin" className="w-6 h-6" />
                    <img src={twiter} alt="twitter" className="w-6 h-6" />
                </div>
            </div>

        </footer>

    );
}

export default Footer;
