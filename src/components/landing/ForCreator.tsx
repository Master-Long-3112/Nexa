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

const ForCreator = () => {
  return (
    <div className="px-25">
      <div>
        <svg viewBox="0 0 1200 200">
          <text
            x="0"
            y="150"
            className="fill-black font-bold tracking-wide"
            fontSize="120"
            dominantBaseline="middle"
          >
            FOR CREATORS
          </text>
          <image
            href="/assets/icons/Letter_O.svg"
            x="713"
            y="88"
            width="100"
            height="100"
          />
        </svg>
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-35 pt-2">
        <span className="text-9xl font-bold">SOLUTION</span>
        <span className="flex flex-col justify-between py-4">
          <p className="text-md">
            NEXA Network cung cấp cho người sáng tạo một hệ sinh thái toàn diện
            để thúc đẩy sự phát triển nội dung, tương tác và kiếm tiền:
          </p>
          <a href="#" className="underline text-green-700">
            Get In Touch
          </a>
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        <SolutionCard
          title="Content Creation Tools"
          description="Truy cập các công cụ sáng tạo nội dung tiên tiến để tạo video, hình ảnh và bài viết hấp dẫn."
          iconSrc="/assets/icons/solution-1-icon.svg"
          className="bg-yellow-200"
        />
        <SolutionCard
          title="Content Creation Tools"
          description="Truy cập các công cụ sáng tạo nội dung tiên tiến để tạo video, hình ảnh và bài viết hấp dẫn."
          iconSrc="/assets/icons/solution-1-icon.svg"
          className="bg-yellow-200"
        />
        <SolutionCard
          title="Content Creation Tools"
          description="Truy cập các công cụ sáng tạo nội dung tiên tiến để tạo video, hình ảnh và bài viết hấp dẫn."
          iconSrc="/assets/icons/solution-1-icon.svg"
          className="bg-yellow-200"
        />
        <SolutionCard
          title="Content Creation Tools"
          description="Truy cập các công cụ sáng tạo nội dung tiên tiến để tạo video, hình ảnh và bài viết hấp dẫn."
          iconSrc="/assets/icons/solution-1-icon.svg"
          className="bg-yellow-200"
        />

        <div className="@container aspect-square bg-blue-300 rounded-[2cqw] ">
          <p className="text-[4cqw]">Bổ Sung: Chính sách</p>
          <p className="text-[2cqw]">
            MCV hỗ trợ các đối tác nắm bắt và tuân thủ các chính sách của nền
            tảng mạng xã hội, đảm bảo việc phân phối nội dung và kiếm tiền diễn
            ra suôn sẻ.Chúng tôi luôn cập nhật các quy định mới nhất, cung cấp
            hướng dẫn chuyên môn, cơ sở dữ liệu nghiên cứu trường hợp phong phú
            và các buổi đào tạo thường xuyên.{" "}
          </p>
        </div>
        <div className="grid grid-cols-4 grid-rows-4 gap-5">
          <div className="col-span-3 row-span-3 aspect-square rounded-3xl bg-amber-400"></div>
          <div className="col-span-1 row-span-3 rounded-3xl bg-blue-700"></div>
          <div className="col-span-1 row-span-1 rounded-3xl bg-cyan-300"></div>
          <div className="col-span-3 row-span-1 rounded-3xl bg-pink-500"></div>
        </div>
      </div>
    </div>
  );
};

export default ForCreator;
