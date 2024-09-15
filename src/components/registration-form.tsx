"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react";
import backgroundAnimation from "../assets/animations/bg.json";
import successAnimation from "../assets/animations/sc.json";
import step1Animation from "../assets/animations/intro.json";
import step2Animation from "../assets/animations/service.json";
import step3Animation from "../assets/animations/tasker.json";
import step4Animation from "../assets/animations/build.json";
import FormInput from "./FormInput";

const RegistrationForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    "entry.1041859775": "", // Full Name
    "entry.2096901865": "", // Email Address
    "entry.707219350": "", // Phone Number
    updates: true,
    "entry.2116844099": [] as string[], // Interested Services
    "entry.281612395": "", // Platform Improvement
    "entry.1288792702": false, // Become Tasker
    "entry.715124632": false, // Beta Test
  });
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const handleCheckboxChange = (option: string) => {
    setFormData((prevData) => {
      const isSelected = prevData["entry.2116844099"].includes(option);
      return {
        ...prevData,
        "entry.2116844099": isSelected
          ? prevData["entry.2116844099"].filter((item) => item !== option)
          : [...prevData["entry.2116844099"], option],
      };
    });
  };

  const handleNextStep = () => setStep((prevStep) => prevStep + 1);
  const handlePrevStep = () => setStep((prevStep) => Math.max(prevStep - 1, 1));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        if (result.success) {
          setShowSuccessPopup(true);
        } else {
          console.error("Form submission failed:", result.message);
        }
      } else {
        console.error("Form submission failed:", await response.text());
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleSuccessPopupClose = () => {
    setShowSuccessPopup(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Lottie
        animationData={backgroundAnimation}
        loop={false}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl relative overflow-hidden"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none z-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {step === 1 && (
                <div>
                  <Lottie
                    animationData={step1Animation}
                    loop={true}
                    className="mx-auto h-36 w-36 mb-6"
                  />
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    Step 1: Introduction and Basic Information
                  </h3>
                  <FormInput
                    label="Full Name"
                    type="text"
                    id="entry.1041859775"
                    name="entry.1041859775"
                    value={formData["entry.1041859775"]}
                    onChange={handleInputChange}
                  />
                  <FormInput
                    label="Email Address"
                    type="email"
                    id="entry.2096901865"
                    name="entry.2096901865"
                    value={formData["entry.2096901865"]}
                    onChange={handleInputChange}
                  />
                  <FormInput
                    label="Phone Number (Optional)"
                    type="tel"
                    id="entry.707219350"
                    name="entry.707219350"
                    value={formData["entry.707219350"]}
                    onChange={handleInputChange}
                  />
                  <div className="flex items-center mt-4">
                    <input
                      type="checkbox"
                      id="updates"
                      checked={formData.updates}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="updates"
                      className="ml-2 block text-sm text-gray-700"
                    >
                      I want to receive updates about the launch!
                    </label>
                  </div>
                  <motion.button
                    type="button"
                    onClick={handleNextStep}
                    className="w-full bg-blue-600 text-white rounded-lg py-2 px-4 text-base font-semibold hover:bg-blue-700 transition duration-300 mt-6"
                  >
                    Next
                  </motion.button>
                </div>
              )}

              {step === 2 && (
                <div>
                  <Lottie
                    animationData={step2Animation}
                    loop={true}
                    className="mx-auto h-36 w-36 mb-6"
                  />
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    Step 2: What Services Are You Interested In?
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Please select all the services you are interested in. This
                    helps us understand the demand and offerings on the
                    platform.
                  </p>
                  {[
                    "Personal Assistance",
                    "Furniture Assembly",
                    "Moving",
                    "Delivery",
                    "Handyman Work",
                    "Other",
                  ].map((option) => (
                    <div key={option} className="flex items-center mb-2">
                      <input
                        type="checkbox"
                        checked={formData["entry.2116844099"].includes(option)}
                        onChange={() => handleCheckboxChange(option)}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label className="ml-2 block text-sm text-gray-700">
                        {option}
                      </label>
                    </div>
                  ))}
                  <motion.button
                    type="button"
                    onClick={handleNextStep}
                    className="w-full bg-blue-600 text-white rounded-lg py-2 px-4 text-base font-semibold hover:bg-blue-700 transition duration-300 mt-6"
                  >
                    Next
                  </motion.button>
                  <motion.button
                    type="button"
                    onClick={handlePrevStep}
                    className="w-full bg-gray-300 text-gray-800 rounded-lg py-2 px-4 text-base font-semibold hover:bg-gray-400 transition duration-300 mt-2"
                  >
                    Back
                  </motion.button>
                </div>
              )}

              {step === 3 && (
                <div>
                  <Lottie
                    animationData={step3Animation}
                    loop={true}
                    className="mx-auto h-36 w-36 mb-6"
                  />
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    Step 3: Would You Like to Be a Tasker?
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Taskers offer their skills and services on our platform. Are
                    you interested in becoming one?
                  </p>
                  <div className="flex items-center mt-4">
                    <input
                      type="checkbox"
                      id="entry.1288792702"
                      checked={formData["entry.1288792702"]}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="entry.1288792702"
                      className="ml-2 block text-sm text-gray-700"
                    >
                      Yes, I want to be a Tasker
                    </label>
                  </div>
                  <motion.button
                    type="button"
                    onClick={handleNextStep}
                    className="w-full bg-blue-600 text-white rounded-lg py-2 px-4 text-base font-semibold hover:bg-blue-700 transition duration-300 mt-6"
                  >
                    Next
                  </motion.button>
                  <motion.button
                    type="button"
                    onClick={handlePrevStep}
                    className="w-full bg-gray-300 text-gray-800 rounded-lg py-2 px-4 text-base font-semibold hover:bg-gray-400 transition duration-300 mt-2"
                  >
                    Back
                  </motion.button>
                </div>
              )}

              {step === 4 && (
                <div>
                  <Lottie
                    animationData={step4Animation}
                    loop={true}
                    className="mx-auto h-36 w-36 mb-6"
                  />
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    Step 4: Help Us Build the Platform
                  </h3>
                  <FormInput
                    label="What would you like to see on this platform?"
                    type="text"
                    id="entry.281612395"
                    name="entry.281612395"
                    value={formData["entry.281612395"]}
                    onChange={handleInputChange}
                  />
                  <div className="flex items-center mt-4">
                    <input
                      type="checkbox"
                      id="entry.715124632"
                      checked={formData["entry.715124632"]}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="entry.715124632"
                      className="ml-2 block text-sm text-gray-700"
                    >
                      Would you like to be part of our beta testing?
                    </label>
                  </div>
                  <motion.button
                    type="button"
                    onClick={handleSubmit}
                    className="w-full bg-blue-600 text-white rounded-lg py-2 px-4 text-base font-semibold hover:bg-blue-700 transition duration-300 mt-6"
                  >
                    Submit
                  </motion.button>
                  <motion.button
                    type="button"
                    onClick={handlePrevStep}
                    className="w-full bg-gray-300 text-gray-800 rounded-lg py-2 px-4 text-base font-semibold hover:bg-gray-400 transition duration-300 mt-2"
                  >
                    Back
                  </motion.button>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Hidden iframe to prevent page reload on form submission */}
      <iframe name="hidden_iframe" style={{ display: "none" }}></iframe>

      {/* Success Popup */}
      <AnimatePresence>
        {showSuccessPopup && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-60 backdrop-blur-md">
            <motion.div
              className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 relative shadow-lg"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <button
                onClick={handleSuccessPopupClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="text-center">
                <Lottie
                  animationData={successAnimation}
                  loop={false}
                  className="mx-auto h-36 w-36 mb-6"
                />
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  Success!
                </h3>
                <p className="text-base text-gray-700 mb-4">
                  Thank you for pre-registering! You’ll be the first to know
                  when we go live. Stay tuned for more updates and exclusive
                  offers!
                </p>
                <ul className="text-sm text-gray-600 text-left list-disc list-inside mb-6 space-y-2">
                  <li>Check your email for a confirmation link.</li>
                  <li>Complete your profile to stand out.</li>
                  <li>Follow us on social media for more updates.</li>
                </ul>
                <div className="bg-blue-50 p-4 rounded-lg shadow-inner mb-6">
                  <h4 className="text-lg font-semibold text-blue-800 mb-2">
                    Stay Connected with Us!
                  </h4>
                  <p className="text-sm text-blue-700 mb-4">
                    Follow our Facebook page for the latest news, offers, and
                    updates.
                  </p>
                  <a
                    href="https://www.facebook.com/quanbysolutionsinc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 text-white rounded-full py-2 px-6 text-sm font-semibold hover:bg-blue-700 transition duration-300"
                  >
                    Follow Quanby Solutions Inc. on Facebook
                  </a>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSuccessPopupClose}
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full py-3 px-6 text-base font-semibold hover:from-blue-600 hover:to-indigo-600 transition duration-300 shadow-md"
                >
                  Got it, thanks!
                </motion.button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RegistrationForm;

/**
 * MAR-note: This is for the google form reference:
 *
 * --> from viewform form to formResponse: https://docs.google.com/forms/d/e/1FAIpQLSdZRR7wg1FmZJMWb-b8rua2HTo38PyM8kbelSUBydDy6v3rfQ/formResponse?usp=pp_url&entry.2096901865=test&entry.1041859775=email@test.com&entry.707219350=numbertest&entry.2116844099=Personal+Assistance&entry.2116844099=Furniture+Assembly&entry.2116844099=Moving&entry.2116844099=Delivery&entry.2116844099=Handyman+Work&entry.2116844099=Other&entry.1288792702=Yes&entry.281612395=What+would+you+like+to+see+on+this+platform+-+Answer&entry.715124632=Yes
 *
 * ids with sample data:
 *  entry.2096901865=test
 *  entry.1041859775=email@test.com
 *  entry.707219350=numbertest
 *  entry.2116844099=Personal+Assistance
 *  entry.2116844099=Furniture+Assembly
 *  entry.2116844099=Moving&entry.2116844099=Delivery
 *  entry.2116844099=Handyman+Work
 *  entry.2116844099=Other
 *  entry.1288792702=Yes&
 *  entry.281612395=What+would+you+like+to+see+on+this+platform+-+Answer
 * entry.715124632=Yes
 *
 */
