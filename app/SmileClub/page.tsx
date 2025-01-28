import React from 'react'
import Link from 'next/link'

function page() {
  return (
    <div className="p-4 min-h-screen flex flex-col items-center bg-primary text-primary-foreground">
      <div className='w-full flex justify-center'>
          <div className='text-sm self-start w-full flex justify-between max-w-xl mb-4 border-b-[1px] pb-1 border-[#4c4c4c]'>
            <Link href='/'>
              <p>← back</p>
            </Link>
            <p>Smile Club</p>
            <p className='text-[#939393]'>web, three.js</p>
          </div>
          
      </div>
      <div className='flex flex-col items-center max-w-xl'>
        <p className='text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

      </div>
    </div>
  )
}

export default page