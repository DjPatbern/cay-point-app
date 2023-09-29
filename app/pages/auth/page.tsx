"use client"
import { Header } from '@/app/components/commons/Header'
import Signup from '@/app/components/commons/Signup'
import { useAuth } from '@/app/context/Auth';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

const Auth = () => {
  const router = useRouter();
  const { user }: any = useAuth();

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user,router]);
  return (
    <div className="max-w-[156.25rem] bg-custom-dark-blue text-[#d3f0fc]">
      <div>
        <Header />
      </div>
      <div>
        <Signup/>
      </div>
      
    </div>
  )
}

export default Auth
