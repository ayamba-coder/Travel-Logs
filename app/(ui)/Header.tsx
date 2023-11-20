"use client";
import { useState } from "react";
import Link from "next/link";
import Logo from "../../public/logo.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { MdAttachEmail } from "react-icons/md";

import { useInView } from "react-intersection-observer";

import { DevicePhoneMobileIcon, ClockIcon } from "@heroicons/react/24/solid";
import {
  acme_latin,
  inter_latin,
  lusitana_latin,
  roboto_latin,
  titillium_web_latin,
} from "./fonts";
export const Header = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
    onChange: (inView) => {
      console.log(inView);
    },
  });
  const [toggler, setToggler] = useState(false);
  const checkPath = usePathname();
  return (
    <>
      <nav
        className={clsx(" bg-white", {
          hidden:
            checkPath === "/dashboard" ||
            checkPath === "/dashboard/invoices" ||
            checkPath === "/dashboard/customers",
        })}
      >
        <div
          ref={ref}
          className={`${titillium_web_latin.className} hidden px-10  items-center gap-10 justify-end text-white w-full h-14 bg-no-repeat opacity-90  bg-[#183650] sm:flex`}
        >
          <h5 className="text-sm flex items-center gap-1">
            <DevicePhoneMobileIcon width={17} className="text-blue-400" />
            Whatsapp: +1(515) 442-5937
          </h5>
          <Link
            href="./"
            className="hover:border-red-900 hover:border-b transition-all ease-in hover:text-yellow-500"
          >
            <MdAttachEmail className="text-blue-400 inline mr-1" />
            info@travelogs.com
          </Link>

          <h5 className="text-sm flex gap-1">
            <ClockIcon width={17} className="text-blue-400" />
            Mon — Sat: 9AM — 6PM
          </h5>
        </div>
        <div
          className={`fixed z-50 w-full bg-white  px-3  py-2  border-b  ${
            inView
              ? "md:max-w-6xl md:translate-x-1/3 md:right-1/3 md:bg-transparent lg:mt-24 "
              : "top-0"
          }`}
        >
          <div className="flex items-center justify-between h-24">
            <button
              data-drawer-target="logo-sidebar"
              data-drawer-toggle="logo-sidebar"
              aria-controls="logo-sidebar"
              type="button"
              className="inline-flex items-center p-2 text-sm text-brand-bg rounded-lg md:hidden  focus:outline-none"
              onClick={() => setToggler(true)}
            >
              <svg
                className="w-8 h-8 text-black font-extrabold"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                ></path>
              </svg>
            </button>
            <Link href="/">
              <span className="self-center p-0 font-extrabold tablet:text-3xl whitespace-nowrap dark:text-white">
                <Image src={Logo} alt="logo" className="h-full" height={150} />
              </span>
            </Link>
            <ul
              className={`hidden md:flex  ${
                inView && "text-white"
              } mt-8  lg:gap-16 `}
            >
              <Link
                href="/"
                className={`${lusitana_latin.className} text-slate-950 border-b-4 text-opacity-200 flex text-lg font-extrabold mr-5 border-solid   border-b-[#335de9] py-3`}
              >
                Home
              </Link>
              <Link
                href="/"
                className={`${lusitana_latin.className} flex text-lg  font-extrabold mx-18 border-solid hover:border-b hover:border-b-[#f777f0] py-3`}
              >
                Our Services
              </Link>
              <Link
                href="/"
                className={`${lusitana_latin.className} flex ml-2 text-lg  font-extrabold lg:mx-10 border-solid hover:border-b hover:border-b-[#f777f0] py-3`}
              >
                Track Shipment
              </Link>
              <Link
                href="/"
                className={`${lusitana_latin.className} flex ml-2 text-lg  font-extrabold mr-20 border-solid hover:border-b hover:border-b-[#f777f0] py-3`}
              >
                Inquiries
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
