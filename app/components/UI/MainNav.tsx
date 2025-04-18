import Image from 'next/image'

export default function MainNav() {
  return (
    <nav className='flex justify-center gap-4 items-baseline w-full h-auto p-4 fixed top-0 border-b border-white backdrop-blur-xl z-50'>
        <a href="/">
          <div className='flex flex-nowrap items-baseline justify-between gap-4 w-full h-full'>
              <Image src="/exvitermini-logo-white.svg" height={75} width={200} alt='exvitermini logo' className='w-[150px]'/>
          </div>
        </a>
        <h1 className='text-syne font-bold text-white text-sm'>Creative works</h1>
    </nav>
  )
}
