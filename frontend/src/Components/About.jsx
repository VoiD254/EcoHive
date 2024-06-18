import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

// ImagesSlider Component
function ImagesSlider({ images, className, children, autoSlide = true, autoSlideInterval = 3000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoSlide) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, autoSlideInterval);

    return () => clearInterval(interval);
  }, [autoSlide, autoSlideInterval, images.length]);

  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 flex justify-center items-center">
        {children}
      </div>
      <div className="overflow-hidden h-full">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="min-w-full h-full bg-center bg-cover"
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

ImagesSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
  autoSlide: PropTypes.bool,
  autoSlideInterval: PropTypes.number,
};

// SliderPage Component
const About = () => {
  const images = [
    "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 mx-10 rounded-xl">
      <ImagesSlider className="h-[60vh] sm:h-[70vh] lg:h-[80vh] w-full" images={images}>
        <motion.div
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="z-50 flex flex-col justify-center items-center text-center text-white"
        >
          <motion.p
            className="font-bold text-xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-gray-700 py-4"
          >
            The hero section slideshow <br /> nobody asked for
          </motion.p>
        <button className="relative inline-flex h-12 animate-shimmer items-center justify-center rounded-3xl mt-7 border border-green-600/20 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-green-50">
            <span>Join now →</span>
            <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-green-600 to-transparent rounded-3xl" />
        </button>

        </motion.div>
      </ImagesSlider>
      <div className="max-w-4xl mt-8 px-4">
        <p className="text-lg text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut earum ipsum enim inventore, repudiandae debitis incidunt? Quo itaque repellendus esse vitae quod adipisci porro deserunt, voluptatum aperiam tenetur numquam quae?
        </p>
      </div>
    </div>
  );
}

export default About;
