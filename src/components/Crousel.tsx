'use client'

import { Images } from "@/asset/Image"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Thumbs, EffectFade } from "swiper/modules"
import { useState } from "react"
import { motion,AnimatePresence } from "motion/react"
import type { Swiper as SwiperType } from 'swiper'

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/thumbs"
import "swiper/css/effect-fade"
const varC={
    init:{opacity:0},
    visible:{opacity:1,
        transition:{
            duration:1,
            when:"beforeChildren",
             staggerChildren:0.5,
        }
    },
    exit:{opacity:0}
}
const vari={
    init:{opacity:0,y:100},
    visible:{opacity:1,
        y:0,
        filter:'blur(0px)'
        ,
        transition:{
            duration:1.3,
        }
    },
    exit:{opacity:0}
}
const only={
    init:{opacity:0},
    visible:{opacity:1,
        transition:{
            duration:1,
        }
    },
    exit:{opacity:0}
}


export default function Crousel() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType|null>(null)
  const [activeIndex, setActiveIndex] = useState(0);

  return (
   <div className="h-screen">
        {/* grande image */}
        <div className="absolute inset-0 h-screen -z-50"
            
        >
            <Swiper className="h-full w-full"
                modules={[Navigation,Thumbs,EffectFade]}
                effect={'fade'}
                thumbs={{swiper:thumbsSwiper}}
                slidesPerView={1}
                navigation={{nextEl:'.next',prevEl:'.preve'}}
                onSlideChange={(Swiper)=>setActiveIndex(Swiper.activeIndex)}
            >
                {Images.map((img,id)=>{
                    return(
                        <SwiperSlide className="h-full  w-full" key={id}>
                                <motion.div className="h-full w-full" 
                                        initial={{opacity:0}}
                                        animate={{opacity:1}}
                                        transition={{duration:2}}
                                        key={activeIndex}>
                                    <Image                                   
                                        src={img.name}
                                        alt={`img${id}`}
                                        fill
                                        className="object-cover"
                                        quality={100}
                                        />
                                </motion.div>
                                <motion.div
                                    className="absolute inset-0 bg-black/30"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1 }}
                                    />
                                <AnimatePresence>
                                   {id===activeIndex&&(
                                     <motion.div className="absolute pl-3 z-50 left-0 top-1/5 sm:pl-15 md:pl-22"
                                    variants={varC}
                                    initial='init'
                                    animate='visible'
                                    exit='exit'
                                    >
                                        <motion.p className="mb-10 sm:mb-15"
                                        variants={only}>DESIGN</motion.p>
                                        <motion.p
                                            variants={vari}
                                         className="text-4xl font-bold mb-4 sm:mb-10 sm:text-7xl " style={{filter:'blur(100px)'}}>{img.titre+(id+1)}</motion.p>
                                        <motion.p
                                            variants={vari}
                                         className="text-xs w-64 block  sm:w-96 text-semibold" style={{filter:'blur(100px)'}}>{img.desc}</motion.p>
                                    </motion.div>
                                   )}
                                </AnimatePresence>
                        </SwiperSlide>
                    )
                })}
             </Swiper>
        </div>

         <div className=" h-28 w-2/3 mx-auto translate-y-130 ">
            <Swiper className=" h-full"
                onSwiper={setThumbsSwiper}
                modules={[Navigation,Thumbs,]}
                slidesPerView={4}
                spaceBetween={10}
                breakpoints={
                    {
                        320:{
                            slidesPerView:2
                        },
                        640:{
                            slidesPerView:3
                        },
                        1024:{
                            slidesPerView:4
                        }
                    }
                }
            >
                {Images.map((img,id)=>{
                    return(
                        <SwiperSlide className="h-full  w-full" key={id}>
                                <div className="h-full w-full cursor-pointer">
                                    <Image                                   
                                        src={img.name}
                                        alt={`img${id}`}
                                        fill
                                        className="object-cover"
                                        quality={100}
                                        />
                                </div>
                        </SwiperSlide>
                    )
                })}
             </Swiper>
        </div>

        <div className="flex mr-12 sm:mr-15 flex-row gap-x-2 sm:gap-x-5 translate-x-10/12 translate-y-20 md:mr-0">
            <span className="block border px-3 sm:px-4 rounded border-white/30 bg-gray-200/40 preve cursor-pointer font-bold text-lg">←</span>
            <span className="block border px-3 sm:px-4 rounded border-white/30 bg-gray-200/40 next cursor-pointer font-bold text-lg">→</span>
        </div>

   </div>
  )
}
