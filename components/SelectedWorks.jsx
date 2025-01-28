import React from 'react'
import Image from 'next/image';
import Link from 'next/link'

function SelectedWorks() {
  return (
    <div className="p-4 flex flex-col items-center">
      <div className=' w-full flex justify-center '>
          <h1 className='text-xl self-start w-full max-w-4xl mb-4 flex border-b-[1px] pb-1 border-[#4c4c4c]'>Selected Works</h1>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-4xl">
        <div className="flex flex-col gap-4 w-full sm:w-[50%]">
          <Link href='Govi'>
            <video
              className="w-full h-auto rounded-lg shadow-lg m-0 thumbnail"
              src="/videos/govee.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
            <div className='text-xs pt-2 flex gap-2'>
              <p>Govi</p>
              <p className='text-[#939393]'>web, figma, react</p>
            </div>
          </Link>
          <Link href='Fitbud'>
            <Image
              src="/images/fitBud.png"
              alt="Descriptive alt text"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg m-0 thumbnail"
            />
            <div className='text-xs pt-2 flex gap-2'>
              <p>Fitbud</p>
              <p className='text-[#939393]'>figma, design</p>
            </div>
          </Link>
          <Link href='ModernWalls'>
            <video
              className="w-full h-auto rounded-lg shadow-lg m-0 thumbnail"
              src="/videos/modernWalls.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
            <div className='text-xs pt-2 flex gap-2'>
              <p>Modern Walls</p>
              <p className='text-[#939393]'>web, react, framer motion</p>
            </div>
          </Link>
        </div>
        <div className="flex flex-col gap-4 w-full sm:w-[50%]">
          <Link href='SmileClub'>
            <video
              className="w-full h-auto rounded-lg shadow-lg m-0 thumbnail"
              src="/videos/smile.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
            <div className='text-xs pt-2 flex gap-2'>
              <p>Smile Website</p>
              <p className='text-[#939393]'>web, three.js</p>
            </div>
          </Link>
          <Link href='3DRenders'>
            <Image
              src="/images/isometricRoom3D.jpg"
              alt="Descriptive alt text"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg m-0 thumbnail"
            />
            <div className='text-xs pt-2 flex gap-2'>
              <p>3D Renders</p>
              <p className='text-[#939393]'>blender</p>
            </div>
          </Link>
          <Link href='BakingHorizon'>
            <video
              className="w-full h-auto rounded-lg shadow-lg m-0 thumbnail"
              src="/videos/bakingHorizon.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
            <div className='text-xs pt-2 flex gap-2'>
              <p>Baking Horizon</p>
              <p className='text-[#939393]'>branding, web, react</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}


export default SelectedWorks