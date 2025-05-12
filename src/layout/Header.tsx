'use client'

import { Search } from "lucide-react"
import { motion} from "motion/react"
import Nav from "@/components/Nav"

const varlog={
    anime:{
        rotate:360,
        scale:1.3,
        fontSeize:"bold",
        transition:{
        duration:0.2}
    },
    tap:{
        scale:1
    }
}


export default function Header() {
  return (
    <div className="flex flex-row  py-5 justify-around ">
        <motion.span className="text-xl font-semibold cursor-pointer md:text-2xl lg:text-3xl"
            variants={varlog}
            whileHover='anime'
            whileTap='tap'
        >Lundev</motion.span>
        <Nav />
        <Search className="cursor-pointer transition duration-300 hover:scale-110 active:scale-50"/>
    </div>
  )
}