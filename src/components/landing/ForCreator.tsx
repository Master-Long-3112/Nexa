import Image from "next/image";
import React from "react";

interface SolutionCardProps {
  title: string;
  description: string;
  iconSrc: string;
  className?: string;
}

const SolutionCard = ({
  title,
  description,
  iconSrc,
  className,
}: SolutionCardProps) => {
  return (
    <div
      className={`@container relative aspect-27/10 w-full ${className}`}
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
        <p className="text-[4.5cqw] whitespace-pre-line max-w-[40cqw] pt-[6cqw] ps-[4cqw] font-semibold">
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

const ForCreator = () => {
  return (
    <div className="max-w-7xl mx-auto bg-black px-10">
      <div>
        <div className="flex flex-col md:flex-row items-center text-white">
          <span className="text-[clamp(1px,10vw,120px)] font-extrabold me-6">
            FOR
          </span>
          <div className="flex items-center md:mt-0">
            <span className="text-[clamp(1px,10vw,120px)] font-extrabold">
              CREAT
            </span>
            <span>
              <Image
                src="/assets/icons/Letter_O.svg"
                alt="heart icon"
                width={90}
                height={90}
                className="inline-block w-[clamp(1px,8vw,90px)] h-[clamp(1px,8vw,90px)]"
              />
            </span>
            <span className="text-[clamp(1px,10vw,120px)] font-extrabold">
              RS
            </span>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center md:items-start lg:items-center justify-between lg:gap-10 text-white">
          <span className="text-[clamp(1px,10vw,120px)] font-extrabold ">
            SOLUTION
          </span>
          <span className="max-w-110">
            <p className="mb-5">
              NEXA Network cung cấp cho người sáng tạo một hệ sinh thái toàn
              diện để thúc đẩy sự phát triển nội dung, tương tác và kiếm tiền:
            </p>
            <a href="#" className="underline">
              Get In Touch
            </a>
          </span>
        </div>
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10 text-white">
            <SolutionCard
              title={`Đào tạo \n & Định hướng`}
              description="Hỗ trợ ý tưởng, sản xuất và tối ưu hóa nội dung để tăng tương tác."
              iconSrc="/assets/icons/Content_Development.svg"
              className="bg-[#E37A25]"
            />
            <SolutionCard
              title={`Phát triển \n nội dung`}
              description="Chiến lược tăng trưởng khán giả tùy chỉnh để mở rộng phạm vi tiếp cận."
              iconSrc="/assets/icons/Audience_Growth.svg"
              className="bg-[#7897EC]"
            />
            <SolutionCard
              title={`Quản lý \n & độc quyền`}
              description="Đa dạng hóa nguồn thu nhập thông qua các kênh kiếm tiền khác nhau."
              iconSrc="/assets/icons/Monetization.svg"
              className="bg-[#9960FF]"
            />
            <SolutionCard
              title={`Kết nối \n nhãn hàng`}
              description="Kết nối với các thương hiệu hàng đầu để hợp tác và tài trợ."
              iconSrc="/assets/icons/Brand_Collaboration.svg"
              className="bg-[#FF66A9]"
            />
            <div className="aspect-square bg-[#252525] rounded-3xl text-white px-20 flex flex-col justify-center gap-10">
              <div>
                <Image
                  src="/assets/icons/policy_icon.svg"
                  alt="policy icon"
                  width={150}
                  height={150}
                  className="inline-block"
                />
              </div>
              <h3 className="text-4xl">Bổ sung: Chính sách</h3>
              <p className="whitespace-pre-line">
                {`MCV hỗ trợ các đối tác nắm bắt và tuân thủ các chính sách của nền tảng mạng xã hội, đảm bảo việc phân phối nội dung và kiếm tiền diễn ra suôn sẻ. \n\nChúng tôi luôn cập nhật các quy định mới nhất, cung cấp hướng dẫn chuyên môn, cơ sở dữ liệu nghiên cứu trường hợp phong phú và các buổi đào tạo thường xuyên. `}
              </p>
              <p></p>
            </div>
            <div className="grid grid-col-1 lg:grid-cols-4 lg:grid-rows-4 gap-2">
              <div className="hidden lg:block col-span-1 lg:col-span-3 lg:row-span-3 bg-pink-300 rounded-3xl"></div>
              <div className="hidden lg:block lg:col-span-1 lg:row-span-3 bg-pink-300 rounded-3xl"></div>
              <div className="hidden lg:block lg:col-span-1 lg:row-span-1 bg-pink-300 rounded-3xl"></div>
              <div className="col-span-1 lg:col-span-3 lg:row-span-1 bg-pink-400 rounded-3xl flex items-center justify-center text-2xl underline">
                Get Expert Guidance Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1"
                  stroke="currentColor"
                  className="size-12 transform rotate-45 ms-2 inline-block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForCreator;
