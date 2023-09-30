"use client";
import { useEffect, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import NewsLetter from "@/app/components/commons/NewsLetter";
import Footer from "@/app/components/commons/Footer";
import { Header } from "@/app/components/commons/Header";
import { noto } from "@/app/utils/Fonts";
import axios from "axios";
import Link from "next/link";
import Search from "@/app/components/commons/Search";
import Loader from "@/app/components/commons/Loader";
import { useAuth } from "@/app/context/Auth";
import { useRouter } from "next/navigation";

interface Provider {
  id: number;
  name: string;
  state: {
    id: number;
    name: string;
  };
}

const Hospitals = () => {
  const [hospitals, setHospitals] = useState<Provider[]>([]);
  const [sortedHospitals, setSortedHospitals] = useState<Provider[] | null>(
    null
  );
  const [currentPage, setCurrentPage] = useState(0);
  const router = useRouter();
  const slicer = currentPage + 10;

  const { user }: any = useAuth();

  useEffect(() => {
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

    if (!user) {
      router.push("/pages/auth");
    }
  }, [user, setHospitals, router]);

  const filterArray = (searchTerm: string | any) => {
    return hospitals?.filter((item: any) => {
      for (let key in item) {
        if (
          `${item[key]}`
            .toString()
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        ) {
          return true;
        }
      }
      return false;
    });
  };

  const onSearch = (searchTerm: string | undefined) => {
    setSortedHospitals(filterArray(searchTerm));
    setCurrentPage(0);
  };

  useEffect(() => {
    setSortedHospitals(hospitals);
  }, [hospitals]);

  const pages = 5;
  const pagesNumber = pages;
  const startingOffset = 1;
  const pageNumbers = Array.from(
    { length: pagesNumber },
    (_, index) => currentPage / 10 - startingOffset + index - 1
  );

  return (
    <div className="max-w-[156.25rem] bg-custom-dark-blue text-[#d3f0fc]">
      <div>
        <Header />
      </div>

      <div className="pt-10 2xl:pt-[3.75rem]">
        <div className=" text-center">
          <h1
            className={`${noto}  text-2xl md:text-4xl font-semibold tracking-[-0.02rem] 2xl:text-[3.4rem] 2xl:tracking-[-0.03rem]`}
          >
            All Hospitals
          </h1>
        </div>
      </div>
      <div className="px-1 py-5 md:mx-12 md:my-5 my-8 md:rounded-xl bg-[#d3f0fc]">
        <div className="px-5">
          <Search placeholder="Search Name, City, State" onSearch={onSearch} />
        </div>
        <div  className="text-center py-4">
          <a className=" bg-custom-dark-blue text-[#d3f0fc] py-1 px-2 cursor-pointer rounded-3xl font-semibold" href="https://firebasestorage.googleapis.com/v0/b/berv-care-49a8d.appspot.com/o/csv%2F-hospital(s)-csv?alt=media&token=bae5716c-8f0e-4686-acd9-25fbfaf0985e">DOWNLOAD HOSPITALS LIST</a>
        </div>
        {hospitals?.length !== 0 ? (
          <table className="mt-5 text-custom-dark-blue   text-left m-auto">
            <thead>
              <tr>
                <th>No.</th>
                <th className="px-2">Name</th>
                <th className="px-6 hidden md:block">State</th>
                <th className="pl-2">Details</th>
              </tr>
            </thead>
            <tbody className="">
              {sortedHospitals
                ?.slice(currentPage, slicer)
                .map((hospital: any, index) => (
                  <tr
                  key={index}
                    className={`py-5 lg:px-6 px-5 2xl:py-[1.9rem] 2xl:px-8  border-b border-custom-dark-blue`}
                  >
                    {/* <div className="flex gap-3 2xl:gap-6 items-start cursor-pointer"> */}
                    <td className=" text-lg md:text-xl 2xl:text-4xl">
                      {index + 1}.
                    </td>
                    <td className=" text-lg md:text-xl 2xl:text-4xl px-2">
                      {hospital.name}
                    </td>
                    <td
                      className={` px-6 hidden md:block text-xl font-medium  tracking-[-0.016rem] leading-8  2xl:text-[1.7rem] 2xl:leading-[3rem] 2xl:tracking-[-0.02rem]`}
                    >
                      {hospital.state.name}
                    </td>
                    <td className="text-lg md:text-xl tracking-[-0.016rem] pl-2 leading-8  2xl:text-[1.7rem] 2xl:leading-[3rem] 2xl:tracking-[-0.02rem]">
                      <Link
                        href={`/pages/hospitals/${hospital.id}`}
                        className="text-base"
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        ) : (
          <Loader />
        )}
        {hospitals?.length !== 0 && (
          <div className="flex justify-end md:mr-12 text-custom-dark-blue text-sm font-medium my-4">
            <label className="mx-2">
              Page {currentPage / 10 === 0 ? 1 : currentPage / 10} of{" "}
              {currentPage / 10 + 4}
            </label>
            <button
              className="mx-6"
              onClick={() => setCurrentPage(currentPage - 1 * 10)}
              disabled={currentPage < 1}
            >
              <AiOutlineLeft />
            </button>
            {pageNumbers.map((pageNumber) => (
              <div className="hidden md:block" key={pageNumber}>
                {pageNumber > 0 && (
                  <button
                    className={`mr-5 ${
                      pageNumber === currentPage / 10
                        ? "text-[#d3f0fc] bg-custom-dark-blue px-1 rounded-full"
                        : ""
                    }`}
                    key={pageNumber}
                    onClick={() => setCurrentPage(pageNumber * 10)}
                  >
                    {pageNumber}
                  </button>
                )}
              </div>
            ))}
            {currentPage / 10 < currentPage / 10 + 4 - 2 && (
              <label className="mr-5">
                {currentPage / 10 !== currentPage / 10 + 4 && "..."}
              </label>
            )}
            <label className="mx-2 hidden md:block">
              {currentPage / 10 !== currentPage / 10 + 4 &&
                currentPage / 10 + 4}
            </label>
            <button onClick={() => setCurrentPage(currentPage + 1 * 10)}>
              <AiOutlineRight />
            </button>
          </div>
        )}
      </div>

      <NewsLetter />

      <Footer />
    </div>
  );
};

export default Hospitals;
