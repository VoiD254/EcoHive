import PropTypes from 'prop-types';

const Info = ({ image1, image2, image3, image4, image5, image6, description1, description2 }) => {
    return (
        <div className='flex flex-col lg:flex-row items-start mx-auto my-auto px-3 py-14 pb-10 bg-white'>
            <div className='flex-1 mx-auto px-5 py-2 mt-10 lg:mt-20 lg:px-10 lg:pt-20'>
                <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">{description1}</span><br /> Scalable AI.
                </h1>
                <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">{description2}</p>
                <button className="bg-green-700 text-white font-medium mt-5 py-2 px-4 rounded transition-all hover:bg-green-800 active:scale-95">
                    Get Started
                </button>
            </div>
            <div className="flex-1 container mx-auto px-5 py-2 lg:px-10 lg:pt-24">
                <div className="-m-1 flex flex-wrap md:-m-2">
                    <div className="flex w-full lg:w-1/2 flex-wrap">
                        <div className="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={image1}
                            />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={image2} />
                        </div>
                        <div className="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={image3} />
                        </div>
                    </div>
                    <div className="flex w-full lg:w-1/2 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={image4} />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={image5} />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={image6} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

Info.propTypes = {
    image1: PropTypes.string.isRequired,
    image2: PropTypes.string.isRequired,
    image3: PropTypes.string.isRequired,
    image4: PropTypes.string.isRequired,
    image5: PropTypes.string.isRequired,
    image6: PropTypes.string.isRequired,
    description1: PropTypes.string.isRequired,
    description2: PropTypes.string.isRequired,
};

export default Info;
