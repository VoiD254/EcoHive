import PropTypes from 'prop-types';

const ContentSection = ({ title, paragraph1, paragraph2 }) => {
  return (
    <div className="mx-4 sm:mx-6 md:mx-10 lg:mx-20 mt-12 sm:mt-16 md:mt-20 lg:mt-24">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 capitalize dark:text-white">
          {title}
        </h1>
        <p className="mt-8 text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400">
          {paragraph1}
        </p>
        <p className="mt-5 text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400">
          {paragraph2}
        </p>
      </div>
    </div>
  );
};

ContentSection.propTypes = {
  title: PropTypes.string.isRequired,
  paragraph1: PropTypes.string.isRequired,
  paragraph2: PropTypes.string.isRequired,
};

export default ContentSection;
