
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faCog, faNewspaper } from '@fortawesome/free-solid-svg-icons';

const Support = ({ items }) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative p-6 max-w-sm mx-auto bg-gray-800/[0.5] rounded-lg shadow-md space-y-4 transform transition duration-500 hover:scale-105"
          >
            {/* Icon in the top left corner */}
            <div className="absolute top-0 left-0 mt-2 ml-2">
              {item.icon === 'phone' && (
                <FontAwesomeIcon icon={faPhone} className="text-indigo-500" />
              )}
              {item.icon === 'cog' && (
                <FontAwesomeIcon icon={faCog} className="text-indigo-500" />
              )}
              {item.icon === 'newspaper' && (
                <FontAwesomeIcon icon={faNewspaper} className="text-indigo-500" />
              )}
            </div>
            <h2 className="text-xl font-bold">{item.title}</h2>
            <p className="text-gray-500">{item.description}</p>
          </div>
        ))}
      </div>
    );
  };

Support.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      icon: PropTypes.oneOf(['phone', 'cog', 'newspaper']), // Define possible icon types
    })
  ).isRequired,
};

export default Support;
