"use client";

import Image from "next/image";

interface IProps {
  imageSrc: string;
  altText: string;
  textColorCode?: string;
}

const SVG_WIDTH = 308;
const SVG_HEIGHT = 446;

// usable vertical space for text
const TEXT_HEIGHT = 380;
const TEXT_X = 50;
const TEXT_BASELINE_Y = SVG_HEIGHT - 40;

const ContentCard = ({ imageSrc, altText, textColorCode }: IProps) => {
  return (
    <div className="relative w-full aspect-[7/10] bg-transparent">
      {/* SVG defs */}
      <svg
        viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
        className="absolute inset-0 pointer-events-none"
        aria-hidden
      >
        <defs>
          <clipPath id="idol-clip" clipPathUnits="objectBoundingBox">
            <path d="M0.246 0.047 C0.246 0.071 0.275 0.090 0.308 0.090 H0.939 C0.972 0.090 1 0.109 1 0.132 V0.957 C1 0.980 0.972 1 0.939 1 H0.062 C0.028 1 0 0.980 0 0.957 V0.043 C0 0.019 0.028 0 0.062 0 H0.185 C0.219 0 0.246 0.019 0.246 0.043 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* IMAGE */}
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
      <Image
        alt="logo"
        src="/assets/icons/NexaLogoOnly.svg"
        width={60}
        height={60}
        className="absolute z-20 bottom-4 end-3 w-[30%] h-[20%]"
      />

      {/* TEXT */}
      <svg
        viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
        className="absolute inset-0 z-10 pointer-events-none"
        role="img"
        aria-label={altText}
      >
        <text
          x={TEXT_X}
          y={TEXT_BASELINE_Y}
          fill={textColorCode || "#ffffff"}
          fontWeight={600}
          fontSize={48} // base size
          letterSpacing="3"
          writingMode="vertical-rl" // vertical text
          dominantBaseline="alphabetic"
          textAnchor="start"
          textLength={TEXT_HEIGHT} // fit to height
          lengthAdjust="spacingAndGlyphs"
          transform={`rotate(180 ${TEXT_X} ${TEXT_BASELINE_Y})`}
        >
          {altText}
        </text>
      </svg>
    </div>
  );
};

export default ContentCard;
