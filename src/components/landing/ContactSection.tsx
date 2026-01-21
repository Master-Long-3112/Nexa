"use client";
import React, { useState } from "react";

const FormTab = () => {
  const [checked, setChecked] = useState<string>("Creator");
  return (
    <div className="flex w-full h-full flex-col justify-center gap-5 px-15 text-sm">
      {/* Tabs */}
      <div className="flex justify-around border border-black rounded-full w-full text-center">
        <div
          className={`flex-1 py-2 rounded-full m-0.5 cursor-pointer ${
            checked === "Creator" ? "bg-[#8E7FF0] text-white" : ""
          }`}
          onClick={() => setChecked("Creator")}
        >
          <p>Creator</p>
        </div>

        <div
          className={`flex-1 py-2 rounded-full m-0.5 cursor-pointer ${
            checked === "Content Partner" ? "bg-[#8E7FF0] text-white" : ""
          }`}
          onClick={() => setChecked("Content Partner")}
        >
          <p>Content Partner</p>
        </div>
        <div
          className={`flex-1 py-2 rounded-full m-0.5 cursor-pointer ${
            checked === "Brand" ? "bg-[#8E7FF0] text-white" : ""
          }`}
          onClick={() => setChecked("Brand")}
        >
          <p>Brand</p>
        </div>
      </div>
      {/* Form */}
      <form className="flex flex-col gap-2 w-full space-y-2">
        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-[#1E2546] font-semibold">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="example@mail.com"
            className="mt-2 block w-full bg-transparent border-b-2 border-[#1E2546] pb-2 placeholder:text-gray-400 outline-none"
          />
        </div>

        {/* Phone number */}
        <div>
          <label htmlFor="phone" className="block text-[#1E2546] font-semibold">
            Phone number *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="@username"
            className="mt-2 block w-full bg-transparent border-b-2 border-[#1E2546] pb-2 placeholder:text-gray-400 outline-none"
          />
        </div>

        {/* Concerns */}
        <div>
          <label
            htmlFor="concerns"
            className="block text-[#1E2546] font-semibold"
          >
            Tell Us Your Concerns *
          </label>
          <textarea
            id="concerns"
            name="concerns"
            required
            rows={2}
            placeholder="Enter text or your channel link here..."
            className="block w-full bg-transparent border-b-2 border-[#1E2546] placeholder:text-gray-400 outline-none resize-none"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="self-start rounded-full bg-[#8E7FF0] px-9 py-3 text-white font-semibold hover:bg-pink-600"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

const ContactSection = () => {
  return (
    <div className="max-w-7xl px-20 mx-auto mb-30  overflow-hidden">
      <div className="flex flex-col xl:flex-row gap-1 items-center justify-center bg-[linear-gradient(90deg,rgba(250,250,250,0)_42.6%,#FAFAFA_54.55%,#F4F4F4_100%)] rounded-2xl overflow-hidden">
        <div className="xl:flex-6 h-full relative rounded-l-2xl overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
            className="h-full object-cover"
          >
            <source src="/assets/videos/Contact_Video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="xl:flex-6 max-w-xl w-full">
          <FormTab />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
