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
                <div className="flex w-full border-2 border-slate-400 rounded -z-10 mx-auto opacity-75 relative h-[20vh]  ">
                    <Image src={project.image} alt={project.name} className=" -z-10  object-cover"  fill={true} />
                </div>
                <div className="border-2 border-slate-400 bg-[#1b1b1d] -mt-12  z-40  rounded-lg  w-11/12 mx-auto py-2 ">
                    <div className="flex flex-col lg:flex-row   w-full lg:w-11/12  mx-auto">
                        <div className="lg:w-6/12  w-full  lg:p-2 ">
                            <h1 className=" text-base lg:text-2xl  pl-2 lg:pl-0 ">{project.name}</h1>
                            <span  className='flex mt-1 pl-1 text-[#bebebe] lg:pl-0 items-center'>
                                <BiCalendar className='fs-1 lg:text-[15px] text-[9px]  ml-1 mr-[2px] lg:ml-0  ' />
                                <span className='font-extralight  text-[9px]  md:text-sm'>{duedate}</span>
                            </span>
                        </div>
                        <div className="lg:w-6/12  w-full   lg:p-2  flex  lg:items-center lg:justify-self-start items-start justify-start">
                            <Link href={project.livelink} target='_blank' className=' flex transition duration-300 hover:text-slate-400 items-center  p-1 lg:p-2'>
                                <span  className='flex underline items-center'>
                                    <AiOutlineLink className='lg:fs-3 text-[9px] lg:text-[15px] fs-5 mx-1 ' />
                                    <span className='font-light text-[9px] lg:text-sm '>View the application</span>
                                </span>
                            </Link>
                            <Link href={project.github} target='_blank' className=' flex transition duration-300 hover:text-slate-400 items-center  p-1 lg:p-2'>
                                <span  className='flex underline items-center'>
                                    <AiOutlineLink className='lg:fs-3 text-[9px] lg:text-[15px] fs-5  mx-1 ' />
                                    <span className='font-light  text-[9px] lg:text-sm '>Github Repo</span>
                                </span>
                            </Link>
                        </div>
                    </div>
                    {/* <span className="border-2 flex  lg:mt-2 mt-1 w-full lg:w-11/12  mx-auto"></span> */}
                    <div className="flex lg:flex-row flex-col  lg:mt-2 mt-1 w-full lg:w-11/12 mx-auto">
                        <div className="lg:w-6/12  w-full  lg:p-2  px-2 ">
                            <div className="flex  lg:flex-col lg:items-start lg:justify-start flex-row items-center justify-self-start">
                                <div className="flex mr-2 lg:mr-0 ">
                                    <span className="font-light  text-[10px] lg:text-base  lg:pl-0 md:text-sm">Designer: <Link href={project.design.portfolio} target="_blank" className="underline text-[9px] lg:text-sm transition duration-300 hover:text-slate-400 " >{project.design.designer}</Link></span>
                                </div>
                                <div className="flex ">
                                    <span className="font-light  text-[10px] mt-1 lg:text-base  lg:pl-0 md:text-sm">Client: <Link href={project.livelink} target="_blank" className="underline text-[9px] lg:text-sm transition duration-300 hover:text-slate-400 " >{project.client}</Link></span>
                                </div>
                            </div>
                            <div className="flex mt-1 ">
                                {project.technology.map((technology) => {
                                return(
                                    <div className='lg:mr-2 mr-1   flex items-center justify-center  ' key={technology._id} > 
                                    <span className='lg:text-[#bebebe] flex items-center transition-all duration-150 delay-250 lg:rounded-lg rounded  ease-in mt-2  p-1 text-[10px] underline  tracking-tighter  lg:text-xs  capitalize  '>{technology.name}</span> 
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