"use client"

export default function CreativeBlock() {
  return (
    <div className='group relative flex flex-col justify-center items-center w-full h-[100vh] border-r border-neutral-400'>

        <h1 className='text-white text-smooch text-8xl'>Creative</h1>
        
        <video src={require('@/public/creative-exvitermini-1.mp4')} autoPlay muted loop className='absolute w-full h-full top-0 left-0 object-cover -z-10 opacity-50 mix-blend-exclusion'/>
        <div className='absolute w-full h-full top-0 left-0 -z-20 bg-pink-950 opacity-100 bg-blend-exclusion'></div>
    </div>
  )
}
