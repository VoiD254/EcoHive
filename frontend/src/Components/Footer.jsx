import ecoHiveLogo from '../assets/EcoHive.png';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-green-900 overflow-x-hidden">
      <div className="mx-auto w-full  p-4 py-6 lg:py-8 ">
      <hr className="my-6 mx-10 border-green-200 dark:border-green-500 lg:my-8" />
        <div className="md:flex md:justify-between mx-10 justify-center">
          <div className="mb-6 md:mb-0">
            <a onClick={scrollToTop} className="flex items-center">
              <img src={ecoHiveLogo} className="h-12 me-3" alt="EcoHive Logo" />
              <span className="self-center text-3xl font-bold whitespace-nowrap dark:text-white text-gray-800">EcoHive</span>
            </a>
          </div>
          <div className="grid grid-cols-3 gap-8 sm:gap-14 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://react.dev/" className="hover:underline" target='_blank'>React JS</a>
                </li>
                <li>
                  <a href="https://tailwindcss.com/" className="hover:underline" target='_blank'>Tailwind CSS</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm relative font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline" target='_blank'>Github</a>
                </li>
              </ul>
            </div>
            <div>
            <button
              onClick={scrollToTop}
              className='text-green-300 animate-shimmer'
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-arrow-up"
              >
                <line x1="12" y1="19" x2="12" y2="5"></line>
                <polyline points="5 12 12 5 19 12"></polyline>
              </svg>
            </button>
            </div>
          </div>
        </div>
        <hr className="my-6 mx-10 border-green-200  dark:border-green-500 lg:my-8 w-full" />
        <div className="sm:flex sm:itms-center flex-row justify-center">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="#" className="hover:underline" target='_blank'>EcoHive™</a>. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
