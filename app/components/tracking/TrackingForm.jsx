import React from 'react'
import TrackingCard from '../landing/TrackingCard'

const TrackingForm = () => {
  return (
    <section className='w-full'> 
      <div className=' max-w-4xl mx-auto bg-[#1D4DB5]/60 rounded-2xl shadow-xl py-20 px-4'>
        <h2 className='text-2xl md:text-3xl font-bold text-center text-white mb-2'>Track Your Shipments</h2>
        <p className='text-center text-yellow-100 mb-10 text-sm md:text-base'>Enter your tracking id below to find your delivery status.</p>

      <TrackingCard/>
      </div>
    </section>
  )
}

export default TrackingForm