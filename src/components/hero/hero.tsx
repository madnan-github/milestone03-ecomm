 
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { CiShoppingCart } from "react-icons/ci";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import {Taviraj} from "next/font/google"
import Hero2 from './hero2';
import Hero4 from './hero4';
import Hero5 from './hero5';
import Hero6 from './hero6';
import Hero7 from './hero7';
import ProductPage from '@/app/product/page';
const taviraj = Taviraj({subsets:['latin'],weight: ['400', '700'],})

export default function Hero() {

  return (
    <section className=" mx-auto">
  <div className="sm:w-[100%] md:w-[1110px] md:h-[505px] px-5 py-24 mx-auto flex flex-wrap bg-myPink mb-20 ">
   
        {/* vector */}
  
      <Image  
    width={736} height={264} alt="w1" src={'/images/hero/v.png'}
    className=" absolute md:ml-[700px] mt-[-70px] animate-pulse "/>
      <Image  
    width={736} height={264} alt="w1" src={'/images/hero/v2.png'}
    className=" absolute md:ml-[700px] mt-[-10px]  animate-pulse"/>
       <Image 
    width={736} height={264} alt="w1" src={'/images/hero/v3.png'}
    className=" absolute md:ml-[700px] mt-[40px] animate-pulse"/>
    {/* vector */}
        {/* img start */}
    <Image 
    width={325} height={467} alt="w1" src={'/images/hero/w1.png'}
    className="w-[150px] md:w-[325px] ml-3 mt-3 transition-all duration-1000 ease-in-out hover:scale-95"/>
   
    <div className="md:w-3/5 md:pl-6">
      
       {/* Right Section */}
       <div className="flex flex-col justify-center items-start text-left px-6 md:px-0">
          {/* Heading */}
          <h1
            className={`${taviraj.className} text-4xl sm:text-5xl md:text-[60px] text-mygray mt-3 leading-tight`}
          >
            WAY KAMBAS
            <br />
            MINI EBONY
          </h1>
          <span className="block w-24 h-[0.5px] bg-mygray mt-4 mb-6"></span>

          {/* Description */}
          <p className="text-base md:text-lg leading-relaxed">
            MATOA Way Kambas - This wood is chosen to represent the Sumatran
            Rhino's skin which is designed with an overlap effect on its strap
            to represent Rhino's skin.
          </p>
          <p
            className={`${taviraj.className} font-semibold mt-3 text-mygray text-base md:text-lg`}
          >
            Discover
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center mt-8 gap-4">
            {/* Add to Cart Button
            <div className="flex items-center justify-center w-[208px] h-[62px] bg-btn hover:bg-[#b84329] text-white text-xl">
              <Link href={"/product"} className="flex items-center">
                <CiShoppingCart className="w-[32px] h-[32px] mr-3" />
                <span className={`${taviraj.className}`}>
                  <Link href={'/cart'} >Add to cart</Link>
                </span>
              </Link>
            </div> */}

            {/* Second Button */}
            <div className="animate-pulse flex items-center justify-center w-[140px] h-[62px] border-2 border-btn">
              <Link href={"/"}>
                <Image
                  src={"/images/hero/cicil.png"}
                  width={57}
                  height={33}
                  alt="cicil"
                />
              </Link>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex flex-row items-center mt-8 gap-4 md:ml-[550px] md:mt-[-15px]">
            <div className="flex items-center justify-center w-[60px] h-[62px] border-2 border-btn text-btn">
              <AiOutlineLeft className="text-4xl" />
            </div>
            <div className="flex items-center justify-center w-[60px] h-[62px] bg-btn text-white">
              <AiOutlineRight className="text-4xl" />
            </div>
          </div>
        </div>

    </div>
  </div>
   <Hero2 />

 <ProductPage />
 <Hero4 />
 <Hero5 />
 <Hero6 />
 <Hero7 />
 
</section>

  )
}
