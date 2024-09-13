import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between w-full bg-white py-4 px-4 md:px-6 shadow-md">
      {/* Logo on the Left */}
      <div className="flex items-center">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c393fb4d98d77eb3cb0ee04acb1cc7e93bc7d7784c5e8f8ef8df0c8320a2add1?placeholderIfAbsent=true&apiKey=2e31fa6b2d0c458aaebf11d5898097ea"
          className="object-contain w-[120px] sm:w-[150px] md:w-[200px] lg:w-[250px]"
          alt="Company logo"
        />
      </div>

      {/* Placeholder for Future Navigation or Right-Side Elements */}
      <div className="flex items-center">
        {/* Right-side elements like navigation, buttons, or icons can go here */}
      </div>
    </header>
  );
};

export default Header;
