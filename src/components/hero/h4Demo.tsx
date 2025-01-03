

import React from "react";
import Link from "next/link";
import { Taviraj } from "next/font/google";
import H4Pic from "./h4Pic";

const taviraj = Taviraj({ subsets: ["latin"], weight: ["400", "700"] });

export default function Hero4Demo() {
  return (
    <div className="my-16 px-4 sm:px-6 lg:px-10">
      {/* Title */}
      <h1
        className={`${taviraj.className} mb-12 sm:mb-20 text-[28px] sm:text-[32px] lg:text-[36px] text-mygray`}
      >
        <span className="underline underline-offset-8">Recent</span> News
      </h1>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Text Section */}
        <div className="md:w-1/2 lg:ml-6">
          <p className={`${taviraj.className} text-[18px] sm:text-[20px] text-mygray`}>
            Where To Travel
          </p>
          <h2
            className={`${taviraj.className} w-[350px] h-[96px] 
                mt-3 text-[28px] sm:text-[32px] lg:text-[36px]
                 text-mygray`}
          >
            Matoa Where To Travel? Yogyakarta
          </h2>
          <div className="mt-8 sm:mt-12 flex w-[140px] sm:w-[160px] h-[48px] sm:h-[58px] border-2 border-btn text-btn rounded-md">
            <Link href={"/"} className="mx-auto flex items-center animate-pulse">
              Discover
            </Link>
          </div>
        </div>

        {/* Picture Section */}
        <div className="md:w-1/2 mt-20">
          




          <H4Pic />
        </div>
      </div>
    </div>
  );
}
