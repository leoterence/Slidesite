'use client'

import { motion } from "motion/react"

const links=[
    "Home",
    "Blog",
    "Info"
]

const varli={
    anime:{
        scale:1.2,
        transition:{
        duration:0.2
    }}, tap:{
        scale:0.9
    }
}


export default function Nav() {
  return (
    <nav>
        <ul className="flex flex-row gap-x-12 items-center">
            {links.map((link,id)=>{
                return(
                    <motion.li key={id} className="text-sm cursor-pointer sm:text-md md:text-lg"
                    variants={varli}
                    whileHover='anime'
                    whileTap='tap'
                    >{link}</motion.li>
                )
            })}
        </ul>
    </nav>
  )
}