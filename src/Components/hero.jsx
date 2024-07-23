import PropTypes from 'prop-types';

const HeroSection = ({ heading, description, imageUrl, buttonColor, textcolor }) => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-full"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/100 to-transparent"
        ></div>
      </div>

      <div
        className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8 mb-10"
      >
        <div className="max-w-xl text-left">
          <h1 className={`text-3xl font-extrabold ${textcolor} sm:text-5xl animate-fade-in`}>
            {heading}
            <strong className={`block font-extrabold ${textcolor}  mt-2 animate-slide-in`}></strong>
          </h1>

          <p className="mt-4 max-w-lg text-white sm:text-sm/relaxed animate-fade-in">
            {description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-left">
            <a
              href="#"
              className={`block w-full rounded px-12 py-3 text-sm font-medium text-white shadow sm:w-auto transition-all duration-200 ease-in-out transform hover:scale-105 ${buttonColor}`}
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

HeroSection.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  buttonColor: PropTypes.string,
  textcolor : PropTypes.string,
};

HeroSection.defaultProps = {
  buttonColor: 'bg-rose-600 hover:bg-rose-700 active:bg-rose-500',
  textcolor: 'text-rose-500',
};

export default HeroSection;
