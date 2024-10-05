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
            <div className="flex flex-col gap-8 lg:gap-16 py-10">
              <p className="text-white text-syne text-justify font-bold text-lg lg:text-3xl z-50 self-center justify-self-center place-self-center">
              „A creative work is a manifestation of creative effort including fine artwork, dance, writing (literature), filmmaking, and composition. At its base, creative work involves two main steps - having an idea, and then turning that idea into a substantive form or process.” - Wikipedia
              </p>
              <div className="flex flex-col gap-4">
                <p className="text-white text-syne text-justify font-medium text-sm lg:text-xl z-50 ">
                We are small group of professionals with creative mindsets. We can be your company&apos;s universal tool to help you rationalize your new product, create brand, design, product catalogues and publications. We can even help you develop, build and test prototypes with complete documentations, drawings and production plans.
                </p>
                <p className="text-white text-syne text-justify font-medium text-sm lg:text-xl z-50 ">
                We give you a precisely defined package of services with transparent processes and organized workflow in order to take off weight from your shoulder.
                </p>
                <p className="text-white text-syne text-justify font-medium text-sm lg:text-xl z-50 ">
                We create the enviroment for you where you can direct your attention on the details that matter the most to you.
                </p>
              </div>
              
            </div>
            {/*<h1 className="text-4xl lg:text-8xl text-white text-syne font-black text-center lg:text-left">Portfolio</h1>
            <div className="grid w-full lg:grid-cols-3 grid-cols-1 gap-8">
              {
                works.map((item:any, index:number) => (
                  <WorkTile key={item.id} id={item.id} title={item.title} subtitle={item.subtitle} cols={item.cols} slug={item.slug} images={item.images} quote={item.quote}/>
                ))
              }
            </div>*/}
        </div>
    </motion.section>
  )
}
