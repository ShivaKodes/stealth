import Link from "next/link"
import Button from "./Button"


const Navbar=()=>{
    return(
        <nav className="w-full pt-5 pb-2 flex items-center justify-between  font-medium border-b border-gunmetal/50">
            <Link href="/" className="text-xl md:text-4xl font-bold text-gunmetal drop-shadow-lg">
                X
            </Link>
            <div className="flex items-center gap-x-4 text-base md:text-lg">
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
            <Button className="">
                <Link href={'/join-waitlist'}>
                    Join Waitlist
                </Link>
            </Button>
        </nav>
    )
}

export default Navbar