"use client";

import React, { useRef } from "react";
import CommunityCard from "../CommunityCard";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { FreeMode } from "swiper/modules";
import "swiper/css";

const communityGroup = new Array(9).fill({
  imageSrc: "/assets/images/JennieKim.jpg",
  name: "Đảo Mèo",
  follow: "2.1 M Follow",
});

const Community = () => {
  const swiperRef = useRef<SwiperType>(null);
  return (
    <div className="max-w-7xl mx-auto px-5">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-3xl font-bold">Our Community</h2>
        <div className="flex gap-4">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="w-10 h-10 rounded-full border border-black flex items-center justify-center hover:bg-white/10 transition"
          >
            ←
          </button>
          {/* Right button */}
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="w-10 h-10 rounded-full border border-black bg-[#8E7FF0] text-white flex items-center justify-center hover:brightness-110 transition"
          >
            →
          </button>
        </div>
      </div>

      <Swiper
        slidesPerView={1.2}
        spaceBetween={20}
        freeMode
        onSwiper={(swiper) => (swiperRef.current = swiper)}
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
        {communityGroup.map((community, i) => (
          <SwiperSlide key={i}>
            <p className="mb-2">{String(i + 1).padStart(2, "0")}</p>
            <CommunityCard />
            <p className="font-medium">
              <span>{community.name}</span>
              <span> - {community.follow}</span>
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Community;
