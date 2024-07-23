import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useFirebase, firebaseAuth } from "../context/firebase";
import { onAuthStateChanged } from "firebase/auth";

const Label = ({ htmlFor, children }) => {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
    >
      {children}
    </label>
  );
};

const Input = ({ id, type, placeholder, onChange }) => {
  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm bg-white dark:text-gray-300 pr-10 text-black"
		onChange={onChange}
      />
    </div>
  );
};

const TextArea = ({ id, placeholder, onChange }) => {
  return (
    <div className="relative">
      <textarea
        id={id}
        placeholder={placeholder}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm bg-white dark:text-gray-300 pr-10 text-black"
        rows="4"
		onChange={onChange}
      />
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-green-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={`flex flex-col space-y-2 w-full ${className}`}>
      {children}
    </div>
  );
};

LabelInputContainer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

TextArea.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

const ContactModal = ({ isOpen, onClose, entity }) => {
	const firebase = useFirebase();
	const onSubmit = (event) => {
		event.preventDefault();
	
		handleSubmit(name, email, message);
	};
	
  	const handleSubmit = async (name, email, message) => {
	console.log("Submitting data:", { name, email, message });
  
	try {
	  const userQueriesSnapshot = await firebase.getData(`queries/${entity}/${userID}`);
	  const userQueries = userQueriesSnapshot.val();
  
	  const nextQueryNumber = userQueries ? Object.keys(userQueries).length + 1 : 1;
	  const queryKey = `query${nextQueryNumber}`;
  
	  // Put new data with the dynamic query number
	  await firebase.putData(`queries/${entity}/${userID}/${queryKey}`, {
		name: name,
		email: email,
		message: message,
	  });
  
	  onClose();
	} catch (error) {
	  console.error("Error submitting data:", error);
	}
  };
  

  if (!isOpen) return null;

  const [userID, setUserID] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setUserID(user.uid);
      } else {
        console.log("You are logged out");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl relative overflow-hidden">
        <button
          className="absolute top-4 right-4 text-gray-700 dark:text-gray-300 focus:outline-none"
          onClick={onClose}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="max-h-[80vh] overflow-y-auto p-4 md:p-8">
          <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
            Contact Us
          </h2>
          <div className="mt-6 space-y-8 md:mt-8">
            <p className="flex items-start -mx-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-2 text-green-500 dark:text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>

              <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                +91 1234567890
              </span>
            </p>

            <p className="flex items-start -mx-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-2 text-green-500 dark:text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>

              <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                capybara@gmail.com
              </span>
            </p>
          </div>
          <form className="my-8" onSubmit={onSubmit}>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Name"
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                placeholder="Email Address"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="message">Message</Label>
              <TextArea
                id="message"
                placeholder="Message"
                onChange={(e) => setMessage(e.target.value)}
              />
            </LabelInputContainer>
            <button
              className="relative mt-3 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-green-600/20 bg-[linear-gradient(110deg,#064e3b,45%,#065f46,55%,#064e3b)] bg-[length:200%_100%] px-2 font-medium text-white transition-colors active:scale-95 w-full"
              type="submit"
            >
              Send &rarr;
              <BottomGradient />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

ContactModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ContactModal;