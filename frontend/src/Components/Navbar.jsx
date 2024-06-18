import { useState, useEffect } from 'react';
import ecoHiveLogo from '../assets/EcoHive.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 transition-colors duration-300 ${isScrolled ? 'bg-white bg-opacity-50 backdrop-blur-lg dark:bg-gray-900 dark:bg-opacity-50' : 'bg-white dark:bg-gray-900'}`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={ecoHiveLogo} className="h-10" alt="EcoHive Logo" />
          <span className="self-center text-3xl font-bold whitespace-nowrap dark:text-white text-black">EcoHive</span>
        </a>
        <div className="flex md:order-2 space-x-3 rtl:space-x-reverse">
          <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center active:scale-95">
            Get started
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className={`items-center justify-between ${isOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
          <ul className=" flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-200 rounded-lg bg-white bg-opacity-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white md:bg-opacity-0 dark:bg-gray-900 md:dark:bg-opacity-0 dark:border-gray-700">
            <li>
              <a href="#" className="text-gray-900 rounded hover:bg-gray-200 md:hover:bg-transparent md:hover:text-green-700 md:p-0 dark:hover:text-green-500 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-200 md:hover:bg-transparent md:hover:text-green-700 md:p-0 dark:hover:text-green-500 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700">About</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-200 md:hover:bg-transparent md:hover:text-green-700 md:p-0 dark:hover:text-green-500 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700">Features</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-200 md:hover:bg-transparent md:hover:text-green-700 md:p-0 dark:hover:text-green-500 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700">FAQ</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-200 md:hover:bg-transparent md:hover:text-green-700 md:p-0 dark:hover:text-green-500 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700">Team</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
