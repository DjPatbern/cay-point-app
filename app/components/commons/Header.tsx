"use client";
import { useAuth } from "@/app/context/Auth";
import Link from "next/link";
import { FC, useState, useEffect } from "react";
import { GiHospitalCross } from "react-icons/gi";

export const Header: FC = () => {
  const { user, logOut }: any = useAuth();
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (user) {
      setIsAuth(true);
    }
  }, [isAuth]);

  

  return (
    <div className="flex justify-between items-end border-[#d3f0fc] border-b w-full py-5 4xl:py-[2.5rem] 2xl:py-[1.5rem] lg:px-20 px-4 4xl:px-[7.5rem] 2xl:px-[6.5rem]">
      <div>
        <Link
          href="/"
          className="flex items-start gap-1 md:gap-2 text-base md:text-xl text-[#d3f0fc] mb-2"
        >
          <GiHospitalCross className="m-auto" /> <p>Cay-Point</p>
        </Link>
      </div>

      <div className="flex items-end gap-2 md:gap-4 text-[#d3f0fc]">
        <Link href="/pages/hospitals">
          <p className="   md:text-lg flex items-center text-sm font-semibold leading-8 tracking-[-0.01575rem] 2xl:text-[1.688rem] 2xl:leading-[3rem] 2xl:tracking-[-0.02rem]">
            Hospitals
          </p>
        </Link>
        <div>
          {isAuth ? (
            <button
              onClick={(e) => {
                e.preventDefault();
                logOut();
                setIsAuth(false);
                location.reload();
              }}
              className="text-custom-dark-blue whitebtn py-[2px] md:py-2 px-[10px] md:px-8 create-btn 2xl:px-12 2xl:py-3 md:text-lg md:flex items-center  2xl:gap-6 text-sm font-semibold leading-8 tracking-[-0.01575rem] 2xl:text-[1.688rem] 2xl:leading-[3rem] 2xl:tracking-[-0.02rem] 2xl:rounded-full  bg-[#d3f0fc] rounded-2xl"
            >
              <p>Logout</p>{" "}
              
            </button>
          ) : (
            <Link
              href="/pages/auth"
              className="text-custom-dark-blue whitebtn py-[2px] md:py-2 px-[10px] md:px-8 create-btn 2xl:px-12 2xl:py-3 md:text-lg md:flex items-center gap-4 2xl:gap-6 text-sm font-semibold leading-8 tracking-[-0.01575rem] 2xl:text-[1.688rem] 2xl:leading-[3rem] 2xl:tracking-[-0.02rem] 2xl:rounded-full  bg-[#d3f0fc] rounded-2xl"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
