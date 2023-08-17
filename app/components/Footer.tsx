"use client"
import Link from "next/link"
import { Reveal } from "./Reveal"

const Footer=()=>{
    return (
        <footer className="w-full flex flex-col ">
            <div className="w-full flex flex-col md:flex-row justify-between max-w-5xl mx-auto px-5">
                <Reveal>

                <p className="text-2xl md:text-4xl font-bold mb-2">
                    X
                </p>
                </Reveal>
                <Reveal>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 ">
                        <ul className="w-max mb-2">
                            <li className="font-bold">Links</li>
                            <li><Link href={'#home'}>Home</Link></li>
                            <li><Link href={'#features'}>Products</Link></li>
                            <li> <Link href={'#'}>Pricing</Link></li>
                            <li><Link href={'#contact'}>Contact</Link></li>
                            <li><Link href={'/join-waitlist'}>Join Waitlist</Link></li>
                        </ul>
                        <ul className="mb-2">
                            <li className="font-bold">Features</li>
                            <li>About Us</li>
                            <li>Team</li>
                            <li>What we do</li>
                        </ul>
                        <ul className="mb-2">
                            <li className="font-bold">Company</li>
                            <li>Privacy</li>
                            <li>Terms</li>
                            <li>Security</li>
                        </ul>
                </div>
                </Reveal>
           </div>
           <hr className="my-4"/>
           <p className="mx-auto font-bold">X &copy; 2023</p>
        </footer>
    )
}

export default Footer