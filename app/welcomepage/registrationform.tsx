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
  <div className="flex flex-col mt-2 w-full">
    <label className="pb-1 text-sm font-medium text-gray-700" htmlFor={id}>{label}</label>
    <input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      className="w-full p-2 text-sm bg-white text-black rounded-md border border-gray-300 focus:outline-none focus:border-blue-400"
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
    <form onSubmit={handleSubmit} className="flex flex-col items-center w-full p-4 bg-white rounded-xl">
      <div className="flex flex-col w-full text-center mb-4">
        <div className="text-lg font-bold text-gray-800 mb-2">Pre-register as</div>
        <div className="flex gap-2 justify-center">
          <button
            type="button"
            onClick={() => setUserType('freelancer')}
            className={`px-3 py-1 text-sm font-medium rounded-md border ${userType === 'freelancer' ? 'text-white bg-blue-500 border-blue-500' : 'text-gray-700 bg-white border-gray-300'}`}
          >
            Freelancer (Tasker)
          </button>
          <button
            type="button"
            onClick={() => setUserType('client')}
            className={`px-3 py-1 text-sm font-medium rounded-md border ${userType === 'client' ? 'text-white bg-blue-500 border-blue-500' : 'text-gray-700 bg-white border-gray-300'}`}
          >
            Client
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 w-full">
        <FormInput label="Fullname" type="text" id="fullname" value={formData.fullname} onChange={handleInputChange} />
        <FormInput label="Email Address" type="email" id="email" value={formData.email} onChange={handleInputChange} />
      </div>
      <FormInput label="Password" type="password" id="password" value={formData.password} onChange={handleInputChange} />
      <div className="grid grid-cols-2 gap-2 w-full">
        <FormInput label="Location" type="text" id="location" value={formData.location} onChange={handleInputChange} />
        <FormInput label="Skills / Services" type="text" id="skills" value={formData.skills} onChange={handleInputChange} />
      </div>
      <button
        type="submit"
        className="mt-4 w-full text-sm font-semibold text-white rounded-md bg-blue-600 py-2 hover:bg-blue-700 transition-colors"
      >
        Pre-register
      </button>
    </form>
  );
};

export default RegistrationForm;