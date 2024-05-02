"use client"

import { useContext, useState } from 'react'
import WorkWrapper from '../components/UI/WorkWrapper'
import { WorkContext } from "../WorkContext";
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa6';

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function Works({params}:any) {

  const [open, setOpen] = useState(false)

  const { works } = useContext(WorkContext);

  const currentWork = works.find((work: {slug: string}) => work.slug === params.works[0]);

  return (
    <WorkWrapper>
        <section className='relative flex flex-col gap-4 w-full min-h-[100vh] mt-16 bg-[#0000007e] '>
          <div className='sticky top-0 flex flex-row justify-between items-center bg-black border-b border-white p-4 z-50'>
            <div className='flex flex-row gap-4 items-baseline'>
              <h1 className="text-6xl text-white text-syne font-bold">{currentWork?.title}</h1>
              <h2 className="text-xl text-white text-syne font-bold">{currentWork?.subtitle}</h2>
            </div>
            <Link href={`/#${currentWork?.slug}`} className='flex flex-nowrap gap-4 items-center text-syne font-bold text-white'><FaArrowLeft /> Back to works</Link>
          </div>
          
          <div className="container m-auto grid grid-cols-2 gap-2 p-4">
          {currentWork?.images.map((image:any, index:any) => (
            <div key={index} onClick={() => setOpen(true)} className='relative w-full h-[70vh] z-0'>
              <Image src={image} fill style={{ objectFit: 'cover' }} alt="work1" className='cursor-pointer' />
            </div>
          ))}

          <Lightbox
            open={open}
            close={() => setOpen(false)}
            slides={currentWork!.images.map((image:any, index:any) =>(
              {src: image}
            ))}
          />
          </div>
        </section>
    </WorkWrapper>
  )
}