"use client";
import { useEffect, useState } from "react";
import NewsLetter from "@/app/components/commons/NewsLetter";
import Footer from "@/app/components/commons/Footer";
import { Header } from "@/app/components/commons/Header";
import { noto } from "@/app/utils/Fonts";
import axios from "axios";
import Loader from "../commons/Loader";

interface Provider {
  id: number;
  name: string;
  state: {
    id: number;
    name: string;
  };
  address: string;
  tier_id: number;
  phone_number: string;
  type: { id: number; name: string };
}

const Hospital = () => {
  const [hospitals, setHospitals] = useState<Provider[]>([]);
  const [pathname, setPathname] = useState("");

  useEffect(() => {
    setPathname(window.location.pathname);
    const apiUrl = "https://api.reliancehmo.com/v3/providers";

    // Make a GET request to the API
    axios
      .get(apiUrl)
      .then((response) => {
        // Handle the API response data here
        setHospitals(response.data.data);
      })
      .catch((error) => {
        // Handle any errors that occur
        console.error("Error:", error);
      });
  }, [hospitals, pathname]);
  const splitPath = pathname.split("/");
  const selectedHospital = hospitals?.find(
    (hospital) => hospital?.id === Number(splitPath[3])
  );

  return (
    <div className="max-w-[156.25rem] bg-custom-dark-blue text-[#d3f0fc]">
      <div>
        <Header />
      </div>

      <div className="pt-10 2xl:pt-[3.75rem]">
        <div className=" text-center">
          <h1
            className={`${noto}  text-2xl mb-4 md:text-4xl font-semibold tracking-[-0.02rem] 2xl:text-[3.4rem] 2xl:tracking-[-0.03rem]`}
          >
            {hospitals?.length !== 0 && (
              <>
                <span>{selectedHospital?.name}</span>
              </>
            )}
          </h1>
        </div>
      </div>

      <div className="px-1 py-5 md:mx-14 mx-2 md:my-10 rounded-xl bg-[#d3f0fc] mb-10">
        {hospitals?.length === 0 ? (
          <Loader />
        ) : (
          <div className="mt-5 text-custom-dark-blue   text-left m-auto">
            <div
              className={`py-5 lg:px-6 px-5 2xl:py-[1.9rem] 2xl:px-8 md:flex gap-7 items-center justify-center`}
            >
              <div className="gap-5 flex flex-col ">
                <p
                  className={`font-bold  text-xl   tracking-[-0.016rem] leading-8  2xl:text-[1.7rem] 2xl:leading-[3rem] 2xl:tracking-[-0.02rem]`}
                >
                  State:{" "}
                  <span className="font-medium">
                    {selectedHospital?.state.name}
                  </span>
                </p>

                <p className=" font-bold text-xl 2xl:text-4xl mt-[1px] 2xl:mt-1 4xl:mt-2">
                  Address:{" "}
                  <span className="font-medium">
                    {selectedHospital?.address}
                  </span>
                </p>
              </div>
              <div className="gap-5 flex flex-col ">
                <p className="text-xl tracking-[-0.016rem] font-bold leading-8  2xl:text-[1.7rem] 2xl:leading-[3rem] 2xl:tracking-[-0.02rem]">
                  Call line:{" "}
                  <span className="font-medium">
                    {selectedHospital?.phone_number}
                  </span>
                </p>

                <p className="text-xl font-bold tracking-[-0.016rem] leading-8  2xl:text-[1.7rem] 2xl:leading-[3rem] 2xl:tracking-[-0.02rem]">
                  Center Type:{" "}
                  <span className="font-medium">
                    {selectedHospital?.type.name}
                  </span>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <NewsLetter />

      <Footer />
    </div>
  );
};

export default Hospital;
