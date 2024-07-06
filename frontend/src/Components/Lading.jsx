import { motion } from "framer-motion";
import { useEffect, useRef, useState, useCallback } from "react";
import Modal from './modal';

const ShuffleHero = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <section id="home" className="w-full h-screen px-4 pr-0 py-12 grid grid-cols-1 md:grid-cols-3 items-center gap-8 max-w-6xl mx-auto md:ml-80 mt-8 md:mt-18">
      <div className="col-span-2 md:pr-20 md:-ml-72">
        <span className="block mb-4 text-xs md:text-sm text-green-600 font-medium">
          Capybara
        </span>
        <h3 className="text-3xl md:text-6xl font-semibold">
          Let&apos;s change it up a bit
        </h3>
        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam nobis in
          error repellat voluptatibus ad.
        </p>
        <button onClick={handleOpenModal} className="bg-green-700 text-white font-medium py-2 px-4 rounded transition-all hover:bg-green-800 active:scale-95">
          Get Started
        </button>
      </div>
      <ShuffleGrid />
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "https://149358052.v2.pressablecdn.com/wp-content/uploads/2024/01/24_1.jpg",
  },
  {
    id: 2,
    src: "https://img.freepik.com/premium-photo/world-environment-day-world-earth-day-importance-protecting-nature-environment-earth-hand_523886-5182.jpg?w=900",
  },
  {
    id: 3,
    src: "https://jgu.edu.in/blog/wp-content/uploads/2024/03/gettyimages-1360520451-612x612-1.jpg",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/64b0e86583c8ad001de12654.jpg",
  },
  {
    id: 5,
    src: "https://nicholasinstitute.duke.edu/sites/default/files/styles/event_image/public/gems/wss-wuse-sewage-treatment-plant.jpg?itok=p1M8U6WE",
  },
  {
    id: 6,
    src: "https://lvivity.com/wp-content/uploads/2020/04/iot-in-agriculture.jpg",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full rounded-xl"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  const shuffleSquares = useCallback(() => {
    setSquares(generateSquares());
    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  }, []);

  useEffect(() => {
    shuffleSquares();
    return () => clearTimeout(timeoutRef.current);
  }, [shuffleSquares]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 grid-rows-3 h-[300px] sm:h-[450px] gap-1 mt-8">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;