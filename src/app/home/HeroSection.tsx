"use client"

import React from 'react'
import Link from 'next/link';
import { GoArrowUpRight } from "react-icons/go";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Button } from '@/components/ui/moving-border';
import { CONSTANTS } from '@/utils/portfolioData'

export default function HeroSection() {

  return (
    <section className=' grid place-content-center h-screen px-4'>
      <h2 className="text-3xl w-full text-transparent bg-clip-text font-extrabold bg-gradient-to-r from-white to-sky-500/10 relative">
      <svg width={70} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1283 132" fill="white" className='-left-1 -bottom-1 fill-white absolute'><path d="M1282.46 5.79c-.91-3.88-5.18-6.65-9.04-5.54-104.37 29.02-193.78 56.87-361.6 74.53-268.41 28.16-539.6 14.6-803.08-26.38C94.9 47.97-.34 26.24.08 41.38c-1.56 14.21 19.47 12.91 29.6 17.24 32.82 8.6 66.1 15.33 99.4 21.81 238.99 44.43 482.98 55.29 725.63 49.01 92.37-4.11 185.68-9.96 275.51-33.09 18.68-6.31 42.79-9.21 55.18-25.89 6.76-13.28-12.41-21.16-13.83-6.12-17.69 11.67-39.31 15.61-59.45 21.34-114.56 25.18-245.31 30.46-361.99 30.36-191.39.45-383.13-10.13-572-42.21 277.31 36.42 560.77 44.96 837.82 2.23 104.21-15.4 195.11-42.74 260.97-61.22a7.57 7.57 0 0 0 5.54-9.05Z" ></path></svg>

        Hey,
      </h2>
      <h2 className="mt-2 text-3xl w-full text-transparent bg-clip-text font-extrabold bg-gradient-to-r from-white to-sky-500/10 ">
        I&apos;m  Uthrathithan
      </h2>

      <h2 className="text-3xl w-full text-transparent bg-clip-text font-extrabold bg-gradient-to-r from-blue-300 to-violet-500 ">
        Fullstack Developer
      </h2>

      <div className='font-semibold text-zinc-600  text-base w-full mt-6 sm:flex sm:flex-col sm:w-10/12' >
        <span> Hi, I am Uthrathithan, Junior full-stack developer.</span> <span className=''> I love to learn new things every now and then. I am a big fan of <span className='text-white  font-medium'> Tailwind CSS,</span> <span className='text-white  font-medium'> React Js,</span><span className='text-white font-medium'> Next Js</span> and <span className='text-white  font-medium'>Node Js.</span>
        </span>
      </div>



      <button className='h-10 w-32 mt-10 text-black bg-white rounded-md  '>
        <Link href={CONSTANTS.GOOGLE_DRIVE_VIEW} target='_blank' className='flex justify-start pl-6 items-center relative group'>
          <span>Resume</span>
          < GoArrowUpRight className=' size-4 absolute right-5  group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition ease-in duration-100' />
        </Link>
      </button>

      <Button
        as="div"
        borderRadius="1rem"
        duration={2800}
        containerClassName='h-14  mt-10 md:w-6/12 w-8/12  border-1 border-zinc-800 text-white bg-black  rounded-md  '
        className="flex justify-around items-center"
        borderClassName="bg-gradient-to-r from-blue-300 to-violet-500 "
      >

        <Link href={CONSTANTS.GITHUB_LINK} target='_blank'  >
          <BsGithub className='size-5 cursor-pointer  hover:size-5' />
        </Link>

        <Link href={CONSTANTS.LINKEDIN_LINK} target='_blank'  >
          <FaLinkedin className='size-5 cursor-pointer  hover:size-5'/>
        </Link>

        <Link href={CONSTANTS.MAIL_ID} target='_blank'  >
          <MdEmail className='size-5 cursor-pointer  hover:size-5'/>
        </Link>
      </Button>
    </section>
  )
}
