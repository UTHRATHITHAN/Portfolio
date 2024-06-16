"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {  SiLeetcode } from "react-icons/si";
import {  FaLinkedin } from "react-icons/fa6";
import { BsGithub,BsTwitterX } from 'react-icons/bs';
import { GoArrowUpRight } from 'react-icons/go';
import { LiaDownloadSolid } from "react-icons/lia";
import { IoMailOutline } from "react-icons/io5";
import { CONSTANTS } from '@/utils/portfolioData'

export default function AboutMe() {
    const router = useRouter();
    const [toggleState, setToggleState] = useState({
        hobby: false,
        AOI: false,
        leetcode: false,
        gfg: false
    })
    const [active, setActive] = useState<null | string>(null)


    function handleToggleStateChange(name:string, value:boolean) {
        const obj = {
            hobby: false,
            AOI: false,
            leetcode: false,
            gfg: false
        }
        setActive(name)
        setToggleState({
            ...obj,
            [name]: value
        })

        if (name === active) {
            setActive(null)
            setToggleState({
                ...obj,
                [name]: false
            })
        }
    }

    return (
        <section className='px-4 my-20 '>
            <h2 className='text-4xl md:text-7xl font-semibold  font-satoshi  '>About Me</h2>
            <p className='mt-5  text-zinc-500 indent-10 '>I&apos;m <span className='text-white font-medium'>uthrathithan</span> , a recent <span className='text-white  font-medium'>Master of Computer Application - MCA</span> graduate with a passion for software development. I specialize in Full stack Development and am proficient in technologies across <span className='text-white  font-medium'>frontend,</span> &nbsp;
                <span className='text-white font-medium '>backend,</span>&nbsp;
                <span className='text-white font-medium'> databases.</span> </p>


            <div className=' w-full grid grid-cols-12 md:grid-rows-10 grid-rows-20  gap-x-1 gap-y-1 rounded-md  md:mb-0 border border-zinc-900 bg-transparent mt-10 p-5 h-fit md:h-[300px]' onMouseLeave={() => setToggleState({
                hobby: false,
                AOI: false,
                leetcode: false,
                gfg: false
            })}>

                <div className='col-span-12   md:col-span-6 row-span-1 h-12 rounded-md px-2 flex justify-center items-center bg-zinc-900 gap-x-5 cursor-pointer'>
                    <span className="relative flex h-3 w-3 justify-center items-center">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                    </span>
                    Currently Learning -&nbsp; {CONSTANTS.CURRENTLY_LEARNING}
                </div>

                <Link href={CONSTANTS.GITHUB_LINK} target='_blank' className={`${toggleState.hobby || toggleState.AOI || toggleState.leetcode || toggleState.gfg ? "md:hidden" : "md:block"} col-span-6  col-start-7 row-start-2 row-span-4 h-24  md:col-span-3 md:col-start-10 md:row-start-1 md:row-span-4  rounded-md bg-zinc-900 gap-x-5 cursor-pointer`}>
                    {/* Github */}
                    <div className='h-full w-full flex justify-center items-center' >
                        <BsGithub className='size-8' />
                    </div>

                </Link>

                <Link href={CONSTANTS.LINKEDIN_LINK} target='_blank' className={`${toggleState.hobby || toggleState.AOI || toggleState.leetcode || toggleState.gfg ? "md:hidden" : "md:block"} col-span-6 col-start-1 row-start-2 row-span-4   h-24 md:col-span-3 md:col-start-7 md:row-start-1  md:row-span-4  rounded-md bg-zinc-900  gap-x-5 cursor-pointer`}>
                    {/* Linkedin */}
                    <div className='h-full w-full flex justify-center items-center' >
                        <FaLinkedin className='size-8' />

                    </div>
                </Link>

                <div className='hidden md:block row-start-3 col-span-3  row-span-4  rounded-md bg-zinc-900 cursor-pointer' onClick={() => handleToggleStateChange("AOI", true)}>
                    <div className='w-full h-full flex justify-center items-center'>
                        Area of Interests
                    </div>
                </div>



                <div className='hidden md:block row-start-7 col-start-4 col-span-3  row-span-4  rounded-md bg-zinc-900 cursor-pointer' onClick={() => handleToggleStateChange("hobby", false)}>
                    <div className='h-full w-full flex justify-center items-center'>
                        Hobbies
                    </div>
                </div>

                {
                    toggleState.hobby &&
                    <div className='row-start-1 row-span-10 col-start-7 col-span-6 bg-zinc-900 rounded-md p-3 border border-zinc-900'>
                       <p>During my free time , I play games like</p>
                    </div>
                }

                <div className=' row-start-10 col-start-1 row-span-4 col-span-6 h-24 md:row-start-3 md:col-start-4 md:col-span-3 md:row-span-5   flex justify-center items-center rounded-md bg-zinc-900 cursor-pointer' onClick={() => router.push('now')}>
                    <span>Now!</span>
                 
                </div>
                {
                    toggleState.AOI &&
                    <div className='row-start-1 row-span-10 col-start-7 col-span-6 bg-zinc-900 rounded-md p-3 flex justify-around flex-col outline outline-[0.1px] outline-blue-200' >
                        <div className='gap-y-3 flex flex-col'>
                            <p className='font-medium'>Technical</p>
                            <div className='flex flex-warp gap-x-3'>
                                <span className='w-fit px-2 py-1 rounded-md border border-zinc-600'>DevOps</span>
                                <span className='w-fit px-2 py-1 rounded-md border border-zinc-600'>Cloud</span>
                                <span className='w-fit px-2 py-1 rounded-md border border-zinc-600'>React Native</span>
                            </div>

                        </div>
                        <div className='gap-y-3 flex flex-col'>
                            <p className='font-medium'>Non-Technical</p>
                            <div className='flex flex-warp gap-x-3'>
                                <span className='w-fit px-2 py-1 rounded-md border border-zinc-600'>Gaming</span>
                                <span className='w-fit px-2 py-1 rounded-md border border-zinc-600'>Sports</span>
                            </div>

                        </div>
                    </div>
                }

                <div className={`${toggleState.hobby || toggleState.AOI || toggleState.leetcode || toggleState.gfg ? "hidden" : "block"} outline outline-[0.1px] outline-blue-200 row-start-7 col-start-1 row-span-2 col-span-12 h-12 md:row-start-5  md:col-start-7 md:col-span-6  md:row-span-2 flex justify-around items-center rounded-md bg-zinc-900 cursor-pointer group`} >
                    Resume
                    <a href={CONSTANTS.GOOGLE_DRIVE_VIEW} target='_blank'>
                        < GoArrowUpRight className='size-6 group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition ease-in duration-100' />
                    </a>
                    <a href={CONSTANTS.GOOGLE_DRIVE_DOWNLOAD} target='_blank'>
                        <LiaDownloadSolid className='size-6  group-hover:translate-y-[2px] transition ease-in duration-100' />
                    </a>
                </div>

                <a href={CONSTANTS.TWITTER_LINK} target='_blank' className={`${toggleState.hobby || toggleState.AOI || toggleState.leetcode || toggleState.gfg ? "hidden" : "block"} row-start-14 col-start-1 row-span-4 col-span-6 h-24 md:row-start-7 md:col-span-3  md:row-span-5 flex justify-center items-center rounded-md bg-zinc-900 cursor-pointer`} >
                    <BsTwitterX className='size-8' />
                </a>

                <a href={CONSTANTS.LEETCODE_LINK} target='_blank' className=' row-start-14 col-start-7 row-span-4 col-span-6 h-24 md:row-start-7 md:col-start-1 md:col-span-3  md:row-span-7 flex justify-center items-center rounded-md bg-zinc-900 cursor-pointer' >
                    <SiLeetcode className='size-8' />
                </a>
                <a href={CONSTANTS.MAIL_ID} className={`${toggleState.hobby || toggleState.AOI || toggleState.leetcode || toggleState.gfg ? "hidden" : "block"} row-start-10 col-start-7 row-span-4 col-span-6 h-24 md:row-start-7 md:col-start-7 md:col-span-3  md:row-span-5 flex justify-center items-center rounded-md bg-zinc-900 cursor-pointer`} >
                    <IoMailOutline className='size-8' />
                </a>
            </div>
        </section>
    )
}
