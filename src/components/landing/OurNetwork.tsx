import React from "react";

const stats = [
  {
    value: "10.5B",
    label: "views per month across platforms",
  },
  {
    value: "96.5M",
    label: "YouTube Subscribers",
  },
  {
    value: "281M",
    label: "Facebook Followers",
  },
  {
    value: "290M",
    label: "TikTok Followers",
  },
];

const Badge = ({ icon, text }: { icon: string; text: string }) => {
  return (
    <div className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full text-sm text-slate-700">
      <span>{icon}</span>
      <span className="font-medium">{text}</span>
    </div>
  );
};

const StatsBar = () => {
  return (
    <section className="w-full max-w-7xl mx-auto py-10 ">
      {/* badges */}
      <div className="flex items-center justify-center lg:justify-between mb-10">
        <div className="flex items-center gap-4">
          <Badge icon="🌐" text="World Class Agency" />
          <Badge icon="👑" text="2023 Best Agency" />
        </div>

        {/* decorative line + circles */}
        <div className="hidden xl:flex items-center gap-16 flex-1 ml-6">
          <span className="h-px w-full bg-gray-300" />
          <span className="relative h-9.75">
            <span className="absolute top-[6px] right-[0px] w-[27px] h-[27px] rounded-full border border-gray-400" />
            <span className="absolute top-[6px] right-[18px] w-[27px] h-[27px] rounded-full border border-gray-400" />
            <span className="absolute top-[6px] right-[36px] w-[27px] h-[27px] rounded-full border border-gray-400" />
          </span>
        </div>
      </div>

      {/* stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:border-b lg:border-b-0 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
        {stats.map((item, index) => (
          <div
            key={index}
            className="py-6 lg:py-0 lg:px-8 text-center lg:text-left"
          >
            <p className="text-4xl font-semibold text-slate-900">
              {item.value}
              <span className="text-red-500">+</span>
            </p>
            <p className="mt-2 text-sm text-gray-500">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const OurNetwork = () => {
  return (
    <div className="max-w-7xl mx-auto px-20 py-20">
      <div className="flex flex-col xl:flex-row xl:gap-30 items-center justify-between">
        <div className="flex flex-col w-full">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 10 300 180"
              className="w-full h-full"
            >
              <circle cx="30" cy="68" r="3" fill="#000000" />
              <circle cx="10" cy="68" r="3" fill="#000000" />

              <foreignObject width="170" height="35" x="130" y="75">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#FFFFFF"
                    className="absolute size-9"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      fill="#ffffff"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
                      fill="#F05C90"
                    />
                  </svg>
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-auto rounded-xl"
                  >
                    <source
                      src="assets/videos/Network_Effect.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </foreignObject>
              <text
                x="0"
                y="100"
                className="fill-black font-bold tracking-wide"
                fontSize="50"
                dominantBaseline="middle"
              >
                OUR
              </text>
              <text
                x="0"
                y="150"
                className="fill-black font-bold tracking-wide"
                fontSize="50"
                dominantBaseline="middle"
              >
                NETWORKS
              </text>
            </svg>
          </div>
          <p className="w-full lg:w-150">
            NEXA Network không chỉ là một Agency, chúng tôi là "kiến trúc sư"
            xây dựng cộng đồng và giá trị thương hiệu. Với mạng lưới kết nối sâu
            rộng trên các nền tảng TikTok, Facebook, Instagram và YouTube, chúng
            tôi hiểu cách để biến một nội dung trở thành xu hướng và biến một
            thương hiệu trở thành biểu tượng.
          </p>
        </div>

        <div className="relative max-w-screen lg:h-100 aspect-square my-5">
          {/* SVG nền */}
          <svg
            viewBox="0 0 504 504"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M501.878 184.192C491.007 195.063 441.433 163.124 391.155 112.846C340.878 62.5679 308.938 13.0006 319.809 2.12349C330.68 -8.7474 380.253 23.1921 430.531 73.47C480.809 123.742 512.755 173.315 501.878 184.192Z"
              fill="url(#paint0_linear_7_1568)"
            />
            <path
              d="M495.671 326.492C485.199 336.952 454.214 324.716 413.791 296.928C417.755 282.641 419.868 267.6 419.868 252.054C419.868 159.315 344.688 84.1352 251.949 84.1352C236.403 84.1352 221.362 86.2483 207.075 90.2127C179.281 49.8021 167.039 18.8039 177.511 8.33195C196.516 -10.6734 283.147 45.1458 371.005 133.004C458.857 220.857 514.664 307.487 495.671 326.492Z"
              fill="url(#paint1_linear_7_1568)"
            />
            <path
              d="M184.192 501.879C173.309 512.75 123.742 480.805 73.4701 430.527C23.186 380.255 -8.74724 330.675 2.12366 319.804C12.9945 308.934 62.5743 340.879 112.846 391.157C163.118 441.429 195.07 490.996 184.192 501.879Z"
              fill="url(#paint2_linear_7_1568)"
            />
            <path
              d="M326.484 495.671C307.491 514.677 220.861 458.857 133.008 370.999C45.1562 283.14 -10.6693 196.516 8.33606 177.504C18.7956 167.045 49.7626 179.281 90.142 207.025C86.1465 221.356 84.0209 236.447 84.0209 252.049C84.0209 344.788 159.201 419.968 251.953 419.968C267.542 419.968 282.645 417.836 296.963 413.859C324.726 454.238 336.956 485.199 326.484 495.671Z"
              fill="url(#paint3_linear_7_1568)"
            />
            <path
              d="M179.487 100.548C144.967 117.066 116.967 145.054 100.448 179.574C47.2284 110.06 20.9612 54.49 37.679 37.7785C54.3967 21.0483 109.967 47.3341 179.487 100.548Z"
              fill="#56E7DF"
            />
            <path
              d="M466.222 466.337C449.492 483.048 393.928 456.781 324.408 403.567C358.928 387.03 386.928 359.049 403.447 324.523C456.667 394.043 482.952 449.607 466.222 466.337Z"
              fill="#DBF926"
            />
            <path
              d="M296.962 413.859C282.644 417.835 267.541 419.967 251.951 419.967C159.199 419.967 84.0195 344.787 84.0195 252.048C84.0195 236.446 86.1513 221.355 90.1406 207.025C123.096 229.702 162.316 262.695 201.81 302.189C241.292 341.664 274.304 380.909 296.962 413.859Z"
              fill="white"
            />
            <path
              d="M296.962 413.859C282.644 417.835 267.541 419.967 251.951 419.967C159.199 419.967 84.0195 344.787 84.0195 252.048C84.0195 236.446 86.1513 221.355 90.1406 207.025C123.096 229.702 162.316 262.695 201.81 302.189C241.292 341.664 274.304 380.909 296.962 413.859Z"
              fill="url(#pattern0_7_1568)"
            />
            <path
              d="M403.455 324.523C386.931 359.043 358.937 387.031 324.417 403.568C287.497 375.3 246.65 339.452 205.604 298.406C164.557 257.347 128.691 216.494 100.441 179.58C116.96 145.06 144.96 117.072 179.48 100.554C216.4 128.822 257.247 164.67 298.293 205.716C339.339 246.763 375.187 287.609 403.455 324.523Z"
              fill="white"
            />
            <path
              d="M403.455 324.523C386.931 359.043 358.937 387.031 324.417 403.568C287.497 375.3 246.65 339.452 205.604 298.406C164.557 257.347 128.691 216.494 100.441 179.58C116.96 145.06 144.96 117.072 179.48 100.554C216.4 128.822 257.247 164.67 298.293 205.716C339.339 246.763 375.187 287.609 403.455 324.523Z"
              fill="url(#pattern1_7_1568)"
            />
            <path
              d="M419.867 252.048C419.867 267.594 417.754 282.635 413.789 296.922C380.834 274.264 341.626 241.265 302.182 201.82C262.737 162.376 229.738 123.162 207.08 90.213C221.367 86.2486 236.408 84.1355 251.954 84.1355C344.687 84.1293 419.867 159.315 419.867 252.048Z"
              fill="white"
            />
            <path
              d="M419.867 252.048C419.867 267.594 417.754 282.635 413.789 296.922C380.834 274.264 341.626 241.265 302.182 201.82C262.737 162.376 229.738 123.162 207.08 90.213C221.367 86.2486 236.408 84.1355 251.954 84.1355C344.687 84.1293 419.867 159.315 419.867 252.048Z"
              fill="url(#pattern2_7_1568)"
            />
            <defs>
              <pattern
                id="pattern0_7_1568"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use transform="translate(0 -0.581286) scale(0.00421694)" />
              </pattern>
              <pattern
                id="pattern1_7_1568"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use transform="translate(-0.0560189 -0.0533364) scale(0.00297523)" />
              </pattern>
              <pattern
                id="pattern2_7_1568"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use transform="translate(-0.580863 0.000605399) scale(0.00423824)" />
              </pattern>
              <linearGradient
                id="paint0_linear_7_1568"
                x1="328.361"
                y1="8.44482"
                x2="488.88"
                y2="173.296"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FFF200" />
                <stop offset="1" stopColor="#F179AF" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_7_1568"
                x1="231.254"
                y1="49.8956"
                x2="454.461"
                y2="286.928"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#E37A25" />
                <stop offset="1" stopColor="#F494BE" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_7_1568"
                x1="38.4659"
                y1="354.013"
                x2="167.664"
                y2="488.263"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#E0A9FC" />
                <stop offset="1" stopColor="#8AE4F0" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_7_1568"
                x1="64.7293"
                y1="242.787"
                x2="296.442"
                y2="471.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#82A3FF" />
                <stop offset="1" stopColor="#8FF2F4" />
              </linearGradient>
            </defs>
          </svg>

          {/* SVG ảnh (overlay, scale cùng container) */}
          <svg
            viewBox="-84 -84 504 504"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <clipPath id="normalized-336" clipPathUnits="objectBoundingBox">
                <path
                  d="
                  M0.633155 0.981306
                  C0.591138 0.992857 0.546202 1 0.499798 1
                  C0.223750 1 0 0.776256 0 0.499742
                  C0 0.453904 0.006344 0.408393 0.018217 0.365738
                  C0.116298 0.433208 0.233035 0.531423 0.350567 0.648955
                  C0.468042 0.766429 0.566321 0.883199 0.633155 0.981306
                  Z
      
                  M0.950686 0.715441
                  C0.901511 0.818464 0.818489 0.901476 0.715466 0.950655
                  C0.605019 0.865190 0.483393 0.756000 0.361857 0.634464
                  C0.240321 0.512889 0.131166 0.391276 0.045718 0.280835
                  C0.094874 0.177813 0.177906 0.094787 0.280929 0.045608
                  C0.391376 0.131073 0.512989 0.240263 0.634525 0.361800
                  C0.756061 0.483336 0.865251 0.604949 0.950686 0.715441
                  Z
      
                  M0.999542 0.499742
                  C0.999542 0.546603 0.993249 0.591518 0.981449 0.633277
                  C0.883368 0.565807 0.766655 0.467592 0.649123 0.350060
                  C0.531591 0.232528 0.433375 0.115778 0.365906 0.017697
                  C0.407665 0.005897 0.452580 0 0.499441 0
                  C0.775958 -0.000019 0.999542 0.223750 0.999542 0.499742
                  Z
                "
                />
              </clipPath>
            </defs>

            <image
              href="/assets/images/JennieKim.jpg"
              width="336"
              height="336"
              preserveAspectRatio="xMidYMid slice"
              clipPath="url(#normalized-336)"
            />
          </svg>
        </div>
      </div>
      <StatsBar />
    </div>
  );
};

export default OurNetwork;
