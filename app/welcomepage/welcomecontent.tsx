"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useAnimation, useInView } from 'framer-motion';
import RegistrationForm from './registrationform';

// Utility function to generate random percentage positions
const getRandomPercentage = () => `${Math.floor(Math.random() * 80) + 10}%`; // Between 10% and 90%

// Utility function to generate random duration for animations
const getRandomDuration = (min = 6, max = 10) => Math.random() * (max - min) + min;

// Cityscape Background with Randomized Animated Paths and Moving Dots
const CityscapeBackground: React.FC = () => {
  // Define the paths and dots moving on those paths
  const paths = Array.from({ length: 10 }).map(() => ({
    from: { x: getRandomPercentage(), y: getRandomPercentage() },
    to: { x: getRandomPercentage(), y: getRandomPercentage() },
  }));

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Cityscape Illustration */}
      <div className="absolute bottom-0 w-full h-[40%] bg-gradient-to-t from-blue-600 to-transparent">
        {/* You can use an SVG or custom cityscape design here */}
      </div>

      {/* Animated Paths */}
      {paths.map((path, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            width: '2px',
            height: `${Math.sqrt(
              Math.pow(parseInt(path.to.x) - parseInt(path.from.x), 2) +
              Math.pow(parseInt(path.to.y) - parseInt(path.from.y), 2)
            )}px`, // Length of the line calculated dynamically
            backgroundColor: 'rgba(255, 255, 255, 0.4)', // Semi-transparent line
            top: path.from.y,
            left: path.from.x,
            transformOrigin: 'top left',
            transform: `rotate(${Math.atan2(
              parseInt(path.to.y) - parseInt(path.from.y),
              parseInt(path.to.x) - parseInt(path.from.x)
            )}rad)`,
          }}
          animate={{
            height: ['0%', '100%', '0%'], // Animate path length to simulate connection
          }}
          transition={{
            duration: getRandomDuration(6, 10), // Random duration for each path
            repeat: Infinity,
            repeatType: 'mirror', // Mirror for smoother looping
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Moving Dots Along Paths */}
      {paths.map((path, index) => (
        <motion.div
          key={`dot-${index}`}
          className="absolute rounded-full bg-blue-500"
          style={{
            width: '8px',
            height: '8px',
            top: path.from.y,
            left: path.from.x,
          }}
          animate={{
            x: [0, parseInt(path.to.x) - parseInt(path.from.x)], // Move from start to end
            y: [0, parseInt(path.to.y) - parseInt(path.from.y)],
          }}
          transition={{
            duration: getRandomDuration(5, 8), // Random duration for each dot
            repeat: Infinity,
            repeatType: 'mirror', // Mirror for smoother looping
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

const WelcomeContent: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-white">
      {/* Cityscape Background with Animated Paths and Dots */}
      <CityscapeBackground />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 flex flex-col items-center justify-center">
        
        {/* Hero Main Heading */}
        <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
        className="flex flex-col items-center justify-center text-center"
      >
        <motion.h1
          variants={fadeInUpVariants}
          className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-sky-500"
        >
          Welcome to
        </motion.h1>
      </motion.div>
        {/* Logo Section */}
        <motion.div
          variants={fadeInUpVariants}
          className="relative w-full max-w-2xl mb-12 mt-8"
        >
          <motion.img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c832174ba4a196af8d531f43560c66ac8461df077a5c265e9615b50c6154ba2b?placeholderIfAbsent=true&apiKey=2e31fa6b2d0c458aaebf11d5898097ea"
            className="w-full object-cover rounded-lg"
            alt="Branding Logo"
            style={{ transform: 'translateY(0px)', transition: 'transform 0.5s' }} // Basic parallax effect using CSS
          />
          <motion.img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d326b0ea5fc2634ff753efc0ac908e5c6a5418684ec77214c055d9285c939c6d?placeholderIfAbsent=true&apiKey=2e31fa6b2d0c458aaebf11d5898097ea"
            className="absolute top-0 left-0 w-full h-full object-contain"
            alt="Welcome banner"
            animate={{
              scale: [1, 1.02, 1],
              rotate: [0, 1, -1, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Subheading */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
          className="flex flex-col items-center justify-center text-center"
        >
          <motion.h2
            variants={fadeInUpVariants}
            className="text-xl md:text-2xl font-medium mb-8 max-w-2xl text-blue-800"
          >
            Instantly connect with skilled Taskers for cleaning, furniture assembly, home repairs, running errands, and more.
          </motion.h2>

          {/* CTA Button */}
          <motion.button
            variants={fadeInUpVariants}
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 15px rgba(59, 130, 246, 0.7)",
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowForm(true)}
            className="bg-gradient-to-r from-blue-600 to-sky-500 text-white font-bold py-3 px-8 rounded-full text-xl shadow-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
          >
            Register for Early Access
          </motion.button>
        </motion.div>

     {/* Features Section */}
<motion.div
  initial="hidden"
  animate={controls}
  variants={{
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.6 } },
  }}
  className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
>
  {[
    { icon: "🛠️", title: "Verified Taskers", description: "Background-checked and vetted professionals." },
    { icon: "⚡", title: "Same-Day Availability", description: "Get help today, not tomorrow." },
    { icon: "🔒", title: "Secure Payments", description: "Safe, easy, and protected transactions." },
  ].map((feature, index) => (
    <motion.div
      key={index}
      variants={fadeInUpVariants}
      className="bg-white bg-opacity-80 rounded-xl p-8 backdrop-filter backdrop-blur-lg shadow-2xl text-center transform hover:scale-105 hover:bg-opacity-100 transition duration-500 ease-in-out"
    >
      <motion.div
        className="text-5xl mb-6 text-blue-700"
        animate={{
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {feature.icon}
      </motion.div>
      <h3 className="text-2xl font-bold mb-4 text-blue-900">{feature.title}</h3>
      <p className="text-blue-600 text-lg leading-relaxed">{feature.description}</p>
    </motion.div>
  ))}
</motion.div>

      </div>

      {/* Animated Registration Form Modal */}
      <AnimatePresence>
      {showForm && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-blue-900 bg-opacity-40 backdrop-filter backdrop-blur-sm"
        >
          <RegistrationForm onClose={() => setShowForm(false)} />
        </motion.div>
      )}
    </AnimatePresence>
    </section>
  );
};

export default WelcomeContent;
