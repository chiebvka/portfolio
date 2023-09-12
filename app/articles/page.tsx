

import Image from 'next/image';
import Link from 'next/link';
import { MdOutlineWebhook } from "react-icons/md"
import { AiOutlineGithub } from "react-icons/ai"

import { BsClockHistory } from "react-icons/bs";
import { getArticles } from '@/sanity/utils';
import { PortableText } from '@portabletext/react';
import { RichTextComponents } from '../RichTextComponents';
import SideBar from '../SideBar';



function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}
 


const articles = await getArticles();


export default function page ()  {
  return (
    <main className="mx-auto min-h-screen justify-between flex mt-8 ">
      <div className="flex relative mt-2 w-1/2 mx-auto">
        <SideBar />
      </div>
      <div className="  flex-col lg:w-1/2 mx-auto items-start w-full p-5  h-full">   
      <h2 className='text-[#bebebe] text-base underline md:hidden  '>Articles</h2>   
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-x-5 w-full my-3">
          {articles.map((article) => (
            
            
            
            <Link key={article._id} href={`/articles/${article.slug}`} className="flex  flex-col has-before bg-[#1b1b1d] hover:shine hover:mt-5 hover:ml-3 border border-slate-400 transition-all duration-150 delay-250  ease-in px-3 py-6 rounded my-4 ">
              <h3 className='mb-1'>{article.name}</h3>
              <div className="flex text-[#bebebe] text-[10px]  ">
              {new Date(article._createdAt).toISOString().split("T")[0]}
              </div>
              <span className='text-[#777778] text-sm tracking-wide my-2 flex '>
              {article.category.map((category) => {
                                  return(
                                      <div className='' key={category._id} > 
                                      <span className='text-[#bebebe] flex items-center mr-2 underline text-xs tracking-tight capitalize  '>{category.name}</span> 
                                      </div>
                                  )
                                  })}
                </span>
              <div className="flex">
                <span  className='flex mt-3 mr-3 leading-6 transition duration-200 delay-75 ease-in opacity-75 hover:opacity-100  p-0 ' >
                  <BsClockHistory  className='text-sm mr-1' />
                  <p className='font-light text-xs' > 10 min read</p>
                </span>
              </div>
            </Link>
          ))}

        </div>
      </div>
    </main>
  )
}
