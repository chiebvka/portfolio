import Image from "next/image";
import Link from "next/link";
// import intro from "../../public/memoji.mov";
// /Users/ebuka/Projects/beta/public/memoji.mov
import { AiFillGithub, AiOutlineLink, AiOutlineTwitter, AiOutlineMail }  from "react-icons/ai";

export default function page ()  {
    return (
<div className="relative  mt-[20px] mb-[180px] lg:mb-[150px] lg:mt-[50px] flex justify-center items-center  h-[80vh]  from-sky-50 to-gray-200">  
    <div className="relative container  flex justify-center items-center  h-[90%] my-auto px-3 text-gray-500 md:px-12 xl:px-40">
        <div className="m-auto md:w-10/12 lg:w-10/12 xl:w-10/12">
            <div className="rounded-xl bg-[#1b1b1d] border-2 border-slate-400  shadow-xl">
                <div className="p-4 sm:p-16">
                    <div className="space-y-4 flex flex-col">
                        <div className="flex lg:w-6/12 w-9/12 mx-auto lg:h-full  relative">
                            <video autoPlay loop muted playsInline className=' object-cover'>
                                <source src="/memoji.mov" type='video/webm; codecs=vp9'/>
                            </video>
                        </div>
                        {/* <Image fill src={intro} loading="lazy" className="w-10" alt="tailus logo" /> */}
                        <h2 className="mb-8 lg:text-2xl text-xl text-white font-bold">Need to get in touch? I&apos;m a click away </h2>
                    </div>
                    <div className="mt-16 grid space-y-4">
                        <Link href="https://github.com/chiebvka" target='_blank'className="group h-12 px-6 border-2 border-gray-300 rounded-full flex items-center  transition duration-300 hover:border-slate-400 focus:bg-blue-50 active:bg-blue-100">
                            <div className="relative flex items-center space-x-4 ">
                                {/* <Image fill src="https://tailus.io/sources/blocks/social/preview/images/google.svg" className="absolute left-0 w-5" alt="google logo" /> */}
                                <AiFillGithub className=' text-white group-hover:text-slate-400 lg:mx-1 mr-1' />
                                <span className="block w-max font-semibold tracking-wide text-white text-sm transition duration-300 group-hover:text-slate-400 sm:text-base">View my Github</span>
                            </div>
                        </Link>
                        <Link href="https://twitter.com/chiebvka" target='_blank' className="group h-12 px-6 border-2 border-gray-300 rounded-full flex items-center  transition duration-300 hover:border-slate-400 focus:bg-blue-50 active:bg-blue-100">
                            <div className="relative flex items-center space-x-4 ">
                                <AiOutlineTwitter className=' text-white group-hover:text-slate-400 fs-3 lg:mx-1 mr-1' />
                                <span className="block w-max font-semibold tracking-wide text-white text-sm transition duration-300 group-hover:text-slate-600 sm:text-base">Follow me on Twitter</span>
                            </div>
                        </Link>
                        <Link href="mailto:ebuka@chiebvka.dev" target='_blank' className="group h-12 px-6 border-2 border-gray-300 rounded-full flex items-center  transition duration-300  hover:border-slate-400 focus:bg-blue-50 active:bg-blue-100">
                            <div className="relative flex items-center space-x-4 ">
                            <AiOutlineMail className=' text-white group-hover:text-slate-400 fs-3 lg:mx-1 mr-1' />
                                <span className="block w-max font-semibold tracking-wide text-white text-sm transition duration-300 group-hover:text-slate-600 sm:text-base">Send an Email</span>
                            </div>
                        </Link>
                    </div>

                    <div className="lg:mt-32 mt-10 space-y-4 text-white text-center sm:-mb-8">
                        <p className="text-xs">I value your feedback and suggestions, so don&apos;t hesitate to get in touch. Whether it&apos;s a potential project, partnership, or just a friendly message, I&apos;ll do my best to respond as soon as possible</p>
                        <p className="text-xs">Thank you for visiting my portfolio, and I look forward to hearing from you!</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    )
  }
  