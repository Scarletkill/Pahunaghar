import { useEffect } from "react";
import { LuCircleX } from "react-icons/lu";

export default function Modal({ showModal, setShowModal }) {
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [showModal]);

  if (!showModal) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center"
      onClick={() => setShowModal(false)}
    >
      <div
        className="bg-white rounded-lg shadow-lg w-full max-w-md mx-4 p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-red-500"
          onClick={() => setShowModal(false)}
        >
          <LuCircleX size={24} />
        </button>

        {/* Modal Content */}
        <h2 className="text-xl font-semibold mb-4">Showing all amenities</h2>
        <ul className="space-y-2">
          <li className="hover:text-blue-600 cursor-pointer">Contact</li>
          <li className="hover:text-blue-600 cursor-pointer">Host</li>
          <li className="hover:text-blue-600 cursor-pointer">Host</li>
          <li className="hover:text-blue-600 cursor-pointer">Host</li>
          <li className="hover:text-blue-600 cursor-pointer">Host</li>
          <li className="hover:text-blue-600 cursor-pointer">Host</li>
          <li className="hover:text-blue-600 cursor-pointer">Host</li>
          <li className="hover:text-blue-600 cursor-pointer">Host</li>
          <li className="hover:text-blue-600 cursor-pointer">Host</li>
        </ul>
      </div>
    </div>
  );
}
