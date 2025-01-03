import React from 'react';
import Image from 'next/image';
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeftShort } from "react-icons/bs";

import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

const H6Pic = () => {
  return (
    <div className="relative flex mt-20">
        
      <div className="absolute inset-0">
      <div className='md:w-[515px] md:h-[300px]  bg-myPink mt-[-100px] '>
      <Image 
    width={736} height={264} alt="w1" src={'/images/hero/v.png'}
    className=" mt-[-20px]  absolute animate-pulse"/>
      <Image 
    width={736} height={264} alt="w1" src={'/images/hero/v2.png'}
    className=" mt-[20px] absolute animate-pulse"/>
       <Image 
    width={736} height={264} alt="w1" src={'/images/hero/v3.png'}
    className="  mt-[50px] absolute animate-pulse"/>


    </div>
      </div>
      <div className="relative z-10 mt-[-30px]">
        <Image
          src="/images/hero/hero6.png"
          width={511}
          height={321}
          alt="hero1"
          className="ml-10 md:ml-40 mt-0 w-[250px] md:w-[511px] h-[250px] md:h-[321px]
          transition-all duration-1000 ease-in-out hover:scale-95 hover:shadow-[0_0_8px_6px_rgb(216,71,39)]"
        />
        <div className='flex ml-40'>
        <BsArrowLeftShort className='w-[64px] h-[64px] text-myLightGray'/>
        <BsArrowRight className='w-[64px] h-[64px] '/>
       </div>

      </div>
    </div>
  );
}; 

export default H6Pic;
