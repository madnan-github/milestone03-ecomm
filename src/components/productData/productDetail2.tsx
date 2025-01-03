import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CiHeart } from "react-icons/ci";
import {Taviraj} from "next/font/google"
const taviraj = Taviraj({subsets:['latin'],weight: ['400', '700'],})

export default function ProductDetail2() {
  return (
    <div className='my-20'>
    <h1 className={`${taviraj.className} mb-10 md:mb-20 text-[36px] text-mygray ml-5 `}> <span className='underline underline-offset-8'>Relate</span> Products</h1>
    <div className='grid md:grid-cols-4 ml-10 gap-8 md:gap-3'>
        {/* 1 */}
        {/*  */}
        <div className='bg-white max-w-[255px] max-h-[403px] relative '>
            <div className='max-w-[103px] max-h-[34px] bg-btn px-2 py-2 ml-36 mt-[-10px] absolute '>
                <p className={`${taviraj.className}  text-[#fff]`}>20% OFF</p>
            </div>
        <Image 
        width={207} height={221} alt="w1" src={'/images/hero/h3-1.png'}
        // 
        className="mx-auto mt-[40px]
        transition-all duration-1000 ease-in-out hover:scale-95 hover:shadow-[0_0_8px_6px_rgb(50,90,30)]"/>
        {/*  */}
            <div className='ml-5 mt-4 leading-loose'>
            <h3  className={`${taviraj.className} text-2xl text-mygray`}>Singo Maple</h3>
            <p className={`${taviraj.className} text-myLightGray relative inline-block`}>
            <span className="absolute inset-0 border-b-2 border-red-600 transform -translate-y-1/2"></span> Rp 1.500.000</p>
            <h3 className={`${taviraj.className} text-2xl text-mygray`}>Rp 1.264.000</h3>
            </div>

        </div>
        {/* 2 */}
        {/*  */}
        <div className='bg-white max-w-[255px] max-h-[403px] relative '>
            <div className='max-w-[71px] max-h-[34px] bg-[#01522D] px-4 py-2 ml-[165px] mt-[-10px] absolute '>
                <p className={`${taviraj.className}  text-[#fff]`}>NEW</p>
            </div>
        <Image 
        width={207} height={221} alt="w1" src={'/images/productDetail/p2.png'}
        // 
        className="mx-auto mt-[40px]
        transition-all duration-1000 ease-in-out hover:scale-95 hover:shadow-[0_0_8px_6px_rgb(50,90,30)]"/>
        {/*  */}
            <div className='ml-5 mt-4 '>
            <h3  className={`${taviraj.className} text-2xl text-mygray `}>Sikka (Ebony & Maple)</h3>
            <h3 className={`${taviraj.className} text-2xl text-mygray leading-loose`}>Rp 1.264.000</h3>
         
            </div> 
        </div>
        {/* 3 */}
        {/*  */}
        <div className='bg-white max-w-[255px] max-h-[403px] relative '>
        <Image 
        width={207} height={221} alt="w1" src={'/images/productDetail/p3.png'}
        // 
        className="mx-auto mt-[40px]
        transition-all duration-1000 ease-in-out hover:scale-95 hover:shadow-[0_0_8px_6px_rgb(50,90,30)]"/>
        {/*  */}
            <div className='ml-5 mt-4 '>
            <h3  className={`${taviraj.className} text-2xl text-mygray`}>Sunda</h3>
            <h3 className={`${taviraj.className} text-2xl text-mygray leading-loose`}>Rp 1.170.000</h3>
            </div>
        </div>
        {/* 4 */}
         {/*  */}
         <div className='bg-white max-w-[255px] max-h-[403px] relative '>
            <div className='max-w-[103px] max-h-[34px] bg-btn px-1 py-2 ml-40 mt-[-10px] absolute '>
                <p className={`${taviraj.className}  text-[#fff]`}>25% OFF</p>
            </div>
        <Image 
        width={207} height={221} alt="w1" src={'/images/hero/h3-1.png'}
        // 
        className="mx-auto mt-[40px]
        transition-all duration-1000 ease-in-out hover:scale-95 hover:shadow-[0_0_8px_6px_rgb(50,90,30)]"/>
        {/*  */}
            <div className='ml-5 mt-4 leading-loose'>
            <h3  className={`${taviraj.className} text-2xl text-mygray`}>Singo Maple</h3>
            <p className={`${taviraj.className} text-myLightGray relative inline-block`}>
            <span className="absolute inset-0 border-b-2 border-red-600 transform -translate-y-1/2"></span> Rp 1.280.000</p>
            <h3 className={`${taviraj.className} text-2xl text-mygray`}>Rp 960.000</h3>
            </div>
        </div>
    </div>



</div>

  )
}




