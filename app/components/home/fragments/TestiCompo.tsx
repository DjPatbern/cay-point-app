import { noto } from "@/app/utils/Fonts";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface TestiCompProps {
  testiName: string;
  testiImage: string;
}

const TestiComp: React.FC<TestiCompProps> = ({ testiName, testiImage }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, [AOS]);
  return (
    <div className="md:flex justify-between md:gap-20 gap-8">
      <div className="text-left w-full ">
        <h1 className="md:text-4xl text-[#d3f0fc] 2xl:text-[3.375rem] 2xl:leading-[5.7rem] 2xl:tracking-[-0.07rem] text-2xl font-semibold md:leading-[3.8rem]  leading-10 tracking-[-0.029rem] md:tracking-[-0.05rem] md:mb-4 2xl:mb-6 mb-3">
          {testiName}
        </h1>
        <p
          className={`${noto} md:text-xl 2xl:text-3xl 2xl:leading-[3rem] 2xl:tracking-[-0.03rem] text-base md:leading-8 leading-7 tracking-[-0.011rem] md:tracking-[-0.02rem] md:mb-14 2xl:mb-[5.25rem] mb-10`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <button className="blackbtn text-[#d3f0fc] flex py-2 2xl:py-3 2xl:px-12 px-8 items-center gap-4 2xl:gap-6 rounded-3xl bg-[#010101] md:text-lg 2xl:text-[1.688rem] 2xl:leading-[3rem] 2xl:tracking-[-0.02rem] 2xl:rounded-full text-base font-semibold leading-7 md:leading-8 tracking-[-0.011rem] md:tracking-[-0.016rem]">
          See Hospitals
        </button>
      </div>

      <div className="flex 2xl:justify-end justify-center w-full md:mt-0 mt-12">
        <Image
          className="object-contain 2xl:w-[52rem] rounded-lg"
          data-aos="zoom-in-down"
          src={testiImage}
          alt="tick"
          width={556}
          height={456}
        />
      </div>
    </div>
  );
};

export default TestiComp;
