"use client";
import React, { useState } from "react";

const FormTab = () => {
  const [checked, setChecked] = useState<string>("Creator");
  return (
    <>
      <div className="flex justify-around border border-black rounded-full w-full text-center">
        <div
          className={`flex-1 py-3 rounded-full m-1 cursor-pointer ${
            checked === "Creator" ? "bg-pink-500 text-white" : ""
          }`}
          onClick={() => setChecked("Creator")}
        >
          <p>Creator</p>
        </div>
        <div
          className={`flex-1 py-3 rounded-full m-1 cursor-pointer ${
            checked === "Content Partner" ? "bg-pink-500 text-white" : ""
          }`}
          onClick={() => setChecked("Content Partner")}
        >
          <p>Content Partner</p>
        </div>
        <div
          className={`flex-1 py-3 rounded-full m-1 cursor-pointer ${
            checked === "Brand" ? "bg-pink-500" : ""
          }`}
          onClick={() => setChecked("Brand")}
        >
          <p>Brand</p>
        </div>
      </div>
      <form className="max-w-2xl w-full space-y-8">
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
            className="mt-2 block w-full bg-transparent border-b-2 border-[#1E2546] pb-2 placeholder:text-gray-400 outline-none resize-none"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-pink-500 px-8 py-4
                   text-white font-semibold hover:bg-pink-600"
        >
          SUBMIT
        </button>
      </form>
    </>
  );
};

const ContactSection = () => {
  return (
    <div className="flex mx-auto mb-4 items-center justify-center overflow-hidden">
      <div className="flex items-center justify-center bg-[#F1F6F7] rounded-2xl">
        <div className="relative w-170 rounded-l-2xl overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
            className="h-full object-fit object-left"
          >
            <source src="/assets/videos/Contact_Video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="w-130 px-10">
          {/* name of each tab group should be unique */}
          <FormTab />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
