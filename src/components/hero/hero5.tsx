// import React from "react";
// import Image from "next/image";
// import { Taviraj } from "next/font/google";
// const taviraj = Taviraj({ subsets: ["latin"], weight: ["400", "700"] });
// export default function Hero5() {
//   return (
//     <section className=" body-font my-32">
//       <div className="grid md:grid-cols-3 px-4">
//         {/* 1 */}
//         <div>
//           <h2
//             className={`${taviraj.className} text-3xl md:text-[36px] text-mygray ml-1 mb-12`}
//           >
//             {" "}
//             <span className="underline underline-offset-8">Map</span>le Series
//           </h2>
//           {/* 1-1 */}
//           <div className=" flex mb-8">
//             <div className="w-[131px] h-[131px] bg-myPink
//             transition-all duration-1000 ease-in-out hover:scale-95 hover:shadow-[0_0_8px_6px_rgb(216,71,39)]">
//               <Image
//                 width={68.7}
//                 height={100}
//                 alt="w1"
//                 src={"/images/hero5/h5-1.png"}
//                 className=" mx-auto mt-5 
//                 "
//               />
//             </div>
//             <div className="">
//               <h3
//                 className={`${taviraj.className} text-2xl text-mygray ml-6 w-[190px] h-[68px]`}
//               >
//                 Way Kambas Maple
//               </h3>
//               <p
//                 className={`${taviraj.className} text-lg md:text-[28px] text-[#222222] ml-6`}
//               >
//                 {" "}
//                 Rp 1.280.000
//               </p>
//             </div>
//           </div>
//           {/* 1-2 */}
//           <div className=" flex mb-8">
//             <div className="w-[131px] h-[131px] bg-myPink
//             transition-all duration-1000 ease-in-out hover:scale-95 hover:shadow-[0_0_8px_6px_rgb(216,71,39)]">
//               <Image
//                 width={53.23}
//                 height={100}
//                 alt="w1"
//                 src={"/images/hero5/h5-2.png"}
//                 className=" mx-auto mt-3 "
//               />
//             </div>
//             <div className=" mt-4 ">
//               <h3
//                 className={`${taviraj.className} text-2xl text-mygray  ml-6 w-[190px]`}
//               >
//                 Kaili
//               </h3>
//               <p
//                 className={`${taviraj.className} text-lg md:text-[28px] text-[#222222] ml-6`}
//               >
//                 {" "}
//                 Rp 950.000
//               </p>
//             </div>
//           </div>
//           {/* 1-3 */}
//           <div className=" flex mb-8">
//             <div className="w-[131px] h-[131px] bg-myPink
//             transition-all duration-1000 ease-in-out hover:scale-95 hover:shadow-[0_0_8px_6px_rgb(216,71,39)]">
//               <Image
//                 width={63.12}
//                 height={100}
//                 alt="w1"
//                 src={"/images/hero5/h5-3.png"}
//                 className=" mx-auto mt-2 "
//               />
//             </div>
//             <div className=" mt-4 ">
//               <h3
//                 className={`${taviraj.className} text-2xl text-mygray  ml-6 w-[190px] `}
//               >
//                 Sunda
//               </h3>
//               <p
//                 className={`${taviraj.className} text-lg md:text-[28px] text-[#222222] ml-6`}
//               >
//                 Rp 1.170.000
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* 2 */}

//         <div>
//           <h2
//             className={`${taviraj.className} text-3xl md:text-[36px] text-mygray ml-1 mb-12 `}
//           >
//             {" "}
//             <span className="underline underline-offset-8">Ebo</span>ny Series
//           </h2>
//           {/* 2-1 */}
//           <div className=" flex mb-8">
//             <div className="w-[131px] h-[131px] bg-myPink
//             transition-all duration-1000 ease-in-out hover:scale-95 hover:shadow-[0_0_8px_6px_rgb(216,71,39)]">
//               <Image
//                 width={65.16}
//                 height={100}
//                 alt="w1"
//                 src={"/images/hero5/h5-4.png"}
//                 className=" mx-auto mt-5 "
//               />
//             </div>
//             <div className=" mt-4">
//               <h3
//                 className={`${taviraj.className} text-2xl text-mygray  ml-6 w-[190px]`}
//               >
//                 Tomia Ebony
//               </h3>
//               <p
//                 className={`${taviraj.className} text-[#222222] relative inline-block ml-6`}
//               >
//                 <span className="absolute inset-0 border-b-2 border-red-600 transform -translate-y-1/2"></span>
//                 Rp 1.280.000
//               </p>
//               <p
//                 className={`${taviraj.className} text-lg md:text-[28px] text-[#222222] ml-6`}
//               >
//                 {" "}
//                 Rp 960.000
//               </p>
//             </div>
//           </div>
//           {/* 2-2 */}
//           <div className=" flex mb-8">
//             <div className="w-[131px] h-[131px] bg-myPink
//             transition-all duration-1000 ease-in-out hover:scale-95 hover:shadow-[0_0_8px_6px_rgb(216,71,39)]">
//               <Image
//                 width={45.17}
//                 height={100}
//                 alt="w1"
//                 src={"/images/hero5/h5-5.png"}
//                 className=" mx-auto mt-5 "
//               />
//             </div>
//             <div className=" mt-4">
//               <h3
//                 className={`${taviraj.className} text-2xl text-mygray  ml-6 w-[190px]`}
//               >
//                 Mori
//               </h3>
//               <p
//                 className={`${taviraj.className} text-lg md:text-[28px] text-[#222222] ml-6`}
//               >
//                 {" "}
//                 Rp 950.000
//               </p>
//             </div>
//           </div>
//           {/* 2-3 */}
//           <div className=" flex mb-8">
//             <div className="w-[131px] h-[131px] bg-myPink
//             transition-all duration-1000 ease-in-out hover:scale-95 hover:shadow-[0_0_8px_6px_rgb(216,71,39)]">
//               <Image
//                 width={62.19}
//                 height={100}
//                 alt="w1"
//                 src={"/images/hero5/h5-6.png"}
//                 className=" mx-auto mt-4 "
//               />
//             </div>
//             <div className=" mt-4">
//               <h3
//                 className={`${taviraj.className} text-2xl text-mygray  ml-6 w-[190px]`}
//               >
//                 Alor
//               </h3>
//               <p
//                 className={`${taviraj.className} text-lg md:text-[28px] text-[#222222] ml-6`}
//               >
//                 {" "}
//                 Rp 1.170.000
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* 3 */}

//         <div>
//           <h2
//             className={`${taviraj.className} text-3xl md:text-[36px] text-mygray ml-1 mb-12 `}
//           >
//             {" "}
//             <span className="underline underline-offset-8">Fea</span>tured
//           </h2>
//           {/* 3-1 */}
//           <div className=" flex mb-8">
//             <div className="w-[131px] h-[131px] bg-myPink
//             transition-all duration-1000 ease-in-out hover:scale-95 hover:shadow-[0_0_8px_6px_rgb(216,71,39)]">
//               <Image
//                 width={70.49}
//                 height={100}
//                 alt="w1"
//                 src={"/images/hero5/h5-7.png"}
//                 className=" mx-auto mt-5 "
//               />
//             </div>
//             <div className=" mt-4">
//               <h3
//                 className={`${taviraj.className} text-2xl text-mygray  ml-6 w-[190px] h-[68px]`}
//               >
//                 Sikka (Ebony & Maple)
//               </h3>
//               <p
//                 className={`${taviraj.className} text-lg md:text-[28px] text-[#222222] ml-6`}
//               >
//                 {" "}
//                 Rp 1.198.000
//               </p>
//             </div>
//           </div>
//           {/* 3-2 */}
//           <div className=" flex mb-8">
//             <div className="w-[131px] h-[131px] bg-myPink
//             transition-all duration-1000 ease-in-out hover:scale-95 hover:shadow-[0_0_8px_6px_rgb(216,71,39)]">
//               <Image
//                 width={113}
//                 height={55}
//                 alt="w1"
//                 src={"/images/hero5/h5-8.png"}
//                 className=" mx-auto mt-10 "
//               />
//             </div>
//             <div className=" mt-4">
//               <h3
//                 className={`${taviraj.className} text-2xl text-mygray  ml-6 w-[190px]`}
//               >
//                 Lore Walnut
//               </h3>
//               <p
//                 className={`${taviraj.className} text-lg md:text-[28px] text-[#222222] ml-6`}
//               >
//                 Rp 1.280.000
//               </p>
//             </div>
//           </div>
//           {/* 3-3 */}
//           <div className=" flex mb-8">
//             <div className="w-[131px] h-[131px] bg-myPink
//             transition-all duration-1000 ease-in-out hover:scale-95 hover:shadow-[0_0_8px_6px_rgb(216,71,39)]">
//               <Image
//                 width={57.18}
//                 height={100}
//                 alt="w1"
//                 src={"/images/hero5/h5-9.png"}
//                 className=" mx-auto mt-4 "
//               />
//             </div>
//             <div className=" mt-4">
//               <h3
//                 className={`${taviraj.className} text-2xl text-mygray  ml-6 w-[190px] h-[68px]`}
//               >
//                 Way Kambas Limited Edition
//               </h3>
//               <p
//                 className={`${taviraj.className} text-lg md:text-[28px] text-[#222222] ml-6`}
//               >
//                 {" "}
//                 Rp 1.170.000
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/*  */}
// <div className="flex items-center justify-center my-4  mx-auto">
//    <div className="flex-grow h-px bg-gray-400"></div>
//     <button className={`${taviraj.className} md:w-[272px] md:h-[68px] text-[20px] hover:text-2xl mx-4 px-4 py-2 hover:border-2 border border-red-500 text-red-500 `}> 
//       See More </button> <div className="flex-grow h-px bg-gray-400"></div> </div>
// {/*  */}
//     </section>
//   );
// }

//______________________________________________________________________
import React from "react";
import Image from "next/image";
import { Taviraj } from "next/font/google";

const taviraj = Taviraj({ subsets: ["latin"], weight: ["400", "700"] });

const seriesData = [
  {
    title: "Maple Series",
    items: [
      {
        name: "Way Kambas Maple",
        price: "Rp 1.280.000",
        imageSrc: "/images/hero5/h5-1.png",
        imageWidth: 68.7,
        imageHeight: 100,
        imageMarginTop: "mt-5",
      },
      {
        name: "Kaili",
        price: "Rp 950.000",
        imageSrc: "/images/hero5/h5-2.png",
        imageWidth: 53.23,
        imageHeight: 100,
        imageMarginTop: "mt-3",
      },
      {
        name: "Sunda",
        price: "Rp 1.170.000",
        imageSrc: "/images/hero5/h5-3.png",
        imageWidth: 63.12,
        imageHeight: 100,
        imageMarginTop: "mt-2",
      },
    ],
  },
  {
    title: "Ebony Series",
    items: [
      {
        name: "Tomia Ebony",
        price: "Rp 960.000",
        originalPrice: "Rp 1.280.000",
        imageSrc: "/images/hero5/h5-4.png",
        imageWidth: 65.16,
        imageHeight: 100,
        imageMarginTop: "mt-5",
      },
      {
        name: "Mori",
        price: "Rp 950.000",
        imageSrc: "/images/hero5/h5-5.png",
        imageWidth: 45.17,
        imageHeight: 100,
        imageMarginTop: "mt-5",
      },
      {
        name: "Alor",
        price: "Rp 1.170.000",
        imageSrc: "/images/hero5/h5-6.png",
        imageWidth: 62.19,
        imageHeight: 100,
        imageMarginTop: "mt-4",
      },
    ],
  },
  {
    title: "Featured",
    items: [
      {
        name: "Sikka (Ebony & Maple)",
        price: "Rp 1.198.000",
        imageSrc: "/images/hero5/h5-7.png",
        imageWidth: 70.49,
        imageHeight: 100,
        imageMarginTop: "mt-5",
      },
      {
        name: "Lore Walnut",
        price: "Rp 1.280.000",
        imageSrc: "/images/hero5/h5-8.png",
        imageWidth: 113,
        imageHeight: 55,
        imageMarginTop: "mt-10",
      },
      {
        name: "Way Kambas Limited Edition",
        price: "Rp 1.170.000",
        imageSrc: "/images/hero5/h5-9.png",
        imageWidth: 57.18,
        imageHeight: 100,
        imageMarginTop: "mt-4",
      },
    ],
  },
];

export default function Hero5() {
  return (
    <section className="body-font my-32">
      <div className="grid md:grid-cols-3 px-4">
        {seriesData.map((series, index) => (
          <div key={index}>
            <h2
              className={`${taviraj.className} text-2xl md:text-[36px] text-mygray ml-10 mb-12`}
            >
              <span className="underline underline-offset-8">{series.title.split(" ")[0]}</span>{" "}
              {series.title.split(" ").slice(1).join(" ")}
            </h2>
            {series.items.map((item, idx) => (
              <div key={idx} className="flex mb-8">
                <div
                  className="w-[131px] h-[131px] bg-myPink transition-all duration-1000 ease-in-out hover:scale-95 hover:shadow-[0_0_8px_6px_rgb(216,71,39)]"
                >
                  <Image
                    width={item.imageWidth}
                    height={item.imageHeight}
                    alt={item.name}
                    src={item.imageSrc}
                    className={`mx-auto ${item.imageMarginTop}`}
                  />
                </div>
                <div className="mt-4">
                  <h3
                    className={`${taviraj.className} text-2xl text-mygray ml-6 w-[190px]`}
                  >
                    {item.name}
                  </h3>
                  {item.originalPrice ? (
                    <>
                      <p
                        className={`${taviraj.className} text-[#222222] relative inline-block ml-6`}
                      >
                        <span className="absolute inset-0 border-b-2 border-red-600 transform -translate-y-1/2"></span>
                        {item.originalPrice}
                      </p>
                      <p
                        className={`${taviraj.className} text-lg md:text-[28px] text-[#222222] ml-6`}
                      >
                        {item.price}
                      </p>
                    </>
                  ) : (
                    <p
                      className={`${taviraj.className} text-lg md:text-[28px] text-[#222222] ml-6`}
                    >
                      {item.price}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center my-4 mx-auto">
        <div className="flex-grow h-px bg-gray-400"></div>
        <button
          className={`${taviraj.className} md:w-[272px] md:h-[68px] text-[20px] hover:text-2xl mx-4 px-4 py-2 hover:border-2 border border-red-500 text-red-500`}
        >
          See More
        </button>
        <div className="flex-grow h-px bg-gray-400"></div>
      </div>
    </section>
  );
}
