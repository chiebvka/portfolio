import Link from 'next/link';
import { MdOutlineWebhook } from "react-icons/md";
import { AiOutlineGithub } from "react-icons/ai";
import {  getProjects, getfeaturedPorjects } from '@/sanity/utils';
import SideBar from './components/SideBar';
import type { Metadata } from 'next'




export const revalidate = 10



function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}
 


export default async function Home() {
  
  const projects = await getProjects();
  const featuredProjects = await getfeaturedPorjects();

  const techs = [
    { number:"01" ,label: 'Home' },
    { number:"02" ,label: 'About' },
    { number:"03" ,label: 'Articles'  },
    { number:"04" ,label: 'Contact' }
  ];

  


  return (
    <main className="mx-auto min-h-screen relative justify-between flex  mt-8">

    <div className="flex lg:w-1/2 mx-auto">
      <SideBar />
    </div>
    <div className=" lg:flex hidden flex-col 0 items-start w-1/2 p-5  h-full">
      <h2 className='text-[#bebebe] text-base underline  '>Featured</h2>
      <div className="flex flex-col w-full   my-3  ">
        {featuredProjects.map((features) => (

        <Link key={features._id} href={`/projects/${features.slug}`} className="flex flex-col has-before bg-[#1b1b1d] hover:shine hover:mt-5 hover:ml-3 border border-slate-200  transition-all duration-150 delay-250  ease-in  w-full px-3 py-4 rounded my-4">
          <h3>{features.name}</h3>
          <div className="flex  mt-2 ">
            {features.technology.map((technology) => {
                return(
                  <div className='mr-2 ' key={technology._id} > 
                    <span className='text-[#bebebe] text-xs tracking-tight capitalize underline  '>{technology.name}</span> 
                  </div>
                )
              })}
          </div>
          {/* {features.image && (
            <Image 
              src={features.image}
              alt={features.image}
              width={250}
              height={100}
              className='object-cover rounded-lg border border-gray-600'
            />
          )} */}
          <p className='text-[#777778] text-xs mt-2 tracking-wide leading-loose line-clamp-1 '>{features?.description}</p>
          <div className="flex">
            <span className='flex mt-3 mr-3 leading-6 transition duration-200 delay-75 ease-in opacity-75 hover:opacity-100  p-0 ' >
              <MdOutlineWebhook  className='fs-3 mr-1' />
              <p className='font-light text-xs' > Live</p>
            </span>
            <span className='flex mt-3 mr-3 leading-6 transition duration-200 delay-75 ease-in opacity-75 hover:opacity-100  p-0 ' >
              <AiOutlineGithub className='fs-3 mr-1' />
              <p className='font-light text-xs' >Repo</p>
            </span>
          </div>
          <div className='text-[#777778] text-xs mt-2 tracking-wide leading-loose  '>Designed by: <span className='text-white text-xs underline'>{features?.design?.designer}</span>  </div>
        </Link>
        ))}
      </div>



      <h2 className='text-[#bebebe] text-base underline  '>Others</h2>
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-x-5 group w-full my-3">

        {projects.map((project) => (

          <Link key={project?._id} href={`/projects/${project?.slug}`} className="flex flex-col has-before bg-[#1b1b1d] hover:shine hover:mt-5 hover:ml-3  border border-slate-200  group-hover:gap-x-2 transition-all duration-150 delay-250  ease-in px-3 py-4 rounded my-4 ">
            <h3 className='capitalize'>{project.name}</h3>
            <div className="flex mt-2 ">
              {project?.category.map((category) => {
                return(
                  <div className='mr-2 ' key={category._id} > 
                    <span className='text-[#bebebe] text-xs tracking-tight capitalize underline '>{category.name}</span> 
                  </div>
                )
              })}
            </div>
            <p className='text-[#777778] text-xs mt-2 tracking-wide line-clamp-3  '>{project?.description}</p>
            {/* <p className='text-[#777778] text-xs mt-2 tracking-wide line-clamp-3  '>{project.slug}</p> */}
            <div className="flex">
              <span  className='flex mt-3 mr-3 leading-6 transition duration-200 delay-75 ease-in opacity-75 hover:opacity-100  p-0 ' >
                <MdOutlineWebhook  className='fs-3 mr-1' />
                <p className='font-light text-xs' > Live</p>
              </span>
              <span  className='flex mt-3 mr-3 leading-6 transition duration-200 delay-75 ease-in opacity-75 hover:opacity-100  p-0 ' >
                <AiOutlineGithub className='fs-3 mr-1' />
                <p className='font-light text-xs' >Repo</p>
              </span>
            </div>
            <div className='text-[#777778] text-xs mt-2 tracking-wide leading-loose  '>Designed by: <span className='text-white text-xs underline' >{project?.design?.designer}</span>  </div>
          </Link>
        ))}



      </div>
    </div>

  </main>

  )
  
  
}








