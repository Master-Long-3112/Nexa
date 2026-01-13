import Image from "next/image";
import React from "react";

const content = [
  {
    title: "Mạng lưới",
    description: "Kết nối đa dạng từ Nano đến Mega Influencers",
    iconSrc: "/assets/icons/network_icon.svg",
    className: "bg-pink-100",
  },
  {
    title: "Công nghệ",
    description: "Nền tảng quản lý chiến dịch và đo lường hiệu quả tiên tiến",
    iconSrc: "/assets/icons/technology_icon.svg",
    className: "bg-pink-300",
  },
  {
    title: "Tận tâm",
    description:
      "Kinh nghiệm sâu rộng trong lĩnh vực marketing và quản lý Influencer",
    iconSrc: "/assets/icons/dedicated_icon.svg",
    className: "bg-pink-300",
  },
  {
    title: "Hiệu quả",
    description: "Từ tư vấn chiến lược đến triển khai và tối ưu hóa chiến dịch",
    iconSrc: "/assets/icons/effective_icon.svg",
    className: "bg-pink-100",
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
      className={`@container relative aspect-37/10 w-full ${className}`}
      style={{
        clipPath: "url(#content-mask)",
        WebkitClipPath: "url(#content-mask)",
      }}
    >
      <svg
        width="0"
        height="0"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="content-mask" clipPathUnits="objectBoundingBox">
            <path d="M1 0.869C1 0.941 0.985 1 0.966 1H0.035C0.016 1 0 0.941 0 0.869V0.130C0 0.058 0.016 0 0.035 0H0.704C0.711 0 0.718 0.009 0.724 0.025L0.763 0.132C0.764 0.135 0.766 0.132 0.766 0.127C0.766 0.057 0.781 0 0.800 0H0.966C0.985 0 1 0.058 1 0.130V0.869Z" />
          </clipPath>
        </defs>
      </svg>
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          clipPath: "url(#content-mask)",
          WebkitClipPath: "url(#content-mask)",
        }}
      >
        <p className="text-[4.5cqw] pt-[6cqw] ps-[4cqw] font-semibold">
          {title}
        </p>
        <p className="text-[2.5cqw] ps-[4cqw] mt-[3cqw]">{description}</p>
        <div>
          <Image
            src={iconSrc}
            alt={`${title} Icon`}
            width={90}
            height={90}
            className="absolute top-[4cqw] end-[7cqw] w-[9cqw] h-[9cqw] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

const CompetitiveAdvantage = () => {
  return (
    <div className="@cotainer px-25">
      <div className="flex flex-col xl:flex-row items-center justify-between gap-10 mb-10">
        <div>
          <Image
            width={260}
            height={100}
            alt="Nexa Logo"
            src="/assets/icons/Nexa_Logo_Black.svg"
          />
        </div>
        <div className="text-[80px] font-bold text-center">
          <span className="text-pink-400">LỢI THẾ </span>
          <span className="text-pink-200">CẠNH TRANH</span>
        </div>
      </div>
      <div className="grid grid-cols-2 items-center justify-center gap-10">
        {content.map((item, index) => (
          <div key={index}>
            <ContentCard
              title={item.title}
              description={item.description}
              iconSrc={item.iconSrc}
              className={item.className}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompetitiveAdvantage;
