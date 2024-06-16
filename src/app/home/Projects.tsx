"use client"
import React, { useState } from 'react'
import { projects } from '@/utils/portfolioData'
import Button from '@/components/ui/Button'
import { GoArrowUpRight } from "react-icons/go";

export default function Projects() {
    // Toggle state for line-clamp
    const [toggleLineClamp, setLineClamp] = useState<{
        projectID: null | Number,
        toggleState: false
    }>({
        projectID: null,
        toggleState: false
    })

    const [skillIconToggle, setSkillIconToggle] = useState<{
        status: boolean,
        projectID: number | null,
        iconID: number | null
    }>({
        status: false,
        projectID: null,
        iconID: null
    });


    // Function for line-clamp(read more / read less)
    function handleLineClamp(i: number) {
        if (i !== toggleLineClamp.projectID) setLineClamp({
            projectID: i,
            toggleState: !toggleLineClamp
        })
        else {
            setLineClamp({
                ...toggleLineClamp,
                projectID: null
            })
        }
    }

    function iconToggleOn(projectID: number, iconID: number) {
        setSkillIconToggle({
            status: true,
            projectID: projectID,
            iconID: iconID
        })
    }

    // function iconToggleOff(projectID, cardID) {
    //     setSkillIconToggle({
    //         status: false,
    //         projectID: null,
    //         iconID: null
    //     })
    // }

    function mouseEnter(value:boolean, projectID: number, iconID: number) {
        if (value) {
            setSkillIconToggle({
                status: true,
                projectID: projectID,
                iconID: iconID
            })
        }
        else {
            setSkillIconToggle({
                status: false,
                projectID: null,
                iconID: null
            })
        }
    }

    return (
        <section className='px-4 mt-20'>
            <h2 className='text-4xl md:text-7xl font-semibold  font-satoshi select-none'>Projects</h2>
            <div className='flex flex-col w-full gap-y-5 pt-5 mt-5'>
                {
                    projects.map((project, i) =>
                        <div className='w-full bg-[#17181B] md:hover:bg-zinc-800 rounded-md px-5  h-fit pt-5 py-4 ' key={i} onMouseLeave={() => setLineClamp({
                            projectID: null,
                            toggleState: false
                        })}>
                            <p className='text-lg font-satoshi font-normal'>{project.title}</p>
                            <p className={`text-zinc-500 text-[15px] mt-2   ${toggleLineClamp && i === toggleLineClamp.projectID ? "line-clamp-none" : "line-clamp-2 sm:line-clamp-none"}`}>{project.description}
                            </p>
                            <span className='sm:hidden text-[15px] text-zinc-300 cursor-pointer' onClick={() => handleLineClamp(i)}>{toggleLineClamp && i === toggleLineClamp.projectID ? "Read less" : "Read more"}</span>
                            <div className={`flex text-[14px]   w-full mt-5 gap-x-5 ${project.githubLink || project.liveLink ? "" : 'hidden'}`}>
                                {project.liveLink &&
                                    <Button className="bg-transparent w-fit h-0 py-3 flex gap-x-1 items-center group">
                                        <a target='_blank' href={project.liveLink}>Live Link</a>
                                        < GoArrowUpRight className='group-hover:text-white text-zinc-500 size-4 group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition ease-in duration-100' />
                                    </Button >
                                }
                                {
                                    project.githubLink && <Button className="bg-transparent w-fit h-0 py-3 flex gap-x-1 items-center group">
                                        <a target='_blank' href={project.githubLink}>Github Repo</a>
                                        < GoArrowUpRight className='group-hover:text-white text-zinc-500 size-4 
                                    group-hover:translate-x-[2px] group-hover:-translate-y-[2px]
                                    transition ease-in duration-100' />
                                    </Button >
                                }
                            </div>
                            <div className=' w-full  mt-4 h-[100%]  flex flex-wrap gap-y-3 gap-x-5 items-center '>
                                {
                                    project.skillsUsed.map((icon, iconID) => <div className={`h-8 flex items-center rounded-md   ${skillIconToggle.status && skillIconToggle.projectID === i && skillIconToggle.iconID === iconID ? "  gap-x-3 px-3 bg-zinc-700 md:hover:bg-zinc-900 " : ""}`}
                                        onMouseOver={() => mouseEnter(true, i, iconID)}
                                        // onMouseEnter={() => iconToggleOn(i, iconID)}
                                        // onMouseLeave={() => iconToggleOff(i, iconID)} 
                                        onMouseLeave={() => setSkillIconToggle({
                                            status: false,
                                            iconID: null,
                                            projectID: null
                                        })}
                                        key={iconID}
                                    >
                                        <div className={`cursor-pointer delay-500 ease-in-out`}
                                            key={iconID}>{icon.icon}</div>
                                        {skillIconToggle.status && skillIconToggle.projectID === i && skillIconToggle.iconID === iconID &&
                                            <p>{icon.name}</p>
                                        }
                                    </div>)
                                }
                            </div>
                        </div>
                    )
                }
            </div>
        </section>
    )
}


