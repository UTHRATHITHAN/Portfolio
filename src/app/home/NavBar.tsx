"use client"
import React from 'react'
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoDocument } from "react-icons/io5";
import useNavStore from '@/store/NavStore';

export default function NavBar() {
    const { setIsNavOpen, isNavOpen } = useNavStore((state: any) => {
        return { setIsNavOpen: state.changeNavOpen, isNavOpen: state.isNavOpen }
    })

    return (
        <nav className=' fixed top-0  h-16   flex items-center justify-between px-5 border-zinc-800 border-b-1 border-b '>
            <p className='text-md font-space'>Uthrathithan</p>
            {
                isNavOpen ?
                    <RxCross1 className='cursor-pointer size-6 z-20 text-white md:hidden' onClick={() => setIsNavOpen(!isNavOpen)} /> : <RxHamburgerMenu className='cursor-pointer  size-6 z-10 text-white md:hidden' onClick={() => setIsNavOpen(!isNavOpen)} />
            }
            {
                isNavOpen && <div className='absolute top-0 left-0 h-screen w-full bg-black md:hidden z-10 transition-all ease-in duration-1000 grid place-content-center justify-items-center gap-y-7'>
                    <button className='h-12 w-36 bg-zinc-800 rounded-3xl flex gap-x-5 px-4 items-center'>
                    <BsGithub   className='size-5' />
                        <span className='text-zinc-400'>Github</span>
                    </button>
                    <button className='h-12 w-36 bg-zinc-800 rounded-3xl flex gap-x-6 px-4 items-center'>
                        < FaLinkedin  className='size-5' />
                        <span className='text-zinc-400'>LinkedIn</span>
                    </button>

                    <button className='h-12 w-36 bg-zinc-800 rounded-3xl flex gap-x-6 px-4 items-center'>
                        < MdEmail className='size-5' />
                        <span className='text-zinc-400 '>Email</span>
                    </button>
                    <button className='h-12 w-44 text-black bg-white rounded-3xl flex gap-x-6 px-4 items-center'>
                        < IoDocument  className='size-5' />
                        <span >My resume</span>
                    </button>
                </div>
            }
        </nav>
     
    )
}
