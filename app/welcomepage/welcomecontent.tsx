"use client";

import React from 'react';

const WelcomeContent: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center justify-center max-w-5xl mx-auto text-center mt-12 px-4">
      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-4 transition duration-300 hover:scale-105">
        Welcome to
      </h1>

      {/* Logo and Background Elements */}
      <div className="relative w-full flex justify-center items-center mb-4">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c832174ba4a196af8d531f43560c66ac8461df077a5c265e9615b50c6154ba2b?placeholderIfAbsent=true&apiKey=2e31fa6b2d0c458aaebf11d5898097ea"
          className="object-cover transition duration-300 hover:scale-105"
          alt="Branding Logo"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d326b0ea5fc2634ff753efc0ac908e5c6a5418684ec77214c055d9285c939c6d?placeholderIfAbsent=true&apiKey=2e31fa6b2d0c458aaebf11d5898097ea"
          className="object-contain w-auto h-full absolute transition duration-500 ease-in-out hover:scale-110"
          alt="Welcome banner"
        />
      </div>

      {/* Subheading */}
      <h2 className="text-lg md:text-xl font-medium text-gray-700 max-w-2xl mb-8 transition duration-300 hover:scale-105">
        Pre-register now and get early access to our platform. Connect with clients or find freelance work in your area.
      </h2>

      {/* Background Shapes - Left Side */}
      {/* put here all the vector design to the backgound */}
    </section>
  );
};

export default WelcomeContent;
