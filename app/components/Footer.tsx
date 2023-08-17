const Footer=()=>{
    return (
        <footer className="w-full flex flex-col">
            <div className="w-full flex flex-col md:flex-row justify-between">
                <p className="text-lg md:text-2xl">
                    GroVr
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 ">
                        <ul className="w-max">
                            <li className="font-bold">Links</li>
                            <li>Home</li>
                            <li>Products</li>
                            <li>Pricing</li>
                            <li>Contact</li>
                            <li>Join Waitlist</li>
                        </ul>
                        <ul className="">
                            <li className="font-bold">Features</li>
                            <li>About Us</li>
                            <li>Team</li>
                            <li>What we do</li>
                        </ul>
                        <ul className="">
                            <li className="font-bold">Company</li>
                            <li>Privacy</li>
                            <li>Terms</li>
                            <li>Security</li>
                        </ul>
                </div>
           </div>
           <hr className="my-4"/>
           <p className="mx-auto">GroVr &copy; 2023</p>
        </footer>
    )
}

export default Footer