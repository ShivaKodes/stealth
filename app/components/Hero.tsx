import Link from "next/link"
import Button from "./Button"

const Hero=()=>{

    return(
        <div className="flex flex-col items-center my-20">
            <h1 className="text-2xl md:text-5xl font-semibold mb-5 ">Experience The Best of Internet</h1>

            <p className=" font-medium w-2/3">Introducing X, your all-in-one gateway to stay connected with pop culture without the clutter. Say goodbye to juggling between multiple social media platforms – we&apos;re here to transform the way you engage with the latest trends, news, and fandoms.</p>
            <Button className="bg-gradient-to-r from-blue-600  to-champagne py-5 mt-10">
                <Link href={"/join-waitlist"}>
                    Check our solution
                </Link>
            </Button>
        </div>
    )
}

export default Hero