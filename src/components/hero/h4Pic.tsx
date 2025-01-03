import React from 'react';
import Image from 'next/image';

const H4Pic = () => {
  return (
<div className=" relative flex flex-col md:flex-row items-center md:items-start">
  {/* Background Pink Box with Floating Images */}
  <div className="absolute w-[280px] md:w-[610px] h-[300px] md:h-[458px] bg-myPink mt-[-50px] md:mt-[-100px] md:ml-[300px]">
    <Image
      width={736}
      height={264}
      alt="floating1"
      src={'/images/hero/v.png'}
      className="ml-10 md:ml-20 mt-[-20px] absolute animate-pulse"
    />
    <Image
      width={736}
      height={264}
      alt="floating2"
      src={'/images/hero/v2.png'}
      className="ml-10 md:ml-20 mt-[20px] absolute animate-pulse"
    />
    <Image
      width={736}
      height={264}
      alt="floating3"
      src={'/images/hero/v3.png'}
      className="ml-10 md:ml-20 mt-[50px] absolute animate-pulse"
    />
    <Image
      width={736}
      height={264}
      alt="floating4"
      src={'/images/hero/v3.png'}
      className="ml-10 md:ml-20 mt-[250px] md:mt-[390px] absolute animate-pulse"
    />
    <Image
      width={736}
      height={264}
      alt="floating5"
      src={'/images/hero/v.png'}
      className="ml-10 md:ml-20 w-full md:mt-[350px] absolute animate-pulse"
    />
  </div>

  {/* Foreground Main Image */}
  <div className=" relative z-10 mt-[-10px] md:mt-[-30px]">
    <Image
      src="/images/hero/h4-1.png"
      width={320}
      height={250}
      alt="main-hero"
      className="md:ml-10 w-[280px] md:w-[610px] h-auto transition-all duration-1000 ease-in-out hover:scale-95 hover:shadow-[0_0_8px_6px_rgb(216,71,39)]"
    />
  </div>
</div>

  );
};

export default H4Pic;
//__________________________________________
// import React from 'react';
// import Image from 'next/image';

// const floatingImages = [
//   { src: '/images/hero/v.png', alt: 'floating1', style: 'ml-10 md:ml-20 mt-[-20px]' },
//   { src: '/images/hero/v2.png', alt: 'floating2', style: 'ml-10 md:ml-20 mt-[20px]' },
//   { src: '/images/hero/v3.png', alt: 'floating3', style: 'ml-10 md:ml-20 mt-[50px]' },
//   { src: '/images/hero/v3.png', alt: 'floating4', style: 'ml-10 md:ml-20 mt-[250px] md:mt-[390px]' },
//   { src: '/images/hero/v.png', alt: 'floating5', style: 'ml-10 md:ml-20 w-full md:mt-[350px]' },
// ];

// const H4Pic = () => {
//   return (
//     <div className="relative flex flex-col md:flex-row items-center md:items-start">
//       {/* Background Pink Box with Floating Images */}
//       <div className="absolute w-[280px] md:w-[610px] h-[300px] md:h-[458px] bg-myPink mt-[-50px] md:mt-[-100px] md:ml-[300px]">
//         {floatingImages.map((image, index) => (
//           <Image
//             key={index}
//             width={736}
//             height={264}
//             alt={image.alt}
//             src={image.src}
//             className={`${image.style} absolute animate-pulse`}
//           />
//         ))}
//       </div>

//       {/* Foreground Main Image */}
//       <div className="relative z-10 mt-[-10px] md:mt-[-30px]">
//         <Image
//           src="/images/hero/h4-1.png"
//           width={320}
//           height={250}
//           alt="main-hero"
//           className="md:ml-10 w-[280px] md:w-[610px] h-auto transition-all duration-1000 ease-in-out hover:scale-95 hover:shadow-[0_0_8px_6px_rgb(216,71,39)]"
//         />
//       </div>
//     </div>
//   );
// };

// export default H4Pic;
