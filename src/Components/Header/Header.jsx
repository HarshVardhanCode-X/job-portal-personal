import React from 'react'
import './Header.css'
import { FaPlus } from "react-icons/fa6";
import { FaBusinessTime } from "react-icons/fa";
import { MdOutlineBusinessCenter } from "react-icons/md";




function Header() {
    return (
        <>

            <div className='hidden lg:block 2xl:bg-[#EFF2F5] 2xl:px-[15vh] fixed top-0 right-0 left-0'>
                <div className="font-sans-serif">
                    <header className="flex items-center justify-between py-[2vh] px-[3vw] bg-white">
                        <div className="flex items-center gap-[0.5vw]">
                            <img src="/Images/logo.jpg" alt="Unstop Logo" className="h-8" />
                            <div>
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-900 dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                        </svg>
                                    </div>
                                    <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-black border border-gray-100 rounded-full focus:ring-gray-500 focus:border-gray-700 dark:border-gray-300 dark:placeholder-gray-400 dark:focus:ring-gray-700 dark:focus:border-gray-800" placeholder="Search Opportunities" />
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-[1vw]">
                            <ul className="flex font-semibold items-center gap-[0.5vw] text-[0.8vw]">
                                {["Internships", "Jobs", "Compete", "Mentorship", "Courses", "Practice"].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="block py-2 px-3 border-[1px] border-[white] text-[#525D5E] rounded-full hover:bg-gray-100 focus:border-blue-600 focus:text-blue-600">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            <div className='flex gap-[0.3vw] text-[0.8vw]'>
                                <button className="bg-[#0073E6] hover:bg-blue-700 text-white px-4 py-2 rounded-full">Login</button>
                                <button className="border border-blue-900 hover:bg-gray-100 px-4 py-2 rounded-full flex items-center gap-1"><FaPlus size={15}/>Host</button>
                                <button className="border border-[#FFC700] bg-[#FFF6D9] hover:bg-[#FFEFBD] px-4 py-2 rounded-full flex items-center gap-1"><FaBusinessTime size={15}/>For Business</button>
                            </div>
                        </div>
                    </header>
                    <hr />
                </div>
            </div>



            <div className='block lg:hidden'>
                <div className="font-sans-serif ">
                    <header className="flex flex-col items-center py-[2vh] px-[3.5vw] rounded-b-[40px] bg-[#F2F8FE]">
                        <div className="flex items-center justify-between gap-[0.5vw] w-full ">
                            <img src="/Images/log.png" alt="Unstop Logo" className="h-8" />
                            <div className='flex items-center gap-3'>
                                <button className="bg-[#0073E6] hover:bg-blue-700 text-white px-4 py-2 rounded-full">Login</button>
                                <button><MdOutlineBusinessCenter size={25} /></button>
                            </div>
                        </div>
                        <div className='text-3xl font-medium flex flex-col items-start w-full pt-6 pb-5'>
                            <h1 className='text-[#33449C]'>Hii,</h1>
                            <h1>Unlock Your Career</h1>
                        </div>
                        <div>
                            <div>
                                <div className="relative w-[90vw]">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-900 dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                        </svg>
                                    </div>
                                    <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-black border border-gray-100 rounded-full focus:ring-gray-500 focus:border-gray-700 dark:border-gray-300 dark:placeholder-gray-400 dark:focus:ring-gray-700 dark:focus:border-gray-800" placeholder="Search Opportunities" />
                                </div>
                            </div>
                        </div>

                    </header>
                </div>
            </div>


        </>
    )
}

export default Header