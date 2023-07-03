'use client'


import { useRouter, usePathname, useSelectedLayoutSegment } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import profile from "../public/full.jpg";
import { AiFillGithub, AiOutlineLink, AiOutlineTwitter, AiOutlineMail }  from "react-icons/ai"

export default function Sidebar() {
    // const router = useRouter();
    const pathname = usePathname();
    const activeSegment = useSelectedLayoutSegment();

    const links = [
        { path: '/', label: 'Home', number: "00", targetSegment: null },
        // { path: '/works', label: 'Works', number: "01", targetSegment: "works" },
        { path: '/articles', label: 'Articles', number: "01", targetSegment: "articles" },
        { path: '/contact', label: 'Contact', number: "02", targetSegment: "contact" },
        { path: 'https://www.linkedin.com/in/ebuzor-ebuka-1864a01a1/', label: 'LinkedIn', number: "03", targetSegment: "linkedin" }
      ];



    return (
        <div className="  lg:h-[80vh]  flex flex-col w-full  ">
          <div className="lg:my-5">
            <p className='text-[#bebebe] p-2 md:text-sm text-xs tracking-wide leading-loose'>
              <span className='lg:text-lg font-bold text-white'>👋🏽 Ebuka Here,</span>  <br />
            I&apos;m a software engineer  specializing in web and mobile application development, with a keen interest in leveraging technologies such as <span className='text-white'>React</span>, <span className='text-white'>NextJS</span>, <span className='text-white'>Sanity</span>, <span className='text-white'>MongoDB</span>, <span className='text-white'>React Native</span>  and more to create accesible applications to a wide range of users. <br />
            I believe in collaborating closely with clients to understand their vision and requirements, ensuring that the final product aligns perfectly with their goals. My attention to detail, problem-solving abilities, and dedication to delivering high-quality solutions have enabled me to build a strong track record of client satisfaction. <br />
            Browse through my portfolio to explore some of the exciting projects I have worked on. I&apos;m always excited to take on new challenges and push the boundaries of what&apos;s possible in the world of web, mobile, and ML applications.

            </p>
          </div>
          <div className=" hidden lg:flex flex-col justify-center h-1/3 mb-5">

            {links.map((link) => {
                // const isActive = pathname.startsWith(link.path);
                return (
                    <Link href={link.path}  key={link.label}  className={ pathname === link.path ? `  flex w-[200px] group opacity-100 p-2` : `opacity-50  group hover:opacity-100 transition-all duration-300 delay-100 ease-in-out flex p-2`} >
                        {/* <Link href={link.path}  key={link.label} passHref className={` ${router.pathname  === "/" ? "flex w-[200px] opacity-100" : "opacity-50 hover:opacity-100 flex"} `} > */}
                        <span className={ pathname === link.path ? ` text-sm ` : ` my-1 text-xs`}>{link.number}</span>
                        <span className={ pathname === link.path ? ` border w-[80px] transition-all duration-150 delay-250 ease-out  items-center p-0  h-0 my-2 mx-2 ` : `w-[40px] transition-all duration-150 delay-250 ease-in  group-hover:w-[80px] bg-white border   h-0 flex items-center p-0 m-3`}></span>
                        <span className={ pathname === link.path ? ` -my-1` : `my-0`}>{link.label}</span>
                    </Link>
                    // <Link href={link.path}  key={link.label}  className={ (activeSegment === link.targetSegment) ? `  flex w-[200px] group opacity-100 p-2` : `opacity-50  group hover:opacity-100 transition-all duration-300 delay-100 ease-in-out flex p-2`} >
                    //     {/* <Link href={link.path}  key={link.label} passHref className={` ${router.pathname  === "/" ? "flex w-[200px] opacity-100" : "opacity-50 hover:opacity-100 flex"} `} > */}
                    //     <span className={ (activeSegment === link.targetSegment) ? ` text-sm ` : ` my-1 text-xs`}>{link.number}</span>
                    //     <span className={ (activeSegment === link.targetSegment) ? ` border w-[80px] transition-all duration-150 delay-250 ease-out  items-center p-0  h-0 my-2 mx-2 ` : `w-[40px] transition-all duration-150 delay-250 ease-in  group-hover:w-[80px] bg-white border   h-0 flex items-center p-0 m-3`}></span>
                    //     <span className={ (activeSegment === link.targetSegment) ? ` -my-1` : `my-0`}>{link.label}</span>
                    // </Link>
                )
            })}
          </div>
          <div className="  flex   justify-center lg:hidden mt-5 ">
              <Link href="/works" className=' relative inline-block px-4 py-2 font-medium group'>
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-slate-400 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-slate-400 group-hover:bg-[#1b1b1d]"></span>
                <span className="relative text-slate-900 group-hover:text-[#bebebe]">Take a tour</span>
              </Link>
              {/* <Link href="https://github.com/whoisebvka" target='_blank' className=' flex items-center  has-before bg-[#1b1b1d] hover:shine hover:mt-9 hover:ml-3 border border-slate-400 transition-all duration-150 delay-250 rounded-lg  ease-in mt-7 mr-3 p-2'>
                <span  className='flex items-center'>
                  <AiFillGithub className='fs-3 lg:mx-1 mr-1' />
                  <span className='font-light text-xs lg:text-sm '>Github</span>
                  <AiOutlineLink className='fs-3 lg:mx-1 hidden lg:flex' />
                </span>
              </Link> */}
          </div>
        </div>
    )
}