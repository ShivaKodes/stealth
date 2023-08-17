import Image from "next/image"

const Product=()=>{
    return(
        <div className="w-full grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-3 text-2xl">
            <div className="bg-alice-blue rounded-md flex  p-5 ">
                <div className="">
                    <h3 className="font-bold">One Place</h3>
                    <p className="w-3/4 text-lg">For all the</p>
                </div>
                <div className="relative w-32 h-32">
                    <Image  alt="image" fill src={"https://picsum.photos/200/300"}/>
                </div>
            </div>
            <div className="bg-pale-purple rounded-md flex flex-col p-5 row-span-2">
                <div className="relative w-20 h-20">
                    <Image  alt="image" fill src={"https://picsum.photos/200/300"}/>
                </div>
                <div className="">
                    <h3 className="font-bold">Systumm</h3>
                    <p className="w-3/4 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quas cupiditate? Vero laudantium, iste iusto cumque sed eaque libero dolorem.</p>
                </div>
            </div>
            
            <div className="bg-champagne rounded-md flex  p-5">
                <div className="">
                    <h3 className="font-bold">Automated Reports</h3>
                    <p className="w-3/4 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quas cupiditate? Vero laudantium, iste iusto cumque sed eaque libero dolorem.</p>
                </div>
                <div className="relative w-20 h-20">
                    <Image  alt="image" fill src={"https://picsum.photos/200/300"}/>
                </div>
            </div>
            
        </div>
    )
}

export default Product