import Link from "next/link"
import Button from "./Button"

const Hero=()=>{

    return(
        <div className="flex flex-col items-center my-20">
            <h1 className="text-2xl md:text-5xl font-semibold mb-5 ">Experience The Best of Internet</h1>
            <p className="w-1/2 text-center font-normal">You don&apos;t have to scroll through mutliple social media platform to stay in touch with the pop culture</p>
            <Button className="bg-gradient-to-r from-blue-600  to-champagne py-5 mt-10">
                <Link href={"/join-waitlist"}>
                    Check our solution
                </Link>
            </Button>
        </div>
    )
}

export default Hero