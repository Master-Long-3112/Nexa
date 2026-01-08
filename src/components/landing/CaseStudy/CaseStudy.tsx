"use client";
import React from "react";
import { FreeMode, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/scrollbar";

const CaseStudy = () => {
  return (
    <div>
      <p>Case Study</p>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        freeMode={true}
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar, FreeMode, Pagination]}
        className="mySwiper "
      >
        <SwiperSlide>
          <p className="bg-blue-100 ">Slide 1</p>
        </SwiperSlide>
        <SwiperSlide>
          <p className="bg-blue-200 ">Slide 2</p>
        </SwiperSlide>
        <SwiperSlide>
          <p className="bg-blue-300 ">Slide 3</p>
        </SwiperSlide>
        <SwiperSlide>
          <p className="bg-blue-400 ">Slide 4</p>
        </SwiperSlide>
        <SwiperSlide>
          <p className="bg-blue-500 ">Slide 5</p>
        </SwiperSlide>
        <SwiperSlide>
          <p className="bg-blue-600 ">Slide 6</p>
        </SwiperSlide>
        <SwiperSlide>
          <p className="bg-blue-700">Slide 7</p>
        </SwiperSlide>
        <SwiperSlide>
          <p className="bg-blue-800">Slide 8</p>
        </SwiperSlide>
        <SwiperSlide>
          <p className="bg-blue-900">Slide 9</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CaseStudy;
