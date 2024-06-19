import ecoHiveLogo from '../assets/EcoHive.png';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-green-900">
      <div className="mx-auto w-full  p-4 py-6 lg:py-8 ">
      <hr className="my-6 mx-10 border-green-200 dark:border-green-500 lg:my-8" />
        <div className="md:flex md:justify-between mx-10">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              <img src={ecoHiveLogo} className="h-12 me-3" alt="EcoHive Logo" />
              <span className="self-center text-3xl font-bold whitespace-nowrap dark:text-white text-gray-800">EcoHive</span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-14 sm:grid-cols-2">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">Flowbite</a>
                </li>
                <li>
                  <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">Github</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 mx-10 border-green-200  dark:border-green-500 lg:my-8 w-full" />
        <div className="sm:flex sm:itms-center flex-row justify-center">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="#" className="hover:underline">EcoHive™</a>. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
