import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { noto } from "@/app/utils/Fonts";

const TestiWelcome = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, [AOS]);
  return (
    <div>
      <div className="lg:pt-20 lg:pb-4 pt-12 pb-0 text-center flex flex-col items-start 2xl:mt-[6.5rem] 4xl:mt-[7.5rem] 2xl:mb-6 px-4">
        <h1
          className={`${noto} md:text-[2.75rem] text-[#d3f0fc] 2xl:text-[4.125rem] 2xl:tracking-[-0.03rem] text-[1.75rem] md:leading-normal leading-10 font-semibold tracking-[-0.002rem] mb-6 2xl:mb-[1.875rem] m-auto`}
        >
          Testimonials
        </h1>
        <p
          className={`${noto} md:text-xl 2xl:text-3xl 2xl:leading-[3rem] 2xl:tracking-[-0.03rem] text-lg md:leading-8 leading-7 md:tracking-[-0.002rem] tracking-[-0.011rem] md:mb-14 2xl:mb-[5.25rem] mb-10 m-auto`}
        >
          Read testimonials from our users below
          
        </p>
        
      </div>
      <div className="flex mt-5 justify-center md:gap-6 gap-2 2xl:gap-8  md:px-20 2xl:px-[7.5rem] px-0 md:pb-10 pb-8">
        <Image
          className=" object-contain create-img rounded-xl sm:w-[8.3rem] xl:w-[16.4rem] w-[5.48rem] 2xl:w-[19.6rem] 4xl:w-[24.56rem]"
          data-aos="flip-left"
          src="/images/create1.jpg"
          alt="tick"
          width={262}
          height={480}
        />
        <Image
          className=" object-contain create-img rounded-xl sm:w-[8.3rem] xl:w-[16.4rem] w-[5.48rem] 2xl:w-[19.6rem] 4xl:w-[24.56rem]"
          data-aos="flip-right"
          src="/images/create2.jpg"
          alt="tick"
          width={262}
          height={480}
        />
        <Image
          className="object-contain create-img rounded-xl sm:w-[8.3rem] xl:w-[16.4rem] w-[5.48rem] 2xl:w-[19.6rem] 4xl:w-[24.56rem]"
          src="/images/create3.jpg"
          data-aos="flip-left"
          alt="tick"
          width={262}
          height={480}
        />
        <Image
          className="object-contain hidden md:block create-img rounded-xl sm:w-[8.3rem] xl:w-[16.4rem] w-[5.48rem] 2xl:w-[19.6rem] 4xl:w-[24.56rem]"
          data-aos="flip-right"
          src="/images/create4.jpg"
          alt="tick"
          width={262}
          height={480}
        />
      </div>
    </div>
  );
};

export default TestiWelcome;
