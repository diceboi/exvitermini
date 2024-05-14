import React from 'react'

export default function AboutUs() {
  return (
    <section 
    id='aboutus'
      className="z-30 bg-black"
    >
        
          <div className="container w-10/12 m-auto flex flex-col gap-16 lg:border-x border-[#ffffff80] border-dashed lg:px-8 pb-16">
            <div className="py-6 border-b border-white">
              <h1 className="lg:text-8xl text-2xl text-white text-syne font-black">That&apos;s US</h1>
            </div>
            <div className="w-full gap-8">
                <p className="text-white text-syne font-bold text-md lg:text-3xl z-50 self-center justify-self-center place-self-center">
                Well, we do not dance, that&apos;s for sure, but we do have a creative mindset to execute that two steps: think and create something what our customers like. Exvitermini can be your company&apos;s universal tool to help you rationalize your new product, create and test prototypes; develop, organize and create documents, drawings, production plans. We can even help you with design, branding, product catalogues and publications. We are able to give you precisely defined package of services with transparent processes and organized workflow in order to take off weight from your shoulder. We create the enviroment for you where you can direct your attention to details which are really matter.
                </p>
            </div>
        </div>
    </section>
  )
}
