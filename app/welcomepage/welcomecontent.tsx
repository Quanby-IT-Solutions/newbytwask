"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useAnimation, useInView } from 'framer-motion';
import RegistrationForm from './registrationform';

const Particle: React.FC<{ index: number }> = ({ index }) => {
  return (
    <motion.div
      style={{
        position: 'absolute',
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        backgroundColor: `hsl(${200 + index * 10}, 70%, ${80 + index % 20}%)`,
        opacity: 0.4,
      }}
      animate={{
        x: [0, Math.random() * 400 - 200],
        y: [0, Math.random() * 400 - 200],
      }}
      transition={{
        duration: 20 + Math.random() * 10,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear",
      }}
    />
  );
};

const WelcomeContent: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const parallaxEffect = {
    y: scrollY * 0.5,
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="relative min-h-screen w-full bg-gradient-to-br from-sky-100 via-blue-100 to-indigo-100 text-blue-900 overflow-hidden">
      {/* Particle Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, index) => (
          <Particle key={index} index={index} />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-32">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
          className="flex flex-col items-center justify-center"
        >
          <motion.h1
            variants={fadeInUpVariants}
            className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-400"
          >
            Welcome to
          </motion.h1>

          <motion.div
            variants={fadeInUpVariants}
            className="relative w-full max-w-2xl mb-12"
          >
            <motion.img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c832174ba4a196af8d531f43560c66ac8461df077a5c265e9615b50c6154ba2b?placeholderIfAbsent=true&apiKey=2e31fa6b2d0c458aaebf11d5898097ea"
              className="w-full object-cover rounded-lg shadow-xl"
              alt="Branding Logo"
              style={parallaxEffect}
            />
            <motion.img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d326b0ea5fc2634ff753efc0ac908e5c6a5418684ec77214c055d9285c939c6d?placeholderIfAbsent=true&apiKey=2e31fa6b2d0c458aaebf11d5898097ea"
              className="absolute top-0 left-0 w-full h-full object-contain"
              alt="Welcome banner"
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 1, -1, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          <motion.h2
            variants={fadeInUpVariants}
            className="text-xl md:text-2xl font-medium mb-8 max-w-2xl text-center text-blue-800"
          >
            Pre-register now and revolutionize your freelancing experience. Connect with top clients or find exceptional talent in your field.
          </motion.h2>

          <motion.button
            variants={fadeInUpVariants}
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(59, 130, 246)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowForm(true)}
            className="bg-gradient-to-r from-blue-500 to-sky-400 text-white font-bold py-3 px-8 rounded-full text-xl shadow-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
          >
            Join the Revolution
          </motion.button>
        </motion.div>

        {/* Feature Highlights */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.6 } },
          }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { icon: "🚀", title: "Boost Your Career", description: "Access high-paying projects and grow your skills" },
            { icon: "🌐", title: "Global Network", description: "Connect with clients and freelancers worldwide" },
            { icon: "💼", title: "Secure Payments", description: "Enjoy hassle-free, protected transactions" },
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUpVariants}
              className="bg-white bg-opacity-50 rounded-lg p-6 backdrop-filter backdrop-blur-lg shadow-lg"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-blue-800">{feature.title}</h3>
              <p className="text-blue-700">{feature.description}</p>
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-blue-900 bg-opacity-30 backdrop-filter backdrop-blur-sm"
          >
            <RegistrationForm onClose={() => setShowForm(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default WelcomeContent;