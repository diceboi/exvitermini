"use client"

import { FaArrowLeft } from "react-icons/fa6";

export default function CreativeBlock() {

  return (
    <div className='group fixed flex flex-col justify-center items-center w-full h-[100vh] border-r border-neutral-400'>
      <div className="relative container m-auto w-full h-[100vh] border-x border-neutral-400 border-dashed">
        
        <h1 className='text-white text-syne mix-blend-exclusion text-6xl'>“Create with the heart; build with the mind.” - Criss Jami</h1>
        <p className="flex flex-nowrap items-center gap-4 absolute top-1/2 -translate-y-1/2 -rotate-90 -left-20 text-white text-sm text-syne font-[700]"><FaArrowLeft /> Scroll down</p>
        <p className="flex flex-nowrap items-center gap-4 absolute top-1/2 -translate-y-1/2 rotate-90 -right-24 text-white text-sm text-syne font-[700]">exvitermini @ 2024</p>
      </div>

      <video src={require('@/public/creative-exvitermini-1.mp4')} autoPlay muted loop className='absolute w-full h-full top-0 left-0 object-cover -z-10 opacity-50 mix-blend-exclusion' />
      <div className='absolute w-full h-full top-0 left-0 -z-20 bg-pink-950 opacity-100 bg-blend-exclusion'></div>
    </div>
  );
}
