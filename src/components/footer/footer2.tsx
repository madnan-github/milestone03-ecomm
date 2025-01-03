import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Taviraj } from 'next/font/google';

const taviraj = Taviraj({ subsets: ['latin'], weight: ['400', '700'] });

export default function Footer2() {
  return (
    <div className="w-full md:w-[1440px] bg-btn text-white px-6 sm:px-10 lg:px-20 py-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Column 1 */}
      <div className='mx-auto'>
        <Image
          alt="logo"
          width={178}
          height={22}
          src="/images/footer/f-logo.png"
          className="mb-6 transition-all duration-500 hover:scale-110"
        />
        <p className={`${taviraj.className} text-lg leading-loose`}>Address</p>
        <p className={`${taviraj.className} px-5 md:px-0 leading-relaxed`}>
          Store & Office
          <br />
          Jl. Setrasari Kulon III, No. 10-12, Sukarasa, Sukasari, Bandung, Jawa
          Barat, Indonesia 40152
        </p>
        <p className={`${taviraj.className} text-lg leading-loose mt-4`}>Office Hour</p>
        <p className={`${taviraj.className} leading-relaxed`}>
          Monday - Sunday
          <br />
          10.00 - 18.00
        </p>
      </div>

      {/* Column 2 */}
      <div>
        <h2 className={`${taviraj.className} text-xl mb-6`}>
          <span className="underline underline-offset-8">Get i</span>n touch
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className={`${taviraj.className} text-base`}>Phone</p>
            <p className={`${taviraj.className} text-base`}>Service Center</p>
            <p className={`${taviraj.className} text-base`}>Customer Service</p>
          </div>
          <div>
            <p className={`${taviraj.className} text-sm`}>
              <Link href="/">022-20277564</Link>
            </p>
            <p className={`${taviraj.className} text-sm`}>
              <Link href="/">0811-233-8899</Link>
            </p>
            <p className={`${taviraj.className} text-sm`}>
              <Link href="/">0811-235-9988</Link>
            </p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 mt-6">
          <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full">
            <Link href="/">
              <FaFacebookF className="text-btn w-4 h-4 hover:animate-spin" />
            </Link>
          </div>
          <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full">
            <Link href="/">
              <FaInstagram className="text-btn w-4 h-4 hover:animate-spin" />
            </Link>
          </div>
          <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full">
            <Link href="/">
              <FaTwitter className="text-btn w-4 h-4 hover:animate-spin" />
            </Link>
          </div>
          <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full">
            <Link href="/">
              <FaYoutube className="text-btn w-4 h-4 hover:animate-spin" />
            </Link>
          </div>
        </div>
      </div>

      {/* Column 3 */}
      <div>
        <h2 className={`${taviraj.className} text-xl mb-6`}>
          <span className="underline underline-offset-8">Usef</span>ul Links
        </h2>
        <ul className="space-y-2">
          <li>
            <Link href="/" className={`${taviraj.className} text-sm`}>
              Warranty & Complaints
            </Link>
          </li>
          <li>
            <Link href="/" className={`${taviraj.className} text-sm`}>
              Order & Shipping
            </Link>
          </li>
          <li>
            <Link href="/" className={`${taviraj.className} text-sm`}>
              Tracking Order
            </Link>
          </li>
          <li>
            <Link href="/" className={`${taviraj.className} text-sm`}>
              About Us
            </Link>
          </li>
          <li>
            <Link href="/" className={`${taviraj.className} text-sm`}>
              Repair
            </Link>
          </li>
          <li>
            <Link href="/" className={`${taviraj.className} text-sm`}>
              Terms
            </Link>
          </li>
          <li>
            <Link href="/" className={`${taviraj.className} text-sm`}>
              FAQ
            </Link>
          </li>
        </ul>
      </div>

      {/* Column 4 */}
      <div>
        <h2 className={`${taviraj.className} text-xl mb-6`}>
          <span className="underline underline-offset-8">Camp</span>aign
        </h2>
        <ul className="space-y-2">
          <li>
            <Link href="/" className={`${taviraj.className} text-sm`}>
              Mengenal Arti Cukup
            </Link>
          </li>
          <li>
            <Link href="/" className={`${taviraj.className} text-sm`}>
              Tell Your Difference
            </Link>
          </li>
          <li>
            <Link href="/" className={`${taviraj.className} text-sm`}>
              Waykambas
            </Link>
          </li>
          <li>
            <Link href="/" className={`${taviraj.className} text-sm`}>
              Rebrand
            </Link>
          </li>
          <li>
            <Link href="/" className={`${taviraj.className} text-sm`}>
              Gallery
            </Link>
          </li>
          <li>
            <Link href="/" className={`${taviraj.className} text-sm`}>
              Singo
            </Link>
          </li>
          <li>
            <Link href="/" className={`${taviraj.className} text-sm`}>
              Rakai
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
