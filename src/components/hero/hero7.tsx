import React from 'react'
import Image from 'next/image';
import { Taviraj } from "next/font/google";
const taviraj = Taviraj({ subsets: ["latin"], weight: ["400", "700"] });
export default function Hero7() {
  return (
    <div className='ml-12 mb-20 mx-auto'>
  <h2 className={`${taviraj.className} text-[36px] text-mygray ml-4 mb-6 `}>
   <span className="underline underline-offset-8">
   Instagr</span>am
          </h2>

<div className='flex flex-col md:flex-row my-8 ml-6'>
<Image 
width={222} height={222} alt="w1"  src={'/images/hero7/h1.png'}
className="transition-all duration-1000 ease-in-out hover:scale-95 hover:shadow-[0_0_8px_6px_rgb(216,71,39)]"/>
<Image 
width={222} height={222} alt="w1"  src={'/images/hero7/h2.png'}
className="transition-all duration-1000 ease-in-out hover:scale-95 hover:shadow-[0_0_8px_6px_rgb(216,71,39)]"/>
<Image 
width={222} height={222} alt="w1"  src={'/images/hero7/h3.png'}
className="transition-all duration-1000 ease-in-out hover:scale-95 hover:shadow-[0_0_8px_6px_rgb(216,71,39)]"/>
<Image 
width={222} height={222} alt="w1"  src={'/images/hero7/h4.png'}
className="transition-all duration-1000 ease-in-out hover:scale-95 hover:shadow-[0_0_8px_6px_rgb(216,71,39)]"/>
<Image 
width={222} height={222} alt="w1"  src={'/images/hero7/h5.png'}
className="transition-all duration-1000 ease-in-out hover:scale-95 hover:shadow-[0_0_8px_6px_rgb(216,71,39)]"/>


</div>

    </div>
  )
}
