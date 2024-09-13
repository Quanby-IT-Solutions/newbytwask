"use client";

import React from 'react';
import Header from './header';
import WelcomeContent from './welcomecontent';
import RegistrationForm from './registrationform';
import Footer from './footer';

const WelcomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center py-12">
        <WelcomeContent />
        <RegistrationForm />
      </main>
      <Footer />
    </div>
  );
};

export default WelcomePage;
