import React from "react"
import {motion} from "framer-motion"

export default function Box(){
    return (
        <motion.div className="box"
       
        animate={{
            y:"100vw",
            opacity:1
        }}

        initial={{
            opacity:0.5
        }}

        transition={{
            duration:4
        }}
        >
        
        </motion.div>
    )
}
