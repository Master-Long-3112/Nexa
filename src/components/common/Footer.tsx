import Image from "next/image";
import Link from "next/link";
import React from "react";

import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#191919] text-gray-300">
      <div className="px-25 py-18">
        <div className="grid grid-cols-4 gap-10 mb-20">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/assets/icons/Nexa_Logo.png"
                alt="Icon"
                width={170}
                height={45}
              />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              NEXA – Giao lộ của tài năng và thương hiệu.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-medium mb-1">Contact</h4>
            <hr className="max-w-5 mb-10" />
            <ul className="space-y-3 text-md">
              <li>
                Tel: <span className="text-gray-400">84 00 000 00</span>
              </li>
              <li>
                Email:{" "}
                <a
                  href="mailto:info@nexa.com.vn"
                  className="text-gray-400 hover:text-white transition"
                >
                  info@nexa.com.vn
                </a>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div className="col-span-2">
            <h4 className="text-white font-medium mb-1">Address</h4>
            <hr className="max-w-5 mb-10" />

            <div className="grid grid-cols-2 gap-10">
              <p className="text-md text-gray-400 leading-relaxed">
                Lot B7, 19A Street, Tan Thuan Export Processing Zone, Tan Thuan
                Dong Ward, District 7, Ho Chi Minh City, Vietnam
              </p>
              <p className="text-md text-gray-400 leading-relaxed">
                Lot B7, 19A Street, Tan Thuan Export Processing Zone, Tan Thuan
                Dong Ward, District 7, Ho Chi Minh City, Vietnam
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-10 mt-6 text-lg text-gray-400">
          <Link href="#">
            <FaFacebookF />
          </Link>
          <Link href="#">
            <FaInstagram />
          </Link>
          <Link href="#">
            <FaXTwitter />
          </Link>
          <Link href="#">
            <FaYoutube />
          </Link>
          <Link href="#">
            <FaTiktok />
          </Link>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 py-1 text-center text-md text-white bg-black">
        Copyright © NEXA NETWORK. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
