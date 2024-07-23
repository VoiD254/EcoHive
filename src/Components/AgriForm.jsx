import { useEffect } from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

// Form components
const Label = ({ htmlFor, children }) => {
  return (
    <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
      {children}
    </label>
  );
};

const Input = ({ id, type, placeholder, register, errors, trigger }) => {
  return (
    <div className="relative mb-4">
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={`mt-1 block w-full px-3 py-2 border ${errors[id] ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm bg-white dark:text-gray-300 text-black`}
        {...register(id, {
          required: `${placeholder} is required`,
          pattern: type === "number" ? {
            value: /^[0-9]+$/,
            message: "Invalid number",
          } : type === "phone" ? {
            value: /^[0-9]{10}$/,
            message: "Phone number must be exactly 10 digits",
          } : undefined,
          minLength: type === "text" ? {
            value: 2,
            message: "Must be at least 2 characters long",
          } : undefined,
          onBlur: () => trigger(id),
        })}
      />
      {errors[id] && <p className="text-red-500 text-sm mt-1">{errors[id].message}</p>}
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

const LabelInputContainer = ({ children }) => {
  return (
    <div className="flex flex-col space-y-2 w-full mb-4">
      {children}
    </div>
  );
};

LabelInputContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  trigger: PropTypes.func.isRequired,
};

const AgriFormModal = ({ isOpen, onClose }) => {
  const { register, handleSubmit, formState: { errors }, trigger } = useForm();

  const onSubmit = (data) => {
    console.log("Form submitted", data);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

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
          <div className="bg-white dark:bg-gray-800 rounded p-8 mb-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="text-black dark:text-gray-300 mb-6">
                <h1 className="font-medium text-2xl">Agri Plantation</h1>
              </div>
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1">
                <LabelInputContainer>
                  <Label htmlFor="full_name">POC Name</Label>
                  <Input id="full_name" placeholder="POC Name" type="text" register={register} errors={errors} trigger={trigger} />
                </LabelInputContainer>

                <LabelInputContainer>
                  <Label htmlFor="poc_number">POC Number</Label>
                  <Input id="poc_number" placeholder="POC Number" type="phone" register={register} errors={errors} trigger={trigger} />
                </LabelInputContainer>

                <LabelInputContainer>
                  <Label htmlFor="acers">Acers of Land</Label>
                  <Input id="acers" placeholder="1000" type="number" register={register} errors={errors} trigger={trigger} />
                </LabelInputContainer>

                <LabelInputContainer>
                  <Label htmlFor="date">Expected Start Date</Label>
                  <Input id="date" placeholder="25/02/2020" type="text" register={register} errors={errors} trigger={trigger} />
                </LabelInputContainer>

                {/* <LabelInputContainer>
                  <Label htmlFor="city">City</Label>
                  <Input id="city" placeholder="City" type="text" register={register} errors={errors} trigger={trigger} />
                </LabelInputContainer> */}

                <LabelInputContainer>
                  <Label htmlFor="state">State / Province</Label>
                  <Input id="state" placeholder="State" type="text" register={register} errors={errors} trigger={trigger} />
                </LabelInputContainer>

                <LabelInputContainer>
                  <Label htmlFor="zipcode">Zipcode</Label>
                  <Input id="zipcode" placeholder="Zipcode" type="text" register={register} errors={errors} trigger={trigger} />
                </LabelInputContainer>
              </div>

              <div className="text-right mt-6">
                <button className="relative mt-3 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-green-600/20 bg-[linear-gradient(110deg,#064e3b,45%,#065f46,55%,#064e3b)] bg-[length:200%_100%] px-2 font-medium text-white transition-colors active:scale-95 w-full" type="submit">
                  Submit
                  <BottomGradient />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

AgriFormModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AgriFormModal;
