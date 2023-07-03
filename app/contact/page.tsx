import Image from "next/image";
import { AiFillGithub, AiOutlineLink, AiOutlineTwitter, AiOutlineMail }  from "react-icons/ai";

export default function page ()  {
    return (
<div className="relative border-2 border-red-600 mt-[20px] lg:mt-[70px] flex justify-center items-center  h-[80vh] my-auto  bg-gradient-to-br from-sky-50 to-gray-200">  
    <div className="relative container border-2 border-green-600 flex justify-center items-center  h-[90%] my-auto px-3 text-gray-500 md:px-12 xl:px-40">
        <div className="m-auto md:w-8/12 lg:w-7/12 xl:w-7/12">
            <div className="rounded-xl bg-white shadow-xl">
                <div className="p-6 sm:p-16">
                    <div className="space-y-4">
                        {/* <Image fill src="https://tailus.io/sources/blocks/social/preview/images/icon.svg" loading="lazy" className="w-10" alt="tailus logo" /> */}
                        <h2 className="mb-8 text-2xl text-cyan-900 font-bold">Sign in to unlock the <br /> best of Tailus. </h2>
                    </div>
                    <div className="mt-16 grid space-y-4">
                        <button className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                            <div className="relative flex items-center space-x-4 ">
                                {/* <Image fill src="https://tailus.io/sources/blocks/social/preview/images/google.svg" className="absolute left-0 w-5" alt="google logo" /> */}
                                <AiFillGithub className=' lg:mx-1 mr-1' />
                                <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">View my Github</span>
                            </div>
                        </button>
                        <button className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                            <div className="relative flex items-center space-x-4 ">
                                <AiOutlineTwitter className='fs-3 lg:mx-1 mr-1' />
                                <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Follow me on Twitter</span>
                            </div>
                        </button>
                        <button className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300  hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                            <div className="relative flex items-center space-x-4 ">
                            <AiOutlineMail className='fs-3 lg:mx-1 mr-1' />
                                <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Send an Email</span>
                            </div>
                        </button>
                    </div>

                    <div className="mt-32 space-y-4 text-gray-600 text-center sm:-mb-8">
                        <p className="text-xs">By proceeding, you agree to our <a href="#" className="underline">Terms of Use</a> and confirm you have read our <a href="#" className="underline">Privacy and Cookie Statement</a>.</p>
                        <p className="text-xs">This site is protected by reCAPTCHA and the <a href="#" className="underline">Google Privacy Policy</a> and <a href="#" className="underline">Terms of Service</a> apply.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    )
  }
  