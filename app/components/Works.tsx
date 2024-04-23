"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image";

export default function Works() {

  const [selectedId, setSelectedId] = useState<number | null>(null);

  const items = [
    {
      id: 1,
      title: '3D Forge',
      subtitle: '3D printing startup',
      images: [{
        image1: '/works/box-mockup.webp'
      }]
    },
    {
      id: 2,
      title: 'Valen',
      subtitle: 'Szia',
      images: [{
        image1: '/works/box-mockup.webp'
      }]
    },
    {
      id: 3,
      title: 'Cia',
      subtitle: 'Helló',
      images: [{
        image1: '/works/box-mockup.webp'
      }]
    },
  ];

  // Find the selected item with the matching ID
  const selectedItem = items.find(item => item.id === selectedId);

  return (
    <section className="z-50 mt-[100vh] bg-[#000000c5] backdrop-blur-md rounded-t-3xl overflow-hidden border border-neutral-400">
        <div className="container m-auto grid">
            <h1 className="text-8xl text-white text-smooch">Works</h1>
            <div className="grid grid-cols-2 grid-rows-subgrid gap-8">
               {items.map(item => (
                <motion.div className=" border border-neutral-400" layoutId={item.id.toString()} onClick={() => setSelectedId(item.id)} key={item.id}>
                        <motion.h5>{item.subtitle}</motion.h5>
                        <motion.h2>{item.title}</motion.h2>
                        {item.images.map(image => (  
                                <Image key={image.image1} src={image.image1} width={1440} height={900} alt="alt" className="rounded-3xl" />
                        ))}
                </motion.div>
                ))} 
            </div>

            <AnimatePresence>
                {selectedId && selectedItem && (
                <motion.div key={selectedId.toString()} layoutId={selectedId.toString()}>
                    <motion.h5>{selectedItem.subtitle}</motion.h5>
                    <motion.h2>{selectedItem.title}</motion.h2>

                    <motion.button onClick={() => setSelectedId(null)}>Close</motion.button>
                </motion.div>
                )}
            </AnimatePresence>
            
        </div>
    </section>
  )
}
