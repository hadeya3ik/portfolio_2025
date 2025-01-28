import React from 'react'
import Link from 'next/link'
import govee1 from '@/public/images/govee/widgets1.png'
import govee2 from '@/public/images/govee/widgets2.png'
import govee3 from '@/public/images/govee/widgets3.png'
import Image from 'next/image'

function page() {
  return (
    <div className="p-4 min-h-screen items-center bg-primary text-primary-foreground pt-36 pb-36">
      <div className='w-full flex justify-center'>
          <div className='text-sm self-start w-full flex justify-between max-w-xl mb-4 border-b-[1px] pb-1 border-[#4c4c4c]'>
            <Link href='/'>
              <p>← back</p>
            </Link>
            <p>Govi</p>
            <p className='text-[#939393]'>2024</p>
          </div>
      </div>
      <div className='w-full flex justify-center '>
          <div className='max-w-xl text-xs flex flex-col justify-center items-center w-full gap-8 pt-8'>
            <p className='w-full'>Govi is a streamlined web app I built using the Govee API to make smart lighting simpler. While the official Govee app offers amazing customization and shortcuts, its interface can be a bit complex and susceptible to loading delays.</p>
            <p>Govi focuses on quick navigation, parallel requests for faster control, and the convenience of managing lights from any browser. You can find setup instructions and more details on <a className='text-[#afafaf] underline underline-offset-2' href="https://github.com/hadeya3ik/govee" target="_blank">GitHub</a>.</p>
            <div className='flex flex-col gap-8'>
              <Image alt='' src={govee1} className='w-full h-auto' />
              <Image alt='' src={govee2} className='w-full h-auto' />
              <Image alt='' src={govee3} className='w-full h-auto' />
            </div>
          </div>
      </div>
    </div>
  )
}

export default page