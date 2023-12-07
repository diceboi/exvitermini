import React from 'react'
import Image from 'next/image'

export default function MainNav() {
  return (
    <nav className='flex justify-start items-center w-full h-16 p-4 fixed top-0 border-b border-white border-opacity-25 backdrop-blur-xl z-50'>
        <div className='w-fit h-full'>
            <Image src="/exvitermini-logo-white.svg" height={75} width={200} alt='exvitermini logo' />
        </div>
    </nav>
  )
}
