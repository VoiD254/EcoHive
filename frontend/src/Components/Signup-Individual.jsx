"use client";
import PropTypes from "prop-types";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";

const Label = ({ htmlFor, children }) => {
  return (
    <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700 dark:text-gray-300">
      {children}
    </label>
  );
};

const Input = ({ id, type, placeholder, showPassword, toggleShowPassword, register, errors, validate, trigger }) => {
  return (
    <div className="relative">
      <input
        id={id}
        type={showPassword ? "text" : type}
        placeholder={placeholder}
        className={`mt-1 block w-full px-3 py-2 border ${errors[id] ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm bg-white dark:text-gray-300 pr-10 text-black`}
        {...register(id, {
          required: `${placeholder} is required`,
          pattern: type === "email" && {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Invalid email address",
          },
          ...(type === "aadhar" && {
            pattern: {
              value: /^[2-9]{1}[0-9]{3}\s[0-9]{4}\s[0-9]{4}$/,
              message: "Invalid Aadhaar Number",
            }
          }),
          minLength: (type === "password" && {
            value: 8,
            message: "Password must be at least 8 characters long",
          }) || (type === "text" && {
            value: 2,
            message: "Name must be at least 2 characters long",
          }),
          validate: validate,
          onBlur: () => trigger(id),
        })}
      />
      {type === "password" && (
        <span
          onClick={toggleShowPassword}
          className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer top-1/2 transform -translate-y-1/2"
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
      )}
      {errors[id] && <p className="text-red-500 text-sm mt-1 overflow-hidden">{errors[id].message}</p>}
    </div>
  );
};

const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
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
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
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
  showPassword: PropTypes.bool,
  toggleShowPassword: PropTypes.func,
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  validate: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  trigger: PropTypes.func.isRequired,
};

export function SignupLoginIndividual() {
  const [isLogin, setIsLogin] = useState(true); // Initialize to true for login page first
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { register, handleSubmit, formState: { errors }, watch, trigger } = useForm();

  const onSubmit = (data) => {
    console.log("Form submitted", data);
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const password = watch('password');

  return (
    <div className="max-w-md w-full mx-auto p-4 md:p-8 shadow-input bg-white dark:bg-white overflow-x-hidden">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        {isLogin ? "Login to EcoHive" : "Welcome to EcoHive"}
      </h2>
      <form className="my-8" onSubmit={handleSubmit(onSubmit)}>
        {!isLogin && (
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name" type="text" register={register} errors={errors} trigger={trigger} />
            </LabelInputContainer>
          </div>
        )}
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="Email Address" type="email" register={register} errors={errors} trigger={trigger} />
        </LabelInputContainer>
        {!isLogin &&(
          <LabelInputContainer className="mb-4">
          <Label htmlFor="aadhar">Aadhaar Number</Label>
          <Input id="aadhar" placeholder="Aadhaar Number" type="aadhar" register={register} errors={errors} trigger={trigger} />
        </LabelInputContainer>
        )}
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            placeholder="Password"
            type="password"
            showPassword={showPassword}
            toggleShowPassword={toggleShowPassword}
            register={register}
            errors={errors}
            trigger={trigger}
          />
        </LabelInputContainer>
        {!isLogin && (
          <LabelInputContainer className="mb-4">
            <Label htmlFor="confirmpassword">Confirm password</Label>
            <Input
              id="confirmpassword"
              placeholder="Confirm password"
              type="password"
              showPassword={showConfirmPassword}
              toggleShowPassword={toggleShowConfirmPassword}
              register={register}
              errors={errors}
              validate={value => value === password || "Passwords do not match"}
              trigger={trigger}
            />
          </LabelInputContainer>
        )}

        <button
          className="relative mt-3 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-green-600/20 bg-[linear-gradient(110deg,#064e3b,45%,#065f46,55%,#064e3b)] bg-[length:200%_100%] px-2 font-medium text-white transition-colors active:scale-95 w-full"
          type="submit"
        >
          {isLogin ? "Login" : "Sign up"} &rarr;
          <BottomGradient />
        </button>
      </form>
      <p className="text-neutral-600 text-base max-w-sm mt-2 pl-1.5 dark:text-neutral-300">
        {isLogin
          ? "Join EcoHive!  "
          : "Already have an account?  "}
        <span
          onClick={toggleForm}
          className="text-green-600 cursor-pointer hover:underline dark:text-green-400"
        >
          {isLogin ? "Signup" : "Login"}
        </span>
      </p>
    </div>
  );
}

export default SignupLoginIndividual;
