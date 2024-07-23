import PropTypes from 'prop-types';

const FeaturesSection = () => {
  return (
    <section id='features' className="pt-16 pb-0">
      <div className="2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6 py-20 px-4">
        <div className="mb-10 lg:mb-16 flex justify-center items-center flex-col gap-x-0 gap-y-6 lg:gap-y-0 lg:flex-row lg:justify-between max-md:max-w-lg max-md:mx-auto">
            <h2 className="font-semibold lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-gray-800 text-center">
              Perks for joining the initiative
            </h2>
        </div>
        <div className="flex justify-center items-center gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
          <FeatureCard
            icon={
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.7222 11.6667V7.22225C24.7222 5.99495 23.7273 5 22.5 5H4.72222C3.49492 5 2.5 5.99492 2.5 7.22222V22.7778C2.5 24.0051 3.49492 25 4.72222 25H22.5C23.7273 25 24.7222 24.005 24.7222 22.7777V17.7778M20.8333 17.7778H25.2778C26.5051 17.7778 27.5 16.7829 27.5 15.5556V13.8889C27.5 12.6616 26.5051 11.6667 25.2778 11.6667H20.8333C19.606 11.6667 18.6111 12.6616 18.6111 13.8889V15.5556C18.6111 16.7829 19.606 17.7778 20.8333 17.7778Z" stroke="#228B22" strokeWidth="2"></path>
              </svg>
            }
            title="Credit Allocation"
            description="We are currently using Firebase for real-time credit allocation and planning to integrate blockchain, which will provide us with activity verification and audibility, preventing greenwashing and ensuring a transparent credit distribution system. The credit allocated will have a fixed monetary value for the organization and individual users to ensure trade transparency."
          />
          <FeatureCard
            icon={
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.375 15.8571C16.1009 15.8571 17.5 14.458 17.5 12.7321C17.5 11.0062 16.1009 9.6071 14.375 9.6071C12.6491 9.6071 11.25 11.0062 11.25 12.7321C11.25 14.458 12.6491 15.8571 14.375 15.8571ZM14.375 15.8571V20.8571M3.75 13.2264V15.2343C3.75 17.6868 3.75 18.9131 4.27747 19.9685C4.80493 21.0239 5.78567 21.76 7.74715 23.2322L8.57248 23.8516C11.4626 26.0208 12.9077 27.1054 14.5753 27.1054C16.243 27.1054 17.688 26.0208 20.5782 23.8516L21.4035 23.2322C23.365 21.76 24.3457 21.0239 24.8732 19.9685C25.4006 18.9131 25.4006 17.6868 25.4006 15.2343V13.2264C25.4006 9.95932 25.4006 8.32576 24.546 7.05852C23.6913 5.79128 22.1768 5.17918 19.1477 3.95499L18.3223 3.62144C16.4724 2.87381 15.5475 2.5 14.5753 2.5C13.6032 2.5 12.6782 2.87381 10.8283 3.62144L10.003 3.95499C6.97389 5.17919 5.45934 5.79128 4.60467 7.05852C3.75 8.32576 3.75 9.95932 3.75 13.2264Z" stroke="#228B22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            }
            title="Verification and Validation"
            description={
              <>
                Automated Data Analysis: Utilizes satellite imagery, IoT sensors, and machine learning models to validate the environmental impact of user activity.
                <span style={{ display: 'block', margin: '8px 0' }}></span>
                Blockchain Integration: Ensures transparency and security by recording all transactions and activities on a blockchain, preventing fraud and greenwashing.
              </>
            }
          />
          <FeatureCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" height="42" xmlSpace="preserve" style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLinecap: 'round', strokeLinejoin: 'round' }}>
                <path d="M34.014 50.419c-11.705 0-21.209-9.504-21.209-21.21C12.805 17.504 22.309 8 34.014 8c8.947 0 16.608 5.552 19.722 13.395" style={{ fill: 'none', stroke: '#228B22', strokeWidth: '2.5px' }} />
                <path d="M31.782 56s1.758-10.099 12.279-15.628" style={{ fill: 'none', stroke: '#228B22', strokeWidth: '2.5px' }} />
                <path d="M34.014 50.189s-2.977-8.665 1.117-14.282c4.093-5.617 13.847-5.727 18.976-10.047 0 0 5.747 22.151-15.628 25.675M12.805 29.209l-2.233-2.232s-3.466 11.668 2.233 18.976c5.699 7.309 10.047 4.466 10.047 4.466M22.293 46.512l.975-4.386c.091-.411.327-.777.664-1.03h.001a2.965 2.965 0 0 0 1.034-3.309l-1.738-5.213a5.059 5.059 0 0 1-.209-2.314l.291-2.034a5.056 5.056 0 0 0-3.869-5.642l-5.149-1.189M45.177 11.176l-2.67 2.773a5.057 5.057 0 0 0-1.332 4.412l.414 2.277a3.058 3.058 0 0 1-.563 2.385l-.001.001a3.052 3.052 0 0 0-.519 2.571l.206.824M37.5 46l10-2.5M13.5 41l3.5.868M22 19s3.628-4.841 10.5-5" style={{ fill: 'none', stroke: '#228B22', strokeWidth: '2.5px'  }} />
              </svg>
            }
            title="Community & Social Impact"
            description="Join the Movement: Share your achievements and inspire others to join the cause. Track Your Impact: See real-time data on how your actions are helping to improve the environment. Volunteer Opportunities: Find volunteer opportunities that allow you to contribute directly to environmental conservation efforts in your community. Eco-Challenges: Participate in or create eco-challenges with friends and community members to promote sustainable practices."
          />
          <FeatureCard
            icon={
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z" stroke="#228B22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            }
            title="Project Management Tools"
            description="We basically offer a digital platform where users can register their work and track their progress effortlessly. Additionally, our platform utilizes geotagging for photos and GPS coordinates to track the progress of their work and provide targeted suggestions for their betterment, which will provide users with a transparent and motivating outlook towards the initiative."
          />
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="group relative shadow-lg w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 xl:p-7 xl:w-1/4 hover:bg-green-600 flex flex-col min-h-[420px]">
      <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14">
        {icon}
      </div>
      <div>
        <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">
          {title}
        </h4>
        <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white overflow-hidden text-ellipsis">
          {description}
        </p>
      </div>
    </div>
  );
};

FeatureCard.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default FeaturesSection;
