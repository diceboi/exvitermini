import Image from 'next/image'

export default function Home() {
  return (
    <section className='w-full h-[100vh] flex flex-col lg:flex-row '>
      <div className='group relative flex flex-col justify-center items-center w-full lg:w-1/2 h-1/2 lg:h-[100vh] border-r border-neutral-400 hover:h-4/5 hover:lg:h-full hover:lg:w-3/4 transition-all duration-500'>

        <h1 className='text-white text-smooch text-8xl'>Creative</h1>
        
        <video src={require('public/creative-exvitermini.mov')} autoPlay muted loop className='absolute w-full h-full top-0 left-0 object-cover -z-10 opacity-50 mix-blend-exclusion group-hover:mix-blend-overlay group-hover:opacity-20'/>
        <div className='absolute w-full h-full top-0 left-0 -z-20 bg-pink-950 opacity-100 bg-blend-exclusion group-hover:bg-pink-700 group-hover:opacity-100'></div>
      </div>
      <div className='group relative flex flex-col justify-center items-center w-full lg:w-1/2 h-1/2 lg:h-[100vh] hover:h-4/5 hover:lg:h-full hover:lg:w-3/4 transition-all duration-500'>

        <h1 className='text-white text-syne text-7xl font-black'>Business</h1>

        <video src={require('public/business-exvitermini.mov')} autoPlay muted loop className='absolute w-full h-full top-0 left-0 object-cover -z-10 opacity-20 mix-blend-exclusion group-hover:mix-blend-overlay group-hover:opacity-100'/>
        <div className='absolute w-full h-full top-0 left-0 -z-20 bg-neutral-950 opacity-80 bg-blend-screen group-hover:bg-black group-hover:opacity-80'></div>
      </div>
    </section>
  )
}
