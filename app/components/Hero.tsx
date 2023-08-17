"use client"
import Link from "next/link"
import MagneticButton from "./MagneticButton"
import { Reveal } from "./Reveal"

const Hero=()=>{

    return(
        <div className="flex flex-col items-center my-20 max-w-5xl mx-auto px-2 md:px-0">
            <Reveal>
            <h1 className="text-3xl sm:text-xl md:text-5xl lg:6xl font-semibold mb-5 bg-gradient-to-tr from-blue-500 to-gunmetal text-transparent bg-clip-text">Experience The Best of Internet</h1>
            </Reveal>
           
            <p className="font-normal md:font-medium  w-full md:w-2/3">Introducing X, your all-in-one gateway to stay connected with pop culture without the clutter. Say goodbye to juggling between multiple social media platforms – we&apos;re here to transform the way you engage with the latest trends, news, and fandoms.</p>
            <MagneticButton className="bg-gradient-to-r from-blue-600  to-champagne py-5 mt-10">
                <Link href={"/join-waitlist"}>
                    Check our solution
                </Link>
            </MagneticButton>
            
        </div>
    )
}

export default Hero