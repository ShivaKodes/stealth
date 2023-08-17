import Image from "next/image"

const Product=()=>{
    return(
        <div className="w-full grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-3 text-2xl" id="features">
            <div className="bg-alice-blue rounded-md flex  p-5 ">
                <div className="">
                    <h3 className="font-bold">Seamless Experience</h3>
                    <p className="w-3/4 text-lg">Say farewell to app-switching fatigue. With X immerse yourself in everything pop culture without ever leaving our platform.</p>
                </div>
                <div className="relative w-full h-full aspect-square">
                    <Image  alt="image" fill src={"/mountain.jpg"} className="rounded-lg"/>
                </div>
            </div>
            <div className="bg-pale-purple rounded-md flex flex-col p-5 row-span-2 gap-y-3">
                <div className="relative  w- h-1/2 aspect-square self-center">
                    <Image  alt="image" fill src={"/laptop.jpg"} className="rounded-lg"/>
                </div>
                <div className="">
                    <h3 className="font-bold">Ignite Your Pop Culture Journey!</h3>
                    <p className="w-3/4 text-lg mt-3">From blockbuster movies to trending memes, X keeps you ahead of the curve. Our intelligent algorithms curate content that resonates with your interests, giving you a front-row seat to the pop culture universe</p>
                </div>
            </div>
            
            <div className="bg-champagne rounded-md flex  p-5">
                <div className="">
                    <h3 className="font-bold">Curated Content</h3>
                    <p className="w-4/5 text-lg">Get your dose of trending news, viral challenges, and celebrity updates, handpicked just for you. No more endless scrolling.</p>
                </div>
                <div className="relative w-full h-full aspect-square">
                    <Image  alt="image" fill src={"/place.jpg"} className="aspect-square"/>
                </div>
            </div>
            
        </div>
    )
}

export default Product