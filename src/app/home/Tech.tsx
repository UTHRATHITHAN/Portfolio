"use client"

import React, { useState } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { skills } from '@/utils/portfolioData'

export default function Tech() {
    const [toggleSkill, setToggleSkill] = useState<{
        status: boolean,
        domainID: null | number,
        cardID: null | number
    }>({
        status: false,
        domainID: null,
        cardID: null
    })
    const [skillArr, setSkillArr] = useState([])

    function handleToggleSkill(domainID: number, cardID: number, skillArr: []) {
        setToggleSkill({
            status: !toggleSkill.status,
            domainID: domainID,
            cardID: cardID
        })
        setSkillArr(skillArr)
    }
    console.log(skillArr)
    return (
        <>
            <h2 className='text-4xl md:text-7xl font-semibold font-satoshi px-4 mb-5'>Tech</h2>
            <div className=' flex flex-col w-full h-fit  mb-40 sm:pt-5 px-5 sm:divide-y divide-zinc-700 '>
                {
                    skills.map((skill, i, arr) =>
                        <div className={`flex w-full flex-col sm:flex-row sm:divide-x  bg-[#17181B]  divide-zinc-700 h-full py-5 px-4 ${i === 0 && "rounded-t-md"} ${i === arr.length - 1 && "rounded-b-md"}`} key={i}>

                            <p className='text-lg w-full sm:w-3/12 sm:text-center  font-satoshi font-medium my-auto'>{skill.title}</p>
                            <div className='my-3 w-full sm:w-10/12 flex flex-wrap  h-full  sm:px-8 gap-x-5  items-center justify-start gap-y-5'>
                                {
                                    skill.skills.map((skill: any, skillIndex: number) =>
                                        <React.Fragment key={skillIndex}>
                                            <div className={` ${skill.length > 1 && typeof skill[0] === "string" ? "h-16 px-5" : "size-16 "}  bg-zinc-800 rounded-md flex justify-center items-center ${toggleSkill.status && toggleSkill.domainID === i && toggleSkill.cardID === skillIndex && ""} ${skill.length > 1 && "mr-5"}`} >
                                                {
                                                    skill.length > 1 ?
                                                 
                                                        <div className={`flex gap-x-5 w-fit relative `}>
                                                            {skill[0]}
                                                            {
                                                                toggleSkill.status && toggleSkill.domainID === i && toggleSkill.cardID === skillIndex  ?
                                                                    <RxCross2 className='  absolute -right-10 -inset-y-2/2   mt-1 cursor-pointer flex gap-x-5' onClick={() => handleToggleSkill(0, 0, [])} />
                                                                    :
                                                                    <IoIosArrowForward className=' absolute -right-10 -inset-y-2/2   mt-1 cursor-pointer flex gap-x-5' onClick={() => handleToggleSkill(i, skillIndex, skill)} />
                                                            }
                                                        </div>
                                                        :
                                                        skill[0]
                                                }
                                            </div>
                                            {
                                                toggleSkill.status && toggleSkill.domainID === i && toggleSkill.cardID === skillIndex && skill.map((ele:any, index2: number) =>
                                                    <div className={`relative  ${skill.length > 1 && typeof skill[0] === "string" ? "h-16  px-5 " : "size-16"} transition ease-in-out duration-300  bg-zinc-800 rounded-md flex justify-center items-center ${index2 > 0 && "outline outline-1 outline-blue-400"}  gap-x-3 ${index2 === 0 && "hidden"}`} key={index2} >

                                                        <div className={`flex gap-x-3  ${toggleSkill.status && ""}`}>
                                                            {ele}
                                                          
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        </React.Fragment>
                                    )
                                }
                            </div>

                        </div>
                    )}
            </div>
        </>
    )
}

