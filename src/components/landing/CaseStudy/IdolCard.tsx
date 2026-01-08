"use client";

import Image from "next/image";

interface IProps {
  imageSrc: string;
  altText: string;
}

const IdolCard = ({ imageSrc, altText }: IProps) => {
  return (
    <div className="relative w-140 aspect-7/10 bg-black">
      {/* SVG defs */}
      <svg
        viewBox="0 0 308 446"
        className="absolute inset-0 pointer-events-none"
        aria-hidden
      >
        <defs>
          <clipPath id="idol-clip" clipPathUnits="objectBoundingBox">
            <path d="M0.246 0.047 C0.246 0.071 0.275 0.090 0.308 0.090 H0.939 C0.972 0.090 1 0.109 1 0.132 V0.957 C1 0.980 0.972 1 0.939 1 H0.062 C0.028 1 0 0.980 0 0.957 V0.043 C0 0.019 0.028 0 0.062 0 H0.185 C0.219 0 0.246 0.019 0.246 0.043 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* IMAGE LAYER */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={altText}
          fill
          priority
          className="object-cover"
          style={{
            clipPath: "url(#idol-clip)",
            WebkitClipPath: "url(#idol-clip)",
          }}
        />
      </div>

      {/* TEXT LAYER */}
      <p className="absolute top-[3%] left-[-3%] z-10 text-[600%] rotate-180 text-green-500 max-h-200 [writing-mode:vertical-lr]">
        JENNIE KIM
      </p>
    </div>
  );
};

export default IdolCard;
