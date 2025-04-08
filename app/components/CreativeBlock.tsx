"use client"

import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa6";

export default function CreativeBlock() {

  const scrollDown100vh = () => {
    window.scrollBy(0, window.innerHeight);
  };

  return (
    <div className='group fixed flex flex-col justify-center items-center w-full h-[100vh]'>
      <div className="absolute -top-0 -left-0 w-1/3 h-1/2 rounded-full blur-3xl bg-blue-500 opacity-10"></div>
      <div className="absolute -bottom-0 -right-0 w-1/3 h-1/2 rounded-full blur-3xl bg-purple-500 opacity-10"></div>
      <div className="relative flex flex-col justify-center items-center container m-auto w-10/12 p-8 h-[100vh] border-x border-white border-dashed">
        
        {/*<div className="flex flex-col justify-center items-center gap-4 mt-96">
          <button onClick={scrollDown100vh} className="flex flex-nowrap gap-2 justify-center items-center text-syne font-black text-white bg-blue-500 px-4 py-2 rounded-full lg:text-4xl text-xl bg-opacity-10 backdrop-blur-sm border border-white hover:scale-105 transition-all duration-200">What is Exvitermini?<FaArrowDown className="w-6 h-6"/></button>
        </div>*/}     

        <p className="flex flex-nowrap items-center gap-4 absolute top-1/2 -translate-y-1/2 -rotate-90 lg:-left-72 -left-[270px] max-w-fit text-white text-sm text-syne font-[700]">“ex vi ter·​mi·​ni eks-ˌwē-&apos;ter-mə-ˌnē : from the force of the boundary”</p>
        <p className="flex flex-nowrap items-center gap-4 absolute top-1/2 -translate-y-1/2 rotate-90 lg:-right-60 -right-[220px] max-w-fit text-white text-sm text-syne font-[700]">Contact us and let&apos;s have a talk! <a href="mailto:info@exvitermini.hu" className="underline cursor-pointer">info@exvitermini.hu</a></p>
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
        className='absolute w-full h-full top-0 left-0 object-cover lg:object-cover -z-20 opacity-50 filter grayscale' 
      />
      <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{ duration: 2 }}
        className="lg:block hidden"
      >
        <motion.h1
          animate={{
            left: ['40px', '120px', '40px'],
          }} 
          transition={{ ease: "easeInOut", duration: 10, repeat: Infinity}} 
          className='absolute top-1/3 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#ffffff0c] text-syne font-extrabold text-6xl opacity-100 text-right w-1/3'
        >
          “Create with the heart
        </motion.h1>

        <motion.h1 
          animate={{
            right: ['160px', '80px', '160px'],
          }} 
          transition={{ ease: "easeInOut", duration: 10, repeat: Infinity}}
          className='absolute bottom-1/3 bg-clip-text text-transparent bg-gradient-to-l from-white to-[#ffffff0c]  text-syne font-extrabold text-6xl opacity-100 text-left w-1/3'
        >
          build with the mind”
        </motion.h1>

      </motion.div>

      <div className="block lg:hidden">
        <motion.h1
          animate={{
            left: ['50%', '0%', '50%'],
          }} 
          transition={{ ease: "easeInOut", duration: 10, repeat: Infinity}} 
          className='absolute top-1/4 text-white text-syne font-extrabold text-5xl opacity-20 w-full'
        >
          From the force
        </motion.h1>

        <motion.h1
          animate={{
            left: ['20%', '-30%', '20%'],
          }} 
          transition={{ ease: "easeInOut", duration: 10, repeat: Infinity}} 
          className='absolute top-2/4 text-white text-syne font-extrabold text-5xl opacity-20 w-full'
        >
          of the boundary
        </motion.h1>
      </div>

     
    </div>
  );
}
