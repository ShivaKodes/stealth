"use client"

import Link from "next/link"
import Button from "./Button"
import { Reveal } from "./Reveal"
import { usePathname, useRouter } from "next/navigation"
import { twMerge } from "tailwind-merge"


const Navbar=()=>{
    const pathname=usePathname()
    return(
        <nav className="w-full">
            <div className="max-w-5xl mx-auto w-full pt-5 pb-2 flex items-center justify-between  font-medium border-b border-gunmetal/50 px-5 md:px-0">
            <Link href="/" className="text-xl md:text-4xl font-bold text-gunmetal drop-shadow-lg">
                X
            </Link>
            <Reveal>

            <div className={twMerge("hidden md:flex items-center gap-x-4 text-base md:text-lg",pathname==='/join-waitlist'&&"md:hidden")}>
                <Link href={'#Home'}>
                    Home
                </Link>
                <Link href={'#about'}>
                    About Us
                </Link>
                <Link href={'#features'}>
                    Features
                </Link>
                <Link href={'#contact'}>
                    Contact
                </Link>
            </div>
            </Reveal>
            <Button className={"bg-gradient-to-r from-gunmetal to-blue-600 text-sm"}>
                <Link href={'/join-waitlist'}>
                    {pathname==='/join-waitlist'?"Let's Go":"Join Waitlist"}
                </Link>
            </Button>
            </div>
        </nav>
    )
}

export default Navbar