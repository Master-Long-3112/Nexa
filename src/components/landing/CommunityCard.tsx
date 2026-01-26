import React from "react";

const CommunityCard = () => {
  return (
    <div className="relative h-full aspect-square ">
      <div className="absolute inset-0 bg-blue-500 w-full h-full rounded-[5%] rounded-bl-[35%]"></div>
      <div className="absolute flex items-center justify-center z-10 bottom-0 left-0 rounded-full aspect-square w-[22%] h-[22%] bg-[#8E7FF0]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="3.0"
          stroke="#FFFFFF"
          className="w-[80%] h-[80%]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
          />
        </svg>
      </div>
    </div>
  );
};

export default CommunityCard;
