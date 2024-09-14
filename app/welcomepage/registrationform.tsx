"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FormInputProps {
  label: string;
  type: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon: React.ReactNode;
}

const FormInput: React.FC<FormInputProps> = ({ label, type, id, value, onChange, icon }) => (
  <motion.div 
    className="flex flex-col mt-4 w-full"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <label className="pb-1 text-sm font-medium text-gray-700" htmlFor={id}>{label}</label>
    <div className="relative">
      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
        {icon}
      </span>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        className="w-full p-2 pl-10 text-sm bg-white text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
        aria-label={label}
      />
    </div>
  </motion.div>
);

const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const LockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const SkillsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const JobIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

interface SuccessPopupProps {
  userType: 'freelancer' | 'client';
  onClose: () => void;
}

const SuccessPopup: React.FC<SuccessPopupProps> = ({ userType, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <motion.div 
        className="bg-white rounded-lg p-8 max-w-md w-full mx-4 relative"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
        >
          <motion.svg 
            className="mx-auto h-12 w-12 text-green-500 mb-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </motion.svg>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Pre-registration Successful!</h3>
          <p className="text-lg text-gray-600 mb-4">
            Thank you for pre-registering as a {userType}!
          </p>
          <p className="text-sm text-gray-500 mb-6">
            {userType === 'freelancer'
              ? "We're excited to have you on board! Get ready to showcase your skills and find amazing projects."
              : "We're thrilled to have you join us! Get ready to connect with top talent and bring your projects to life."}
          </p>
          <h4 className="text-lg font-semibold text-gray-800 mb-2">Next Steps:</h4>
          <ul className="text-sm text-gray-600 text-left list-disc list-inside mb-6">
            <li>Check your email for a confirmation link</li>
            <li>Complete your profile to stand out</li>
            <li>{userType === 'freelancer' ? 'Browse available projects' : 'Post your first job'}</li>
          </ul>
        </motion.div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onClose}
          className="w-full bg-blue-600 text-white rounded-lg py-3 px-6 text-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          Got it, thanks!
        </motion.button>
      </motion.div>
    </div>
  );
};

const RegistrationForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [userType, setUserType] = useState<'freelancer' | 'client'>('freelancer');
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    location: '',
    skills: '',
    interestedJob: '',
  });
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prevData => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { userType, ...formData });
    setShowSuccessPopup(true);
  };

  const handleSuccessPopupClose = () => {
    setShowSuccessPopup(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-3xl shadow-lg w-full max-w-6xl relative overflow-hidden"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none z-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col lg:flex-row h-full">
          <motion.div 
            className="w-full lg:w-1/2 p-8 bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex flex-col justify-between min-h-[600px]"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h2 className="text-4xl font-bold mb-8">Choose Your Path</h2>
              <div className="space-y-6">
                <motion.button
                  onClick={() => setUserType('freelancer')}
                  className={`w-full py-3 px-6 rounded-lg text-lg font-semibold transition duration-300 ${
                    userType === 'freelancer'
                      ? 'bg-white text-blue-500 shadow-lg'
                      : 'border-2 border-white text-white hover:bg-white hover:text-blue-500'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  I'm a Freelancer
                </motion.button>
                <motion.button
                  onClick={() => setUserType('client')}
                  className={`w-full py-3 px-6 rounded-lg text-lg font-semibold transition duration-300 ${
                    userType === 'client'
                      ? 'bg-white text-indigo-500 shadow-lg'
                      : 'border-2 border-white text-white hover:bg-white hover:text-indigo-500'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  I'm a Client
                </motion.button>
              </div>
            </div>
            <motion.div 
              className="mt-12"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold mb-4">
                {userType === 'freelancer' ? 'Freelancer Benefits' : 'Client Benefits'}
              </h3>
              <ul className="space-y-2">
                {userType === 'freelancer' ? (
                  <>
                    <li className="flex items-center"><span className="mr-2">•</span>Showcase your skills</li>
                    <li className="flex items-center"><span className="mr-2">•</span>Find exciting projects</li>
                    <li className="flex items-center"><span className="mr-2">•</span>Build your portfolio</li>
                  </>
                ) : (
                  <>
                    <li className="flex items-center"><span className="mr-2">•</span>Access top talent</li>
                    <li className="flex items-center"><span className="mr-2">•</span>Post projects easily</li>
                    <li className="flex items-center"><span className="mr-2">•</span>Get work done efficiently</li>
                  </>
                )}
              </ul>
            </motion.div>
          </motion.div>

          <motion.div 
            className="w-full lg:w-1/2 p-8 flex items-center min-h-[600px] bg-gray-50"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={userType}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-md mx-auto"
              >
                <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                  {userType === 'freelancer' ? 'Freelancer Registration' : 'Client Registration'}
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <FormInput label="Full Name" type="text" id="fullname" value={formData.fullname} onChange={handleInputChange} icon={<UserIcon />} />
                  <FormInput label="Email Address" type="email" id="email" value={formData.email} onChange={handleInputChange} icon={<EmailIcon />} />
                  <FormInput label="Password" type="password" id="password" value={formData.password} onChange={handleInputChange} icon={<LockIcon />} />
                  <FormInput label="Location" type="text" id="location" value={formData.location} onChange={handleInputChange} icon={<LocationIcon />} />
                  {userType === 'freelancer' ? (
                    <FormInput label="Skills" type="text" id="skills" value={formData.skills} onChange={handleInputChange} icon={<SkillsIcon />} />
                  ) : (
                    <FormInput label="Interested Job to Post" type="text" id="interestedJob" value={formData.interestedJob} onChange={handleInputChange} icon={<JobIcon />} />
                  )}
                  <motion.button
                    type="submit"
                    className="w-full bg-blue-600 text-white rounded-lg py-3 px-6 text-lg font-semibold hover:bg-blue-700 transition duration-300 mt-8"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Pre-register as {userType === 'freelancer' ? 'Freelancer' : 'Client'}
                  </motion.button>
                </form>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>

      <AnimatePresence>
        {showSuccessPopup && (
          <SuccessPopup userType={userType} onClose={handleSuccessPopupClose} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default RegistrationForm;
