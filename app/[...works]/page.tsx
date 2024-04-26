import React from 'react'
import WorkWrapper from '../components/UI/WorkWrapper'
import WorkNav from '../components/UI/WorkNav'

export default function works({title, subtitle, images, id, slug, categories}:any) {
  return (
    <WorkWrapper>
        <WorkNav />
        <h1 className='text-8xl'>Hi</h1>
    </WorkWrapper>
  )
}
