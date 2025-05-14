import { Link, useLocation } from "react-router-dom";
import icon1 from "../assets/icon.png";

const Navbar = () => {
  const location = useLocation();
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="flex container mx-auto px-8 py-4 justify-between whitespace-nowrap rounded-lg bg-white-200 text-black">
        <div className="flex items-center gap-1">
          <img src={icon1} alt="icon" className="size-10" />
          <span className="text-base md:text-lg font-semibold">पाहुनाघर</span>
        </div>
        <div className="flex space-x-7">
          <Link
            to="/"
            className={`flex-shrink-0 p-2 text-base md:text-sm ${
              location.pathname === "/" ? "text-blue-400" : ""
            }`}
          >
            पाहुनाघर
          </Link>
          <Link to="/work"
            className={`flex-shrink-0 p-2 text-base md:text-sm ${
              location.pathname === "/work" ? "text-blue-400" : ""
            }`}>
            कसरी काम गर्दछ?
          </Link>
          <Link to="/about-us"
            className={`flex-shrink-0 p-2 text-base md:text-sm ${
              location.pathname === "/about-us" ? "text-blue-400" : ""
            }`}>
            हाम्रो बारेमा
          </Link>
          <Link to="/blog"
            className={`flex-shrink-0 p-2 text-base md:text-sm ${
              location.pathname === "/blog" ? "text-blue-400" : ""
            }`}>ब्लग</Link>
          <Link to="/faq"
            className={`flex-shrink-0 p-2 text-base md:text-sm ${
              location.pathname === "/faq" ? "text-blue-400" : ""
            }`}>
            प्रश्नोतर
          </Link>
          <Link to="/home"
            className={`flex-shrink-0 p-2 text-base md:text-sm ${
              location.pathname === "/home" ? "text-blue-400" : ""
            }`}>होम</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
