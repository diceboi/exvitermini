import Image from 'next/image'

export default function MainNav() {
  return (
    <nav className='flex  justify-center items-center w-full h-16 p-4 fixed top-0 border-b border-white backdrop-blur-xl z-50'>
        <div className='flex flex-row items-baseline gap-4 w-fit h-full'>
            <Image src="/exvitermini-logo-white.svg" height={75} width={200} alt='exvitermini logo' />
            <h1 className='text-syne font-bold text-white'>Creative Agency</h1>
        </div>
    </nav>
  )
}
