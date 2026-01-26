import Image from "next/image";
import React from "react";

const content = [
  {
    title: "Mạng lưới",
    description: "Kết nối đa dạng từ Nano đến Mega Influencers",
    iconSrc: "/assets/icons/network_icon.svg",
    className: "bg-[#BBB0FF]",
  },
  {
    title: "Công nghệ",
    description: "Nền tảng quản lý chiến dịch và đo lường hiệu quả tiên tiến",
    iconSrc: "/assets/icons/technology_icon.svg",
    className: "bg-[#8E7FF0]",
  },
  {
    title: "Tận tâm",
    description:
      "Kinh nghiệm sâu rộng trong lĩnh vực marketing và quản lý Influencer",
    iconSrc: "/assets/icons/dedicated_icon.svg",
    className: "bg-[#8E7FF0]",
  },
  {
    title: "Hiệu quả",
    description: "Từ tư vấn chiến lược đến triển khai và tối ưu hóa chiến dịch",
    iconSrc: "/assets/icons/effective_icon.svg",
    className: "bg-[#BBB0FF]",
  },
];

interface ContentCardProps {
  title: string;
  description: string;
  iconSrc: string;
  className?: string;
}

const ContentCard = ({
  title,
  description,
  iconSrc,
  className,
}: ContentCardProps) => {
  return (
    <div
      className={`relative w-full min-h-[140px] md:min-h-[170px] ${className}`}
      style={{
        clipPath: "url(#content-mask)",
        WebkitClipPath: "url(#content-mask)",
      }}
    >
      {/* SVG defs – dùng chung */}
      <svg width="0" height="0" aria-hidden="true">
        <defs>
          <clipPath id="content-mask" clipPathUnits="objectBoundingBox">
            <path d="M1 0.869C1 0.941 0.985 1 0.966 1H0.035C0.016 1 0 0.941 0 0.869V0.130C0 0.058 0.016 0 0.035 0H0.704C0.711 0 0.718 0.009 0.724 0.025L0.763 0.132C0.764 0.135 0.766 0.132 0.766 0.127C0.766 0.057 0.781 0 0.800 0H0.966C0.985 0 1 0.058 1 0.130V0.869Z" />
          </clipPath>
        </defs>
      </svg>

      {/* Content */}
      <div className="relative w-full h-full p-[clamp(16px,3vw,28px)]">
        <h3 className="font-semibold text-[clamp(18px,3vw,28px)] mb-2">
          {title}
        </h3>

        <p className="text-[clamp(14px,2.2vw,18px)] max-w-[80%] leading-relaxed">
          {description}
        </p>

        <Image
          src={iconSrc}
          alt={`${title} icon`}
          width={50}
          height={50}
          className="
            absolute 
            top-[clamp(16px,3vw,28px)]
            right-[clamp(16px,3vw,28px)]
            object-contain
          "
        />
      </div>
    </div>
  );
};

const CompetitiveAdvantage = () => {
  return (
    <section className="max-w-7xl mx-auto pb-30 px-5">
      {/* Header */}
      <div className="flex flex-col xl:flex-row items-center justify-center  xl:justify-between gap-8 mb-12">
        <Image
          width={220}
          height={100}
          alt="Nexa Logo"
          src="/assets/icons/Nexa_Logo_Black.svg"
        />

        <h2 className="text-center font-bold text-[clamp(36px,7vw,85px)] whitespace-nowrap">
          <span className="text-[#8E7FF0] font-extrabold">LỢI THẾ </span>
          <span className="text-[#BBB0FF] font-extrabold">CẠNH TRANH</span>
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-white">
        {content.map((item, index) => (
          <ContentCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default CompetitiveAdvantage;
