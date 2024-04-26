import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image";
import WorkTile from "./WorkTile";

export default function Works() {

  const items = [
    {
      id: 1,
      title: '3D Forge',
      subtitle: '3D printing startup',
      cols: '2',
      slug: '3d-printing-startup',
      images: [
        '/works/box-mockup.webp',
        '/works/babuk.png',
        '/works/babuk-2.png',
        '/works/bastya-1.png'
      ]
    },
    {
      id: 2,
      title: 'Valen',
      subtitle: 'Szia',
      cols: '1',
      slug: '3d-printing-startupp',
      images: [
        '/works/box-mockup.webp',
        '/works/babuk.png',
        '/works/babuk-2.png',
        '/works/bastya-1.png'
      ]
    },
    {
      id: 3,
      title: 'Cia',
      subtitle: 'Helló',
      cols: '1',
      slug: '3d-printing-startup',
      images: [
        '/works/box-mockup.webp',
        '/works/babuk.png',
        '/works/babuk-2.png',
        '/works/bastya-1.png'
      ]
    },
    {
        id: 4,
        title: 'Cia',
        subtitle: 'Helló',
        cols: '1',
        slug: '3d-printing-startup',
        images: [
          '/works/box-mockup.webp',
          '/works/babuk.png',
          '/works/babuk-2.png',
          '/works/bastya-1.png'
        ]
      },
      {
        id: 5,
        title: 'Cia',
        subtitle: 'Helló',
        cols: '1',
        slug: '3d-printing-startup',
        images: [
          '/works/box-mockup.webp',
          '/works/babuk.png',
          '/works/babuk-2.png',
          '/works/bastya-1.png'
        ]
      },
      {
        id: 6,
        title: 'Cia',
        subtitle: 'Helló',
        cols: '2',
        slug: '3d-printing-startup',
        images: [
          '/works/box-mockup.webp',
          '/works/babuk.png',
          '/works/babuk-2.png',
          '/works/bastya-1.png'
        ]
      },
      {
        id: 7,
        title: 'Cia',
        subtitle: 'Helló',
        cols: '1',
        slug: '3d-printing-startup',
        images: [
          '/works/box-mockup.webp',
          '/works/babuk.png',
          '/works/babuk-2.png',
          '/works/bastya-1.png'
        ]
      },
      {
        id: 8,
        title: 'Cia',
        subtitle: 'Helló',
        cols: '1',
        slug: '3d-printing-startup',
        images: [
          '/works/box-mockup.webp',
          '/works/babuk.png',
          '/works/babuk-2.png',
          '/works/bastya-1.png'
        ]
      },
      {
        id: 9,
        title: 'Cia',
        subtitle: 'Helló',
        cols: '1',
        slug: '3d-printing-startup',
        images: [
          '/works/box-mockup.webp',
          '/works/babuk.png',
          '/works/babuk-2.png',
          '/works/bastya-1.png'
        ]
      },
      {
        id: 10,
        title: 'Cia',
        subtitle: 'Helló',
        cols: '3',
        slug: '3d-printing-startup',
        images: [
          '/works/box-mockup.webp',
          '/works/babuk.png',
          '/works/babuk-2.png',
          '/works/bastya-1.png'
        ]
      },
      {
        id: 11,
        title: 'Cia',
        subtitle: 'Helló',
        cols: '1',
        slug: '3d-printing-startup',
        images: [
          '/works/box-mockup.webp',
          '/works/babuk.png',
          '/works/babuk-2.png',
          '/works/bastya-1.png'
        ]
      },
      {
        id: 12,
        title: 'Cia',
        subtitle: 'Helló',
        cols: '1',
        slug: '3d-printing-startup',
        images: [
          '/works/box-mockup.webp',
          '/works/babuk.png',
          '/works/babuk-2.png',
          '/works/bastya-1.png'
        ]
      },
      {
        id: 13,
        title: 'Cia',
        subtitle: 'Helló',
        cols: '1',
        slug: '3d-printing-startup',
        images: [
          '/works/box-mockup.webp',
          '/works/babuk.png',
          '/works/babuk-2.png',
          '/works/bastya-1.png'
        ]
      },
  ];

  return (
    <section className="z-50 mt-[100vh] bg-[#0000007e] backdrop-blur-md rounded-t-3xl overflow-hidden border border-neutral-400">
        <div className="container m-auto flex flex-col p-8 gap-8">
          <div className="py-6 border-b border-white">
            <h1 className="text-8xl text-white text-syne font-black">PORTFOLIO</h1>
          </div>


            <div className="grid grid-cols-4 gap-8">
              {
                items.map((item:any, index:number) => (
                  <WorkTile key={index} id={item.id} title={item.title} subtitle={item.subtitle} cols={item.cols} slug={item.slug} images={item.images}/>
                ))
              }
            </div>

        </div>
    </section>
  )
}
