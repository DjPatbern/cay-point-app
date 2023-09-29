import Image from "next/image";
import { HowItWorks } from "../../../stores/Data";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HowItWork = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, [AOS]);
  return (
    <div className="  w-full  py-10 md:py-[72px] lg:px-20 px-4  4xl:px-[7.5rem] 2xl:px-[6.5rem] 4xl:py-[6.75rem] 2xl:py-[5.75rem]">
      <div className="md:flex max-w-[156.25rem] m-auto justify-between items-start xl:gap-0 sm:gap-14 ">
        <div className="flex justify-center items-center flex-col">
          <Image
            className="rounded-2xl 4xl:w-[47.8rem] 2xl:w-[37.8rem]"
            data-aos="zoom-in-down"
            src="/images/howwork.jpg"
            alt="video frame"
            width={510}
            height={576}
          />
        </div>
        <div className="text-left md:w-[498px] 4xl:w-[46.7rem] 2xl:w-[36.7rem] 4xl:gap-6 2xl:gap-5 inline-flex flex-col items-start gap-4">
          <h1 className="md:text-4xl text-2xl text-[#d3f0fc] font-semibold mb-[-16px]  md:my-0 mt-10 leading-[42px]  tracking-[-0.456px] md:tracking-[-0.792px] 4xl:text-[3.4rem] 2xl:text-[2.4rem] 4xl:leading-[5.7rem] 2xl:leading-[4.7rem] 4xl:tracking-[-0.07rem] 2xl:tracking-[-0.05rem]">
            How Cay-Point Works
          </h1>
          <div>
            {HowItWorks.map((how) => (
              <div
                key={how.id}
                className="flex my-5 4xl:my-[1.9rem] 2xl:my-[0.9rem]  items-start "
              >
                <Image
                  className="mr-3 lg:w-6 w-5 md:mt-[1px] mt-1 4xl:w-9 2xl:w-8 4xl:h-9 2xl:h-8"
                  src="/images/tick-circle-white.svg"
                  alt="tick"
                  width={24}
                  height={24}
                />
                <p className="md:leading-normal leading-8 font-medium lg:text-xl sm:text-base text-lg tracking-[-0.252px] md:tracking-[-0.38px] 4xl:text-3xl 2xl:text-2xl 4xl:tracking-[-0.04rem] 2xl:tracking-[-0.02rem]">
                  {how.how}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
