"use client";
import styles from "@/app/(ui)/home.module.css";
import AcmeLogo from "@/app/(ui)/acme-logo";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { lusitana_latin, roboto_latin } from "./(ui)/fonts";
import Link from "next/link";
import Image from "next/image";

import BannerGuy from "../public/banner_guy.webp";
import BannerGuy4 from "../public/banner4.webp";
import BannerGuy3 from "../public/banner3.webp";
import BannerGuy5 from "../public/banner5.jpg";
import signature from "../public/signature.png";
import DelDetail from "../public/INTERNATIONAL-DELIVERY-Detail-Page-5-2.svg";
import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/24/solid";
import Marquee from "react-fast-marquee";
import { useState } from "react";

export default function Page() {
  const [open, setOpen] = useState(true);
  const [open1, setOpen1] = useState(false);

  const [open2, setOpen2] = useState(false);

  return (
    <>
      <main className="mt-24 flex flex-col p-2 md:p-3 md:flex-row grow">
        <div className="flex grow  justify-between  md:flex-row flex-col-reverse">
          <div className="flex flex-col justify-center gap-6 rounded-lg md:mt-6 px-6 py-0  md:px-20">
            <h1
              className={`${lusitana_latin.className} text-2xl md:text-3xl lg:text-4xl lg:leading-10`}
            >
              <strong className={` text-blue-900`}>
                Trusted Courier Provider
              </strong>
            </h1>
            <p
              className={` text-lg  md:text-xl leading-normal text-gray-800 ${roboto_latin.className}`}
            >
              Send parcels to over 180 countries and territories worlwide with
              price comparison on some of the biggest parcel couriers and the
              ability to seamlessly switch providers if you need
            </p>
            <Link
              href="/login"
              className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
            >
              <span>Track Now</span> <ArrowRightIcon className="w-5 md:w-6" />
            </Link>
          </div>

          <Image
            width={900}
            height={800}
            src={BannerGuy}
            alt="screenshot of dashboard project showing desktop and mobile versions"
            className="md:w-2/4 self-center hidden md:block"
          />
          <Image
            height={800}
            src={BannerGuy3}
            alt="screenshot of dashboard project showing desktop and mobile versions"
            className=" m-0 md:hidden p-0  block"
          />
        </div>
      </main>
      <section className="flex flex-col">
        <h1
          className={`${lusitana_latin.className} text-center text-4xl md:text-5xl md:leading-10 mt-10 font-extrabold px-2`}
        >
          <strong className={` text-blue-900 font-extrabold`}>
            Built-in features for our services
          </strong>
        </h1>
        <div className="flex flex-col md:grid md:grid-cols-2 md:p-5 gap-20 md:gap-0 md:items-center md:mt-10 mt-10">
          <Image
            src={DelDetail}
            alt="delivery-details"
            className=" max-w-full md:ml-8 p-4"
          />
          <div className={`flex flex-col gap-y-8 ${roboto_latin}`}>
            <div>
              <h3 className="px-4 ">
                <button
                  onClick={() => {
                    setOpen(!open);
                    setOpen1(false);
                    setOpen2(false);
                  }}
                  className="flex w-full grow font-bold gap-6 p-4 border-b border-b-sky-500 outline-none text-[#080F2D] focus:outline-none"
                >
                  {open ? (
                    <MinusCircleIcon width={25} className="text-blue-900" />
                  ) : (
                    <PlusCircleIcon width={25} className="text-blue-900" />
                  )}
                  <h3 className="text-base">Best in class global delivery</h3>
                </button>
              </h3>
              <p className={`mt-4 px-7 ${open ? "" : "hidden"}`}>
                We deliver to all corners of the globe, ensuring your parcel
                reaches its destination on time and you can stay up to date with
                its progress with our full tracking and notifications.
              </p>
            </div>
            <div>
              <h3 className="px-4 ">
                <button
                  onClick={() => {
                    setOpen1(!open1);
                    setOpen2(false);
                    setOpen(false);
                  }}
                  className="flex w-full grow font-bold gap-6 p-4 border-b border-b-sky-500 outline-none text-[#080F2D] focus:outline-none"
                >
                  {open1 ? (
                    <MinusCircleIcon width={25} className="text-blue-900" />
                  ) : (
                    <PlusCircleIcon width={25} className="text-blue-900" />
                  )}
                  <h3 className="text-base capitalize">
                    Round the clock support
                  </h3>
                </button>
              </h3>
              <p className={`mt-4 px-7 ${open1 ? "" : "hidden"}`}>
                We have couriers working 24/7, as well as a range of in-night
                logistics services to ensure that every parcel is delivered as
                promised through our door-to-door service.
              </p>
            </div>
            <div>
              <h3 className="px-4 ">
                <button
                  onClick={() => {
                    setOpen2(!open2);
                    setOpen(false);
                    setOpen1(false);
                  }}
                  className="flex w-full grow font-bold gap-6 p-4 border-b border-b-sky-500 outline-none text-[#080F2D] focus:outline-none"
                >
                  {open2 ? (
                    <MinusCircleIcon width={25} className="text-blue-900" />
                  ) : (
                    <PlusCircleIcon width={25} className="text-blue-900" />
                  )}{" "}
                  <h3 className="text-base capitalize">
                    comparison booking platform
                  </h3>
                </button>
              </h3>
              <p className={`mt-4 px-7 ${open2 ? "" : "hidden"}`}>
                Parcel Choice, our intelligent online booking platform will
                protect your business against unexpected price increases,
                drop-in service levels or the sudden withdrawal of specific
                service types. Please contact us to find out more.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center mt-8 mb-4 gap-4 overflow-x-hidden">
        <h1
          className={`${lusitana_latin.className} text-center text-4xl md:text-5xl md:leading-10 mt-10 font-extrabold px-2`}
        >
          <strong className={` text-blue-900 font-extrabold`}>Partners</strong>
        </h1>
        <div className=" border-2 border-l-0 border-r-0 overflow-hidden">
          <Marquee
            className=" overflow-hidden"
            autoFill
            speed={20}
            style={{ width: 1000 }}
          >
            <div className="mx-8">
              <Image
                alt="Unived Satet"
                src="https://parcelmonitorlogistics.com/wp-content/uploads/2020/07/usps.png"
                width={1000}
                height={1000}
                className=" h-full w-full"
                objectFit="cover"
              />
            </div>
            <div className="mx-8">
              <Image
                alt="The guitarist in the concert."
                src="https://parcelmonitorlogistics.com/wp-content/uploads/2020/07/1e.png"
                width={1000}
                className=" h-full w-full"
                height={1000}
              />
            </div>
            <div className="mx-8">
              <Image
                alt="The guitarist in the concert."
                src="https://parcelmonitorlogistics.com/wp-content/uploads/2020/07/1g.png"
                width={1000}
                className=" h-full w-full"
                height={1000}
              />
            </div>
            <div className="mx-8">
              <Image
                alt="The guitarist in the concert."
                src="https://parcelmonitorlogistics.com/wp-content/uploads/2020/07/1aa.png"
                width={1000}
                className=" h-full w-full"
                height={1000}
              />
            </div>
          </Marquee>
        </div>
      </section>
      <section
        className={` ${roboto_latin.className} overflow-hidden flex flex-col bg-gray-900 md:grid-cols-2 md:grid lg:grid lg:grid-cols-4 gap-7 lg:px-24 py-16`}
      >
        <div className="md:col-span-full lg:col-span-2 self-center">
          <h1
            className={`${lusitana_latin.className} text-3xl md:text-5xl md:leading-10 mt-10 font-extrabold px-4`}
          >
            <strong className={`text-white  font-extrabold`}>
              Global Reach
            </strong>
          </h1>
          <p className="text-white ml-6 text-sm md:text-base px-8">
            We provide flexible global deliveries at competitive rates, working
            with the world&lsquo;s leading delivery companies.
          </p>
        </div>

        <div className="mx-4 lg:mx-0 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="p-5">
            <a href="#">
              <h5
                className={`${lusitana_latin.className} mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white`}
              >
                Our Mission
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Travel Logistics(Travel Logs) is committed to being a responsible
              community partner in safety Logistics. Because of this commitment,
              we continue to be one of the safest and most profitable carriers
              in the industry.
            </p>
          </div>
        </div>
        <div className="mx-4 lg:mx-0  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="p-5">
            <a href="#">
              <h5
                className={`${lusitana_latin.className} mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white`}
              >
                Our Vision
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              We have the capabilities to transport a wide array of loads. Our
              fleet is equipped with some of the best equipment in the industry
              to maintain the safety of our staff and cargo, and are manned by
              highly experienced and attentive drivers.
            </p>
          </div>
        </div>
        <div className="mx-4 lg:mx-0 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="p-5">
            <a href="#">
              <h5
                className={`${lusitana_latin.className} mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white`}
              >
                Cost Effective{" "}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              We offer a range of cost-effective options for sending parcels up
              to 30kg. For non time critical parcels, we can deliver in a cost
              efficient way within a window of 1-7 days.
            </p>
          </div>
        </div>
        <div className="mx-4 lg:mx-0 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="p-5">
            <a href="#">
              <h5
                className={`${lusitana_latin.className} mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white`}
              >
                Insights and Visibility{" "}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Our services come with full track and trace options and
              notifications that enable you to view your package at every stage
              of shipment.
            </p>
          </div>
        </div>
        <div className="mx-4  lg:mx-0 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="p-5">
            <a href="#">
              <h5
                className={`${lusitana_latin.className} mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white`}
              >
                Tailored Customs Clearance Assistance{" "}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Our solutions also offer tailored customs clearance and document
              support.
            </p>
          </div>
        </div>
        <div className="mx-4 lg:mx-0 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="p-5">
            <a href="#">
              <h5
                className={`${lusitana_latin.className} mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white`}
              >
                24/7 Support
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Our customers are our number one priority reason we offer the
              best, robust and effective help desk.
            </p>
          </div>
        </div>
      </section>
      <section className="mt-10 flex flex-col md:grid md:grid-cols-2 md:items-center lg:px-36 md:px-10">
        <Image
          src="https://parcelmonitorlogistics.com/wp-content/uploads/2021/11/123.png"
          alt="d"
          width={400}
          height={100}
          className="lg:ml-20"
        />
        <div className="flex flex-col p-2 mt-2">
          <h1
            className={`${lusitana_latin.className} text-4xl md:text-3xl lg:text-4xl lg:leading-10`}
          >
            <strong className={` text-blue-900`}>Travel Logistics </strong>
          </h1>
          <p className={`${lusitana_latin.className} text-`}>
            The more you ship, the more you save! Together,
            <strong
              className={`${lusitana_latin.className} text-lg text-blue-900 mr-1`}
            >
              Travel Logs
            </strong>
            has nearly 11 years combined experience facilitating package
            shipments via all shipment methods. Our service is a great way to
            ship multiple boxes across the country while keeping within your
            budget.
          </p>
          <Image src={signature} alt="signature" width={115} height={80} />
          <p>Jameson Richardson</p>
          <span>Founder & C.E.O</span>
        </div>
      </section>
    </>
  );
}
