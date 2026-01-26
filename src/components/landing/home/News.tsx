import React from "react";
import NewsCard from "../NewsCard";
import { platform } from "os";

const News = () => {
  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="relative flex items-center">
          <h2 className="text-3xl font-semibold z-10">News</h2>
          <div className="absolute inset-0 h-[15%] w-[115%] bg-[#8E7FF0] top-[80%]"></div>
        </div>
        <div className="relative flex items-center">
          <div className="absolute inset-0 h-[200%] -top-[50%] -left-5 aspect-square bg-[#8E7FF0] rounded-full"></div>
          <p className="z-10 font-semibold right-0 whitespace-nowrap tracking-widest">
            VIEW MORE
          </p>
        </div>
      </div>
      <div
        className="grid gap-4 grid-rows-3 lg:grid-cols-4
        "
      >
        {/* BIG */}
        <div className="col-span-2 row-span-3">
          <NewsCard
            variant="big"
            image="/assets/images/NewsImage.svg"
            title="Vietnam Creators Bootcamp Session II"
            meta={{ platform: "Youtube", date: "Feb 6, 2024", views: 150 }}
          />
        </div>
        {/* HORIZONTAL */}
        <div className="col-span-2 row-span-1">
          <NewsCard
            variant="horizontal"
            image="/assets/images/NewsImage.svg"
            title="Vietnam Creators Bootcamp Session II"
            meta={{ platform: "Youtube", date: "Feb 6, 2024", views: 150 }}
          />
        </div>
        {/* SMALL */}
        <div className="col-span-1 row-span-2">
          <NewsCard
            variant="small"
            image="/assets/images/NewsImage.svg"
            title="Vietnam Creators Bootcamp Session II"
            meta={{ platform: "Youtube", date: "Feb 6, 2024", views: 150 }}
          />
        </div>
        <div className="col-span-1 row-span-2">
          <NewsCard
            variant="small"
            image="/assets/images/NewsImage.svg"
            title="Vietnam Creators Bootcamp Session II"
            meta={{ platform: "Youtube", date: "Feb 6, 2024", views: 150 }}
          />
        </div>
      </div>
    </div>
  );
};

export default News;
