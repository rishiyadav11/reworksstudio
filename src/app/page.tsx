import { Herosection } from '../components/Herosection'
import React from 'react'
import Whyus from 'components/Whyus'
import Services from 'components/Services'
import TestimonialsPage from 'components/TestimonialsPage'
import CtaSection from 'components/CtaSection'

const page = () => {
  return (
    <div className='bg-black min-h-screen'>
      <Herosection />
      <Services />
      <Whyus/>
      <TestimonialsPage/>
      <CtaSection/>
    </div>
  )
}

export default page