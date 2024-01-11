import Image from 'next/image'
import React from 'react'

const SpeakerCard=()=>{
    return (
        <div className='relative'>
          <svg width="0" height="0" style={{ position: 'absolute', overflow: 'hidden',width:"300px" }}>
            <defs>
              <clipPath id="clipPath">
                <path d="M25.2883 71.4022C8.92527 77.9474 1.61151 96.4425 0 104.872H207.884C204.612 86.1289 188.918 74.7492 181.48 71.4022C187.728 47.6015 181.852 34.2136 178.133 30.4947C165.341 20.9745 144.292 23.057 135.367 25.2883C126.739 7.4378 110.946 0.991725 104.128 0C85.9801 1.19004 74.7491 17.3547 71.4021 25.2883C49.9815 19.0406 31.1292 27.412 27.7823 30.4947C23.6915 34.2625 23.0569 58.882 25.2883 71.4022Z" fill="black" />
                <path d="M182.597 137.598C198.959 131.053 206.273 112.557 207.885 104.128L0.000396729 104.128C3.27299 122.871 18.9666 134.251 26.4043 137.598C20.1566 161.398 26.0324 174.786 29.7513 178.505C42.5442 188.026 63.5929 185.943 72.5182 183.712C81.146 201.562 96.9387 208.008 103.757 209C121.905 207.81 133.136 191.645 136.483 183.712C157.903 189.959 172.68 182.844 177.39 178.505C182.639 173.671 184.828 150.118 182.597 137.598Z" fill="black" />
              </clipPath>
            </defs>
          </svg>

          <Image src="/byalpha.png" alt='' width={220} height={220} className='absolute left-[1px] top-[1px]'/>
    
          <img src="https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Cropped Image" style={{ clipPath: 'url(#clipPath)', width: "220px", height: '220px' }} className='object-cover flex justify-center items-center' />

          <div className='flex flex-col justify-center items-center pt-10'>
            <h1 className='text-2xl'>Anushka Sadaria</h1>
            <p className='text-lg'>Data Scientist</p>
            <p className='text-lg'>Microsoft</p>
          </div>
        </div>
      );
        
}


const Speakers = () => {
  return (
    <div className='w-full h-auto '>
      <h1 className='text-white text-center text-5xl font-bold p-10 '>Speakers</h1>

      <div className='flex justify-center items-center gap-20 '>
      <SpeakerCard/><SpeakerCard/><SpeakerCard/>

      </div>

      
    </div>
  )
}

export default Speakers
