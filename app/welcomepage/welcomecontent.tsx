"use client";

import React, { useState } from 'react';
import RegistrationForm from './registrationform';
const WelcomeContent: React.FC = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 text-center px-4 py-4">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-900 mb-4 transition duration-300 hover:scale-105">
          Welcome to
        </h1>
        {/* Logo and Background Elements */}
        <div className="relative w-full flex justify-center items-center mb-4">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c832174ba4a196af8d531f43560c66ac8461df077a5c265e9615b50c6154ba2b?placeholderIfAbsent=true&apiKey=2e31fa6b2d0c458aaebf11d5898097ea"
            className="object-cover w-4/5 max-w-md transition duration-300 hover:scale-105"
            alt="Branding Logo"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d326b0ea5fc2634ff753efc0ac908e5c6a5418684ec77214c055d9285c939c6d?placeholderIfAbsent=true&apiKey=2e31fa6b2d0c458aaebf11d5898097ea"
            className="object-contain w-full max-h-[200px] sm:max-h-[300px] md:max-h-[400px] absolute transition duration-500 ease-in-out hover:scale-110"
            alt="Welcome banner"
          />
        </div>
        {/* Subheading */}
        <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-700 max-w-2xl mx-auto mb-4 transition duration-300 hover:scale-105">
          Pre-register now and get early access to our platform. Connect with clients or find freelance work in your area.
        </h2>
        {/* CTA Button */}
        <button 
          onClick={() => setShowForm(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full text-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Pre-register Now
        </button>
      </div>

      {/* Animated Dual Registration Form Modal */}
      {showForm && <RegistrationForm onClose={() => setShowForm(false)} />}
    </section>
  );
};

export default WelcomeContent;