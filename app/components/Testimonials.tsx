import Image from "next/image"

const Testimonials=()=>{
    return (
        <div className="w-full flex flex-col items-center my-10 ">
            <p className="text-xl md:text-2xl font-bold mb-5 ">As seen on</p>
            <div className="w-full gap-x-8 flex items-center justify-center overflow-hidden">
                <Image src={'/Product_Hunt_Logo.png'} width={200} height={200} alt="product hunt logo"/>
                <Image src={'/Product_Hunt_Logo.png'} width={200} height={200} alt="product hunt logo"/>
                <Image src={'/Product_Hunt_Logo.png'} width={200} height={200} alt="product hunt logo"/>
                <Image src={'/Product_Hunt_Logo.png'} width={200} height={200} alt="product hunt logo"/>
            </div>
        </div>
    )
}

export default Testimonials