"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import { useRef, useState } from "react";
import "swiper/css";
import IdolCard from "./IdolCard";
import type { Swiper as SwiperType } from "swiper";

const idolImages = new Array(9).fill({
  imageSrc: "/assets/images/JennieKim.jpg",
  altText: "Jennie Kim Idol Card",
});

const CaseStudy = () => {
  const swiperRef = useRef<SwiperType>(null);
  const [progress, setProgress] = useState(0);

  return (
    <div className=" px-24 bg-black text-white py-5 mb-5 max-w-7xl mx-auto">
      {/* Title */}
      <div className="relative py-10 mb-8">
        <div className="absolute top-17 w-28 h-[12px] bg-pink-300 rounded-full" />
        <p className="text-4xl relative z-10">Case Study</p>
      </div>

      {/* Swiper */}
      <Swiper
        slidesPerView={1.2}
        spaceBetween={20}
        freeMode
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onProgress={(_, p) => setProgress(p)}
        modules={[FreeMode]}
        breakpoints={{
          0: {
            slidesPerView: 1.2,
          },
          640: {
            slidesPerView: 2.2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {idolImages.map((idol, i) => (
          <SwiperSlide key={i}>
            <IdolCard {...idol} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Scrollbar */}
      <div className="mt-12 flex items-center gap-6">
        {/* Left button */}
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white/10 transition"
        >
          ←
        </button>
        {/* Right button */}
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="w-10 h-10 rounded-full bg-pink-300 text-black flex items-center justify-center hover:brightness-110 transition"
        >
          →
        </button>

        {/* Track */}
        <div className="relative flex flex-1 h-[20px] rounded-full overflow-hidden">
          {/* Bar */}
          <div className="absolute top-[9px] left-[2%] inset-0 bg-white/40 h-[2px] w-[96%] relative">
            {/* Dot */}
            <div className="absolute -top-[2px] left-[-2px] w-[6px] h-[6px] bg-white rounded-full" />
            <div className="absolute -top-[2px] right-[-2px] w-[6px] h-[6px] bg-white rounded-full" />
          </div>

          {/* Thumb */}
          <div
            className="absolute top-[6px] left-[2%]  h-[8px] bg-pink-300 rounded-full transition-all duration-300 w-[10%]"
            style={{
              marginLeft: `${Math.min(progress * 100, 86)}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
