"use client"

import { motion } from 'framer-motion'

export default function WorkWrapper({children}:any) {
  return (
    <motion.div 
        className='w-full min-h-[110vh] bg-[#0000007e]'
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        >
            {children}
    </motion.div>
  )
}
