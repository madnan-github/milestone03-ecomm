"use client";

import { Sheet, SheetContent, SheetTrigger, SheetDescription } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { LuUsers } from "react-icons/lu";
import { TfiSearch } from "react-icons/tfi";
import { Taviraj } from "next/font/google";

const taviraj = Taviraj({ subsets: ['latin'], weight: ['400', '700'] });

export default function Navbar() {
  let navItems = [
    {
      name: "Watches",
      link: "/product",
    },
    {
      name: "Eyewear",
      link: "/eyewear", // Update this link to point to the EyewearPage
    },
    {
      name: "Accessories",
      link: "/accesseries",
    },
    {
      name: "News",
      link: "/news",
    },
  ];

  return (
    <div className="w-full md:w-[1300px] md:h-[108px] mx-auto flex p-5 flex-col lg:flex-row items-center mb-24">
      {/* logo */}
      <Link href={'/'} className="flex font-medium items-center text-gray-900 mb-4 md:mb-0 md:ml-5">
        <Image
          alt="logo"
          width={178}
          height={22}
          src={("/images/header/logo.png")}
          className="ml-2 transition-all duration-1000 ease-in-out hover:scale-110"
        />
      </Link>
      <nav className="hidden md:block mx-auto items-center text-base mr-36">
        <ul className="flex items-center text-base justify-between space-x-6 mygray hover:text-black">
          {
            navItems.map((item, i) => (
              <li key={i} className={`${taviraj.className} text-[20px] text-gray-600 hover:text-black hover:border-b-4 hover:border-myYellow`}>
                <Link href={item.link}>{item.name}</Link> {/* Update the Link component to use item.link */}
              </li>
            ))
          }
        </ul>
      </nav>
      <div className="flex mr-4 space-x-8">
        <Link href={'/'}><TfiSearch className="w-6 md:w-[32px] h-[32px] text-mygray" /></Link>
        <Link href={'/'} className={`${taviraj.className} text-[18px] flex text-mygray mt-2`}>
          <LuUsers className={`w-[24px] h-[24px] mr-3 text-mygray`} />
          Log In
        </Link>
        <div className="w-9 h-9 md:w-[46px] md:h-[46px] rounded-full bg-myPink mt-[-3px]">
          <LiaShoppingBagSolid className="w-6 h-6 md:w-[24px] md:h-[24px] mt-1 ml-1 md:mt-2 md:ml-3" />
        </div>
      </div>
      {/* sheet */}
      <Sheet>
        <SheetTrigger className="text-[20px] font-bold mr-80 mt-[-35px] md:hidden ">
          <Menu />
        </SheetTrigger>
        <SheetContent>
          <ul className="block items-center text-base justify-between space-x-6 mygray hover:text-black">
            {
              navItems.map((item, i) => (
                <li key={i} className={`${taviraj.className} text-[22px] hover:border-b-4 hover:border-myYellow`}>
                  <Link href={item.link}>{item.name}</Link> {/* Update the Link component to use item.link */}
                </li>
              ))
            }
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
}
