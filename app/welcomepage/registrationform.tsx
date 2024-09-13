"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FormInputProps {
  label: string;
  type: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput: React.FC<FormInputProps> = ({ label, type, id, value, onChange }) => (
  <motion.div 
    className="flex flex-col mt-2 w-full"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <label className="pb-1 text-sm font-medium text-gray-700" htmlFor={id}>{label}</label>
    <input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      className="w-full p-2 text-sm bg-white text-black rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
      aria-label={label}
    />
  </motion.div>
);

const RegistrationForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [userType, setUserType] = useState<'freelancer' | 'client'>('freelancer');
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    location: '',
    skills: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prevData => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { userType, ...formData });
    // Add your submission logic here
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-3xl shadow-lg w-full max-w-4xl relative overflow-hidden"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none z-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-8 bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
            <h2 className="text-3xl font-bold mb-6">Choose Your Path</h2>
            <div className="space-y-4">
              <button
                onClick={() => setUserType('freelancer')}
                className={`w-full py-2 px-4 rounded-full transition duration-300 ${
                  userType === 'freelancer'
                    ? 'bg-white text-blue-500'
                    : 'border-2 border-white text-white hover:bg-white hover:text-blue-500'
                }`}
              >
                I'm a Freelancer
              </button>
              <button
                onClick={() => setUserType('client')}
                className={`w-full py-2 px-4 rounded-full transition duration-300 ${
                  userType === 'client'
                    ? 'bg-white text-indigo-500'
                    : 'border-2 border-white text-white hover:bg-white hover:text-indigo-500'
                }`}
              >
                I'm a Client
              </button>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-2">
                {userType === 'freelancer' ? 'Freelancer Benefits' : 'Client Benefits'}
              </h3>
              <ul className="list-disc list-inside">
                {userType === 'freelancer' ? (
                  <>
                    <li>Showcase your skills</li>
                    <li>Find exciting projects</li>
                    <li>Build your portfolio</li>
                  </>
                ) : (
                  <>
                    <li>Access top talent</li>
                    <li>Post projects easily</li>
                    <li>Get work done efficiently</li>
                  </>
                )}
              </ul>
            </div>
          </div>

          <div className="w-full md:w-1/2 p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={userType}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  {userType === 'freelancer' ? 'Freelancer Registration' : 'Client Registration'}
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <FormInput label="Full Name" type="text" id="fullname" value={formData.fullname} onChange={handleInputChange} />
                  <FormInput label="Email Address" type="email" id="email" value={formData.email} onChange={handleInputChange} />
                  <FormInput label="Password" type="password" id="password" value={formData.password} onChange={handleInputChange} />
                  <FormInput label="Location" type="text" id="location" value={formData.location} onChange={handleInputChange} />
                  {userType === 'freelancer' && (
                    <FormInput label="Skills" type="text" id="skills" value={formData.skills} onChange={handleInputChange} />
                  )}
                  <motion.button
                    type="submit"
                    className="w-full bg-blue-600 text-white rounded-full py-2 px-4 hover:bg-blue-700 transition duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Pre-register as {userType === 'freelancer' ? 'Freelancer' : 'Client'}
                  </motion.button>
                </form>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default RegistrationForm;