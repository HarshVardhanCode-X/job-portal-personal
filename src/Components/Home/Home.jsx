import React from 'react'
import './Home.css'
import { RiInboxArchiveLine } from "react-icons/ri";
import { MdOutlineReadMore } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { PiStudentDuotone } from "react-icons/pi";
import { MdWorkOutline } from "react-icons/md";
import { BsTrophy } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CustomCarousel from '../Carousel';


const slides = [
    { image: './Images/slide8.webp', alt: 'Slide 1' },
    { image: './Images/slide8.webp', alt: 'Slide 2' },
    { image: './Images/slide8.webp', alt: 'Slide 3' },
    { image: './Images/slide8.webp', alt: 'Slide 4' },
    { image: './Images/slide8.webp', alt: 'Slide 5' },
    { image: './Images/slide8.webp', alt: 'Slide 6' },
    { image: './Images/slide8.webp', alt: 'Slide 7' },
    { image: './Images/slide8.webp', alt: 'Slide 1' },
    { image: './Images/slide8.webp', alt: 'Slide 2' },
    { image: './Images/slide8.webp', alt: 'Slide 3' },
    { image: './Images/slide8.webp', alt: 'Slide 4' },
    { image: './Images/slide8.webp', alt: 'Slide 5' },
    { image: './Images/slide8.webp', alt: 'Slide 6' },
    { image: './Images/slide8.webp', alt: 'Slide 7' }
];



function Home() {
    return (
        <>
            <div className='hidden md:block 2xl:bg-[#EFF2F5] 2xl:px-[15vh]'>
                <div className="font-sans bg-[#F6F6F6] flex flex-col justify-center h-full">


                    <main className="p-4 md:px-6 lg:px-20 flex items-center justify-center gap-[10vh] h-[90vh]">

                        <div>
                            <div className='flex items-center justify-center gap-2'>
                                <h1 className="text-3xl md:text-4xl lg:text-6xl font-[500] text-gray-800 mb-4 md:mb-6">
                                    <div className='text-[#33449C] inline-block'>Unlock</div> Your Career
                                </h1>
                                <img src="/Images/job7.png" alt="Internship" className="w-[4vw]" />
                            </div>
                            <p className="text-gray-500 mb-6 text-[1.2rem]">
                                Explore opportunities from across the globe to learn, showcase<br />skills, gain CV points & get hired by your dream company.
                            </p>
                            <button className='bg-[#EBE8FD] rounded-full flex items-center justify-evenly p-2 px-4 gap-1'>
                                <img src="/Images/diamond.webp" alt="Internship" className="w-[2.2vw]" />
                                <div className='font-medium'>Become a Pro Member!</div>
                            </button>
                        </div>


                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6 mb-8">

                            <div className="bg-[#9BE6C1] shadow-xl rounded-lg p-4 text-left transition duration-500 ease-in-out hover:-translate-y-[1vh] cursor-pointer">
                                <h2 className="font-semibold">Internship</h2>
                                <p>Gain Practical Experience</p>
                                <img src="/path/to/image-placeholder.png" alt="Internship" className="mt-2" />
                            </div>

                            <div className="bg-[rgb(254,193,146)] shadow-xl rounded-lg p-4 text-left transition duration-500 ease-in-out hover:-translate-y-[1vh] cursor-pointer">
                                <h2 className="font-semibold">Mentorship</h2>
                                <p>Guidance From Top Mentors</p>
                                <img src="/path/to/image-placeholder.png" alt="Mentorship" className="mt-2" />
                            </div>

                            <div className="bg-[#9BC9FF] shadow-xl rounded-lg p-4 text-left transition duration-500 ease-in-out hover:-translate-y-[1vh] cursor-pointer">
                                <h2 className="font-semibold">Jobs</h2>
                                <p>Explore Diverse Careers</p>
                                <img src="/path/to/image-placeholder.png" alt="Jobs" className="mt-2" />
                            </div>

                            <div className="bg-[rgb(255,177,204)] shadow-xl rounded-lg p-4 text-left transition duration-500 ease-in-out hover:-translate-y-[1vh] cursor-pointer">
                                <h2 className="font-semibold">Courses</h2>
                                <p>Expand Knowledge Base</p>
                                <img src="/path/to/image-placeholder.png" alt="Courses" className="mt-2" />
                            </div>

                            <div className="bg-[rgb(255,221,128)] shadow-xl rounded-lg p-4 text-left transition duration-500 ease-in-out hover:-translate-y-[1vh] cursor-pointer">
                                <h2 className="font-semibold">Compete</h2>
                                <p>Battle For Excellence</p>
                                <img src="/path/to/image-placeholder.png" alt="Compete" className="mt-2" />
                            </div>

                            <div className="bg-[#C8BBFF] shadow-xl rounded-lg p-4 text-left transition duration-500 ease-in-out hover:-translate-y-[1vh] cursor-pointer">
                                <h2 className="font-semibold">Practice</h2>
                                <p>Refine Skills Daily</p>
                                <img src="/path/to/image-placeholder.png" alt="Practice" className="mt-2" />
                            </div>
                        </div>

                    </main>

                    <div className="App h-[10vh]">
                        <CustomCarousel slides={slides} />
                    </div>

                </div>


            </div>




            <div className='block md:hidden 2xl:bg-[#EFF2F5] 2xl:px-[15vh]'>
                <div className="font-sans h-full">

                    <main className="p-4 md:px-6 lg:px-20 flex flex-col items-center justify-evenly h-full gap-1">

                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6 mb-2">

                            <div className="bg-[#9BE6C1] rounded-lg p-4 text-left transition duration-500 ease-in-out hover:-translate-y-[1vh] cursor-pointer">
                                <h2 className="font-semibold">Internship</h2>
                                <p>Gain Practical Experience</p>
                                <img src="/path/to/image-placeholder.png" alt="Internship" className="mt-2" />
                            </div>

                            <div className="bg-[rgb(254,193,146)] rounded-lg p-4 text-left transition duration-500 ease-in-out hover:-translate-y-[1vh] cursor-pointer">
                                <h2 className="font-semibold">Mentorship</h2>
                                <p>Guidance From Top Mentors</p>
                                <img src="/path/to/image-placeholder.png" alt="Mentorship" className="mt-2" />
                            </div>

                            <div className="bg-[#9BC9FF] rounded-lg p-4 text-left transition duration-500 ease-in-out hover:-translate-y-[1vh] cursor-pointer">
                                <h2 className="font-semibold">Jobs</h2>
                                <p>Explore Diverse Careers</p>
                                <img src="/path/to/image-placeholder.png" alt="Jobs" className="mt-2" />
                            </div>

                            <div className="bg-[rgb(255,177,204)] rounded-lg p-4 text-left transition duration-500 ease-in-out hover:-translate-y-[1vh] cursor-pointer">
                                <h2 className="font-semibold">Courses</h2>
                                <p>Expand Knowledge Base</p>
                                <img src="/path/to/image-placeholder.png" alt="Courses" className="mt-2" />
                            </div>

                            <div className="bg-[rgb(255,221,128)] rounded-lg p-4 text-left transition duration-500 ease-in-out hover:-translate-y-[1vh] cursor-pointer">
                                <h2 className="font-semibold">Compete</h2>
                                <p>Battle For Excellence</p>
                                <img src="/path/to/image-placeholder.png" alt="Compete" className="mt-2" />
                            </div>

                            <div className="bg-[#C8BBFF] rounded-lg p-4 text-left transition duration-500 ease-in-out hover:-translate-y-[1vh] cursor-pointer">
                                <h2 className="font-semibold">Practice</h2>
                                <p>Refine Skills Daily</p>
                                <img src="/path/to/image-placeholder.png" alt="Practice" className="mt-2" />
                            </div>
                        </div>

                        <div className='w-full flex items-center justify-end'>
                            <button className="text-blue-700 mb-6 font-small">Explore More ➔</button>
                        </div>

                        <div className='w-full flex items-center justify-start'>
                            <button className='bg-[#EBE8FD] rounded-full flex items-center justify-start p-2 px-4 gap-2 w-full mb-3'>
                                <img src="/Images/diamond.webp" alt="Internship" className="w-[40px]" />
                                <div className='font-medium'>Become a Pro Member! <span className='text-blue-700'> Explore Pro</span></div>
                            </button>
                        </div>

                        <div className="space-y-4 w-full">

                            <div className="bg-yellow-400 rounded-full px-6 py-4 w-full">
                                <span className="text-black font-semibold flex items-center justify-center gap-2 w-full"><RiInboxArchiveLine size={25} />Unstop For Business ➔</span>
                            </div>
                        </div>
                    </main>

                    <div className="fixed bottom-0 w-full bg-white border-t md:hidden flex justify-around py-2">
                        <button className="hover:text-blue-600 flex flex-col items-center text-[12px]"><GoHome size={20} />Home</button>
                        <button className="hover:text-blue-600 flex flex-col items-center text-[12px]"><PiStudentDuotone size={20} />Internships</button>
                        <button className="hover:text-blue-600 flex flex-col items-center text-[12px]">< MdWorkOutline size={20} />Jobs</button>
                        <button className="hover:text-blue-600 flex flex-col items-center text-[12px]">< BsTrophy size={20} />Compete</button>
                        <button className="hover:text-blue-600 flex flex-col items-center text-[12px]"><IoPersonOutline size={20} />Mentorship</button>
                        <button className="hover:text-blue-600 flex flex-col items-center text-[12px]"><MdOutlineReadMore size={20} />More</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home