import React from 'react'
import Link from 'next/link'
import pic1 from '@/public/images/fitBud/fitbud1.png'
import pic2 from '@/public/images/fitBud/fitbud2.png'
import pic3 from '@/public/images/fitBud/fitbud3.png'
import pic4 from '@/public/images/fitBud/fitbud4.png'
import pic5 from '@/public/images/fitBud/fitbud5.png'
import pic6 from '@/public/images/fitBud/fitbud6.png'
import Image from 'next/image'

function page() {
  return (
    <div className="p-4 min-h-screen items-center bg-primary text-primary-foreground pt-36 pb-36">
      <div className='w-full flex justify-center'>
          <div className='text-sm self-start w-full flex justify-between max-w-xl mb-4 border-b-[1px] pb-1 border-[#4c4c4c]'>
            <Link href='/'>
              <p>← back</p>
            </Link>
            <p>FitBud</p>
            <p className='text-[#939393]'>2024</p>
          </div>
      </div>
      <div className='w-full flex justify-center '>
          <div className='max-w-xl text-sm flex flex-col justify-center items-center w-full gap-8 pt-8'>
            <p className='w-full'>An interactive Prototype for an AI-powered health app featuring playful illustrations and characters. Made as a part of the BET350 final project.</p>
            <div className='flex flex-col gap-8'>
              <Image alt='' src={pic1} className='w-full h-auto' />
              <Image alt='' src={pic2} className='w-full h-auto' />
              <Image alt='' src={pic3} className='w-full h-auto' />
              <Image alt='' src={pic4} className='w-full h-auto' />
              <Image alt='' src={pic5} className='w-full h-auto' />
              <Image alt='' src={pic6} className='w-full h-auto' />
            </div>
          </div>
      </div>
    </div>
  )
}

export default page