"use client"
    import React from 'react'
    import Image from 'next/image'
    import Link from 'next/link'
    import { CiHeart } from "react-icons/ci";
    import {Taviraj} from "next/font/google"
    import { products } from '../../components/hero/hero3/data';
    const taviraj = Taviraj({subsets:['latin'],weight: ['400', '700'],})
    export default function ProductPage() {
      return (
<>
<div className='my-20 mx-auto'>
        <h1 className={`${taviraj.className} mb-28 text-[36px] text-mygray ml-5 `}> <span className='underline underline-offset-8'> Monthl</span>y Deals</h1>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
    {products.map((product) => (
      <div key={product.id} className="bg-white max-w-[250px]">
        <Link href={`/product/${product.id}`}>
          <Image
            width={207}
            height={221}
            alt={product.title}
            src={product.image}
            className="mx-auto mt-[-40px] transition-all duration-1000 ease-in-out hover:scale-95 hover:shadow-[0_0_8px_6px_rgb(50,90,30)]"
          />
        </Link>
        <div className="ml-5 mt-4">
          <h3 className={`${taviraj.className} text-2xl text-mygray`}>
            {product.title}
          </h3>
          <p className={`${taviraj.className} my-2 text-myLightGray`}>
            {product.discount}
          </p>
          <p
            className={`${taviraj.className} text-myLightGray relative inline-block`}
          >
            <span className="absolute inset-0 border-b-2 border-red-600 transform -translate-y-1/2"></span>{" "}
            Rp {product.price}
          </p>
          <h3 className={`${taviraj.className} text-2xl text-mygray`}>
            Rp {product.oldprice}
          </h3>
        </div>
      </div>
    ))}
  </div>
  </div>
  </>
  )
}
