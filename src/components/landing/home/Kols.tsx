"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import { useRef, useState } from "react";
import "swiper/css";
import type { Swiper as SwiperType } from "swiper";
import ContentCard from "../ContentCard";

const idolImages = new Array(9).fill({
  imageSrc: "/assets/images/JennieKim.jpg",
  altText: "Jennie Kim Idol Card",
});

const Kols = () => {
  const swiperRef = useRef<SwiperType>(null);
  const [progress, setProgress] = useState(0);

  return (
    <div className="px-5 pb-25 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="relative flex items-center">
          <h2 className="z-10 text-3xl font-semibold mb-6">Our Top KOLS</h2>
          <div className="absolute inset-0 h-[15%] w-[50%] bg-[#8E7FF0] top-[45%]"></div>
        </div>
        <div className="relative flex items-center">
          <p className="font-semibold tracking-widest z-10 me-12">
            VIEW ALL KOLS
          </p>
          <div className="absolute inset-0 h-[200%] -top-[50%] -left-5 aspect-square bg-[#8E7FF0] rounded-full"></div>
        </div>
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
            slidesPerView: 3.2,
          },
          1024: {
            slidesPerView: 4.2,
          },
        }}
      >
        {idolImages.map((idol, i) => (
          <SwiperSlide key={i}>
            <ContentCard {...idol} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Scrollbar */}
      <div className="mt-12 flex items-center gap-6">
        {/* Left button */}
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-white/10 transition"
        >
          ←
        </button>
        {/* Right button */}
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="w-10 h-10 rounded-full border bg-[#8E7FF0] text-black flex items-center justify-center hover:brightness-110 transition"
        >
          →
        </button>

        {/* Track */}
        <div className="relative flex flex-1 h-[20px] rounded-full overflow-hidden">
          {/* Bar */}
          <div className="absolute top-[9px] left-[2%] inset-0 bg-black h-[2px] w-[96%]">
            {/* Dot */}
            <div className="absolute z-20 -top-[2px] left-[-4px] w-[6px] h-[6px] bg-black rounded-full" />
            <div className="absolute z-20 -top-[2px] right-[-2px] w-[6px] h-[6px] bg-black rounded-full" />
          </div>

          {/* Thumb */}
          <div
            className="absolute z-10 top-[6px] left-[2%]  h-[8px] bg-[#8E7FF0] rounded-full transition-all duration-300 w-[10%]"
            style={{
              marginLeft: `${Math.min(progress * 100, 86)}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Kols;
