import PropTypes from 'prop-types';
const CardHoverEffect = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item, index) => (
        <div
          key={index}
          className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4 transform transition-transform duration-200 hover:scale-105"
        >
          <h2 className="text-xl font-bold text-black">{item.title}</h2>
          <p className="text-gray-500">{item.description}</p>
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-500 hover:text-indigo-700"
          >
            Learn more
          </a>
        </div>
      ))}
    </div>
  );
};

CardHoverEffect.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CardHoverEffect;
