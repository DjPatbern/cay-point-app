"use client";
import React, { FC, useEffect } from "react";
import Hospital from "@/app/components/hospitalComp/HospitalDetails";
import { useAuth } from "@/app/context/Auth";
import { useRouter } from "next/navigation";

interface pageProps {
  params: { id: string };
}

const EachHospital: FC<pageProps> = ({ params }) => {
  const router = useRouter();
  const { user }: any = useAuth();

  useEffect(() => {
    if (!user) {
      router.push("/pages/auth");
    }
  }, [user,router]);
  return (
    <>
      <Hospital />
    </>
  );
};

export default EachHospital;
