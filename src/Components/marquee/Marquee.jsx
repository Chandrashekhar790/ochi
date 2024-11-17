import { motion } from 'framer-motion'
import React from 'react'



const Marquee = () => {

  
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.0001" className='w-full py-20 rounded-tr-3xl rounded-tl-2xl bg-[#004D43]'>

        <div className=' border-t-[1px] border-b-[1px] border-zinc-300 flex   whitespace-nowrap overflow-hidden'>
            <motion.h1 initial = {{x:"0"}} animate = {{x:"-100%"}} transition={{ease:"linear", duration:5,repeat:Infinity}} className='main uppercase text-[29vw] font-semibold leading-none -mb-[3vw] -mt-[6vw] pr-20 '>we are ochi</motion.h1>
            <motion.h1 initial = {{x:"0"}} animate = {{x:"-100%"}} transition={{ease:"linear", duration:5,repeat:Infinity}} className='main uppercase text-[29vw] font-semibold leading-none -mb-[3vw] -mt-[6vw] pr-20 '>we are ochi</motion.h1>

        </div>
      
    </div>
  )
}

export default Marquee
