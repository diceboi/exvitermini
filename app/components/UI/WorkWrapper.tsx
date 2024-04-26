"use client"

import { motion } from 'framer-motion'

export default function WorkWrapper({children}:any) {
  return (
    <motion.section 
        className='w-full min-h-[100vh] bg-[#0000007e]'
        initial={{ opacity: 0, right: '-100vw' }}
        animate={{ opacity: 1, right: 0 }}
        exit={{ opacity: 0, right: '-100vw' }}
        >
            {children}
    </motion.section>
  )
}
