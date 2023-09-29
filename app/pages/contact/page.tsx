"use client";

import Footer from "@/app/components/commons/Footer";
import { Header } from "@/app/components/commons/Header";
import NewsLetter from "@/app/components/commons/NewsLetter";
import { noto } from "@/app/utils/Fonts";


const Support: React.FC = () => {
  
  return (
    <div className="max-w-[156.25rem] bg-custom-dark-blue text-custom-white">
      <div>
        <Header/>
      </div>

      <div className="py-5 lg:p-10 lg:pb-0 px-4 2xl:pt-[3.8rem]">
        <div className=" text-center">
          <h1
            className={`${noto} text-[#d3f0fc] text-[1.75rem] md:text-4xl font-semibold tracking-[-0.02rem] 2xl:text-[3.4rem] 2xl:tracking-[-0.03rem]`}
          >
            Support
          </h1>
        </div>
      </div>

      <div className="md:p-20 md:pt-16 px-4 py-5 gap-16 lg:grid grid-cols-3 text-left w-full 2xl:p-[4.5rem] 2xl:gap-24 2xl:px-[7.5rem] 2xl:pt-24 2xl:pb-[7.5rem]">
        <div className="md:p-12 p-5 flex  flex-col col-span-2 items-start md:gap-10 gap-5 rounded-xl bg-[#d3f0fc] w-full  2xl:p-[4.5rem] 2xl:gap-[3.8rem]">
          <h2 className="text-custom-dark-blue text-xl md:text-3xl font-medium leading-[3.25rem] tracking-[-0.0393rem] 2xl:text-5xl 2xl:leading-[4.9rem] 2xl:tracking-[-0.06rem]">
            Need help?
          </h2>
          <div className="md:flex gap-6 w-full">
            <input
              type="text"
              placeholder="First Name"
              className="py-[0.625rem] md:mb-0 mb-5 px-4 2xl:py-[1rem] 2xl:px-6  2xl:placeholder:text-2xl 2xl:placeholder:leading-10 2xl:tracking-[-0.02rem] w-full  inline-flex justify-center items-center gap-[0.625rem] border border-[#A9A9A9] placeholder:text-[#868686] placeholder:font-medium placeholder:leading-[1.6875rem] outline-none placeholder:tracking-[-0.011rem] rounded-lg"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="py-[0.625rem] px-4 2xl:py-[1rem] 2xl:px-6  2xl:placeholder:text-2xl 2xl:placeholder:leading-10 2xl:tracking-[-0.02rem] w-full inline-flex justify-center items-center gap-[0.625rem] border border-[#A9A9A9] placeholder:text-[#868686] placeholder:font-medium placeholder:leading-[1.6875rem] outline-none placeholder:tracking-[-0.011rem] rounded-lg"
            />
          </div>
          <div className="w-full">
            <input
              type="email"
              placeholder="Email"
              className="py-[0.625rem] 2xl:py-[1rem] 2xl:px-6 2xl:placeholder:text-2xl 2xl:placeholder:leading-10 2xl:tracking-[-0.02rem] w-full px-4 inline-flex justify-center items-center gap-[0.625rem] border border-[#A9A9A9] placeholder:text-[#868686] placeholder:font-medium placeholder:leading-[1.6875rem] outline-none placeholder:tracking-[-0.011rem] rounded-lg"
            />
          </div>
          <div className="w-full">
            <input
              type="text"
              placeholder="Country"
              className="py-[0.625rem] 2xl:py-[1rem] 2xl:px-6 2xl:placeholder:text-2xl 2xl:placeholder:leading-10 2xl:tracking-[-0.02rem] w-full px-4 inline-flex justify-center items-center gap-[0.625rem] border border-[#A9A9A9] placeholder:text-[#868686] placeholder:font-medium placeholder:leading-[1.6875rem] outline-none placeholder:tracking-[-0.011rem] rounded-lg"
            />
          </div>

          <div className="w-full">
            <textarea
              placeholder="Your message"
              className="pt-4 pb-10 w-full px-4 2xl:pt-6 2xl:pb-24 2xl:px-6 2xl:text-2xl 2xl:leading-10 2xl:tracking-[-0.02rem] inline-flex justify-center items-center gap-[0.625rem] border border-[#A9A9A9] placeholder:text-[#868686] placeholder:font-medium placeholder:leading-[1.6875rem] outline-none placeholder:tracking-[-0.011rem] rounded-lg"
            />
          </div>
          <button className="blackbtn flex justify-center py-2 px-10 2xl:py-3 2xl:px-12 2xl:text-[1.688rem] 2xl:leading-[3rem] 2xl:tracking-[-0.02rem] 2xl:rounded-full rounded-full bg-custom-dark-blue text-[#d3f0fc] text-base md:text-lg font-semibold leading-8 tracking-[-0.01575rem]">
            Submit
          </button>
        </div>

        <div className=" flex lg:mt-0 md:py-0 py-10 flex-col items-start md:gap-14 gap-7 2xl:gap-[5.25rem]  col-span-1 w-full ">
          <div className="flex items-start gap-1 md:gap-[0.625rem] w-full flex-col md:p-10 p-5 2xl:p-[3.75rem] 2xl:gap-4 rounded-xl border border-[#B7B7B7] bg-[#d3f0fc]">
            <h2 className=" text-xl md:text-3xl 2xl:text-[2.8rem] 2xl:leading-[4.9rem] 2xl:tracking-[-0.06rem] font-medium text-custom-dark-blue leading-[3.25rem] tracking-[-0.0393rem]">
              Email
            </h2>
            <p className=" text-custom-dark-blue text-lg md:text-xl 2xl:text-3xl 2xl:leading-[3.4rem] 2xl:tracking-[-0.03rem] font-medium leading-9 tracking-[-0.02125rem]">
              caypoint@gmail.com
            </p>
          </div>
          <div className="flex items-start gap-1 md:gap-[0.625rem] w-full flex-col md:p-10 p-5 2xl:p-[3.75rem] 2xl:gap-4 rounded-xl border border-[#B7B7B7] bg-[#d3f0fc]">
            <h2 className=" md:text-3xl text-xl 2xl:text-[2.8rem] 2xl:leading-[4.9rem] 2xl:tracking-[-0.06rem] font-medium text-custom-dark-blue leading-[3.25rem] tracking-[-0.0393rem]">
              WhatsApp
            </h2>
            <p className=" text-custom-dark-blue text-lg md:text-xl 2xl:text-3xl 2xl:leading-[3.4rem] 2xl:tracking-[-0.03rem] font-medium leading-9 tracking-[-0.02125rem]">
              +234 9202 182 5346
            </p>
          </div>
        </div>
      </div>

      <NewsLetter />

      <Footer />
    </div>
  );
};

export default Support;
