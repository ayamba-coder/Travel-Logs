"use client";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import {
  lusitana_latin,
  roboto_latin,
  acme_latin,
  titillium_web_latin,
  inter_latin,
} from "./(ui)/fonts";
import Link from "next/link";
import Image from "next/image";
//@ts-ignore
import PureCounter from "@srexi/purecounterjs/purecounter";
import { useEffect } from "react";
import BannerGuy from "../public/banner_guy.webp";
import BannerGuy3 from "../public/banner3.webp";
import signature from "../public/signature.png";
import DelDetail from "../public/INTERNATIONAL-DELIVERY-Detail-Page-5-2.svg";
import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/24/solid";
import styles from "@/app/(ui)/home.module.css";
import Marquee from "react-fast-marquee";
import { useState } from "react";
import { MdForklift, MdClearAll } from "react-icons/md";
import { FiTruck } from "react-icons/fi";
import { FaBox } from "react-icons/fa";

import { useInView } from "react-intersection-observer";

import { Button } from "./(ui)/button";

export default function Page() {
  const [open, setOpen] = useState(true);
  const [open1, setOpen1] = useState(false);
  const { ref, inView, entry } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const [open2, setOpen2] = useState(false);
  useEffect(() => {
    new PureCounter();
  }, []);

  return (
    <div>
      <div className=" lg:relative py-28 h-screen items-center flex flex-col bg-cover bg-bottom bg-repeat bg-[url('https://expressdove.com/wp-content/uploads/2023/06/thumb.jpg')]">
        <h1
          className={`${acme_latin.className} uppercase text-[#ff0c0c] m-8 md:hidden text-4xl leading-10`}
        >
          Welcome To Travel Logs Express
        </h1>
        {/* <Button className="translate-x-full translate-y-56">
          Track Parcel <ArrowRightIcon className="w-5 md:w-6" />
        </Button> */}
      </div>
      {/* <main className=" flex flex-col p-2 md:p-3 md:flex-row grow">
        <div className="flex grow  justify-between  md:flex-row flex-col">
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
              Send parcels to over 30 countries and territories worlwide with
              price comparison on some of the biggest parcel couriers and the
              ability to seamlessly switch providers if you need
            </p>
          </div>

          <Image
            width={500}
            height={500}
            src={BannerGuy}
            alt="happy client"
            className=" self-center "
            priority
          />
          
        </div>
      </main> */}
      <section className="grid lg:grid-cols-2 sm:p-20 lg:gap-20 py-10 max-w-7xl sm:mx-auto">
        <article className="p-4 flex flex-col">
          <div className="w-16 h-1  bg-[#af24c2] mb-4 lg:mb-2 "></div>
          <h2
            className={`${titillium_web_latin.className} text-[#183650] text-3xl lg:text-4xl leading-10`}
          >
            Trusted Courier Provider
          </h2>
          <p
            className={`mt-4 text-lg  md:text-xl leading-normal text-gray-800 ${roboto_latin.className}`}
          >
            TRAVEL LOGS is committed to being a responsible community partner
            and sharing the road with the motoring public in a safe and
            courteous manner. Because of this commitment, Travel LOGS continues
            to be one of the safest and most profitable flatbed carriers in the
            industry. If you have any questions, please contact our Safety
            Department at +1(515) 442-5937 ,Fast and Secure Delivering , 100%
            Guarantee Discrete Shipping
          </p>
          <div>
            <Image
              src={signature}
              alt="signature"
              width={140}
              height={20}
              className="top-0"
            />
            <p>Jameson Richardson</p>
            <span>Founder & C.E.O</span>
          </div>
        </article>
        <article className=" ">
          <Image
            width={500}
            height={500}
            src={BannerGuy}
            alt="happy client"
            className=" self-center p-1"
            priority
          />
        </article>
      </section>
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
            className=" max-w-full md:ml-8"
          />
          <div className={`flex flex-col gap-y-8`}>
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
                  <h4 className={`${inter_latin.className} text-xl`}>
                    Best in class global delivery
                  </h4>
                </button>
              </h3>
              <p
                className={`${inter_latin.className} text-md mt-4 px-7 ${
                  open ? "" : "hidden"
                }`}
              >
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
                  <h4 className={`${inter_latin.className} text-xl`}>
                    Round the clock support
                  </h4>
                </button>
              </h3>
              <p
                className={` ${inter_latin.className} mt-4 px-7 ${
                  open1 ? "" : "hidden"
                }`}
              >
                We have couriers working 24/7, a s well as a range of in-night
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
                  <h4 className={`${inter_latin.className} text-xl`}>
                    Online comparison platform
                  </h4>
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
      <section className="flex flex-col items-center mt-10 sm:mt-0 sm:p-8 mb-2 gap-4 overflow-x-hidden">
        <div className="  overflow-hidden">
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
                className=" h-auto w-auto"
              />
            </div>
            <div className="mx-8">
              <Image
                alt="The guitarist in the concert."
                src="https://parcelmonitorlogistics.com/wp-content/uploads/2020/07/1e.png"
                width={1000}
                className=" h-auto w-auto"
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
        className={` ${roboto_latin.className} hidden overflow-hidden sm:flex flex-col bg-gray-900 md:grid-cols-2 md:grid lg:grid lg:grid-cols-4 gap-7 lg:px-24 py-16`}
      >
        <div className="md:col-span-full lg:col-span-2 self-center">
          <h1
            className={`${lusitana_latin.className} text-3xl md:text-5xl md:leading-10 mt-10 font-extrabold px-4`}
          >
            <strong className={`text-white  font-extrabold`}>
              Global Reach
            </strong>
          </h1>
          <p className="text-white ml-6 text-sm md:text-base ">
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
      {/* <section className="mt-10 flex flex-col md:grid md:grid-cols-2 md:items-center lg:px-36 md:px-10">
        <Image
          src="https://parcelmonitorlogistics.com/wp-content/uploads/2021/11/123.png"
          alt="d"
          width={400}
          height={100}
          className="lg:ml-20 h-auto w-auto"
          priority
        />
        <div className="flex flex-col p-2 mt-2">
          <h1
            className={`${lusitana_latin.className} text-4xl md:text-3xl lg:text-4xl lg:leading-10`}
          >
            <strong className={` text-blue-900`}>Travel Logistics </strong>
          </h1>
          <q className={`${lusitana_latin.className} text-`}>
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
          </q>
          <Image src={signature} alt="signature" width={100} height={50} />
          <p>Jameson Richardson</p>
          <span>Founder & C.E.O</span>
        </div>
      </section> */}
      <section
        className="h-screen w-full bg-yellow-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-none bg-opacity-20 border border-gray-100
 bg-no-repeat bg-bottom  bg-fixed bg-[url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] grid lg:grid-cols-2 sm:p-20 lg:gap-20 py-10 sm:mx-auto overflow-hidden"
      >
        <article className="p-4 flex flex-col">
          <div className="w-16 h-1  bg-[#af24c2] mb-4 lg:mb-2 "></div>
          <h2
            className={`${titillium_web_latin.className} text-[#ff0c0c] text-3xl lg:text-4xl leading-10`}
          >
            WHAT MAKES US SPECIAL?
          </h2>
          <p
            className={`mt-4 text-lg  md:text-xl leading-normal  ${roboto_latin.className} text-white sm:text-black`}
          >
            At Travel LOGS, our customers are our number one priority reason we
            offer the best services to them.
          </p>
          <div className="mt-8 grid sm:grid-cols-3 sm:gap-24 gap-4" ref={ref}>
            <div className="">
              <FaBox size={50} className={` text-blue-900`} />
              <span
                className={`${titillium_web_latin.className} font-extrabold text-white sm:text-black`}
              >
                PACKAGING AND STORAGE
              </span>
            </div>
            <div className="">
              <FiTruck size={50} className={` text-blue-900`} />

              <span
                className={`${titillium_web_latin.className} font-extrabold text-white sm:text-black`}
              >
                LOGISTIC SERVICES
              </span>
            </div>
            <div className="">
              <MdForklift size={50} className={` text-blue-900 `} />

              <span
                className={`${titillium_web_latin.className} font-extrabold text-white sm:text-black`}
              >
                WAREHOUSING SERVICE
              </span>
            </div>
          </div>
        </article>
        <div
          className="flex p-4 m-1 md:rounded-md  bg-blue-900 opacity-80 backdrop-blur-3xl"
          id="stats"
          role="tabpanel"
          aria-labelledby="stats-tab"
        >
          <dl className="grid  grid-cols-2 gap-10 p-4 mx-auto text-gray-900 sm:grid-cols-3  dark:text-white ">
            <div className="flex flex-col items-center justify-center">
              <dt
                className="purecounter mb-2 text-3xl font-extrabold"
                data-purecounter-start="0"
                data-purecounter-end="500000"
                data-purecounter-duration="2"
                data-purecounter-separator="true"
                data-purecounter-currency="+"
              >
                500k
              </dt>
              <dd className="text-gray-500 dark:text-gray-400">
                Shipped Parcels
              </dd>
            </div>
            <div className="flex flex-col items-center justify-center">
              <dt
                className="purecounter mb-2 text-3xl font-extrabold"
                data-purecounter-start="0"
                data-purecounter-end="380"
                data-purecounter-duration="2"
                data-purecounter-separator="true"
                data-purecounter-decimal="0"
                data-purcounter-once="false"
              >
                180
              </dt>
              <dd className="text-gray-500 dark:text-gray-400">Countries</dd>
            </div>
            <div className="flex flex-col items-center justify-center">
              <dt
                className="purecounter mb-2 text-3xl font-extrabold"
                data-purecounter-start="0"
                data-purecounter-end="134"
                data-purecounter-duration="2"
                data-purecounter-separator="true"
              >
                134
              </dt>
              <dd className="text-gray-500 dark:text-gray-400">
                Staff Worlwide
              </dd>
            </div>
            <div className="flex flex-col items-center justify-center">
              <dt
                className="purecounter mb-2 text-3xl font-extrabold"
                data-purecounter-start="0"
                data-purecounter-end="127"
                data-purecounter-duration="2"
                data-purecounter-separator="true"
              >
                127
              </dt>
              <dd className="text-gray-500 dark:text-gray-400">
                Owned Vehicles
              </dd>
            </div>
            <div className="flex flex-col items-center justify-center">
              <dt
                className="purecounter mb-2 text-3xl font-extrabold"
                data-purecounter-start="0"
                data-purecounter-end="910"
                data-purecounter-duration="3"
                data-purecounter-separator="true"
              >
                910
              </dt>
              <dd className="text-gray-500 dark:text-gray-400">Clients</dd>
            </div>
            <div className="flex flex-col items-center justify-center">
              <dt
                className="purecounter mb-2 text-3xl font-extrabold"
                data-purecounter-start="0"
                data-purecounter-end="11"
                data-purecounter-duration="2"
                data-purecounter-separator="true"
              >
                11
              </dt>
              <dd className="text-gray-500 dark:text-gray-400">Partners</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="grid lg:grid-cols-2 sm:p-20 lg:gap-20 py-10 max-w-7xl sm:mx-auto">
        <article className="p-4 flex flex-col sm:order-last">
          <div className="w-16 h-1  bg-[#af24c2] mb-4 lg:mb-2 "></div>
          <h2
            className={`${titillium_web_latin.className} text-[#183650] text-3xl lg:text-4xl leading-10`}
          >
            OUR INSURANCE POLICY
          </h2>
          <p
            className={` line-clamp-[4] sm:line-clamp-[5] mt-4 text-lg  md:text-xl leading-normal text-gray-800 ${roboto_latin.className}`}
          >
            Risks are inevitable ,you shall be receiving constant Emails in
            regards to your products. We offer the Best Protection and delivery
            only for Products which have been Insured for Delivery. You’ll need
            our transport and Package insurance to cover all risks while your
            goods are in transit. This includes physical loss or damage to goods
            during
          </p>
          <Button className="self-start mt-4">
            Read More <ArrowRightIcon className="w-5 md:w-6" />
          </Button>
        </article>
        <article className="">
          <Image
            width={500}
            height={500}
            src="https://images.unsplash.com/photo-1560286171-46e25a646221?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="happy client"
            className=" self-center p-1"
            priority
          />
        </article>
      </section>
      <section>
        <h1
          className={`${lusitana_latin.className} text-center text-4xl md:text-5xl md:leading-10 mt-10 font-extrabold px-2`}
        >
          <strong className={` text-blue-900 font-extrabold`}>
            Board of Directors
          </strong>
        </h1>
        <div className="flex flex-col sm:flex-row items-center sm:gap-x-8 gap-y-10 justify-center mx-auto mt-10 ">
          <div className="flex flex-col justify-center items-center gap-y-2">
            <Image
              src="https://expressdove.com/wp-content/uploads/2023/06/Alain_60_crp-527x527.jpg"
              alt="user_photo"
              className=" w-48 h-48   rounded-full object-cover"
              width={1000}
              height={1000}
            />
            <h1 className={`${acme_latin.className}`}>
              ACCOUNTANT - CELINE MILIMA
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-2">
            <Image
              src="https://images.unsplash.com/photo-1558203728-00f45181dd84?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="user_photo"
              className=" w-48 h-48  rounded-full object-cover"
              width={1000}
              height={1000}
            />
            <h1 className={`${acme_latin.className}`}>
              CONTROLLER - HENRY WATTON
            </h1>
          </div>

          <div className="flex flex-col justify-center items-center gap-y-2">
            <Image
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="user_photo"
              className=" w-48 h-48 rounded-full object-cover"
              width={1000}
              height={1000}
            />
            <h1 className={`${acme_latin.className} uppercase`}>
              Founder- James Richardson
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
}
