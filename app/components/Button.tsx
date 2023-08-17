"use client"
import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge"



interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode,
    className?:string
}


const Button=({children,className}:ButtonProps)=>{



    return(
        <button 
            className={twMerge("px-3 md:px-5 py-1 md:py-2 bg-gunmetal text-white rounded-full",className)} 
        >
            {children}
        </button>
    )
}

export default Button;