"use client"

import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa6";
import { useState } from "react";
import ScrambleText from "./UI/ScrambleText";
import DirectionalCursor from "./UI/DirectionalCursor";
import Link from "next/link";

export default function CreativeBlock() {
  const [isHovered, setIsHovered] = useState(false);

  // Animation variants for the lines (grow from 0 to 100%)
  const lineVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: {
      width: 150,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  // Animation variants for the box (fade in)
  const boxVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 0.5, duration: 0.1 }
    }
  }

  // Border drawing animation using SVG path length
  const borderDrawVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { delay: 0.5, duration: 0.8, ease: "easeInOut" }
    }
  }

  return (
    <div className='group fixed flex flex-col justify-center items-center w-full h-[100vh]'>
      <DirectionalCursor />
      <div className="absolute -top-0 -left-0 w-1/3 h-1/2 rounded-full blur-3xl bg-blue-500 opacity-10"></div>
      <div className="absolute -bottom-0 -right-0 w-1/3 h-1/2 rounded-full blur-3xl bg-purple-500 opacity-10"></div>
      <div className="relative flex flex-col justify-center items-center container m-auto w-10/12 p-8 h-[100vh] border-x border-white border-dashed pointer-events-none">

        <p className="flex flex-nowrap items-center gap-4 absolute top-1/2 -translate-y-1/2 -rotate-90 lg:-left-72 -left-[270px] max-w-fit text-white text-sm text-syne font-[700]">“ex vi ter·​mi·​ni eks-ˌwē-&apos;ter-mə-ˌnē : from the force of the boundary”</p>
        <p className="flex flex-nowrap items-center gap-4 absolute top-1/2 -translate-y-1/2 rotate-90 lg:-right-60 -right-[220px] max-w-fit text-white text-sm text-syne font-[700]">Find out what we do: <a href="mailto:info@exvitermini.hu" className="underline cursor-pointer pointer-events-auto">info@exvitermini.hu</a></p>

        {/* Interaction Wrapper: Covers head + expanded area for buttons */}
        <div
          className="absolute z-10 w-[800px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Center Head Hotspot (visual helper if needed, but the parent handles hover) */}
          <div className="absolute w-[300px] h-[400px] bg-transparent"></div>

          {/* Left Side: Project Management */}
          <div className="absolute right-[65%] flex items-center pointer-events-none">

            {false && (
              <Link href="/project-management" className="pointer-events-auto cursor-pointer">
                <motion.div
                  initial="hidden"
                  animate={isHovered ? "visible" : "hidden"}
                  variants={boxVariants}
                  className="relative px-4 py-2 mr-0 backdrop-blur-sm bg-black/10 overflow-hidden group/btn"
                >
                  {/* SVG Border Drawing Effect */}
                  <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
                    <motion.rect
                      variants={borderDrawVariants}
                      width="100%"
                      height="100%"
                      fill="none"
                      stroke="white"
                      strokeWidth="1"
                    />
                  </svg>

                  <div className="text-syne font-bold text-white text-lg uppercase tracking-widest block w-[280px] text-center">
                    <ScrambleText
                      text="Project Management"
                      trigger={isHovered}
                      delay={0.8}
                      duration={0.8}
                    />
                  </div>
                </motion.div>
              </Link>
            )}

            {/* Line */}
            <motion.div
              initial="hidden"
              animate={isHovered ? "visible" : "hidden"}
              variants={lineVariants}
              className="h-[1px] bg-white origin-right"
            />
          </div>

          {/* Right Side: Creative Works */}
          <div className="absolute left-[65%] flex items-center pointer-events-none">
            {/* Line */}
            <motion.div
              initial="hidden"
              animate={isHovered ? "visible" : "hidden"}
              variants={lineVariants}
              className="h-[1px] bg-white origin-left"
            />

            {false && (
              <Link href="/creative-works" className="pointer-events-auto cursor-pointer">
                <motion.div
                  initial="hidden"
                  animate={isHovered ? "visible" : "hidden"}
                  variants={boxVariants}
                  className="relative px-4 py-2 ml-0 backdrop-blur-sm bg-black/10 overflow-hidden group/btn"
                >
                  {/* SVG Border Drawing Effect */}
                  <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
                    <motion.rect
                      variants={borderDrawVariants}
                      width="100%"
                      height="100%"
                      fill="none"
                      stroke="white"
                      strokeWidth="1"
                    />
                  </svg>

                  <div className="text-syne font-bold text-white text-lg uppercase tracking-widest block w-[240px] text-center">
                    <ScrambleText
                      text="Creative Works"
                      trigger={isHovered}
                      delay={0.8}
                      duration={0.8}
                    />
                  </div>
                </motion.div>
              </Link>
            )}
          </div>


        </div>

        {/* MOBILE LAYOUT - Static buttons at bottom */}
        <div className="absolute w-full bottom-[15%] left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 lg:hidden pointer-events-auto z-50">
          <Link href="/project-management" className="pointer-events-auto cursor-pointer w-full max-w-[300px]">
            <div className="relative px-6 py-4 bg-black/60 backdrop-blur-md overflow-hidden border border-white/20 rounded-sm">
              <div className="text-syne font-bold text-white text-lg uppercase tracking-widest block text-center">
                Project Management
              </div>
            </div>
          </Link>

          <Link href="/creative-works" className="pointer-events-auto cursor-pointer w-full max-w-[300px]">
            <div className="relative px-6 py-4 bg-black/60 backdrop-blur-md overflow-hidden border border-white/20 rounded-sm">
              <div className="text-syne font-bold text-white text-lg uppercase tracking-widest block text-center">
                Creative Works
              </div>
            </div>
          </Link>
        </div>

      </div>

      <motion.video
        whileInView={{ opacity: 0.5 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0.5 }}
        transition={{ duration: 2 }}
        src={require('@/public/creative-exvitermini-1.mp4')}
        autoPlay
        muted
        loop
        className='absolute w-full h-full top-0 left-0 object-cover lg:object-cover -z-20 opacity-50 filter grayscale pointer-events-none'
      />

      {/* Background Animated Text */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="lg:block hidden pointer-events-none"
      >
        <motion.h1
          animate={{
            left: ['40px', '120px', '40px'],
          }}
          transition={{ ease: "easeInOut", duration: 10, repeat: Infinity }}
          className='absolute top-1/3 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#ffffff0c] text-syne font-extrabold text-6xl opacity-100 text-right w-1/3'
        >
          “Create with the heart
        </motion.h1>

        <motion.h1
          animate={{
            right: ['160px', '80px', '160px'],
          }}
          transition={{ ease: "easeInOut", duration: 10, repeat: Infinity }}
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
          transition={{ ease: "easeInOut", duration: 10, repeat: Infinity }}
          className='absolute top-1/4 text-white text-syne font-extrabold text-5xl opacity-20 w-full'
        >
          From the force
        </motion.h1>

        <motion.h1
          animate={{
            left: ['20%', '-30%', '20%'],
          }}
          transition={{ ease: "easeInOut", duration: 10, repeat: Infinity }}
          className='absolute top-2/4 text-white text-syne font-extrabold text-5xl opacity-20 w-full'
        >
          of the boundary
        </motion.h1>
      </div>

    </div>
  );
}
