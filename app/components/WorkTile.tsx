"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { WorkContext } from "../WorkContext";

export default function WorkTile({ id, title, subtitle, cols, slug, images }:any) {

  return (
        <motion.div
            initial = {{ opacity: 0 }}
            whileInView = {{ opacity: 1 }}
            className={`relative col-span-${cols} flex flex-col justify-end p-8 h-[40vh] lg:h-[60vh] w-full rounded-3xl transition-all cursor-pointer`}
            id={slug}
        >
          <Link href={`/${slug}`}>
            <div>
              <Image src={images[0]} fill style={{objectFit:"cover"}} alt="alt" className="rounded-3xl opacity-50 hover:opacity-70 transition-all" />
              <h5 className="text-white text-syne font-regular text-md lg:text-xl z-50">{subtitle}</h5>
              <h2 className="text-white text-syne font-bold text-xl lg:text-3xl z-50">{title}</h2>
            </div>
          </Link>
        </motion.div>
  )
}
