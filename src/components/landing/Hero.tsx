import React from "react";

const Hero = () => {
  return (
    <section className="relative h-[80vh] min-h-105 overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover min-h-105"
      >
        <source src="/assets/videos/Hero_Video.mp4" type="video/mp4" />
      </video>
    </section>
  );
};

export default Hero;
