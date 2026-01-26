import React from "react";
import Image from "next/image";

const mediaPartners = [
  "/assets/icons/Vinamilk_new_logo.svg",
  "/assets/icons/Vinamilk_new_logo.svg",
  "/assets/icons/Vinamilk_new_logo.svg",
  "/assets/icons/Vinamilk_new_logo.svg",
  "/assets/icons/Vinamilk_new_logo.svg",
  "/assets/icons/Vinamilk_new_logo.svg",
  "/assets/icons/Vinamilk_new_logo.svg",
  "/assets/icons/Vinamilk_new_logo.svg",
  "/assets/icons/Vinamilk_new_logo.svg",
  "/assets/icons/Vinamilk_new_logo.svg",
];

const Partner = () => {
  return (
    <div className="max-w-7xl mx-auto px-5">
      {/* Banner */}
      <div className="@container relative w-full aspect-[1000/440] overflow-hidden text-white mb-20">
        <div className="absolute inset-0 -left-[30cqw]">
          <div className="flex whitespace-nowrap bg-black py-3">
            {[...Array(4)].map((_, i) => (
              <span key={i} className="font-semibold text-[10cqw] leading-none">
                TRUSTED PARTNER.
              </span>
            ))}
          </div>
        </div>
        <div className="absolute z-20 -left-[40cqw] -top-[8cqw] transform -rotate-14">
          <div className="flex whitespace-nowrap bg-[#8E7FF0] py-3">
            {[...Array(4)].map((_, i) => (
              <span key={i} className="font-semibold text-[10cqw] leading-none">
                TRUSTED PARTNER.
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="flex flex-col xl:flex-row justify-center items-center gap-10 my-20 mx-auto max-w-7xl">
        {/* Responsive video wrapper */}
        <div className="flex-7 relative w-full rounded-sm overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
            className="h-full object-cover"
          >
            <source src="/assets/videos/Partner_Video.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="flex-5 flex-col justify-between">
          {/* Media */}
          <div className="border-b-2 border-gray-300 py-5">
            <p className="font-semibold text-7xl text-center xl:text-2xl xl:text-start">
              Media Partners
            </p>
            <div className="grid grid-cols-2 xl:grid-cols-5  gap-5 mt-5">
              {mediaPartners.map((src, index) => (
                <div
                  key={`media-partner-${index}`}
                  className="relative w-[40vw] xl:w-auto aspect-[170/40] p-1 bg-white"
                >
                  <Image
                    src={src}
                    alt={`Media Partner ${index + 1}`}
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="border-b-2 border-gray-300 py-5">
            <p className="font-semibold text-7xl text-center xl:text-2xl xl:text-start">
              Brands
            </p>
            <div className="grid grid-cols-2 xl:grid-cols-5  gap-5 mt-5">
              {mediaPartners.map((src, index) => (
                <div
                  key={`media-partner-${index}`}
                  className="relative w-[40vw] xl:w-auto aspect-[170/40] p-1 bg-white"
                >
                  <Image
                    src={src}
                    alt={`Media Partner ${index + 1}`}
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="border-b-2 border-gray-300 py-5">
            <p className="font-semibold text-7xl text-center xl:text-2xl xl:text-start">
              Platform Partners
            </p>
            <div className="grid grid-cols-2 xl:grid-cols-5  gap-5 mt-5">
              {mediaPartners.map((src, index) => (
                <div
                  key={`media-partner-${index}`}
                  className="relative w-[40vw] xl:w-auto aspect-[170/40] p-1 bg-white"
                >
                  <Image
                    src={src}
                    alt={`Media Partner ${index + 1}`}
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
