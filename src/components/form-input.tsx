import React from "react";
import { motion } from "framer-motion";

interface FormInputProps {
  label: string;
  type: string;
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: React.ReactNode;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  type,
  id,
  name,
  value,
  onChange,
  icon,
}) => (
  <motion.div
    className="flex flex-col mt-4 w-full"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <label
      className="pb-1 text-sm sm:text-base font-medium text-gray-700"
      htmlFor={id}
    >
      {label}
    </label>
    <div className="relative">
      {icon && (
        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
          {icon}
        </span>
      )}
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full p-3 ${
          icon ? "pl-10" : ""
        } text-sm bg-white text-gray-800 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300`}
        aria-label={label}
      />
    </div>
  </motion.div>
);

export default FormInput;
