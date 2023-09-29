import { Header } from "@/app/components/commons/Header";
import Signup from "@/app/components/commons/Signup";
import React from "react";

const page = () => {
  return (
    <div className="max-w-[156.25rem] bg-custom-dark-blue text-[#d3f0fc]">
      <div>
        <Header />
      </div>

      <div className="mt-5 text-center">
        <p className=" text-2xl">
          We just sent a password resent link to your mail.
        </p>
        <p className=" text-xl">Login with new password now.</p>
      </div>

      <div>
        <Signup />
      </div>
    </div>
  );
};

export default page;
