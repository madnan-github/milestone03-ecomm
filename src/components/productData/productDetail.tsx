import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {Taviraj} from "next/font/google"
const taviraj = Taviraj({subsets:['latin'],weight: ['400', '700'],})
import { Nunito } from 'next/font/google'
const nunito = Nunito({subsets:['latin']})
export default function ProductDetail() {
  return (
    <div>
        <div className='w-full md:w-[1110px] mx-auto mb-5 '>
            <ul className={`${taviraj.className} ml-10 md:ml-0 flex flex-col md:flex-row md:gap-14 text-[20px] font-semibold text-[#999999]`}
           >
                <Link href={'/'}><li className='hover:text-btn  hover:border-b border-btn'>Detail</li></Link>
                <Link href={'/'}><li className='hover:text-btn hover:border-b border-btn'>Warranty</li></Link>
                <Link href={'/'}><li className='hover:text-btn hover:border-b border-btn'>Custom Engrave </li></Link>
                <Link href={'/'}><li className='hover:text-btn hover:border-b border-btn'>How to Adjust</li></Link>
                <Link href={'/'}><li className='hover:text-btn hover:border-b border-btn'>How to Care</li></Link>
                <Link href={'/'}><li className='hover:text-btn hover:border-b border-btn'>Gallery</li></Link>
            </ul>
            <hr className='w-[1200px] mt-3'/>
        </div>
        {/* <div className='w-[1046px] ml-28'> */}
      <div className='w-full md:w-[1046px] ml-0 md:ml-28 pl-5 pr-24 md:px-0 pb-10 md:pb-0'>
        <h2 className={`${taviraj.className} text-[24px] text-mygray leading-loose`}>Material</h2>
        <p className={`${nunito.className}  md:h-[84px] text-justify md:text-pretty leading-relaxed text-[16px] text-[#555555]`}>MATOA Way Kambas - Sumatran Rhino comes with a material form of Makassar Ebony (Diospyros celebica). This wood is chosen to represent the Sumatran Rhino's skin which is designed with an overlap effect on its strap to represent Rhino's skin. Sumatran Rhino has unique skin fold, the skin is fairly thin about 10-16mm, and is soft and pliable.</p>
       
           <h2 className={`${taviraj.className} text-[24px] text-mygray leading-loose`}>Case</h2>
           <p className={`${nunito.className}   md:h-[84px] text-justify md:text-pretty  leading-relaxed text-[16px] text-[#555555]`}>The case on this timepiece is made with Height 12.5mm, Width 36mm, Length 33mm and Dial Opening 25mm. The glass is equipped with K1 flat glass to increase the enhanced durability on timepieces as scratch resistant and anti fingerprint. This timepiece is also equipped with Hand Polish Brass Spacer for a longer usage periods.</p>

        <h2 className={`${taviraj.className} text-[24px] text-mygray leading-loose`}>
        Movement
        </h2>
        <p className={`${nunito.className}  md:h-[84px] text-justify md:text-pretty  leading-relaxed text-[16px] text-[#555555]`}>
        For the first time, MATOA comes with Seiko Quartz VD78 movement with small second function. A small second hand is above 6 o'clock position. This second hand dial is dedicated to Sumatran Rhino whom every second of its life is so precious because whenever Sumatran Rhino goes, it can be threatened by illegal poaching
        </p>
        <h2 className={`${taviraj.className} text-[24px] text-mygray leading-loose`}>
        Dial</h2>
          <p className={`${nunito.className} text-justify md:text-pretty leading-relaxed text-[16px] text-[#555555]`}>
          In the dial, there are double layer of Makassar Ebony Veneer with 3, 9 & 12 o'clock laser cut brass plate index.
          </p>
          <h2 className={`${taviraj.className} text-[24px] text-mygray leading-loose`}>
          Hand
          </h2>
          <p className={`${nunito.className}  text-justify md:text-pretty leading-relaxed text-[16px] text-[#555555]`}>
          The hour, minute & small second hands on MATOA Way Kambas - Sumatran Rhino is outfitted with skeleton hand and brush finished with Gold Matte color. This new design aims at adding a value for this special edition
          </p>
          <h2 className={`${taviraj.className} text-[24px] text-mygray leading-loose`}>
          Important to Note
          </h2>
          <p className={`${nunito.className}   text-justify md:text-pretty leading-relaxed text-[16px] text-[#555555]`}>
          Wood color on watches is produced from a combination of mature and fresh wood but should not be viewed as a defect. It is a very natural process of wood aging.
          </p>
      </div>

      <div> 
      <Image
                width={635}
                height={518}
                alt="w1"
                src={"/images/cart/p7.png"}
                className=" mx-auto mt-5 "
              />
      </div>
    </div>
  )
}


