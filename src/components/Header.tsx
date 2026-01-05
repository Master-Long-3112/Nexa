import React from 'react'

const Header = () => {
  return (
     <nav className="flex items-center justify-between px-25 py-6 bg-[#191919] text text-white fixed top-0 right-0 left-0 z-50">
      <div className="text-xl font-bold">nexa</div>

      <ul className="flex gap-15 text-xl text-gray-300x me-[15%]">
        <li>Our networks</li>
        <li>For creators</li>
        <li>For brands</li>
        <li>Partner</li>
        <li>Contact</li>
      </ul>

      <button className="rounded-[20px] bg-pink-200 px-7 py-4 text-black font-medium text-xl">
        SIGN UP
      </button>
    </nav>
  )
}

export default Header
