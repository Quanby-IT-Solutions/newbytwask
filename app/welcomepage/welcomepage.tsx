"use client";
import React from 'react';
import Header from './header';
import WelcomeContent from './welcomecontent';
import Footer from './footer';

const WelcomePage: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute top-0 left-0 right-0 z-20">
       
      </div>
      <main className="min-h-screen">
        <WelcomeContent />
      </main>
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <Footer />
      </div>
    </div>
  );
};

export default WelcomePage;