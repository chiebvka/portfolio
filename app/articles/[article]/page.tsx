import { getArticle, getProject } from "@/sanity/utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineLink } from "react-icons/ai";
import { RichTextComponents } from "@/app/RichTextComponents";
import { BiCalendar } from "react-icons/bi";


type Props = {
    params: { article: string }

    
}






export default async function Project({ params }: Props) {

    const slug = params.article;

    const article = await getArticle(slug);
    
    const duedate = new Date(article._createdAt).toISOString().split("T")[0];



    return (
        <main className="border-l-4  border-l-slate-400 mt-[20px] lg:mt-[70px]">
            {/* <div className="text-white ">{project.name}</div> */}
            <div className=" w-full">
                <div className="flex w-full -z-10 mx-auto opacity-75 relative h-[20vh]  ">
                    <Image src={article.image} alt={article.name} className=" border-2 border-slate-400 rounded -z-10 object-cover"  fill={true} />
                </div>
                <div className=" bg-[#1b1b1d]  border-2 border-slate-400 -mt-12 rounded-lg opacity-100 z-40 w-11/12 mx-auto py-2 ">
                    <div className="flex  w-11/12 mx-auto">
                        <div className="w-full p-2 ">
                            <h1 className="text-base lg:text-2xl pl-2 ">{article.name}</h1>
                            <span  className='flex mt-1 pl-1 items-center'>
                                <BiCalendar className='fs-1  ml-1 ' />
                                <span className='font-light  text-[11px]  md:text-sm'>{duedate}</span>
                            </span>
                        </div>
                    </div>
                    <span className="border border-slate-400 flex  mt-2 w-11/12 mx-auto"></span>
                    <div className="flex  mt-1  w-11/12 mx-auto">
                        <div className="w-full   p-2  ">
                            <div className="flex ">
                                {article.category.map((category) => {
                                return(
                                    <div className='mr-2 flex items-center justify-center'  key={category._id} > 
                                    <span className='text-[#bebebe] flex items-center has-before bg-[#1b1b1d] hover:shine hover:mt-5 hover:ml-1 border border-slate-400 transition-all duration-150 delay-250 rounded-lg  ease-in mt-3 mr-3  p-2 text-xs tracking-tight capitalize  '>{category.name}</span> 
                                    </div>
                                )
                                })}
                            </div>
                            {/* <Link href="/" target='_blank' className=' flex  items-center  p-2'>
                                <span  className='flex underline items-center'>
                                    <AiOutlineLink className='fs-3  lg:mx-1 ' />
                                    <span className='font-light  text-xs lg:text-sm '>Github Repo</span>
                                </span>
                            </Link> */}
                        </div>
                        {/* <div className="w-6/12 border-2 p-2 border-black">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime error quidem dolores excepturi ab dicta deserunt iste, vel iusto mollitia itaque! Voluptatem, iusto perferendis vel optio, totam repellendus odio eveniet quae inventore ratione, esse quaerat laborum corrupti doloremque tenetur porro.</p>
                        </div> */}
                    </div>
                </div>
                <div className="lg:my-10 mt-5  py-2 px-4  w-full">
                    <span className="py-2 text-[11px] lg:text-base md:text-sm"><PortableText value={article.content} components={RichTextComponents}  /></span>
                </div>
            </div>
        </main>
    )
}