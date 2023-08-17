"use client"
import Image from "next/image"
import { Reveal } from "./Reveal"

const Product=()=>{
    return(
        <div className="w-full grid grid-cols-1 md:grid-cols-2  md:grid-rows-2 gap-3 text-2xl max-w-5xl mx-auto" id="features">
            <div className="bg-gradient-to-tr from-alice-blue to-white rounded-md flex flex-col-reverse md:flex-row p-5 ">
                <Reveal>
                <div className="mt-2">
                    <h3 className="font-bold">Seamless Experience</h3>
                    <p className="w-3/4 text-lg">Say farewell to app-switching fatigue. With X immerse yourself in everything pop culture without ever leaving our platform.</p>
                </div>
                </Reveal>
                <Reveal className="relative w-1/2 md:h-1/2 aspect-square self-center">
                {/* <div className="relative w-full h-full aspect-square"> */}
                    <Image  alt="image" fill src={"/mountain.jpg"} className="rounded-lg"/>
                {/* </div> */}
                </Reveal>
            </div>
            <div className=" rounded-md flex flex-col p-5 row-span-2 gap-y-3 bg-gradient-to-tl from-pale-purple to-white">
                <div className="relative  w-1/2 aspect-square self-center">
                    <Image  alt="image" fill src={"/laptop.jpg"} className="rounded-lg"/>
                </div>
                <Reveal>

                <div className="">
                    <h3 className="font-bold">Ignite Your Pop Culture Journey!</h3>
                    <p className="w-3/4 text-lg mt-3">From blockbuster movies to trending memes, X keeps you ahead of the curve. Our intelligent algorithms curate content that resonates with your interests, giving you a front-row seat to the pop culture universe</p>
                </div>
                </Reveal>
            </div>
            
            <div className="rounded-md  flex flex-col-reverse md:flex-row p-5 bg-gradient-to-br from-champagne to-white">
                <div className="mt-2">
                    <h3 className="font-bold">Curated Content</h3>
                    <p className=" text-lg">Get your dose of trending news, viral challenges, and celebrity updates, handpicked just for you. No more endless scrolling.</p>
                </div>
                <div className="relative w-1/3 md:w-full h-full aspect-square self-center">
                    <Image  alt="image" fill src={"/place.jpg"} className=" rounded-lg"/>
                </div>
            </div>
            
        </div>
    )
}

export default Product