import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { SignupLoginIndividual } from "./Signup-Individual";
import { SignupLoginOrg } from "./Signup-Org";

const Modal = ({ isOpen, onClose }) => {
  const [currentPage, setCurrentPage] = useState("individual");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleToggle = (page) => {
    setCurrentPage(page);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl relative overflow-hidden">
        <button
          className="absolute top-4 right-4 text-gray-700 dark:text-gray-300 focus:outline-none"
          onClick={onClose}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="max-h-[80vh] overflow-y-auto p-4 md:p-8">
          <div className="flex justify-center space-x-1 mb-4 border-b mx-4 md:mx-8 lg:mx-12">
            <button
              className={`px-4 py-2 text-sm font-medium ${currentPage === "individual" ? "text-green-600 border-b-2 border-green-400" : "text-gray-500"}`}
              onClick={() => handleToggle("individual")}
            >
              Individual
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium ${currentPage === "org" ? "text-green-600 border-b-2 border-green-400" : "text-gray-500"}`}
              onClick={() => handleToggle("org")}
            >
              Organization
            </button>
          </div>
          <div className="px-4 md:px-8 lg:px-12">
            {currentPage === "individual" ? <SignupLoginIndividual /> : <SignupLoginOrg />}
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
