"use client"
import React from 'react'
import { GoArrowLeft } from "react-icons/go";
import { useRouter } from 'next/navigation';

export default function Now() {
  const router = useRouter();
  return (
    <section className='h-screen grid place-content-center'>
    <GoArrowLeft className='absolute top-8 left-7 size-7 cursor-pointer' onClick={() => router.replace('/')}/>
      <div className='w-full flex justify-center items-center'>
      This page is under Development.
      </div>
    </section>
  )
}

