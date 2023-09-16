import Link from 'next/link';
import Image from 'next/image';
import displayp from "../public/hand11.png";
import { AiFillGithub, AiOutlineLink, AiOutlineTwitter, AiOutlineMail }  from "react-icons/ai";


export default function Footer() {
    return (
            <div className="  flex flex-col   w-full  lg:w-10/12 mx-auto pb-7 justify-center ">
                <div className="flex items-center justify-center ">
                    <div className='w-2/12   flex items-center justify-center py-3'>
                        <Image src={displayp} className=' w-[40px]  h-[40px] lg:w-[65px] -mb-6 lg:-mb-4 lg:h-[65px] rounded-full object-cover flex bg-[#1b1b1d]  border' alt="Profile Portrait " />
                    </div>
                    <Link href="https://github.com/chiebvka" target='_blank' className=' flex items-center  has-before bg-[#1b1b1d] hover:shine hover:mt-9 hover:ml-3 border border-slate-400 transition-all duration-150 delay-250 rounded-lg  ease-in mt-7 mr-3 p-2'>
                        <span  className='flex items-center'>
                        <AiFillGithub className='fs-3 lg:mx-1 mr-1' />
                        <span className='font-light text-xs lg:text-sm '>Github</span>
                        <AiOutlineLink className='fs-3 lg:mx-1 hidden lg:flex' />
                        </span>
                    </Link>
                    <Link href="https://twitter.com/chiebvka" target='_blank' className=' flex items-center has-before bg-[#1b1b1d] hover:shine hover:mt-9 hover:ml-3 border border-slate-400 transition-all duration-150 delay-250 rounded-lg  ease-in mt-7 mr-3  p-2'>
                        <span  className='flex items-center'>
                        <AiOutlineTwitter className='fs-3 lg:mx-1 mr-1' />
                        <span className='font-light text-xs lg:text-sm '>Twitter</span>
                        <AiOutlineLink className='fs-3 lg:mx-1 hidden lg:flex' />
                        </span>
                    </Link>
                    <Link href="mailto:ebuka@chiebvka.dev" target='_blank' className=' flex items-center has-before bg-[#1b1b1d] hover:shine hover:mt-9 hover:ml-3 border border-slate-400 transition-all duration-150 delay-250 rounded-lg  ease-in mt-7 mr-3  p-2'>
                        <span  className='flex items-center'>
                            <AiOutlineMail className='fs-3 lg:mx-1 mr-2' />
                            <span className='font-light text-xs lg:text-sm '>Email</span>
                            <AiOutlineLink className='fs-3 lg:mx-1 hidden lg:flex' />
                        </span>
                    </Link>
                </div>
                <div className="flex items-center justify-center border-t p-2 border-t-slate-200 mt-5 pt-3  lg:p-5">
                    <p className='text-sm font-thin font-sans '>Inspired by <Link href="https://www.sarahdayan.dev/" target='_blank' className='text-sm font-normal' >Sarah Dayan </Link>  and <Link href="https://kadet.dev/"  target='_blank' className='text-sm font-normal'>Collins Enebeli</Link> and designed by <Link href="https://dribbble.com/NicolasMzrd" target='_blank' className='text-sm font-normal'>Nicolas Meuzard</Link> </p>
                </div>
          </div>
    )
}