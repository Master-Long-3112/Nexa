"use client";

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
    <section className="mx-25 bg-pink-500  py-12">
      <div>
        <svg viewBox="0 0 1200 250">
          <text
            x="0"
            y="80"
            className="fill-black font-bold tracking-wide"
            fontSize="120"
            dominantBaseline="middle"
          >
            FOR BRANDS
          </text>
          <text
            x="0"
            y="200"
            className="fill-black font-bold tracking-wide"
            fontSize="120"
            dominantBaseline="middle"
          >
            OUR SERVICES
          </text>
        </svg>
      </div>
      <div className="flex items-center justify-between mb-5">
        <div className="items-center bg-white text-pink-500 text-2xl font-semibold rounded-full inline-flex justify-between gap-10 px-10 py-3">
          <span>Get In Touch</span>
          <button className="shrink-0 w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
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
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
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
