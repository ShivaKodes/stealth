import Link from "next/link"
import Button from "./Button"
import Image from "next/image"
import {AiOutlineMail} from 'react-icons/ai'
import {BsMeta} from 'react-icons/bs'


const Contact=()=>{
    return(
        <div className="w-full flex flex-col items-center justify-center" id="contact">
            <h3 className="text-xl font-bold">Reach us out</h3>
            <p className="">for any suggestion or to be part of our team</p>
            <div className="flex items-center">
                <Button className="bg-transparent">
                    <Link href={'#'}>
                        <Image src={'/logo-black.png'} alt="" width={30} height={30}/>
                    </Link>
                </Button>
                <Button className="bg-transparent text-gunmetal px-0">
                    <AiOutlineMail className="text-4xl"/>
                </Button>
                <Button className="bg-transparent text-gunmetal px-0">
                    <BsMeta className="text-4xl"/>
                </Button>
            </div>
            <hr className="my-5 border border-gunmetal w-full"/>
        </div>
    )
}

export default Contact