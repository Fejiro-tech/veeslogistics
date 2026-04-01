"use client"
import { useEffect, useState } from 'react'
import TrackingForm from '../../components/tracking/TrackingForm'

const page = () => {


  return (
    <div className='bg-white min-h-[92vh] w-full px-6 md:px-10 flex items-center justify-center'>
      <div className='w-full'>
        <TrackingForm/>
      </div>
    </div>
  )
}

export default page