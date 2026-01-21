import React from "react";

const Hero = () => {
  return (
    <section className="relative aspect-16/9 max-w-full mx-auto overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        className="absolute h-full w-full object-cover"
      >
        <source src="/assets/videos/Hero_Video.mp4" type="video/mp4" />
      </video>
    </section>
  );
};

export default Hero;
