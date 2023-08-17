"use client"
import { ButtonHTMLAttributes, EventHandler, useRef, useState } from "react";
import { twMerge } from "tailwind-merge"

import {motion} from 'framer-motion'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode,
    className?:string
}


const Button=({children,className}:ButtonProps)=>{

    const ref=useRef(null);

    const [position,setPosition]=useState({x:0,y:0})


    const handleMouseMove=(event:any)=>{
        const {clientX,clientY}=event;
        const {width,height,left,top}=ref.current.getBoundingClientRect();
        const x=clientX-(left+width/2)
        const y=clientY-(top+height/2)
        setPosition({x,y})
        
    }
    const handleMouseLeave=()=>{
        setPosition({x:0,y:0})
    }

    const {x,y}=position
    return(
        <motion.button 
            className={twMerge("px-3 md:px-5 py-1 md:py-2 bg-gunmetal text-white rounded-full",className)} 
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{x,y}}
            transition={{type:'spring',stiffness:150,damping:20,mass:0.2}}
        >
            {children}
        </motion.button>
    )
}

export default Button;