"use client"

import { useContext, useState } from "react";
import WorkTile from "./WorkTile";
import * as React from "react";
import Image from "next/image";
import { WorkContext } from "../WorkContext";
import { animate, motion, useAnimate } from "framer-motion";

export default function Works() {

  const { works } = useContext(WorkContext);
  const [scope, animate] = useAnimate()
  const [isMoved, setIsMoved] = useState(false); // State variable to track the position

    const togglePosition = () => {
        setIsMoved(!isMoved);

        if (isMoved) {
            animate(scope.current, { transform: "translateX(0%)" });
        } else {
            animate(scope.current, { transform: "translateX(-50%)" });
        }
    };

  return (
    <motion.section 
      className="mt-[100vh] z-30 bg-black rounded-t-3xl"
    >
        
          <div className="container w-10/12 m-auto flex flex-col gap-8 lg:border-x border-[#ffffff80] border-dashed lg:px-8 pb-16">
            <div className="py-6 border-b border-white">
              <h1 className="lg:text-8xl text-2xl text-white text-syne font-black">PORTFOLIO</h1>
            </div>
            <div className="grid w-full lg:grid-cols-3 grid-cols-1 gap-8">
              {
                works.map((item:any, index:number) => (
                  <WorkTile key={item.id} id={item.id} title={item.title} subtitle={item.subtitle} cols={item.cols} slug={item.slug} images={item.images}/>
                ))
              }
            </div>
        </div>
    </motion.section>
  )
}
