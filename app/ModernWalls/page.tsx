import React from 'react'
import Link from 'next/link'
import pic1 from '@/public/images/modernWalls/home.png'
import pic2 from '@/public/images/modernWalls/service.png'
import pic3 from '@/public/images/modernWalls/gallery1.png'
import pic4 from '@/public/images/modernWalls/gallery.png'
import pic5 from '@/public/images/modernWalls/contact.png'
import Image from 'next/image'

function page() {
  return (
    <div className="p-4 min-h-screen items-center bg-primary text-primary-foreground pt-36 pb-36">
      <div className='w-full flex justify-center'>
          <div className='text-sm self-start w-full flex justify-between max-w-xl mb-4 border-b-[1px] pb-1 border-[#4c4c4c]'>
            <Link href='/'>
              <p>← back</p>
            </Link>
            <p>Modern Walls</p>
            <p className='text-[#939393]'>2024</p>
          </div>
      </div>
      <div className='w-full flex justify-center '>
          <div className='max-w-xl text-xs flex flex-col justify-center items-center w-full gap-8 pt-8'>
            <p className='w-full'>Developed a responsive and interactive company website for a studio <a className='text-[#afafaf] underline underline-offset-2' target="_blank" href='https://www.themodernwalls.com/'>themodernwalls.com</a> using framer motion and next.js.</p>
            <div className='flex flex-col gap-8'>
              <Image alt='' src={pic1} className='w-full h-auto' />
              <Image alt='' src={pic2} className='w-full h-auto' />
              <Image alt='' src={pic3} className='w-full h-auto' />
              <Image alt='' src={pic4} className='w-full h-auto' />
              <Image alt='' src={pic5} className='w-full h-auto' />
            </div>
          </div>
      </div>
    </div>
  )
}

export default page