"use client"
import React, { useState } from 'react'

import { useRouter } from "next/navigation";

const CreateShipmentForm = ({ handleSubmit, formData, setFormData}) => {

    const router = useRouter()

    const timelineSteps = [
        "Shipment Created",
        "Picked up by rider",
        "In Transit",
        "Out for Delivery",
        "Delivered",
    
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }


  return (
    <div>
        <div className='bg-white rounded-2xl shadow-lg max-w-6xl mx-auto p-10 '>
            <h2 className='mb-4 text-[#0E2470] font-bold text-xl'>Create Shipment</h2>
            <hr className='border-gray-300'/>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col md:flex-row gap-2 text-[#0E2470] md:gap-4 mt-4 md:items-center'>
                    <label className='font-medium  md:w-[20%]'>Tracking ID:</label>
                    <input 
                       
                        className='w-full  border border-gray-300 p-2 rounded'
                    />
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-[#0E2470]  mt-4'>
                    <div className='flex flex-col gap-4 '>
                        <label  className='font-medium'>Sender:</label>
                        <input 
                            name="senderName"
                            value={formData.senderName}
                            onChange={handleChange} 
                            className='w-full border border-gray-300 p-2 rounded'
                        />
                    </div>

                     <div className='flex flex-col gap-4 text-[#0E2470]'>
                        <label  className='font-medium '>Receiver:</label>
                        <input 
                            name="receiverName"
                            value={formData.receiverName}
                            onChange={handleChange}
                            className='w-full border border-gray-300 p-2 rounded'
                        />
                    </div>

                     <div className='flex flex-col gap-2 text-[#0E2470]'>
                        <label  className='font-medium '>Phone:</label>
                        <input 
                            name="senderPhone"
                            value={formData.senderPhone}
                            onChange={handleChange} 
                            className='w-full border border-gray-300 p-2 rounded'
                        />
                    </div>

                    <div className='flex flex-col gap-2 text-[#0E2470]'>
                        <label  className='font-medium '>Phone</label>
                        <input 
                            name="receiverPhone"
                            value={formData.receiverPhone}
                            onChange={handleChange}
                            className='w-full border border-gray-300 p-2 rounded'
                        />
                    </div>
                     <div className='flex flex-col gap-2 text-[#0E2470] '>
                        <label  className='font-medium'>Origin</label>
                        <input 
                            name="senderOrigin"
                            value={formData.senderOrigin}
                            onChange={handleChange}
                            className='w-full border border-gray-300 p-2 rounded'
                        />
                    </div>
                    <div className='flex flex-col gap-2 text-[#0E2470]'>
                        <label  className='font-medium'>Destination</label>
                        <input 
                            name="receiverAddress"
                            value={formData.receiverAddress}
                            onChange={handleChange}
                            className='w-full border border-gray-300 p-2 rounded'
                        />
                    </div>
                     <div className='flex flex-col gap-2 text-[#0E2470]'>
                        <label  className='font-medium'>Estimated Delivery</label>
                        <input 
                            name="estimatedDelivery"
                            value={formData.estimatedDelivery}
                            onChange={handleChange} 
                            className='w-full border border-gray-300 p-2 rounded'
                        />
                    </div>
                     <div className='flex flex-col gap-2 text-[#0E2470]'>
                        <label  className='font-medium'>Package Description</label>
                        <input 
                            name="packageDescription"
                            value={formData.packageDescription}
                            onChange={handleChange}
                            className='w-full border border-gray-300 p-2 rounded'
                        />
                    </div>

                     <div className='flex flex-col gap-2 text-[#0E2470]'>
                        <label  className='font-medium'>Status</label>
                        <select
                                name='status'
                                value={formData.status}
                                onChange={(e) => setFormData({...formData, status: e.target.value})}
                                className='w-full p-2 mb-4 border rounded border-gray-300 '
                                >
                                {timelineSteps.map((step, idx) => (
                                    <option key={idx} value={step}>
                                    {step}
                                    </option>
                                ))}
                        </select>
                    </div>

                </div>

                <button className='bg-[#0E2470] hover:bg-blue-900 p-4 w-full mt-6 rounded text-white cursor-pointer'>Create Shipment</button>

                


            </form>
        </div>
    </div>
  )
}

export default CreateShipmentForm