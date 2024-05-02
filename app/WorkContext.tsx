'use client'

import { createContext, useState } from "react";

interface WorkItem {
  id: number;
  title: string;
  subtitle: string;
  cols: string;
  slug: string;
  images: string[];
}

// Define the context type with a works property
interface WorkContextType {
  works: WorkItem[];
}

export const WorkContext = createContext<WorkContextType>({
  works: [],
});

export default function WorksProvider({ children }:any) {

  const works = [
    {
      id: 1,
      title: 'Acceptrec',
      subtitle: 'Website redesign',
      cols: '2',
      slug: 'acceptrec',
      images: [
        '/works/acceptrec-1.png',
        '/works/acceptrec-2.png',
        '/works/acceptrec-3.png',
        '/works/acceptrec-4.png',
        '/works/acceptrec-5.png'
      ]
    },
    {
      id: 2,
      title: 'Arpusz',
      subtitle: 'Website design',
      cols: '1',
      slug: 'arpusz',
      images: [
        '/works/arpusz-1.png',
        '/works/arpusz-2.png',
        '/works/arpusz-3.png',
        '/works/arpusz-4.png'
      ]
    },
    {
      id: 3,
      title: 'Besslash',
      subtitle: 'Brand design',
      cols: '1',
      slug: 'besslash',
      images: [
        '/works/besslash-1.png',
        '/works/besslash-mockup.jpg',
        '/works/pricelist.jpg'
      ]
    },
    {
        id: 4,
        title: 'Bohar Photo',
        subtitle: 'Logo design',
        cols: '1',
        slug: 'bohar-photo',
        images: [
          '/works/bohar-photo.jpg'
        ]
      },
      {
        id: 5,
        title: 'Derlaszento',
        subtitle: 'Brand design',
        cols: '1',
        slug: 'derlaszento',
        images: [
          '/works/derlaszento.jpg',
          '/works/derlaszento-doboz.jpg'
        ]
      },
      {
        id: 6,
        title: 'Dice Cases',
        subtitle: 'SFF PC Case design with watercooling',
        cols: '2',
        slug: 'dice-cases',
        images: [
          '/works/dicecase-1.jpg',
          '/works/dicecase-2.jpg',
          '/works/dicecase-3.jpg',
          '/works/dicecase-5.jpg'
        ]
      },
      {
        id: 7,
        title: 'Dormee',
        subtitle: 'Brand design',
        cols: '1',
        slug: 'dormee',
        images: [
          '/works/dormee1.jpg',
          '/works/dormee2.jpg',
          '/works/dormee-label.jpg',
        ]
      },
      {
        id: 8,
        title: 'IQC',
        subtitle: 'EV charger 3D design',
        cols: '1',
        slug: 'iqc',
        images: [
          '/works/v3-1.png',
          '/works/v3-2.png',
          '/works/v3-3.png',
          '/works/v3-4.png',
          '/works/v3-5.jpg',
          '/works/v4-1.png',
          '/works/v4-2.png',
          '/works/v4-3.png',
          '/works/v4-4.png',
        ]
      },
      {
        id: 9,
        title: 'Fakultatief',
        subtitle: 'Car detailing studio branding',
        cols: '1',
        slug: 'fakultatief',
        images: [
          '/works/fakultatief-1.jpg',
          '/works/fakultatief-2.jpg',
          '/works/fakultatief-3.jpg',
          '/works/fakultatief-4.jpg',
          '/works/fakultatief-5.png',
          '/works/fakultatief-6.png',
        ]
      },
      {
        id: 10,
        title: 'Hódmezővásárhely',
        subtitle: 'City Branding',
        cols: '4',
        slug: 'hodmezovasarhely',
        images: [
          '/works/hodmezovasarhely-1.jpg',
          '/works/hodmezovasarhely-2.jpg'
        ]
      },
      {
        id: 11,
        title: 'Joblinken',
        subtitle: 'Recruitment agency Branding',
        cols: '1',
        slug: 'joblinken',
        images: [
          '/works/joblinken-1.jpg'
        ]
      },
      {
        id: 12,
        title: 'Kispatás Lovasudvar',
        subtitle: 'Horse park branding',
        cols: '1',
        slug: 'kispatas',
        images: [
          '/works/kispatas-1.jpg',
          '/works/kispatas-2.jpg',
          '/works/kispatas-3.jpg',
          '/works/kispatas-4.jpg',
          '/works/kispatas-5.jpg',
          '/works/kispatas-6.jpg',
          '/works/kispatas-7.png',
        ]
      },
      {
        id: 13,
        title: 'Malibu',
        subtitle: 'Dog kindergarden logo',
        cols: '1',
        slug: 'malibu',
        images: [
          '/works/malibu-1.jpg',
          '/works/malibu-2.jpg',
        ]
      },
      {
        id: 14,
        title: 'Nowa',
        subtitle: 'Design studio logo',
        cols: '1',
        slug: 'nowa',
        images: [
          '/works/nowa-1.jpg',
        ]
      },
      {
        id: 15,
        title: 'Pebo',
        subtitle: 'Restaurant Branding, Webdesign, SASS ordering control panel',
        cols: '1',
        slug: 'pebo',
        images: [
          '/works/pebo-1.jpg',
          '/works/pebo-2.jpg',
          '/works/pebo-3.jpg',
          '/works/pebo-4.png',
          '/works/pebo-5.png',
          '/works/pebo-6.png',
          '/works/pebo-7.png',
        ]
      },
      {
        id: 16,
        title: 'Pakkecske',
        subtitle: 'Handmade country food branding',
        cols: '1',
        slug: 'pakkecske',
        images: [
          '/works/pakkecske-1.jpg',
          '/works/pakkecske-2.jpg',
          '/works/pakkecske-3.jpg'
        ]
      },
      {
        id: 17,
        title: 'Practilub',
        subtitle: 'Lubricants company Branding',
        cols: '1',
        slug: 'practilub',
        images: [
          '/works/practilub-1.jpg',
        ]
      },
      {
        id: 18,
        title: 'Regős',
        subtitle: 'Pastry shop box design',
        cols: '1',
        slug: 'regos',
        images: [
          '/works/regos-1.jpg',
          '/works/regos-2.jpg',
        ]
      },
      {
        id: 19,
        title: 'Relight',
        subtitle: 'GYM / Relaxing studio branding',
        cols: '1',
        slug: 'relight',
        images: [
          '/works/relight-1.jpg',
          '/works/relight-2.jpg',
          '/works/relight-3.jpg',
          '/works/relight-4.jpg',
          '/works/relight-5.jpg',
          '/works/relight-6.jpg',
        ]
      },
      {
        id: 20,
        title: 'GIK Hungary',
        subtitle: 'ROZÉ wine Branding',
        cols: '1',
        slug: 'gik-hungary',
        images: [
          '/works/gik-1.jpg',
          '/works/gik-2.jpg',
        ]
      },
      {
        id: 21,
        title: 'Toffini',
        subtitle: 'Tofu company Branding',
        cols: '1',
        slug: 'toffini',
        images: [
          '/works/toffini-1.jpg',
          '/works/toffini-2.jpg',
        ]
      },
      {
        id: 22,
        title: 'Vác',
        subtitle: 'City Branding',
        cols: '1',
        slug: 'vac',
        images: [
          '/works/vac-1.jpg',
          '/works/vac-2.jpg',
          '/works/vac-3.jpg',
        ]
      },
      {
        id: 23,
        title: 'Wilhelm',
        subtitle: 'Branding',
        cols: '1',
        slug: 'wilhelm',
        images: [
          '/works/wilhelm-1.jpg',
          '/works/wilhelm-2.jpg',
          '/works/wilhelm-3.jpg',
          '/works/wilhelm-3.jpg',
        ]
      },
  ]


  return (
    <WorkContext.Provider value={{works}}>
      {children}
    </WorkContext.Provider>
  );
}
