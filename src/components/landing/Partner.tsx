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
    <>
      {/* Banner */}
      <div className="relative max-w-8xl overflow-hidden h-[39vw]">
        <div className="absolute -left-[25%] bg-black text-white">
          <div className="flex whitespace-nowrap">
            {[...Array(4)].map((_, index) => (
              <React.Fragment key={`banner1-${index}`}>
                <span className="text-[8vw] font-bold flex items-end gap-3">
                  TRUSTED PARTNER
                  <span className="inline-block w-6 h-6 bg-white rounded-full mb-4 ms-4 me-10"></span>
                </span>
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="absolute -top-[10vw] -left-[18vw] bg-purple-400 text-white transform -rotate-13">
          <div className="flex whitespace-nowrap w-full">
            {[...Array(4)].map((_, index) => (
              <React.Fragment key={`banner1-${index}`}>
                <span className="text-[8vw] font-bold flex items-end gap-3">
                  TRUSTED PARTNER
                  <span className="inline-block w-6 h-6 bg-white rounded-full mb-4 ms-4 me-10"></span>
                </span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="flex flex-col xl:flex-row gap-10 my-20 px-25">
        {/* Responsive video wrapper */}
        <div className="flex-7 relative w-full aspect-video rounded-sm overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
            className="h-full w-full object-cover"
          >
            <source src="/assets/videos/Partner_Video.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="flex-5 flex flex-col justify-between">
          {/* Media */}
          <div className="border-b-2 border-gray-300 py-5">
            <p className="font-bold text-xl">Media Partners</p>
            <div className="grid grid-cols-5 gap-5 mt-5">
              {mediaPartners.map((src, index) => (
                <div
                  key={`media-partner-${index}`}
                  className="relative w-full aspect-[170/45] p-1 bg-white"
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
          {/* Media */}
          <div className="border-b-2 border-gray-300 py-5">
            <p className="font-bold text-xl">Media Partners</p>
            <div className="grid grid-cols-5 gap-5 mt-5">
              {mediaPartners.map((src, index) => (
                <div
                  key={`media-partner-${index}`}
                  className="relative w-full aspect-[170/45] p-1 bg-white"
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
          {/* Media */}
          <div className=" py-5">
            <p className="font-bold text-xl">Media Partners</p>
            <div className="grid grid-cols-5 gap-5 mt-5">
              {mediaPartners.map((src, index) => (
                <div
                  key={`media-partner-${index}`}
                  className="relative w-full aspect-[170/45] p-1 bg-white"
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
    </>
  );
};

export default Partner;
