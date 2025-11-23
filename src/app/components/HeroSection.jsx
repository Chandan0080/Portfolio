"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image"


import {motion} from "framer-motion"


const HeroSection = () => {




    return(
        <section id="home" className="lg:py-16">
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <motion.div
                    initial={{opacity:0, scale:0}}
                    animate={{opacity:1,scale:1}}
                    transition={{duration: 0.5}}
                    className="col-span-7 place-self-center">
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-none font-extrabold">
                        <span className="text-transparent  bg-clip-text bg-gradient-to-br  from-blue-500 via-purple-500 to-pink-500">
                            Hello I&apos;m 
                        </span>
                        <br></br>
                        <TypeAnimation
                            sequence={[
                                'Deepak',
                                1000,
                                'an Engineer',
                                1000,
                                'a Devloper',
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                        Passionate about Creativity, Innovation, and Crafting Meaningful Digital Solutions.
                </p>
                <div className="flex flex-col  justify-center gap-4">

                    <a href={"#contact"} className="flex flex-col  justify-center gap-4">
                        <button  class=" mr-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce">
                                Contact Me
                        </button>
                    </a>
                    <a href="/Deepak_CV.pdf" download="cv" className="flex flex-col  justify-center gap-4">
                        <button  class="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce">
                                Download CV
                        </button>                       
                    </a>





                </div>
                </motion.div>
                <motion.div 
                    initial={{opacity:0, scale:0}}
                    animate={{opacity:1,scale:1}}
                    transition={{duration: 0.5}}
                    className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                        <Image 
                            src="/images/final.png"
                            alt="Hero Image"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            width={300}
                            height={300}
                        />
                    </div>
                </motion.div>
            </div>
            
        </section>
    );
}

export default HeroSection;