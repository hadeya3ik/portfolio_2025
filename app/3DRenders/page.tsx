import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import pic1 from '@/public/images/3D/bedroom.jpg'
import pic2 from '@/public/images/3D/kitchen.jpg'
import pic3 from '@/public/images/3D/chain.jpg'
import pic4 from '@/public/images/3D/flowers.jpg'
import pic5 from '@/public/images/3D/bonni.png'

// div className="p-4 min-h-screen l items-center bg-primary text-primary-foreground pt-36">
//       <div className='w-full flex justify-center'>
//           <div className='text-sm self-start w-full flex justify-between max-w-xl mb-4 border-b-[1px] pb-1 border-[#4c4c4c]'>
//             <Link href='/'>
//               <p>← back</p>
//             </Link>
//             <p>Smile Club</p>
//             <p className='text-[#939393]'>2024 - Current</p>
//           </div>
//       </div>


function page() {
  return (
    <div className="p-4 pb-36 min-h-screen flex flex-col items-center bg-primary text-primary-foreground pt-36">
      <div className='w-full flex justify-center'>
          <div className='text-sm self-start w-full flex justify-between max-w-xl mb-4 border-b-[1px] pb-1 border-[#4c4c4c]'>
            <Link href='/'>
              <p>← back</p>
            </Link>
            <p>3D Renders</p>
            <p className='text-[#939393]'>2024</p>
          </div>
          
      </div>
      <div className='flex flex-col items-start max-w-xl gap-4'>
        <p className='text-xs text-left'>A collection of high and low poly 3D scenes made in blender.</p>
        <Image alt='Project Image 1' src={pic4} className='w-full h-auto rounded-md' />
        <Image alt='Project Image 1' src={pic3} className='w-full h-auto rounded-md' />
        <Image alt='Project Image 1' src={pic2} className='w-full h-auto rounded-md' />
        <Image alt='Project Image 1' src={pic1} className='w-full h-auto rounded-md' />
      </div>
      
    </div>
  )
}

export default page