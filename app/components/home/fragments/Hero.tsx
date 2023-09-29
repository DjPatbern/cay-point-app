import { noto } from "@/app/utils/Fonts";
import Image from "next/image";
import Link from "next/link";
import { MdLocalHospital, MdTipsAndUpdates } from "react-icons/md";

export const Hero = () => {
  return (
    <div className="w-full py-5 4xl:py-[2.5rem] 2xl:py-[1.5rem] lg:px-20 px-4 4xl:px-[7.5rem] 2xl:px-[6.5rem]">
      <div className=" md:flex max-w-[156.25rem] m-auto items-start justify-between  md:py-[59px] 2xl:py-[4.4rem] 2xl:gap-[8.8rem] 4xl:py-24 4xl:gap-[9.8rem] xl:gap-0 sm:gap-14  text-left py-10 flex-row-reverse">
        <div className="md:mb-0 mb-12 flex justify-center items-center flex-col">
          <Image
            className=" md:w-[30.3125rem] 4xl:w-[45.5rem] 2xl:w-[35.5rem] rounded-md"
            src="/images/womanhero.jpg"
            alt="app hero"
            priority
            width={485}
            height={459}
          />
        </div>
        <div className="md:w-[531px] 4xl:w-[49.75rem] 2xl:w-[39.75rem]">
          <h1
            className={`${noto.className} lg:text-[2.75rem] text-[#d3f0fc] 4xl:text-[4.1rem] 2xl:text-[3.1rem] text-[1.75rem]  font-semibold leading-10 lg:leading-normal lg:tracking-[-0.02rem] 4xl:tracking-[-0.03rem]`}
          >
            Locate The Health Center, Closest To You.
          </h1>
          <p
            className={`lg:${noto.className} lg:text-xl 4xl:text-3xl 2xl:text-2xl  text-base font-medium lg:font-normal leading-[1.6875rem] lg:leading-8 4xl:leading-[3rem] 2xl:leading-[2rem] tracking-[-0.011rem] mt-5 lg:tracking-[-0.02rem] 4xl:tracking-[-0.03rem] 2xl:tracking-[-0.02rem] `}
          >
            Are you a patient struggling to find a good hospital to
            get treatment? Or perhaps you&lsquo;re new in a location{" "}
            and can't find a hospital for checkups?
          </p>
          <p
            className={`lg:${noto.className} lg:text-xl 4xl:text-3xl 2xl:text-2xl  text-base font-medium lg:font-normal leading-[1.6875rem] lg:leading-8 4xl:leading-[3rem] 2xl:leading-[2rem] tracking-[-0.011rem] mt-5 lg:tracking-[-0.02rem] 4xl:tracking-[-0.03rem] 2xl:tracking-[-0.02rem] `}
          >
            Welcome to <span className="font-semibold text-[#d3f0fc]">Cay-Point</span>, the
            game-changer in the world of Health Care.
          </p>
          <div className="mt-14 flex lg:gap-8 4xl:gap-12 2xl:gap-11  gap-6 btn-div w-full md:w-auto md:items-start ">
            <Link href="/" className=" w-full md:w-auto">
              <button className="bg-custom-black w-full md:w-auto text-[#d3f0fc] flex py-[0.375rem] md:px-6 px-5 4xl:px-9 2xl:px-8 4xl:py-[0.6rem] 2xl:py-[0.5rem] sm-btn md:rounded-xl rounded-2xl 4xl:rounded-[1.1rem] gap-[0.6875rem] items-center justify-center text-left">
                <MdLocalHospital className="text-xl" />
                <p className="flex flex-col items-start gap-[-0.3125rem] 4xl:gap-[-0.5rem] 2xl:gap-[-0.4rem]">
                  <span className="lg:text-sm 4xl:text-[1.3rem] 2xl:text-[1rem] text-[0.625rem] leading-6 4xl:leading-9 2xl:leading-8 4xl:tracking-[-0.008rem] 2xl:tracking-[-0.007rem]  md:tracking-[-0.00525rem]">
                    See available
                  </span>

                  <span className="lg:text-xl text-base  font-medium leading-normal tracking-[-0.017rem] md:tracking-[-0.02125rem] 4xl:text-3xl 2xl:text-2xl 4xl:tracking-[-0.03rem] 2xl:tracking-[-0.02rem]">
                    Hospitals
                  </span>
                </p>
              </button>
            </Link>
            <Link href="/" className=" w-full md:w-auto">
              <button className="bg-custom-black w-full md:w-auto text-[#d3f0fc] flex 4xl:px-9 2xl:px-8 4xl:py-[0.6rem] 2xl:py-[0.5rem] py-[0.375rem] md:px-6 px-5 sm-btn md:rounded-xl rounded-2xl 4xl:rounded-[1.1rem] gap-[0.6875rem] items-center justify-center text-left">
                <MdTipsAndUpdates className="text-xl" />
                <p className="flex flex-col items-start gap-[-0.3125rem] 4xl:gap-[-0.5rem] 2xl:gap-[-0.4rem]">
                  <span className="lg:text-sm text-[0.625rem] leading-6 4xl:text-[1.3rem] 2xl:text-[1rem]  4xl:leading-9 2xl:leading-8 4xl:tracking-[-0.008rem] 2xl:tracking-[-0.007rem]  md:tracking-[-0.00525rem]">
                    Read Blog
                  </span>
                  <span className="lg:text-xl text-sm div-text-play font-medium leading-normal tracking-[-0.017rem] md:tracking-[-0.02125rem] 4xl:text-3xl 2xl:text-2xl 4xl:tracking-[-0.03rem] 2xl:tracking-[-0.02rem]">
                    Health Tips
                  </span>
                </p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
