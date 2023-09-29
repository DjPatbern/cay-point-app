import { noto } from "@/app/utils/Fonts";

const NewsLetter = () => {
  return (
    <div className="md:px-20 px-4 py-10 2xl:px-[7.5rem] md:pt-16 2xl:pt-24 md:pb-14 2xl:pb-[5.25rem] bg-[#d3f0fc]  w-full">
      <div className="max-w-[156.25rem] text-left lg:flex justify-between w-full">
        <div className="text-custom-dark-blue w-full">
          <h2 className="md:text-3xl text-xl text-center lg:text-left font-semibold leading-[3.25rem] tracking-[-0.04rem] 2xl:text-[2.8rem] 2xl:leading-[4.9rem] 2xl:tracking-[-0.06rem]">
            Sign up for our newsletter
          </h2>
          <div className="flex policy-check md:gap-12 lg:mt-8 lg:justify-start justify-between items-center lg:mb-0 mt-4 mb-8 md:px-0 px-2">
            <div className="flex md:gap-4 gap-3 items-center">
              <input
                type="radio"
                className=" checked:bg-custom-dark-blue"
                id="creatorOption"
                value="creatorOption"
                name="option"
              />
              <label
                htmlFor="creatorOption"
                className="text-lg md:text-xl 2xl:text-3xl  font-semibold leading-8 2xl:leading-[3rem] tracking-[-0.02rem] 2xl:tracking-[-0.03rem]"
              >
                I’m a Doctor
              </label>
            </div>

            <div className="flex md:gap-4 gap-3  items-center">
              <input
                type="radio"
                className=" checked:bg-custom-dark-blue"
                name="option"
                id="promoterOption"
                value="promoterOption"
              />
              <label
                htmlFor="promoterOption"
                className="md:text-xl text-lg 2xl:text-3xl font-semibold leading-8 2xl:leading-[3rem] tracking-[-0.02rem] 2xl:tracking-[-0.03rem]"
              >
                I’m a Patient
              </label>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start w-full">
          <input
            type="text"
            placeholder="Name"
            className={`w-full mb-6 py-4 px-6 2xl:py-6 2xl:px-9 bg-custom-white border border-[#A9A9A9] rounded-lg outline-none placeholder:${noto} placeholder:text-lg 2xl:placeholder:text-[1.7rem] placeholder:leading-8 2xl:placeholder:leading-[3rem] placeholder:tracking-[-0.02rem] 2xl:placeholder:tracking-[-0.02rem]`}
          />
          <input
            type="text"
            placeholder="Email address"
            className={`w-full mb-8 py-4 px-6 2xl:py-6 2xl:px-9 bg-custom-white border border-[#A9A9A9] rounded-lg outline-none placeholder:${noto} placeholder:text-lg 2xl:placeholder:text-[1.7rem] placeholder:leading-8 2xl:placeholder:leading-[3rem] placeholder:tracking-[-0.02rem] 2xl:placeholder:tracking-[-0.02rem]`}
          />
          <button className="block blackbtn rounded-full text-lg font-semibold leading-8 tracking-[-0.01575rem]  px-8 py-2 2xl:py-3 2xl:px-[4.5rem] 2xl:text-[1.688rem] 2xl:leading-[3rem] 2xl:tracking-[-0.02rem] 2xl:rounded-full bg-custom-dark-blue text-custom-white">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;