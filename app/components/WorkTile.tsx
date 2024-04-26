"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function WorkTile({ id, title, subtitle, cols, slug, images }:any) {
  return (
        <motion.div className={`relative col-span-${cols} flex flex-col justify-end p-8 border border-white h-[60vh] w-full rounded-3xl transition-all`}
        whileInView={{ opacity: 1 }} initial={{opacity: 0}} exit={{opacity: 0}}>
            <Link href={`/${slug}`}>
                <h5 className="text-white text-syne font-regular text-xl opacity-50">{subtitle}</h5>
                <h2 className="text-white text-syne font-bold text-3xl">{title}</h2>
                <Image src={images[0]} fill style={{objectFit:"cover"}} alt="alt" className="rounded-3xl opacity-50 hover:opacity-70" />
            </Link> 
        </motion.div>
  )
}
