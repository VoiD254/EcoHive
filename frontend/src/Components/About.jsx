import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Modal from './modal';

function ImagesSlider({ images, className, children, autoSlide = true, autoSlideInterval = 3000, textBackground = "rgba(0, 0, 0, 0.5)" }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    if (!autoSlide) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, autoSlideInterval);

    return () => clearInterval(interval);
  }, [autoSlide, autoSlideInterval, images.length]);

  return (
    <section id="about">
    <div className={`relative ${className}`}>
      <div
        className="absolute inset-0 flex justify-center items-center z-10 h-full w-full rounded-xl"
        style={{ background: textBackground }}
      >
        {children}
      </div>
      <div className="overflow-hidden h-full w-full rounded-xl">
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="min-w-full h-full flex-shrink-0 flex items-center justify-center"
              style={{ minHeight: '40rem' }}
            >
              <img
                src={image}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover"
                style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
}

ImagesSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
  autoSlide: PropTypes.bool,
  autoSlideInterval: PropTypes.number,
  textBackground: PropTypes.string,
};

// About Component
const About = () => {
  const images = [
    "https://media.assettype.com/outlookindia/import/uploadimage/library/16_9/16_9_5/IMAGE_1654424558.webp?w=640&auto=format%2Ccompress&fit=max&format=webp&dpr=1.0",
    "https://housing.com/news/wp-content/uploads/2023/03/shutterstock_2008709621-1200x700-compressed.jpg",
    "https://www.asc-csa.gc.ca/images/satellites/quotidien/agriculture-banner.jpg",
  ];
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  
  return (
    <ImagesSlider className="h-[40rem] mx-10 rounded-xl " images={images} textBackground="rgba(0, 0, 0, 0.7)">
      <div className="z-50 flex flex-col justify-center items-center">
        <p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          The hero section slideshow <br /> nobody asked for
        </p>
        <p className="font-bold mx-28 text-sm md:text-1xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero aspernatur saepe iure suscipit hic doloribus eaque quod adipisci nulla aperiam repellat voluptate nam commodi laboriosam magni illum, cumque, eius officia.
        </p>
        <button onClick={handleOpenModal}className="relative inline-flex h-12 animate-shimmer items-center justify-center rounded-3xl mt-7 border border-green-600/20 bg-[linear-gradient(110deg,#064e3b,45%,#065f46,55%,#064e3b)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors active:scale-95">
          <span>Get Started →</span>
          <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-green-600 to-transparent rounded-3xl" />
        </button>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </ImagesSlider>
  );
}

export default About;
