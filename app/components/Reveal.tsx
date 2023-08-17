import {motion, useAnimation, useInView} from "framer-motion"
import { useEffect, useRef } from "react"
import {twMerge} from 'tailwind-merge'



interface RevealProps{
    children:React.ReactNode
    className?:string
}

export const Reveal =({children,className}:RevealProps)=>{

    const ref=useRef(null)

    const isInView=useInView(ref)
    const mainControls=useAnimation();

    useEffect(()=>{
        if(isInView){
            mainControls.start('visible')
        }
    },[isInView])

    return(
        <div style={{position:"relative",overflow:'hidden'}} ref={ref} className={twMerge('',className)}>
            <motion.div 
                variants={{
                    hidden:{opacity:0,y:75},
                    visible:{opacity:1,y:0}
                }}
                initial="hidden"
                animate={mainControls}
                transition={{duration:0.3,delay:0.25}}
            >
                {children}
            </motion.div >
        </div>
    )
}