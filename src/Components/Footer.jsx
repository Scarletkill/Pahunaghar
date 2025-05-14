import sfooter from "../assets/sfooter.png";
import pahunagharlogo from "../assets/pahuna-ghar-logo_green.png";

const Footer = () => {
  return (
    <footer className="mt-4 bg-gray-200">
      <div className="container mx-auto grid grid-cols-5 gap-6 py-6 px-4 md:px-6 lg:px-8  text-gray-600 text-sm">
        {/* Column 1 */}
        <ul className="space-y-2">
          <li>ब्लग</li>
          <li>कसरि काम गर्छ ?</li>
          <li>विशेषताहरु</li>
          <li>लक्ष्य र दृष्टिकोण</li>
        </ul>
        <ul className="space-y-2">
          <li>हाम्रो बारेमा</li>
          <li>डाउनलोड</li>
          <li>दर्ता गर्नुहोस</li>
          <li>सानो समूह</li>
        </ul>
        <ul className="space-y-2">
          <li>अपिल</li>
          <li>प्रश्नोतर</li>
          <li>सम्पर्क</li>
          <li>रजिस्टर</li>
        </ul>
        <ul className="space-y-2">
          <li>गोपनीयता नीति</li>
          <li>सेवा सर्तहरू</li>
          <li>ईयुयलए</li>
          <li>अस्वीकरण</li>
        </ul>
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
          <img
            src={pahunagharlogo}
            alt="pahunaGhar logo"
            className="w-[160px] mb-2"
          />
          <hr className="my-2 border-green-500" />
          <ul className="text-[12px] text-gray-700 mt-4 space-y-1">
            <li>श्रीयोग कन्सल्टिंग प्रा. लि. को</li>
            <li>सामाजिक पहल (नमुना)</li>
            <li>पोखरिया, बिराटनगर-३, नेपाल</li>
            <li>pG@Sriyog.Com</li>
            <li>+977-98520-24-365</li>
          </ul>
        </div>
      </div>
      <div className="w-full">
        <img
          src={sfooter}
          alt="footer img"
          className="w-full h-auto object-cover"
        />
      </div>
      <hr className="my-4 border-t border-black" />

      <div className="text-xs container mx-auto px-4 md:px-6 lg:px-8 text-gray-800 pb-4">
        <p>सर्बाधिकार सुरक्षित. © pahunaGhar™</p>
        <p>श्रीयोग कन्सल्टिंग प्रा. लि. को सामाजिक पहल</p>
      </div>
    </footer>
  );
};

export default Footer;
