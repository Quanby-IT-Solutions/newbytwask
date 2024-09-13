"use client";

import React, { useState } from 'react';

interface FormInputProps {
  label: string;
  type: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput: React.FC<FormInputProps> = ({ label, type, id, value, onChange }) => (
  <div className="flex flex-col mt-4 w-full">
    <label className="pb-2 text-lg font-medium text-black" htmlFor={id}>{label}</label>
    <input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      className="w-full p-3 bg-white text-black rounded-lg border border-black-300 focus:outline-none focus:border-blue-400"
      aria-label={label}
    />
  </div>
);

const RegistrationForm: React.FC = () => {
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
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center max-w-md w-full p-8 bg-cyan-100 rounded-xl shadow-lg mt-10">
      <div className="flex flex-col w-full text-center mb-6">
        <div className="text-2xl font-bold text-black mb-4">Pre-register as</div>
        <div className="flex flex-wrap gap-4 justify-center mb-4">
          <button
            type="button"
            onClick={() => setUserType('freelancer')}
            className={`px-4 py-2 text-base sm:px-6 sm:py-3 sm:text-lg font-semibold rounded-lg border border-solid min-w-[100px] sm:min-w-[120px] ${userType === 'freelancer' ? 'text-white bg-blue-500' : 'text-black bg-white'}`}
          >
            (Freelancer) Tasker
          </button>
          <button
            type="button"
            onClick={() => setUserType('client')}
            className={`px-4 py-2 text-base sm:px-6 sm:py-3 sm:text-lg font-semibold rounded-lg border border-solid min-w-[100px] sm:min-w-[120px] ${userType === 'client' ? 'text-white bg-blue-500' : 'text-black bg-white'}`}
          >
            Client
          </button>
        </div>
      </div>
      <FormInput label="Fullname" type="text" id="fullname" value={formData.fullname} onChange={handleInputChange} />
      <FormInput label="Email Address" type="email" id="email" value={formData.email} onChange={handleInputChange} />
      <FormInput label="Password" type="password" id="password" value={formData.password} onChange={handleInputChange} />
      <FormInput label="Location" type="text" id="location" value={formData.location} onChange={handleInputChange} />
      <FormInput label="Skills / Services offered" type="text" id="skills" value={formData.skills} onChange={handleInputChange} />
      <button
        type="submit"
        className="mt-8 w-full text-lg sm:text-xl font-semibold text-white rounded-lg bg-black py-3"
      >
        Pre-register
      </button>
    </form>
  );
};

export default RegistrationForm;
