import React from 'react'
import Link from 'next/link'
import pic1 from '@/public/images/bakingHorizon/bh1.png'
import pic2 from '@/public/images/bakingHorizon/bh2.png'
import pic3 from '@/public/images/bakingHorizon/bh3.png'
import pic4 from '@/public/images/bakingHorizon/bh4.png'
import pic5 from '@/public/images/bakingHorizon/bh5.png'
import pic6 from '@/public/images/bakingHorizon/bh6.png'
import Image from 'next/image'

function page() {
  return (
    <div className="p-4 min-h-screen items-center bg-primary text-primary-foreground pt-36">
      <div className='w-full flex justify-center'>
          <div className='text-sm self-start w-full flex justify-between max-w-xl mb-4 border-b-[1px] pb-1 border-[#4c4c4c]'>
            <Link href='/'>
              <p>← back</p>
            </Link>
            <p>Baking Horizon</p>
            <p className='text-[#939393]'>2023</p>
          </div>
      </div>
      <div className='w-full flex justify-center '>
          <div className='max-w-xl text-sm flex flex-col justify-center items-center w-full gap-8 pt-8'>
            <p> Created a strong brand identity for a local Bakery. This project included the design of multiple logos, business cards, and the development of a responsive company website <a className='text-[#afafaf] underline underline-offset-2' target="_blank" href='https://www.bakinghorizon.ca/'>bakinghorizon.ca</a>.</p>
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