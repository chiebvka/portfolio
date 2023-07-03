

import Image from 'next/image';
import Link from 'next/link';
import { MdOutlineWebhook } from "react-icons/md"
import { AiOutlineGithub } from "react-icons/ai"
import Sidebar from './Sidebar';
import { BsClockHistory } from "react-icons/bs";
import {  getProjects, getfeaturedPorjects } from '@/sanity/utils';




function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}
 
// const articles = await getArticles();
const projects = await getProjects();
const featuredProjects = await getfeaturedPorjects();

// console.log(animals)
// console.log(projects)
// console.log();


export default function Home() {


  const techs = [
    { number:"01" ,label: 'Home' },
    { number:"02" ,label: 'About' },
    { number:"03" ,label: 'Articles'  },
    { number:"04" ,label: 'Contact' }
  ];

  


  return (

//       <div>
// {featuredProjects.map((project) => (
//           <div key={project._id} className="mt-2 font-extrabold bg-gradient-to-r text-white via-red-500 to-purple-600 bg-clip-text text-transparent">
//           <span>{project.name}</span>  
//           {/* <span className='text-red-600'>{project.category}</span>   */}
//           <span className='text-violet-600'>{project.description}</span>  
//           <span className='text-yellow-600'>{project.design.designer}</span>  
//           <span className='text-yellow-600'>{project.design.portfolio}</span>  
       
//           <span className='text-green-600'>{project.github}</span> 
//           {project.category.map((category) => (
//         <span key={category.name}>{category.name}</span>
//       ))}
//           {project.technology.map((technology) => (
//         <span key={technology.name}>{technology.name}</span>
//       ))}
//           <span className='text-red-600'>{project.livelink}</span>  
//           </div>
    
//         // </Link>
//       ))}
//   </div>

    <main className="mx-auto  items-center justify-between flex  lg:grid grid-cols-2 gap-2 mt-8">
      <Sidebar />
      <div className=" lg:flex hidden flex-col items-start w-full p-5  h-full">
        <h2 className='text-[#bebebe] text-base underline  '>FEATURED</h2>
        <div className="flex flex-col w-full lg:w-11/12  my-3  ">
          {featuredProjects.map((features) => (

          <Link key={features._id} href={`/projects/${features.slug}`} className="flex flex-col has-before bg-[#1b1b1d] hover:shine hover:mt-5 hover:ml-3 border border-slate-400 transition-all duration-150 delay-250  ease-in  w-full px-3 py-4 rounded my-4">
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
            <p className='text-[#777778] text-xs mt-2 tracking-wide leading-loose line-clamp-1 '>{features.description}</p>
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
            <div className='text-[#777778] text-xs mt-2 tracking-wide leading-loose  '>Designed by: <span className='text-white text-xs underline'>{features.design.designer}</span>  </div>
          </Link>
          ))}
        </div>



        <h2 className='text-[#bebebe] text-base underline  '>OTHER</h2>
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-x-5 group w-full my-3">

          {projects.map((project) => (

            <Link key={project._id} href={`/projects/${project.slug}`} className="flex flex-col has-before bg-[#1b1b1d] hover:shine hover:mt-5 hover:ml-3  border group-hover:gap-x-2 border-slate-400 transition-all duration-150 delay-250  ease-in px-3 py-4 rounded my-4 ">
              <h3 className='capitalize'>{project.name}</h3>
              <div className="flex mt-2 ">
                {project.category.map((category) => {
                  return(
                    <div className='mr-2 ' key={category._id} > 
                      <span className='text-[#bebebe] text-xs tracking-tight capitalize underline '>{category.name}</span> 
                    </div>
                  )
                })}
              </div>
              <p className='text-[#777778] text-xs mt-2 tracking-wide line-clamp-3  '>{project.description}</p>
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
              <div className='text-[#777778] text-xs mt-2 tracking-wide leading-loose  '>Designed by: <span className='text-white text-xs underline' >{project.design.designer}</span>  </div>
            </Link>
          ))}



        </div>
      </div>




























      {/* <div className=" lg:flex hidden flex-col items-start p-5  h-full">
        <h2 className='text-[#bebebe] text-base underline  '>FEATURED</h2>
        <div className="flex flex-col w-11/12  my-3  ">
          <div className="flex flex-col has-before bg-[#1b1b1d] hover:shine hover:mt-5 hover:ml-3 border border-slate-400 transition-all duration-150 delay-250  ease-in  w-full px-3 py-4 rounded my-4">
            <h3>Guild Protocol</h3>
            <div className="flex  mt-2 ">
              {techs.map((tech) => {
                return(
                  <div className='mr-2 ' key={tech.number}> 
                    <span className='text-[#bebebe] text-xs tracking-tight capitalize  '>{tech.label}</span> 
                  </div>
                )
              })}
            </div>
            <p className='text-[#777778] text-xs mt-2 tracking-wide leading-loose '>Landing page for Crypto Payment</p>
            <div className="flex">
              <Link href="/" target='_blank' className='flex mt-3 mr-3 leading-6 transition duration-200 delay-75 ease-in opacity-75 hover:opacity-100  p-0 ' >
                <MdOutlineWebhook  className='fs-3 mr-1' />
                <p className='font-light text-xs' > Live</p>
              </Link>
              <Link href="/" target='_blank' className='flex mt-3 mr-3 leading-6 transition duration-200 delay-75 ease-in opacity-75 hover:opacity-100  p-0 ' >
                <AiOutlineGithub className='fs-3 mr-1' />
                <p className='font-light text-xs' >Repo</p>
              </Link>
            </div>
            <div className='text-[#777778] text-xs mt-2 tracking-wide leading-loose  '>Designed by: <Link className='text-white text-xs underline' href="/">John Doe</Link>  </div>
          </div>
          <div className="flex flex-col has-before bg-[#1b1b1d] hover:shine hover:mt-5 hover:ml-3 border border-slate-400 transition-all duration-150 delay-250  ease-in  w-full px-3 py-4 rounded my-4">
            <h3>Guild Protocol</h3>
            <div className="flex  mt-2 ">
              {techs.map((tech) => {
                return(
                  <div className='mr-2 ' key={tech.number}> 
                    <span className='text-[#bebebe] text-xs tracking-tight capitalize  '>{tech.label}</span> 
                  </div>
                )
              })}
            </div>
            <p className='text-[#777778] text-xs mt-2 tracking-wide leading-loose '>Landing page for Crypto Payment</p>
            <div className="flex">
              <Link href="/" target='_blank' className='flex mt-3 mr-3 leading-6 transition duration-200 delay-75 ease-in opacity-75 hover:opacity-100  p-0 ' >
                <MdOutlineWebhook  className='fs-3 mr-1' />
                <p className='font-light text-xs' > Live</p>
              </Link>
              <Link href="/" target='_blank' className='flex mt-3 mr-3 leading-6 transition duration-200 delay-75 ease-in opacity-75 hover:opacity-100  p-0 ' >
                <AiOutlineGithub className='fs-3 mr-1' />
                <p className='font-light text-xs' >Repo</p>
              </Link>
            </div>
            <div className='text-[#777778] text-xs mt-2 tracking-wide leading-loose  '>Designed by: <Link className='text-white text-xs underline' href="/">John Doe</Link>  </div>
          </div>
        </div>



        <h2 className='text-[#bebebe] text-base underline  '>OTHER</h2>
        <div className="grid grid-cols-2 gap-x-5 w-11/12 my-3">
          <div className="flex flex-col has-before bg-[#1b1b1d] hover:shine hover:mt-5 hover:ml-3  border border-slate-400 transition-all duration-150 delay-250  ease-in px-3 py-4 rounded my-4 ">
            <h3>Guild Protocol</h3>
            <div className="flex mt-2 ">
              {techs.map((tech) => {
                return(
                  <div className='mr-2 ' key={tech.number}> 
                    <span className='text-[#bebebe] text-xs tracking-tight capitalize  '>{tech.label}</span> 
                  </div>
                )
              })}
            </div>
            <p className='text-[#777778] text-xs mt-2 tracking-wide  '>Landing page for Crypto Payment</p>
            <div className="flex">
              <Link href="/" target='_blank' className='flex mt-3 mr-3 leading-6 transition duration-200 delay-75 ease-in opacity-75 hover:opacity-100  p-0 ' >
                <MdOutlineWebhook  className='fs-3 mr-1' />
                <p className='font-light text-xs' > Live</p>
              </Link>
              <Link href="/" target='_blank' className='flex mt-3 mr-3 leading-6 transition duration-200 delay-75 ease-in opacity-75 hover:opacity-100  p-0 ' >
                <AiOutlineGithub className='fs-3 mr-1' />
                <p className='font-light text-xs' >Repo</p>
              </Link>
            </div>
            <div className='text-[#777778] text-xs mt-2 tracking-wide leading-loose  '>Designed by: <Link className='text-white text-xs underline' href="/">John Doe</Link>  </div>
          </div>
          <div className="flex flex-col has-before bg-[#1b1b1d] hover:shine hover:mt-5 hover:ml-3  border border-slate-400 transition-all duration-150 delay-250  ease-in px-3 py-4 rounded my-4 ">
            <h3>Guild Protocol</h3>
            <div className="flex mt-2 ">
              {techs.map((tech) => {
                return(
                  <div className='mr-2 ' key={tech.number}> 
                    <span className='text-[#bebebe] text-xs tracking-tight capitalize  '>{tech.label}</span> 
                  </div>
                )
              })}
            </div>
            <p className='text-[#777778] text-xs mt-2 tracking-wide  '>Landing page for Crypto Payment</p>
            <div className="flex">
              <Link href="/" target='_blank' className='flex mt-3 mr-3 leading-6 transition duration-200 delay-75 ease-in opacity-75 hover:opacity-100  p-0 ' >
                <MdOutlineWebhook  className='fs-3 mr-1' />
                <p className='font-light text-xs' > Live</p>
              </Link>
              <Link href="/" target='_blank' className='flex mt-3 mr-3 leading-6 transition duration-200 delay-75 ease-in opacity-75 hover:opacity-100  p-0 ' >
                <AiOutlineGithub className='fs-3 mr-1' />
                <p className='font-light text-xs' >Repo</p>
              </Link>
            </div>
            <div className='text-[#777778] text-xs mt-2 tracking-wide leading-loose  '>Designed by: <Link className='text-white text-xs underline' href="/">John Doe</Link>  </div>
          </div>
          <div className="flex flex-col has-before bg-[#1b1b1d] hover:shine hover:mt-5 hover:ml-3  border border-slate-400 transition-all duration-150 delay-250  ease-in px-3 py-4 rounded my-4 ">
            <h3>Guild Protocol</h3>
            <div className="flex mt-2 ">
              {techs.map((tech) => {
                return(
                  <div className='mr-2 ' key={tech.number}> 
                    <span className='text-[#bebebe] text-xs tracking-tight capitalize  '>{tech.label}</span> 
                  </div>
                )
              })}
            </div>
            <p className='text-[#777778] text-xs mt-2 tracking-wide  '>Landing page for Crypto Payment</p>
            <div className="flex">
              <Link href="/" target='_blank' className='flex mt-3 mr-3 leading-6 transition duration-200 delay-75 ease-in opacity-75 hover:opacity-100  p-0 ' >
                <MdOutlineWebhook  className='fs-3 mr-1' />
                <p className='font-light text-xs' > Live</p>
              </Link>
              <Link href="/" target='_blank' className='flex mt-3 mr-3 leading-6 transition duration-200 delay-75 ease-in opacity-75 hover:opacity-100  p-0 ' >
                <AiOutlineGithub className='fs-3 mr-1' />
                <p className='font-light text-xs' >Repo</p>
              </Link>
            </div>
            <div className='text-[#777778] text-xs mt-2 tracking-wide leading-loose  '>Designed by: <Link className='text-white text-xs underline' href="/">John Doe</Link>  </div>
          </div>
          <div className="flex flex-col has-before bg-[#1b1b1d] hover:shine hover:mt-5 hover:ml-3  border border-slate-400 transition-all duration-150 delay-250  ease-in px-3 py-4 rounded my-4 ">
            <h3>Guild Protocol</h3>
            <div className="flex mt-2 ">
              {techs.map((tech) => {
                return(
                  <div className='mr-2 ' key={tech.number}> 
                    <span className='text-[#bebebe] text-xs tracking-tight capitalize  '>{tech.label}</span> 
                  </div>
                )
              })}
            </div>
            <p className='text-[#777778] text-xs mt-2 tracking-wide  '>Landing page for Crypto Payment</p>
            <div className="flex">
              <Link href="/" target='_blank' className='flex mt-3 mr-3 leading-6 transition duration-200 delay-75 ease-in opacity-75 hover:opacity-100  p-0 ' >
                <MdOutlineWebhook  className='fs-3 mr-1' />
                <p className='font-light text-xs' > Live</p>
              </Link>
              <Link href="/" target='_blank' className='flex mt-3 mr-3 leading-6 transition duration-200 delay-75 ease-in opacity-75 hover:opacity-100  p-0 ' >
                <AiOutlineGithub className='fs-3 mr-1' />
                <p className='font-light text-xs' >Repo</p>
              </Link>
            </div>
            <div className='text-[#777778] text-xs mt-2 tracking-wide leading-loose  '>Designed by: <Link className='text-white text-xs underline' href="/">John Doe</Link>  </div>
          </div>
          <div className="flex flex-col has-before bg-[#1b1b1d] hover:shine hover:mt-5 hover:ml-3  border border-slate-400 transition-all duration-150 delay-250  ease-in px-3 py-4 rounded my-4 ">
            <h3>Guild Protocol</h3>
            <div className="flex mt-2 ">
              {techs.map((tech) => {
                return(
                  <div className='mr-2 ' key={tech.number}> 
                    <span className='text-[#bebebe] text-xs tracking-tight capitalize  '>{tech.label}</span> 
                  </div>
                )
              })}
            </div>
            <p className='text-[#777778] text-xs mt-2 tracking-wide  '>Landing page for Crypto Payment</p>
            <div className="flex">
              <Link href="/" target='_blank' className='flex mt-3 mr-3 leading-6 transition duration-200 delay-75 ease-in opacity-75 hover:opacity-100  p-0 ' >
                <MdOutlineWebhook  className='fs-3 mr-1' />
                <p className='font-light text-xs' > Live</p>
              </Link>
              <Link href="/" target='_blank' className='flex mt-3 mr-3 leading-6 transition duration-200 delay-75 ease-in opacity-75 hover:opacity-100  p-0 ' >
                <AiOutlineGithub className='fs-3 mr-1' />
                <p className='font-light text-xs' >Repo</p>
              </Link>
            </div>
            <div className='text-[#777778] text-xs mt-2 tracking-wide leading-loose  '>Designed by: <Link className='text-white text-xs underline' href="/">John Doe</Link>  </div>
          </div>

        </div>
      </div> */}





    </main>
    
  )
  
  
}








