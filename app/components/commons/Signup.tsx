"use client";
import { auth } from "@/app/config/Config";
import { useAuth } from "@/app/context/Auth";
import Image from "next/image";
import React, { useState } from "react";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [asLogin, setAsLogin] = useState(false);
  const { signInWithGoogle, register, loading, error, login, forgotPasswordHandler } = useAuth();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // TOOGLE SHOW PASSWORD
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };



  return (
    <div className="lg:pt-16 xl:px-[19.3rem] 2xl:pt-24 2xl:pb-[7.5rem] 4xl:px-[29rem]  px-4 lg:pb-20 pt-10 pb-12">
      <div
        className={`bg-[#d3f0fc] md:p-12 py-8 px-4 flex  flex-col items-start md:gap-10 gap-5 rounded-xl  w-full  2xl:p-[4.5rem] 2xl:gap-[3.8rem]`}
      >
        <div className="md:mb-10  mb-4 m-auto">
          <h2 className="  text-[#010101] text-xl md:text-3xl font-medium leading-[3.25rem] tracking-[-0.0393rem] 2xl:text-5xl 2xl:leading-[4.9rem] 2xl:tracking-[-0.06rem]">
            {asLogin ? "Login Now" : "Register Now"}
          </h2>
          {error && <p className="text-red-500 font-bold">{error}</p>}

          {!asLogin && (
            <p className="mt-3 text-custom-dark-blue">
              Already have an account?{" "}
              <span
                className="underline font-semibold cursor-pointer"
                onClick={() => setAsLogin(!asLogin)}
              >
                {" "}
                Login
              </span>
            </p>
          )}
        </div>

        <>
          <div className=" w-full mb-6">
            <button
              className="flex py-[0.625rem] outline-none bg-custom-white px-[2.4rem] sign-up-btn 2xl:py-[1rem] 2xl:px-6  w-full justify-center items-center gap-4 border border-[#A9A9A9]  rounded-lg"
              onClick={signInWithGoogle}
            >
              <Image
                className="object-contain 2xl:w-9"
                src="/images/google.png"
                alt="tick"
                width={24}
                height={24}
              />
              <p className=" 2xl:text-[1.6875rem] 2xl:leading-[3rem] 2xl:tracking-[-0.02rem] text-[#010101] font-semibold leading-8  tracking-[-0.016rem] text-lg">
                Sign up with Google
              </p>
            </button>
          </div>
          <div className="m-auto w-full border-b border-[#A9A9A9]"></div>
          <p
            className={`bg-[#d3f0fc] m-auto 2xl:text-[1.6875rem] 2xl:leading-[3rem] 2xl:tracking-[-0.002rem] md:mt-[-3.5rem] 2xl:mt-[-5.2rem] mt-[-2.2rem] px-[0.8rem] $ mb-6 text-[#686868] text-lg font-semibold leading-8 tracking-[-0.016rem]`}
          >
            Or
          </p>
        </>

        <div className="w-full">
          <input
            type="email"
            placeholder="Email"
            name="email"
            id="email"
            className="py-[0.625rem] text-custom-dark-blue 2xl:py-[1rem] 2xl:px-6 2xl:placeholder:text-2xl 2xl:placeholder:leading-10 2xl:tracking-[-0.02rem] w-full px-4 inline-flex justify-center items-center gap-[0.625rem] border border-[#A9A9A9] placeholder:text-[#868686] placeholder:font-medium placeholder:leading-[1.6875rem] outline-none placeholder:tracking-[-0.011rem] rounded-lg"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className="relative w-full">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            name="password"
            id="password"
            className="py-[0.625rem] text-custom-dark-blue 2xl:py-[1rem] 2xl:px-6 2xl:placeholder:text-2xl 2xl:placeholder:leading-10 2xl:tracking-[-0.02rem] w-full px-4 inline-flex justify-center items-center gap-[0.625rem] border border-[#A9A9A9] placeholder:text-[#868686] placeholder:font-medium placeholder:leading-[1.6875rem] outline-none placeholder:tracking-[-0.011rem] rounded-lg"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer focus:outline-none"
          >
            <Image
              className="object-contain"
              src="/images/eye.png"
              alt="tick"
              width={20}
              height={20}
            />
          </button>
        </div>
        {asLogin ? (
          <button
            disabled={email === "" || password === ""}
            onClick={() => login(email, password)}
            className="blackbtn flex m-auto justify-center py-2 px-6 md:px-32 2xl:text-[1.688rem] 2xl:leading-[3rem] 2xl:tracking-[-0.02rem] 2xl:rounded-full 2xl:py-3 2xl:px-12 rounded-full bg-[#010101] text-sm md:text-lg font-semibold leading-7 md:leading-8 tracking-[-0.005rem] md:tracking-[-0.01575rem] text-custom-white md:mt-0 mt-5"
          >
            {loading ? "Logging..." : "Login"}
          </button>
        ) : (
          <button
            disabled={email === "" || password === ""}
            onClick={() => register(email, password)}
            className="blackbtn flex m-auto justify-center py-2 px-6 md:px-32 2xl:text-[1.688rem] 2xl:leading-[3rem] 2xl:tracking-[-0.02rem] 2xl:rounded-full 2xl:py-3 2xl:px-12 rounded-full bg-[#010101] text-sm md:text-lg font-semibold leading-7 md:leading-8 tracking-[-0.005rem] md:tracking-[-0.01575rem] text-custom-white md:mt-0 mt-5"
          >
            {loading ? "Creating..." : "Create Account"}
          </button>
        )}
        <div className="m-auto cursor-pointer">
            <p className="text-custom-dark-blue underline text-lg font-medium" onClick={() => forgotPasswordHandler(email)}>Forget Password?</p>
        </div>
        <div className="m-auto">
          {asLogin && (
            <p className="text-custom-dark-blue">
              Do not have an account?{" "}
              <span
                className="underline font-semibold cursor-pointer"
                onClick={() => setAsLogin(!asLogin)}
              >
                {" "}
                Sign Up
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signup;
