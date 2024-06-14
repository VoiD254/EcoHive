import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export function PageWrapper({ children }) {
  const [opacity, setOpacity] = useState(0);
  const [translateY, setTranslateY] = useState(20);

  useEffect(() => {
    setOpacity(1);
    const animateY = () => {
      setTranslateY((prevY) => (prevY === 20 ? -5 : 0));
    };
    const animationInterval = setInterval(animateY, 250);
    return () => clearInterval(animationInterval);
  }, []);

  return (
    <div
      style={{
        opacity,
        transform: `translateY(${translateY}px)`,
        transition: "opacity 0.5s ease, transform 0.5s ease",
      }}
    >
      {children}
    </div>
  );
}

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
