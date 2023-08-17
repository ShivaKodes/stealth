import Link from "next/link"
import Button from "./Button"


const Navbar=()=>{
    return(
        <nav className="w-full pt-5 pb-2 flex items-center justify-between  font-medium border-b border-gunmetal/50">
            <Link href="/" className="text-xl md:text-4xl font-bold text-gunmetal drop-shadow-lg">
                GroVr
            </Link>
            <div className="flex items-center gap-x-4 text-base md:text-lg">
                <Link href={'#Home'}>
                    Home
                </Link>
                <Link href={'#Products'}>
                    Products
                </Link>
                <Link href={'#Pricing'}>
                    Pricing
                </Link>
                <Link href={'#Contact'}>
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