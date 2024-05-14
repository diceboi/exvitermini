import Image from "next/image"

export default function Footer() {
  return (
    <section className="absolute flex flex-col gap-8 w-full min-h-[10vh] bg-black border-t border-white z-[999] p-8 ">
        
        <div className="container m-auto flex flex-col lg:flex-row justify-between gap-8 lg:gap-16">

            <div className='flex flex-col gap-4'>
                <div className="flex flex-nowrap items-baseline gap-2">
                    <Image src="/exvitermini-logo-white.svg" height={75} width={200} alt='exvitermini logo' className='w-[150px]' />
                    <h1 className='text-syne font-bold text-white text-sm'>Creative Works</h1>
                </div>
                
                <div>
                    <p className="text-white italic">ex vi ter·​mi·​ni eks-ˌwē-&apos;ter-mə-ˌnē : from the force of the boundary</p>
                </div>
            </div>

            <div className='flex flex-col gap-4'>
                <div className="flex flex-nowrap items-baseline gap-2">
                    <h1 className='text-syne font-bold text-white text-sm'>Contact us and let's have a talk!</h1>
                </div>
                <div>
                    <p className="text-white underline"><a href="mailto:info@exvitermini.hu">info@exvitermini.hu</a></p>
                </div>
            </div>

        </div>
        <p className="text-white text-syne text-sm font-bold opacity-20 text-center">Exvitermini @ All rights reserved</p>
    </section>
  )
}
