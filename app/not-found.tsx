import Image from "next/image";
import profile from "../public/error.png";
import Link from "next/link";

export default function NotFound ()  {
    return(

        <section className="mx-auto  items-center justify-between flex  mt-8">
            <div className="container flex items-center justify-center min-h-screen border border-slate-200 rounded-lg px-6  mx-auto">
                <div className="w-full ">
                    <div className="flex flex-col items-center mx-auto text-center">
                        <div className="w-full h-96 border-b-4  border-slate-500 pb-5 ">
                            <Image  src={profile} className='object-contain bg-transparent flex h-full w-full' alt="Profile Portrait "  />
                        </div>
                        <p className="text-5xl font-medium mt-5 text-red-500">Whoops! </p>
                        <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">We seem to have lost this page </h1>
                        <p className="mt-4 text-gray-500 dark:text-gray-400">We searched high and low, but couldn’t find what you’re looking for, why don’t we start over</p>

                        <div className="flex items-center justify-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
                            <Link href="/" className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg dark:text-gray-200 gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:border-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                                </svg>


                                <span>Start over</span>
                            </Link>
                        </div>
                    </div>

                    {/* <div className="hidden md:grid w-full border-2 max-w-6xl grid-cols-1 gap-8 mx-auto mt-8 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="p-6 rounded-lg bg-blue-50 dark:bg-gray-800">
                            <span className="text-gray-500 dark:text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                </svg>
                            </span>
                            
                            <h3 className="mt-6 font-medium text-gray-700 dark:text-gray-200 ">Documentation</h3>

                            <p className="mt-2 text-gray-500 dark:text-gray-400 ">Dive in to learn all about our product.</p>

                            <a href="#" className="inline-flex items-center mt-4 text-sm text-blue-500 gap-x-2 dark:text-blue-400 hover:underline">
                                <span>Start learning</span>

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>
                            </a>
                        </div>

                        <div className="p-6 rounded-lg bg-blue-50 dark:bg-gray-800">
                            <span className="text-gray-500 dark:text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                                </svg>
                            </span>
                            
                            <h3 className="mt-6 font-medium text-gray-700 dark:text-gray-200 ">Our blog</h3>

                            <p className="mt-2 text-gray-500 dark:text-gray-400 ">Read the latest posts on our blog.</p>

                            <a href="#" className="inline-flex items-center mt-4 text-sm text-blue-500 gap-x-2 dark:text-blue-400 hover:underline">
                                <span>View lastest posts</span>

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>
                            </a>
                        </div>

                        <div className="p-6 rounded-lg bg-blue-50 dark:bg-gray-800">
                            <span className="text-gray-500 dark:text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                                </svg>
                            </span>
                            
                            <h3 className="mt-6 font-medium text-gray-700 dark:text-gray-200 ">Chat to us</h3>

                            <p className="mt-2 text-gray-500 dark:text-gray-400 ">Can’t find what you’re looking for?</p>

                            <a href="#" className="inline-flex items-center mt-4 text-sm text-blue-500 gap-x-2 dark:text-blue-400 hover:underline">
                                <span>Chat to our team</span>

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>
                            </a>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
        // <main className="mx-auto  items-center justify-between flex h-[80vh] mt-8">
        //     {/* <h1>Hello there</h1> */}
        //     <div className="h-full w-full bg-gray-100 flex items-center">
        //         <div className="flex flex-col border-2 border-green-600 w-full md:flex-row items-center justify-center  text-gray-700">
        //             <div className="w-6/12 border-2 border-red-600">
        //                 <div className="text-5xl font-dark font-bold">404</div>
        //                 <p className="text-2xl md:text-3xl font-light leading-normal">Sorry we couldn&apos;t find this page. </p>
        //                 <p className="mb-8">But dont worry, you can find plenty of other things on our homepage.</p>                    
        //                 <button className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700">back to homepage</button>
        //             </div>
        //             <div className="w-6/12 border-2 border-yellow-600">
        //                 <Image  src={profile} width="400" className='object-contain flex bg-white  border-2 border-red-600 ' alt="Profile Portrait "  />
        //             </div>               
        //         </div>
        //     </div>
        // </main>
    )
}