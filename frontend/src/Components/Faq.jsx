import { useState } from 'react';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq">
    <div data-accordion="collapse" className="w-full px-9 pb-10">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white pb-10 mt-16">
            FAQ
          </h1>
      <h2 id="accordion-color-heading-1">
        <button
          type="button"
          className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 rounded-t-xl  dark:border-gray-700 dark:text-gray-400 hover:bg-green-100 dark:hover:bg-gray-800 gap-3 ${
            activeIndex === 1 ? 'bg-green-100 dark:bg-gray-800 text-green-600 dark:text-white' : ''
          }`}
          onClick={() => toggleAccordion(1)}
          aria-expanded={activeIndex === 1}
          aria-controls="accordion-color-body-1"
        >
          <span>What is Green Credit?</span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 ${activeIndex === 1 ? 'rotate-180' : ''} shrink-0`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5L5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-color-body-1"
        className={`${activeIndex === 1 ? '' : 'hidden'}`}
        aria-labelledby="accordion-color-heading-1"
      >
        <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Green credit is a financial incentive offering favorable loan terms to support environmentally sustainable projects, such as renewable energy, energy efficiency, and sustainable agriculture.
          </p>
          {/* <p className="text-gray-500 dark:text-gray-400">
            Check out this guide to learn how to{' '}
            <a href="/docs/getting-started/introduction/" className="text-green-600 dark:text-green-500 hover:underline">
              get started
            </a>{' '}
            and start developing websites even faster with components on top of Tailwind CSS.
          </p> */}
        </div>
      </div>
      <h2 id="accordion-color-heading-2">
        <button
          type="button"
          className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 dark:border-gray-700 dark:text-gray-400 hover:bg-green-100 dark:hover:bg-gray-800 gap-3 ${
            activeIndex === 2 ? 'bg-green-100 dark:bg-gray-800 text-green-600 dark:text-white' : ''
          }`}
          onClick={() => toggleAccordion(2)}
          aria-expanded={activeIndex === 2}
          aria-controls="accordion-color-body-2"
        >
          <span>How do I earn Green Credit?</span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 ${activeIndex === 2 ? 'rotate-180' : ''} shrink-0`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5L5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-color-body-2"
        className={`${activeIndex === 2 ? '' : 'hidden'}`}
        aria-labelledby="accordion-color-heading-2"
      >
        <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Check out the{' '}
            <a href="https://flowbite.com/figma/" className="text-green-600 dark:text-green-500 hover:underline">
              Figma design system
            </a>{' '}
            based on the utility classes from Tailwind CSS and components from Flowbite.
          </p>
        </div>
      </div>
      <h2 id="accordion-color-heading-3">
        <button
          type="button"
          className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right  text-left text-gray-500 border rounded-b-xl dark:border-gray-700 dark:text-gray-400 hover:bg-green-100 dark:hover:bg-gray-800 gap-3 ${
            activeIndex === 3 ? 'bg-green-100 dark:bg-gray-800 text-green-600 dark:text-white' : ''
          }`}
          onClick={() => toggleAccordion(3)}
          aria-expanded={activeIndex === 3}
          aria-controls="accordion-color-body-3"
        >
          <span>Benefits of green crdit</span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 ${activeIndex === 3 ? 'rotate-180' : ''} shrink-0`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5L5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-color-body-3"
        className={`${activeIndex === 3 ? '' : 'hidden'}`}
        aria-labelledby="accordion-color-heading-3"
      >
        <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
          <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400">
            <li>
              <a href="https://flowbite.com/pro/" className="text-green-600 dark:text-green-500 hover:underline">
                Flowbite Pro
              </a>
            </li>
            <li>
              <a href="https://tailwindui.com/" rel="nofollow" className="text-green-600 dark:text-green-500 hover:underline">
                Tailwind UI
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Accordion;