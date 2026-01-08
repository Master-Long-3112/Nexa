import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-2  bg-[#191919] text text-white fixed top-0 right-0 left-0 z-50">
      <div className="flex flex-wrap gap-20 items-center justify-between">
        <div className="relative w-36 aspect-170/45">
          <Image
            src="/assets/icons/Nexa_Logo.png"
            alt="Icon"
            fill
            className="object-contain"
          />
        </div>

        <ul className="hidden lg:flex gap-10 text-md text-gray-300 ">
          <li>Our networks</li>
          <li>For creators</li>
          <li>For brands</li>
          <li>Partner</li>
          <li>Contact</li>
        </ul>
      </div>
      <button className="shrink-0 rounded-[15px] bg-pink-200 px-6 py-3 text-black font-medium text-sm my-2">
        SIGN UP
      </button>
    </nav>
  );
};

export default Header;
