"use client";
import { useState } from "react";
import Link from "next/link";
import Logo from "../../public/logo.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";
export const Header = () => {
  const [toggler, setToggler] = useState(false);
  const checkPath = usePathname();
  return (
    <>
      <nav
        className={clsx(
          "fixed top-0 z-50 w-full border-b bg-gray-900 border-gray-700",
          {
            hidden:
              checkPath === "/dashboard" ||
              checkPath === "/dashboard/invoices" ||
              checkPath === "/dashboard/customers",
          }
        )}
      >
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
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
                className="w-8 h-8 text-white font-extrabold"
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
            <Link href="/" className="flex ml-2 md:mr-24">
              <span className="self-center p-0 font-extrabold tablet:text-3xl whitespace-nowrap dark:text-white">
                <Image src={Logo} alt="logo" className="h-full" height={130} />
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
