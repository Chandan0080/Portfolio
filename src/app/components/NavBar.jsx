"use client";
import Link from 'next/link'
import React,{useState} from 'react'

// import {Bar3Icon, XmarkIcon} from "@heroicons/react/24/solid"
import { MdOutlineCancel } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";


function NavBar() {

    const[navbarOpen,setNavbarOpen] = useState(false);
  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100'>
        
        <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-2'>
            <Link href={"/"} className=' text-2xl md:text-5xl text-white font-semibold'>
                DG
            </Link>

            <div className='mobile-menu block md:hidden'>
                {
                    navbarOpen ? (<button onClick={() => {setNavbarOpen(!navbarOpen)}} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                                    {/* <Bar3Icon className="h-5 w-5 " /> */}
                                    <MdOutlineCancel className="h-5 w-5 " />
                                </button>) 
                    : (<button onClick={() => {setNavbarOpen(!navbarOpen)}} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                    {/* <XmarkIcon className="h-5 w-5 " /> */}                  
                    <IoIosMenu className="h-5 w-5 "/>
                </button>)
                }
            </div>

            <div className='menu hidden md:block md:w-auto' id='navbar'>
                <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                    <li><Link href={"#home"} className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'>Home</Link></li>
                    <li><Link href={"#about"} className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'>About</Link></li>
                    <li><Link href={"#projects"} className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'>Projects</Link></li>
                    <li><Link href={"#contact"} className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'>Contact</Link></li>

                </ul>
            </div>
        </div>
        {
            navbarOpen ? (
            <ul className='flex flex-col py-4 items-center'>
                <li><Link href={"#home"} className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'>Home</Link></li>
                <li><Link href={"#about"} className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'>About</Link></li>
                <li><Link href={"#projects"} className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'>Projects</Link></li>
                <li><Link href={"#contact"} className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'>Contact</Link></li>

            </ul>
            ) : (
                null
            )
        }
    </nav>
  )
}

export default NavBar