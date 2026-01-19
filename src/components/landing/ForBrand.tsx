"use client";

import Image from "next/image";

const services = [
  {
    title: "Booking & Campaign\nManagement",
    desc: "Quy trình booking nhanh gọn, minh bạch với hệ thống KOLs/KOCs chất lượng cao.",
  },
  {
    title: "Chiến lược\nInfluencer Marketing",
    desc: "Tư vấn lựa chọn gương mặt đại diện dựa trên dữ liệu (Data-driven) để tối ưu hóa ROI.",
  },
  {
    title: "Xây dựng cộng đồng",
    desc: "Quản trị và phát triển Group/Fanpage, tạo sợi dây liên kết bền chặt với khách hàng mục tiêu.",
  },
  {
    title: "Sản xuất nội dung viral",
    desc: "Thực hiện các chiến dịch truyền thông sáng tạo, thu hút hàng triệu lượt xem.",
  },
];

export default function ForBrand() {
  return (
    <section className="max-w-7xl mx-auto bg-pink-500 py-20 px-20">
      <div>
        <div className="flex">
          <span className="text-[clamp(1px,10vw,110px)] font-extrabold me-6">
            FOR
          </span>
          <div className="flex items-center md:mt-0">
            <span className="flex text-[clamp(1px,10vw,110px)] font-extrabold items-end">
              <span className="whitespace-nowrap">
                BRANDS{" "}
                <Image
                  src="/assets/icons/ForBrandIcon1.svg"
                  alt="heart icon"
                  width={90}
                  height={90}
                  className="inline-block w-[1.8em] h-[1.8em]"
                />
              </span>
            </span>
          </div>
        </div>
        <div className="flex flex-wrap">
          <span className="text-[clamp(1px,10vw,110px)] font-extrabold me-6 flex items-center">
            OUR
            <Image
              src="/assets/icons/ForBrandIcon2.svg"
              alt="heart icon"
              width={90}
              height={90}
              className="inline-block w-[1.2em] h-[1.2em] ms-[0.2em]"
            />
          </span>
          <span className="text-[clamp(1px,10vw,110px)] font-extrabold me-6">
            SERVICES
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center bg-white text-pink-500 text-xl font-semibold rounded-full justify-end gap-5 ps-10 pe-3 py-2">
          <span className="whitespace-nowrap">Get In Touch</span>
          <button className="shrink-0 w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </button>
        </div>
        <div>
          <p className="w-180 mx-20">
            NEXA Network cung cấp cho các thương hiệu một hệ sinh thái toàn diện
            gồm truyền thông, công nghệ và tiếp thị người ảnh hưởng để tối đa
            hóa khả năng hiển thị, tương tác và doanh số bán hàng.
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {services.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between gap-6 bg-white rounded-[28px] px-8 py-10"
          >
            <h3 className="text-pink-500 font-semibold text-xl md:text-2xl whitespace-pre-line max-w-xs">
              {item.title}
            </h3>

            <div className="hidden md:block h-1 w-1  rounded-full bg-pink-400" />

            <p className="flex-1 text-pink-500 text-sm md:text-base">
              {item.desc}
            </p>

            <button className="shrink-0 w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
