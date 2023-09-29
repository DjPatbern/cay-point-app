import React, { useState } from "react";
import Image from "next/image";
import TestiComp from "./TestiCompo";

enum ActiveComponent {
  Shanice = "Shanice",
  Bernard = "Bernard",
  Joynice = "Joynice",
  Patrick = "Patrick",
}

const Testimonials = () => {
  const [activeComponent, setActiveComponent] = useState<ActiveComponent>(
    ActiveComponent.Shanice
  );

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case ActiveComponent.Shanice:
        return <TestiComp testiName="Shanice" testiImage="/images/woman1.jpg" />;
      case ActiveComponent.Bernard:
        return <TestiComp testiName="Bernard" testiImage="/images/man1.jpg"/>;
      case ActiveComponent.Joynice:
        return <TestiComp testiName="Joynice" testiImage="/images/woman2.jpg" />;
      case ActiveComponent.Patrick:
        return <TestiComp testiName="Patrick" testiImage="/images/man2.jpg"/>;
      default:
        return null;
    }
  };
  return (
    <div className="md:py-16 pt-12 pb-8 lg:px-20 px-4 2xl:px-[7.5rem] 2xl:py-24 explore-div">
      <h1 className="md:text-3xl 2xl:text-[2.8rem] text-lg font-medium md:leading-[3.25rem] 2xl:leading-[4.9rem] leading-8 md:tracking-[-0.04rem] 2xl:tracking-[-0.06rem] tracking-[-0.016rem] m-auto text-center md:mb-10 2xl:mb-[3.8rem] mb-6 px-4">
        Explore Testimonials
      </h1>
      <div className=" flex gap-1 lg:justify-center justify-between lg:w-auto w-full items-center md:mb-20 2xl:mb-[7.5rem] mb-10">
        {/* <div className="flex md:gap-0 gap-[3.5rem] items-center justify-center  md:mb-0 mb-6"> */}
          <div
            className={`${
              activeComponent === ActiveComponent.Shanice &&
              "bg-[#d3f0fc] text-custom-dark-blue   rounded-lg"
            } py-2 cursor-pointer md:px-6 px-1 2xl:py-[1.125rem] 2xl:px-9 explore-div flex flex-col gap-2 2xl:gap-3 items-center text-center justify-center hover:border border-[#d3f0fc] hover:rounded-lg`}
            onClick={() => setActiveComponent(ActiveComponent.Shanice)}
          >
            <Image
              className="md:w-14 w-6 2xl:w-12 rounded-lg object-contain"
              src="/images/woman1.jpg"
              alt="tick"
              width={32}
              height={32}
            />
            <p className="md:text-xl text-base 2xl:text-3xl 2xl:leading-[3.375rem] 2xl:tracking-[-0.031rem] explore-text font-medium md:leading-8 leading-7 tracking-[-0.011rem] md:tracking-[-0.02rem]">
              Shanice
            </p>
          </div>
          <div>
            
          </div>
          <div
            className={`${
              activeComponent === ActiveComponent.Bernard &&
              "bg-[#d3f0fc] text-custom-dark-blue  rounded-lg "
            } py-2 cursor-pointer md:px-6 px-1 2xl:py-[1.125rem] 2xl:px-9 explore-div flex flex-col gap-2 2xl:gap-3 items-center text-center justify-center hover:border border-[#d3f0fc] hover:rounded-lg`}
            onClick={() => setActiveComponent(ActiveComponent.Bernard)}
          >
            <Image
              className="md:w-14 w-6 2xl:w-12 rounded-lg object-contain"
              src="/images/man1.jpg"
              alt="tick"
              width={32}
              height={32}
            />
            <p className="md:text-xl text-base 2xl:text-3xl 2xl:leading-[3.375rem] 2xl:tracking-[-0.031rem] explore-text font-medium md:leading-8 leading-7 tracking-[-0.011rem] md:tracking-[-0.02rem]">
              Bernard
            </p>
          </div>
          <div>
            
          </div>
        {/* </div> */}

        {/* <div className="flex md:gap-0 gap-[3.5rem] items-center justify-center   "> */}
          <div
            className={`${
              activeComponent === ActiveComponent.Joynice &&
              "bg-[#d3f0fc] text-custom-dark-blue  rounded-lg"
            } py-2 cursor-pointer md:px-6 px-1 2xl:py-[1.125rem] 2xl:px-9 explore-div flex flex-col gap-2 2xl:gap-3 items-center text-center justify-center hover:border border-[#d3f0fc] hover:rounded-lg`}
            onClick={() => setActiveComponent(ActiveComponent.Joynice)}
          >
            <Image
              className="md:w-14 w-6 2xl:w-12 rounded-lg object-contain"
              src="/images/woman2.jpg"
              alt="tick"
              width={32}
              height={32}
            />
            <p className="md:text-xl text-base 2xl:text-3xl 2xl:leading-[3.375rem] 2xl:tracking-[-0.031rem] explore-text font-medium md:leading-8 leading-7 tracking-[-0.011rem] md:tracking-[-0.02rem]">
              Joynice
            </p>
          </div>
          <div>
            
          </div>
          <div
            className={`${
              activeComponent === ActiveComponent.Patrick &&
              "bg-[#d3f0fc] text-custom-dark-blue  rounded-lg"
            } py-2 cursor-pointer md:px-6 px-1 2xl:py-[1.125rem] 2xl:px-9 explore-div flex flex-col gap-2 2xl:gap-3 items-center text-center justify-center hover:border border-[#d3f0fc] hover:rounded-lg`}
            onClick={() => setActiveComponent(ActiveComponent.Patrick)}
          >
            <Image
              className="md:w-14 w-6 2xl:w-12 rounded-lg object-contain"
              src="/images/man2.jpg"
              alt="tick"
              width={32}
              height={32}
            />
            <p className="md:text-xl text-base 2xl:text-3xl 2xl:leading-[3.375rem] 2xl:tracking-[-0.031rem] explore-text font-medium md:leading-8 leading-7 tracking-[-0.011rem] md:tracking-[-0.02rem]">
              Patrick
            </p>
          </div>
        {/* </div> */}
      </div>
      <div>{renderActiveComponent()}</div>
    </div>
  );
};

export default Testimonials;