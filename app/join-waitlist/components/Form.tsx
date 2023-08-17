"use client"

import MagneticButton from "@/app/components/MagneticButton"
import { FormEvent, useState } from "react"
import { toast } from "react-hot-toast";

const Form=()=>{
    const [email,setEmail]=useState("");
    const [option,setOption]=useState("");


    const handleSubmit=(event:FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
            if(email==="" || option===""){
                return toast.error("Enter both values")
            }
        toast.success("Thank You for joining us")
    }
    return(
        <form className="flex flex-col items-start border rounded-lg w-1/2 md:w-1/3 mx-auto mt-10 p-5 gap-y-5 backdrop-blur-md drop-shadow-lg" onSubmit={handleSubmit}>
            <div className="w-full">
                <label htmlFor="email">Enter Your Email</label>
                <input type="email" id="email" name="email" className="px-1 w-full mt-1 border-2 rounded-lg py-1" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="flex flex-col w-full">
                <label htmlFor="drop-down">Choose one</label>
                <select id="drop-down" name="drop-down" className="w-full mt-1 border-2 rounded-lg px-1  p-2 bg-white text-gray-800  focus:outline-none" value={option} onChange={(e)=>setOption(e.target.value)}>
                    <option value="select">Select</option>
                    <option value="company">Company</option>
                    <option value="tester " className="rounded-lg">Tester</option>
                </select>
            </div>
            <MagneticButton className="w-full" type="submit">
                Submit
            </MagneticButton>
        </form>
    )
}

export default Form