"use client"

import Image from 'next/image'
import Link from 'next/link'

export default function MainNav() {

  return (
    <nav className='flex justify-center items-center w-full h-auto p-4 fixed top-0 border-b border-white backdrop-blur-xl z-50 overflow-visible'>

      <div
        className="relative flex items-center justify-center p-2"
      >
        {/* Logo */}
        <Link href="/">
          <div className='relative z-10 hover:scale-105 transition-transform duration-300'>
            <Image
              src="/exvitermini-logo-white.svg"
              height={75}
              width={200}
              alt='exvitermini logo'
              className='w-[150px]'
            />
          </div>
        </Link>

      </div>
    </nav>
  )
}
