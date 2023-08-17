"use client"
import Link from "next/link"
import MagneticButton from "./MagneticButton"
import Image from "next/image"
import {AiOutlineMail} from 'react-icons/ai'
import {BsMeta} from 'react-icons/bs'
import { Reveal } from "./Reveal"


const Contact=()=>{
    return(
        <div className="w-full flex flex-col items-center justify-center my-10 bg-alice-blue max-w-5xl mx-auto rounded-lg py-3 drop-shadow-lg" id="contact">
            <h3 className="text-xl font-bold">Reach us out</h3>
            <p className="">for any suggestion or to be part of our team</p>
            <Reveal>
            <div className="flex items-center my-5 gap-x-5">
                
                    <MagneticButton className="bg-transparent">
                        <Link href={'#'}>
                            <Image src={'/logo-black.png'} alt="" width={30} height={30}/>
                        </Link>
                    </MagneticButton>
                    <MagneticButton className="bg-transparent text-gunmetal px-0">
                        <AiOutlineMail className="text-4xl"/>
                    </MagneticButton>
                    <MagneticButton className="bg-transparent text-gunmetal px-0">
                        <BsMeta className="text-4xl"/>
                    </MagneticButton>
            </div>
                </Reveal>
            <hr className="my-5 border border-gunmetal w-full"/>
        </div>
    )
}

export default Contact