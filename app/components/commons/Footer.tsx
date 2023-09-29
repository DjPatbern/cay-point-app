import Image from "next/image";
import Link from "next/link";
import {GiHospitalCross} from "react-icons/gi"
import { MdLocalHospital, MdTipsAndUpdates } from "react-icons/md";


const Footer = () => {
  return (
    <div className=" md:pt-16 md:pb-20 py-12 lg:px-20 4xl:px-[7.5rem] 2xl:px-[6.5rem] 4xl:pt-24 2xl:pt-20 4xl:pb-[7.5rem] 2xl:pb-[6.5rem] px-4 bg-custom-black text-custom-white m-auto">
      <div className="max-w-[156.25rem] m-auto">
        <div className="lg:flex justify-between   items-start lg:gap-0 sm:gap-14  gap-[181.5px] border-b border-custom-white pb-8">
          <div className="flex justify-center items-start">
          <Link href="/" className="flex items-start gap-2 text-xl">
          <GiHospitalCross className="m-auto" /> <p>Cay-Point</p>
        </Link>
          </div>

          <div className="flex  mt-6 mb-10  items-center m-auto lg:m-0 justify-evenly w-28  gap-6 lg:gap-6 lg:w-52 4xl:gap-9 2xl:gap-8">
            <Image
              className=" object-contain cursor-pointer h-[48px] 4xl:w-[3.8rem] 4xl:h-[4.5rem] 2xl:w-14 2xl:h-16 "
              src="/images/Frame29723.svg"
              alt="Cay-Point"
              width={40}
              height={48}
              priority
            />
            <Image
              className=" object-contain cursor-pointer h-[48px] 4xl:w-[3.8rem] 4xl:h-[4.5rem] 2xl:w-14 2xl:h-16 "
              src="/images/insta.svg"
              alt="Cay-Point"
              width={40}
              height={48}
              priority
            />
            <Image
              className=" object-contain cursor-pointer h-[48px] 4xl:w-[3.8rem] 4xl:h-[4.5rem] 2xl:w-14 2xl:h-16 "
              src="/images/twitter.svg"
              alt="Cay-Point"
              width={40}
              height={48}
              priority
            />
            <Image
              className=" object-contain cursor-pointer h-[48px] 4xl:w-[3.8rem] 4xl:h-[4.5rem] 2xl:w-14 2xl:h-16 "
              src="/images/linkin.svg"
              alt="Cay-Point"
              width={40}
              height={48}
              priority
            />
          </div>
          <div className=" flex gap-5 lg:gap-9 m-auto sm:justify-center btn-div lg:m-0 items-center w-full lg:w-auto 4xl:gap-12 2xl:gap-11">
            <button className="bg-custom-black w-full md:w-auto sm-btn  text-custom-white border-custom-white border flex py-[6px] md:px-[24px] px-6 md:rounded-[12px] rounded-[16px] gap-[12px] items-center justify-center text-left 4xl:py-[0.38rem] 4xl:px-6 2xl:px-5 4xl:rounded-[1.1rem] 4xl:gap-[1.1rem] 2xl:gap-[0.8rem]">
            <MdLocalHospital className="text-xl" />
              <p className="flex flex-col items-start gap-[-5px]">
                <span className="lg:text-xs text-[10px] div-text-footer leading-[18px] lg:leading-6  md:tracking-[-0.084px] 4xl:text-lg 2xl:text-base 4xl:leading-[1.7rem] 2xl:leading-[1.5rem]">
                  See available
                </span>

                <span className="lg:text-[18px] text-sm leading-normal  font-medium tracking-[-0.272px] md:tracking-[-0.34px] 4xl:text-[1.7rem] 2xl:text-2xl 4xl:leading-9 2xl:leading-8 4xl:tracking-[-0.03rem] 2xl:tracking-[-0.01rem]">
                  Hospitals
                </span>
              </p>
            </button>
            <button className="bg-custom-black w-full md:w-auto sm-btn text-custom-white border-custom-white border flex py-[6px] md:px-[24px] px-6 md:rounded-[12px] rounded-[16px] gap-[12px] items-center justify-center text-left 4xl:py-[0.38rem] 4xl:px-6 2xl:px-5 4xl:rounded-[1.1rem] 4xl:gap-[1.1rem] 2xl:gap-[0.8rem]">
            <MdTipsAndUpdates className="text-xl" />
              <p className="flex flex-col item-start gap-[-5px]">
                <span className="lg:text-xs text-[10px] leading-[18px]  lg:leading-6 md:tracking-[-0.084px] 4xl:text-lg 2xl:text-base 4xl:leading-[1.7rem] 2xl:leading-[1.5rem]">
                  Read Blog
                </span>
                <span className="lg:text-[18px] text-xs  font-medium leading-normal tracking-[-0.272px] md:tracking-[-0.34px] 4xl:text-[1.7rem] 2xl:text-2xl 4xl:leading-9 2xl:leading-8 4xl:tracking-[-0.03rem] 2xl:tracking-[-0.01rem]">
                  Health Tips
                </span>
              </p>
            </button>
          </div>
        </div>
        <div className="xl:w-[705px] 2xl:w-full md:w-full  w-[290px] sm-foot md:m-0 m-auto items-start md:flex justify-between pt-5 lg:text-left ">
          <div className="flex w-full  justify-between md:hidden my-5">
            <Link href="/pages/contact">
              <p>Contact</p>
            </Link>
            <p>|</p>
            <Link href="/pages/terms">
              <p>Terms of Use</p>
            </Link>
            <p>|</p>
            <Link href="/pages/privacy">
              <p>Privacy Policy</p>
            </Link>
          </div>
          <div className="lg:text-lg text-base lg:font-medium font-normal 2xl:w-full leading-8 tracking-[-0.252px] 4xl:text-[1.7rem] 2xl:text-2xl 4xl:leading-[3rem] 2xl:leading-[2rem] 4xl:tracking-[-0.02rem] md:text-left text-center">
            2023 Cay-Point
          </div>
          <div className="md:flex item-start gap-12 hidden 2xl:justify-end 2xl:w-full">
            <Link href="/pages/contact">
              <p className="4xl:text-[1.7rem] 2xl:text-2xl 4xl:leading-[3rem] 2xl:leading-[2rem] 4xl:tracking-[-0.02rem]">
                Contact
              </p>
            </Link>
            <Link href="/pages/terms">
              <p className="4xl:text-[1.7rem] 2xl:text-2xl 4xl:leading-[3rem] 2xl:leading-[2rem] 4xl:tracking-[-0.02rem]">
                Terms of Use
              </p>
            </Link>
            <Link href="/pages/privacy">
              <p className="4xl:text-[1.7rem] 2xl:text-2xl 4xl:leading-[3rem] 2xl:leading-[2rem] 4xl:tracking-[-0.02rem]">
                Privacy Policy
              </p>
            </Link>
          </div>
          {/* <div className="w-full"></div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;