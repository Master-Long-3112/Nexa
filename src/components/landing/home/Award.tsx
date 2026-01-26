import Image from "next/image";
import React from "react";

const Award = () => {
  return (
    <div className="max-w-7xl mx-auto px-5 mt-30 mb-20">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-semibold">Awards</h2>
        <div className="relative flex items-center">
          <div className="absolute inset-0 h-[200%] -top-[50%] -left-5 aspect-square bg-[#8E7FF0] rounded-full"></div>
          <p className="z-10 font-semibold right-0 whitespace-nowrap tracking-widest">
            VIEW ALL PORTFOLIO
          </p>
        </div>
      </div>
      {/* Content */}
      <div className="relative">
        <div className="flex relative items-center justify-between border-b py-4 my-3">
          <p className="absolute top-0 left-0 text-xs">01.</p>
          <div className="ms-8">
            <h3 className="text-2xl">Top Video Content Partner</h3>
            <p className="text-xs">Tiktok Master 2023 by TikTok</p>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="3"
              stroke="currentColor"
              className="size-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </div>
        </div>
        <div className="flex relative items-center justify-between border-b py-4 my-3">
          <p className="absolute top-0 left-0 text-xs">01.</p>
          <div className="ms-8">
            <h3 className="text-2xl">Top Video Content Partner</h3>
            <p className="text-xs">Tiktok Master 2023 by TikTok</p>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="3"
              stroke="currentColor"
              className="size-10 transform -rotate-45 text-[#8E7FF0]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </div>
        </div>
        {/* image */}
        <div className="absolute aspect-square h-40 transform rotate-[13.79deg] top-3 right-35">
          <Image
            src="/assets/images/TikTokAwardVN.png"
            alt="tikTokAwardVN"
            fill
            className="z-10 object-cover object-top"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#F70292_0%,#1548F9_100%)] w-full h-full top-2 left-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Award;
