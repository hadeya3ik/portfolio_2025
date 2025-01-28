'use client'
import React, {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image' 
import pic1 from '@/public/images/Shader/max_smile.png'
import IgPosts from '@/public/images/Shader/InstagramPosts.png'
import cols from '@/public/images/Shader/Col.png'
import wireframes from '@/public/images/Shader/wireframes.png'
import cosine from '@/public/images/Shader/cosine.png'

function page() {
  return (
    <div className="p-4 min-h-screen l items-center bg-primary text-primary-foreground pt-36">
      <div className='w-full flex justify-center'>
          <div className='text-sm self-start w-full flex justify-between max-w-xl mb-4 border-b-[1px] pb-1 border-[#4c4c4c]'>
            <Link href='/'>
              <p>← back</p>
            </Link>
            <p>Smile Club</p>
            <p className='text-[#939393]'>2024 - Current</p>
          </div>
      </div>
      <div className='w-full flex justify-center '>
          <div className='max-w-xl text-xs flex flex-col justify-center items-center w-full gap-2'>
            <div className='flex flex-row w-full justify-between  '>
              <div className=''>
                <h2 className='font-semibold'>Role</h2>
                <h3 className='opacity-80'>Lead designer and developer</h3>
              </div>
              <div className=''>
                <h2 className='font-semibold'>Team</h2>
                <h3 className='opacity-80'>Rastin Rassoli, Ishika Arora</h3>
              </div>
            </div>
            <div className='flex flex-row w-full justify-between '>
              <div className=''>
                <h2 className='font-semibold'>Tools</h2>
                <h3 className='opacity-80'>Figma, Three.js, React, GLSL</h3>
              </div>
              <div className=''>
                <h2 className='font-semibold'>Skills</h2>
                <h3 className='opacity-80'>Web Development, Design</h3>
              </div>
            </div>
            
          </div>
      </div>
      <div className='w-full flex justify-center '>
          <div className='max-w-xl text-xs flex flex-col justify-center items-center w-full gap-8 pt-8'>
            <div>
              <h2 className='font-semibold text-lg pb-1'>Background</h2>
              <p><a className='text-[#afafaf] underline underline-offset-2' target="_blank" href='https://www.instagram.com/uwsmileclub/'>Smile</a> is a student mental health and inner-life enrichment club focused on promoting campus wellness. As the lead of the design team for nearly a year, I have been responsible for revamping the current website, designing posts for the Instagram page and establishing a clear visual Identity for SMILE.</p>
            </div>
            <Image alt='Project Image 1' src={pic1} className='w-full h-auto rounded-md' />
            <div>
              <h2 className='font-semibold text-lg pb-1'>Instagram Posts</h2>
              <p> I created a design guideline for our social media team to simplify and streamline the process of creating posts. The guideline highlights our typography, color palette, and key visual elements to maintain a consistent look across all our content. You can read more about it on this <a href="https://cloud-durian-fe8.notion.site/Smile-Club-Design-Guidelines-16ee0528e56180c899cfc891838d5339" target="_blank" className='text-[#afafaf] underline underline-offset-2' rel="noopener noreferrer">Notion page</a>.</p>
            </div>
            <Image alt='Project Image 1' src={IgPosts} className='w-full h-auto rounded-md' />
            <div className='flex flex-col'>
              <h2 className='font-semibold text-lg pb-1'>New Smile Website</h2>
              <p className='pb-4'>
                We’re in the process of redesigning our website, but you can explore the 
                <a href="https://smileclub.vercel.app/" target="_blank" rel="noopener noreferrer" className='text-[#afafaf] underline underline-offset-2'> in-progress version </a>. 
                Similar to our Instagram, the updated design features vibrant gradients as the key visual element aligning with SMILE’s positive values.
              </p>
              <p>When deciding how to implement the gradient, we explored CSS tools like <code className='text-xs px-1 bg-[#4d4d4d] rounded-sm opacity-50'>radial-gradient</code>,<code className='text-xs px-1 bg-[#4d4d4d] rounded-sm opacity-50' >linear-gradient</code> and <code className='text-xs px-1 bg-[#4d4d4d] rounded-sm opacity-50'>layer-blur</code>
                which can be animated using a keyframes. While these methods work well for simpler effects, they are not ideal for creating layered gradient patterns as seen in the hero section.</p>
            </div>
            <Image alt='Project Image 1' src={wireframes} className='w-full h-auto rounded-md' />
            <div>
              <h2 className='font-semibold text-lg pb-1'>Shaders</h2>
              <p className='pb-4'>Shaders allow us to fully customize the patterns of the gradient by using dynamic, noise-based or volumetric methods to compute them. It runs on the GPU and calculated the colour for each pixel rendered and is optimized to work independently from the React render cycle.</p>
              <p>To generate the gradient we utilized the cosine gradient Library by <a className='text-[#afafaf] underline underline-offset-2' target="_blank" href='https://github.com/thi-ng/color/blob/master/src/gradients.org'>Thi.ng/Color</a>. The formula allows to create a smooth, continuous gradient based on the cosine function. It works by oscillating the intensity of RGB values using in the function where each wave represents a color channel, and their amplitudes, frequencies, and phases determine the gradients appearance.</p>
            </div>
            <Image alt='Project Image 1' src={cosine} className='w-full h-auto rounded-md' />
            <div className='w-full'>
              <h2 className='font-semibold text-lg pb-1'>Cosine Function</h2>
              <CosineCodeSnippet/>
            </div>
            <div className='w-full'>
              <h2 className='font-semibold text-lg pb-1'>Fragment Shader</h2>
              <FragmentCodeSnippet/>
            </div>
            <div className='flex flex-col pb-8'>
              <h2 className='font-semibold text-xl'>Result</h2>
              <video 
                width="100%" 
                height="auto" 
                autoPlay 
                loop 
                muted 
                playsInline
              >
                <source src="/Shader.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            
          </div>
      </div>

      
      {/* </div> */}
    </div>
  )
}


const FragmentCodeSnippet = () => {

  const fragmentShaderCode = `void main() {
  vec2 uv = vUv;
  uv *= uUvScale;
  
  for (float i = 0.0; i < uUvIterations; i++) {
      uv += noise(vec3(uv - i * 0.2, (uTime) + i * 32.0)) * uUvIntensity;
  }

  float colourInput = noise(vec3(uv, sin((uTime)))) * 0.5 + 0.5;

  vec3 colour = cosineGradientColor(colourInput, uColourPalette[0],
    uColourPalette[1], uColourPalette[2], uColourPalette[3]);

  gl_FragColor = vec4(colour, 1.0);
}`;

  return (
    <div className="text-[10px] w-full">
      <div className=" p-4 rounded-lg border ">
        <pre className=" text-primary-foreground overflow-x-auto">
          <code className=''>{fragmentShaderCode}</code>
        </pre>
        
      </div>
    </div>
  );
};

const CosineCodeSnippet = () => {

  const cosineFunctionCode = `vec3 cosineGradientColor(in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d) 
{
  return clamp(a + b * cos(6.28318 * (c * t + d)), 0.0, 1.0);
}`;

  return (
    <div className="text-[10px] w-full">
      <div className=" p-4 rounded-lg border ">
        <pre className=" text-primary-foreground overflow-x-auto">
          <code className=''>{cosineFunctionCode}</code>
        </pre>
        
      </div>
    </div>
  );
};


export default page