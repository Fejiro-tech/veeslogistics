"use client"
import React from 'react'
import Image from "next/image"

const imageGallery = [
    { imageSrc: "/images/image2.jpeg" },
  { imageSrc: "/images/image1.jpeg" },
  { imageSrc: "/images/image3.jpeg" },
]

const Gallery = () => {
  return (
    <div className='w-full px-4 md:px-8 lg:px-12 py-10'>
      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4'>
        
        {imageGallery.map((image, idx) => (
          <div key={idx} className="w-full h-100 relative overflow-hidden rounded-xl">
            
            <Image 
              src={image.imageSrc}
              alt='Gallery image'
              fill
              className="object-cover"
            />

          </div>
        ))}

      </div>
    </div>
  )
}

export default Gallery