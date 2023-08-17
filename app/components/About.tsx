"use client"

import Image from "next/image"
import { Reveal } from "./Reveal"

const About=()=>{
    return(
        <div className="w-full bg-gradient-to-tl py-10 px-5 from-white  via-white to-champagne grid grid-cols-1 md:grid-cols-2 rounded-lg mb-5 gap-x-5 drop-shadow-lg max-w-5xl mx-auto" id="about">
           
            <div className="relative ">
                <Image src={"/office.jpg"} fill alt="" className="cover"/>
            </div>
            
            <Reveal >
            <div className="flex flex-col">
                <h3 className="text-xl font-bold">About Us</h3>
                <p className="">At X, we believe that pop culture isn&apos;t just a trend; it&apos;s a way of life. Our journey began with a simple yet powerful idea – to create a space where pop culture enthusiasts like you could connect, engage, and celebrate your passions without the distractions of scattered platforms.</p>
            </div>
            </Reveal>
        </div>
    )
}

export default About