
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer1() {
  return (
    <div className="w-full md:w-[1440px] md:h-[273px] bg-myfooter grid sm:grid-cols-2 md:grid-cols-5  py-8 md:pr-52 md:pl-28">
      {[
        '/images/footer/f1.png',
        '/images/footer/f2.png',
        '/images/footer/f3.png',
        '/images/footer/f4.png',
        '/images/footer/f5.png',
        '/images/footer/f6.png',
        '/images/footer/f7.png',
        '/images/footer/f8.png',
        '/images/footer/f9.png',
        '/images/footer/f10.png',
      ].map((src, index) => (
        <div key={index} className="flex justify-center items-center">
          <Link href={'/'}>
            <Image
              src={src}
              width={100}
              height={100}
              alt={`footer-icon-${index}`}
              className="transition-all duration-500 ease-in-out hover:scale-110"
            />
          </Link>
        </div>
      ))}
    </div>
  );
}
