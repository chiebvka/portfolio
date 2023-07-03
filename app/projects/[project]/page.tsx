import { getProject } from "@/sanity/utils";
import urlBuilder from '@sanity/image-url';
// import { urlForImage } from 'lib/sanity.image';
import { createClient } from 'next-sanity';
import { PortableText } from "@portabletext/react";
import {getImageDimensions} from '@sanity/asset-utils';
import Image from "next/image";
import Link from "next/link";
import { AiOutlineLink } from "react-icons/ai";
import { BiCalendar } from "react-icons/bi";
import { client } from "@/sanity/lib/client";
import { RichTextComponents } from "@/app/RichTextComponents";


type Props = {
    params: { project: string }

    
}


export default async function Project({ params }: Props) {

    const slug = params.project;
    const project = await getProject(slug)

    const duedate = new Date(project._createdAt).toISOString().split("T")[0];


    

    console.log(project)


    return (
        <main className=" border-l-4  border-l-slate-400 mt-[20px] lg:mt-[70px]">
            {/* <div className="text-white ">{project.name}</div> */}
            <div className=" w-full">
                <div className="flex w-full border-2 rounded -z-10 mx-auto opacity-75 relative h-[20vh]  ">
                    <Image src={project.image} alt={project.name} className=" -z-10  object-cover"  fill={true} />
                </div>
                <div className="border-2 bg-[#515373] -mt-12  z-40  rounded-lg  w-11/12 mx-auto py-2 ">
                    <div className="flex flex-col lg:flex-row   w-full lg:w-11/12  mx-auto">
                        <div className="lg:w-6/12  w-full  lg:p-2 ">
                            <h1 className=" text-base lg:text-2xl pl-2 ">{project.name}</h1>
                            <span  className='flex mt-1 pl-1 items-center'>
                                <BiCalendar className='fs-1  ml-1 ' />
                                <span className='font-light  text-[11px]  md:text-sm'>{duedate}</span>
                            </span>
                        </div>
                        <div className="lg:w-6/12  w-full   lg:p-2  flex flex-col lg:items-center lg:justify-evenly lg:flex-row items-start justify-start">
                            <Link href={project.livelink} target='_blank' className=' flex items-center  p-1 lg:p-2'>
                                <span  className='flex underline items-center'>
                                    <AiOutlineLink className='lg:fs-3 fs-5 mx-1 ' />
                                    <span className='font-light text-[11px] lg:text-sm '>View the application</span>
                                </span>
                            </Link>
                            <Link href={project.github} target='_blank' className=' flex  items-center  p-1 lg:p-2'>
                                <span  className='flex underline items-center'>
                                    <AiOutlineLink className='lg:fs-3 fs-5  mx-1 ' />
                                    <span className='font-light  text-[11px] lg:text-sm '>Github Repo</span>
                                </span>
                            </Link>
                        </div>
                    </div>
                    {/* <span className="border-2 flex  lg:mt-2 mt-1 w-full lg:w-11/12  mx-auto"></span> */}
                    <div className="flex lg:flex-row flex-col  lg:mt-2 mt-1 w-full lg:w-11/12 mx-auto">
                        <div className="lg:w-6/12  w-full  lg:p-2  px-2 ">
                            <div className="flex  lg:flex-col lg:items-start lg:justify-start flex-row items-center justify-self-start">
                                <div className="flex mr-2 lg:mr-0 ">
                                    <span className="font-light  text-[11px] lg:text-base pl-1 md:text-sm">Designer: <Link href={project.design.portfolio} target="_blank" className="underline" >{project.design.designer}</Link></span>
                                </div>
                                <div className="flex ">
                                    <span className="font-light  text-[11px] lg:text-base pl-1 md:text-sm">Client: <Link href={project.livelink} target="_blank" className="underline" >{project.client}</Link></span>
                                </div>
                            </div>
                            <div className="flex mt-1 ">
                                {project.technology.map((technology) => {
                                return(
                                    <div className='lg:mr-2 mr-1 lg:pl-1  flex items-center justify-center  ' key={technology._id} > 
                                    <span className='lg:text-[#bebebe] flex items-center lg:has-before lg:bg-[#1b1b1d] lg:hover:shine lg:hover:mt-5 lg:hover:ml-1 lg:border lg:border-slate-400 transition-all duration-150 delay-250 lg:rounded-lg rounded  ease-in mt-2  p-1 text-[10px] underline lg:mt-3 lg:mr-3 tracking-tighter lg:p-2 lg:text-xs lg:tracking-tight capitalize  '>{technology.name}</span> 
                                    </div>
                                )
                                })}
                            </div>
                        </div>
                        <div className="lg:w-6/12 border-l-3  border-l-slate-400 lg:flex hidden lg:p-2 ">
                            <p className="text-[11px] lg:text-sm">{project.description}</p>
                        </div>
                    </div>
                </div>
                <div className="lg:my-10  py-2 px-4 border-purple-700 w-full">
                    <span className="py-2 text-[11px] lg:text-base md:text-sm"><PortableText value={project.content} components={RichTextComponents}  /></span>
                </div>
            </div>
        </main>
    )
}