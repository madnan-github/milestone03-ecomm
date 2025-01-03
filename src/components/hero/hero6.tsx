import React from 'react'

import Link from 'next/link'
import {Taviraj} from "next/font/google"
import H6Pic from './h6Pic'
const taviraj = Taviraj({subsets:['latin'],weight: ['400', '700'],})
export default function Hero6() {
  return (
    <div  className='my-20'>
 <div className='flex flex-col md:flex-row'>
    {/* pic */}
<H6Pic />

  {/* text */}
    <div className=''>
         <h2 className={`${taviraj.className} text-[28px] sm:text-[32px] lg:text-[36px] text-mygray ml-5 md:ml-[110px] `}> <span className='underline underline-offset-8'>Testimo</span>nials</h2>
    
      <p className={`${taviraj.className} text-pretty w-[300px] md:w-[511px] md:h-[130px] text-[16px] text-mygray ml-5 md:ml-[110px] mt-10`}>
      Loving my new KAILI watch from @matoa_id, the first ever Indonesian watch local brand that uses wood as their main material. Like any other Matoa products, KAILI is inspired by Indonesian heritage.</p>

      <p className={`${taviraj.className} text-2xl  ml-[110px] mt-5 text-mygray`}>Gita Savitri</p>

      <p className={`${taviraj.className} text-[16px]  ml-[110px] mt-3 text-myLightGray `}>Content Creator/Influencer</p>
   
    </div>

  
    
    </div> 
    </div>
  )
}
