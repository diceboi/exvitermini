"use client"

import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa6";

export default function CreativeBlock() {

  return (
    <div className='group fixed flex flex-col justify-center items-center w-full h-[100vh] border-r border-white'>
      <div className="absolute -top-0 -left-0 w-1/3 h-1/2 rounded-full blur-3xl bg-green-500 opacity-10"></div>
      <div className="absolute -bottom-0 -right-0 w-1/3 h-1/2 rounded-full blur-3xl bg-purple-500 opacity-10"></div>
      <div className="relative flex flex-col justify-center items-center container m-auto w-10/12 p-8 h-[100vh] border-x border-white border-dashed">
        
        <button className="flex flex-nowrap gap-2 justify-center items-center mt-96 text-syne text-bold text-white bg-red-500 px-4 py-2 rounded-full text-3xl bg-opacity-10 backdrop-blur-sm border border-white hover:scale-105">Portfolio <FaArrowDown /></button>

        <p className="flex flex-nowrap items-center gap-4 absolute top-1/2 -translate-y-1/2 -rotate-90 -left-20 text-white text-sm text-syne font-[700]"><FaArrowLeft /> Scroll down</p>
        <p className="flex flex-nowrap items-center gap-4 absolute top-1/2 -translate-y-1/2 rotate-90 -right-24 text-white text-sm text-syne font-[700]">exvitermini @ 2024</p>
      </div>

      <motion.video 
        whileInView={{opacity:0.5}} 
        initial={{opacity:0}} 
        exit={{opacity:0.5}} 
        transition={{ duration: 2}} 
        src={require('@/public/creative-exvitermini-1.mp4')} 
        autoPlay 
        muted 
        loop 
        className='absolute w-full h-full top-0 left-0 object-cover -z-20 opacity-50' 
      />
      <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{ duration: 2 }}
      >
        <motion.h1
          animate={{
            left: ['40px', '120px', '40px'],
          }} 
          transition={{ ease: "easeInOut", duration: 10, repeat: Infinity}} 
          className='absolute top-1/3 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#ffffff0c] text-syne font-extrabold text-6xl opacity-100 text-right w-1/3'
        >
          From the force
        </motion.h1>

        <motion.h1 
          animate={{
            right: ['160px', '80px', '160px'],
          }} 
          transition={{ ease: "easeInOut", duration: 10, repeat: Infinity}}
          className='absolute bottom-1/3 bg-clip-text text-transparent bg-gradient-to-l from-white to-[#ffffff0c]  text-syne font-extrabold text-6xl opacity-100 text-left w-1/3'
        >
          of the boundary
        </motion.h1>

      </motion.div>

      <div 
      className='absolute w-full h-full top-0 left-0 -z-20 bg-lime-600 mix-blend-lighten opacity-75'
      >
      </div>
    </div>
  );
}
