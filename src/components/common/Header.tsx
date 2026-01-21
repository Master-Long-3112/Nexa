import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-2  bg-[#191919] text text-white fixed top-0 right-0 left-0 z-50">
      <div className="flex flex-wrap gap-20 items-center justify-between">
        <div className="relative w-36 aspect-170/45">
          <Image
            src="/assets/icons/Nexa_Logo_White.svg"
            alt="Icon"
            fill
            className="object-contain"
          />
        </div>

        <ul className="hidden lg:flex gap-10 text-md text-gray-300 ">
          <Link href="/">Our networks</Link>
          <Link href="/solution">Solution</Link>
          <Link href="/members">Our Members</Link>
          <Link href="/news">News</Link>
          <Link href="/career">Career</Link>
          <Link href="/contact">Contact</Link>
        </ul>
      </div>
      <button className="shrink-0 rounded-[15px] bg-pink-200 px-6 py-3 text-black font-medium text-sm my-2">
        SIGN UP
      </button>
    </nav>
  );
};

export default Header;
