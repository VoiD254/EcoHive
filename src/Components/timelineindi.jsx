import PropTypes from 'prop-types';

const TimelineOrg = ({ events, color = 'green-600' }) => {
  return (
    <section>
      <div className="bg-white transition-colors duration-500 mx-4 sm:mx-6 md:mb-10 lg:mb-10 mt-0 sm:mt-0 md:mt-0">
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-10 items-center flex flex-col lg:h-svh justify-center ">
          <div className="flex flex-row justify-left">
            <h1 className="text-2xl text-start font-bold justify-left text-gray-800 capitalize lg:text-3xl dark:text-white pb-10">Individual Process</h1>
          </div>
          <div className="bg-white rounded-2xl p-6 sm:p-8 border">
            <div className="mx-auto flex flex-wrap justify-between gap-4 overflow-hidden lg:mx-0 lg:gap-6">
              {events.map((event) => (
                <div key={event.id} className="flex-1 min-w-[10rem] lg:min-w-[15rem]">
                  <div className={`flex items-center text-sm font-semibold leading-6 text-${color}`}>
                    <svg viewBox="0 0 24 24" className="mr-4 h-6 w-6 flex-none" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" fill="currentColor"></circle>
                      <text x="12" y="16" textAnchor="middle" fill="white" fontSize="12px" fontWeight="bold">{event.id}</text>
                    </svg>
                    <div className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0" aria-hidden="true"></div>
                  </div>
                  <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{event.title}</p>
                  <p className="mt-1 text-sm leading-7 text-gray-500">{event.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

TimelineOrg.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  color: PropTypes.string,
};

export default TimelineOrg;
