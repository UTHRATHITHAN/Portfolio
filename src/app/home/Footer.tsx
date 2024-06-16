import React from 'react'
import { CiLocationArrow1 } from "react-icons/ci";

export default function Footer() {
  return (
    <footer className=' relative w-full h-20 flex flex-col gap-x-5 gap-y-2 justify-center items-center px-4  mt-20 border-t border-t-1 border-zinc-800 text-[11px]  text-zinc-500'>
      <p><strong>2024</strong> - Design and Code by Uthrathithan</p>
      <CiLocationArrow1 className='absolute right-8 rotate-180 sm:size-5	mt-[.5] animate-bounce size-4 cursor-pointer' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
      
    </footer>
  )
}


