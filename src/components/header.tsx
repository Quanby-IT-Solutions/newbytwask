import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between w-full bg-white py-4 px-4 md:px-6 shadow-md">
      {/* Logo on the Left */}
      <div className="flex items-center">
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c393fb4d98d77eb3cb0ee04acb1cc7e93bc7d7784c5e8f8ef8df0c8320a2add1"
          alt="Company logo"
          width={250}
          height={250}
          placeholder="blur"
          className="object-contain"
        />
      </div>

      <div className="flex items-center">
        {/* Right-side elements like navigation, buttons, or icons can go here */}
      </div>
    </header>
  );
};

export default Header;
