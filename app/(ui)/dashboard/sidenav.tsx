import Link from "next/link";
import NavLinks from "@/app/(ui)/dashboard/nav-links";
import AcmeLogo from "@/app/(ui)/acme-logo";
import { PowerIcon } from "@heroicons/react/24/outline";
import logo from "../../../public/logo.png";
import Image from "next/image";

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-blue-200 shadow-2xl">
      <Link href="/" className="self-center">
        <div className="w-32 text-white md:w-40">
          <Image
            src={logo}
            alt="Acme Logo"
            className="h-full w-full"
            width={1000}
            height={1000}
          />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2  md:flex-col md:space-x-0 md:space-y-2 md:grow-0">
        <NavLinks />
        <form className="md:py-52 md:self-center">
          <button className="w-full flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-red-500 text-white p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
