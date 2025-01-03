
import React from 'react';
import { Taviraj } from 'next/font/google';
import { Nunito } from 'next/font/google';
import Image from 'next/image';

const taviraj = Taviraj({ subsets: ['latin'], weight: ['400', '700'] });
const nunito = Nunito({ subsets: ['latin'] });

export default function Hero2() {
  return (
    <section id='hero2'>
    <div className="mx-auto max-w-[1440px] grid sm:grid-cols-1 md:grid-cols-2 gap-10 md:gap-28 px-4 sm:px-6 lg:px-20 py-10">
      {/* Luxurious Eyewear Section */}
      <div className="w-[340px] h-[300px] md:w-[540px] md:h-[270px] bg-white flex flex-col justify-center items-start  pt-6 px-10 shadow-md rounded-lg">
        <h1
          className={`$ {aviraj.className} text-[24px] md:text-[28px] text-mygray`}
        >
          Luxurious <span className="font-bold">Eyewear</span>
        </h1>
        <p
          className={`${nunito.className}text-pretty text-[16px] md:text-[18px] text-myLightGray mt-3`}
        >
          See the beauty of the exotic world with luxurious glasses
        </p>
        <p
          className={`${taviraj.className} font-semibold underline underline-offset-8 mt-4 text-mygray cursor-pointer`}
        >
          Discover Now
        </p>
        <div className="relative mt-6">
          <Image
            width={330}
            height={143}
            alt="Luxurious Eyewear"
            src="/images/hero/hero2-1.png"
            className="ml-10 mt-[-10px] md:ml-56 md:mt-[-80px] transition-transform duration-500 ease-in-out hover:scale-105"
          />
        </div>
      </div>

      {/* Comfortable Watches Section */}
      <div className="w-[340px] h-[300px] md:w-[540px] md:h-[270px] bg-white flex flex-col justify-center items-start pt-6 px-10 shadow-md rounded-lg">
        <h1
          className={`${taviraj.className} text-[24px] md:text-[28px] text-mygray`}
        >
          Comfortable <span className="font-bold">Watches</span>
        </h1>
        <p
          className={`${nunito.className} text-pretty text-[16px] md:text-[18px] text-myLightGray mt-3`}
        >
          Feel the balance of function and beauty in our wooden watches
        </p>
        <p
          className={`${taviraj.className} font-semibold underline underline-offset-8 mt-4 text-mygray cursor-pointer`}
        >
          Discover Now
        </p>
        <div className="relative mt-6">
          <Image
            width={155}
            height={152}
            alt="Comfortable Watches"
            src="/images/hero/hero2-2.png"
            className="mt-[-40px] md:mt-[-75px] ml-32 md:ml-80 transition-transform duration-500 ease-in-out hover:scale-105"
          />
        </div>
      </div>
    </div>
    </section>
  );
}
