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
        <div className='bg-white rounded-2xl shadow-lg max-w-6xl mx-auto px-4 py-6 '>
            <h2 className='mb-4 text-[#166534] font-bold text-lg md:text-md'>Create Shipment</h2>
            <hr className='border-gray-300'/>
            <form onSubmit={handleSubmit}>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-[#166534] text-base md:text-lg  mt-4'>
                    <div className='flex flex-col gap-2 md:gap-4 '>
                        <label  className='font-medium'>Sender:</label>
                        <input 
                            name="senderName"
                            value={formData.senderName}
                            onChange={handleChange} 
                            className='w-full border border-gray-300 p-2 rounded text-sm md:text-base'
                        />
                    </div>

                     <div className='flex flex-col gap-2 md:gap-4 text-[#166534] text-base md:text-lg'>
                        <label  className='font-medium '>Receiver:</label>
                        <input 
                            name="receiverName"
                            value={formData.receiverName}
                            onChange={handleChange}
                            className='w-full border border-gray-300 p-2 rounded text-sm md:text-base'
                        />
                    </div>

                     <div className='flex flex-col gap-2 text-[#166534] text-base md:text-lg'>
                        <label  className='font-medium '>Sender's Phone:</label>
                        <input 
                            name="senderPhone"
                            value={formData.senderPhone}
                            onChange={handleChange} 
                            className='w-full border border-gray-300 p-2 rounded text-sm md:text-base'
                        />
                    </div>

                    <div className='flex flex-col gap-2 text-[#166534] text-base md:text-lg'>
                        <label  className='font-medium '>Receiver's Phone</label>
                        <input 
                            name="receiverPhone"
                            value={formData.receiverPhone}
                            onChange={handleChange}
                            className='w-full border border-gray-300 p-2 rounded text-sm md:text-base'
                        />
                    </div>
                     <div className='flex flex-col gap-2 text-[#166534] text-base md:text-lg '>
                        <label  className='font-medium'>Origin</label>
                        <input 
                            name="senderOrigin"
                            value={formData.senderOrigin}
                            onChange={handleChange}
                            className='w-full border border-gray-300 p-2 rounded text-sm md:text-base'
                        />
                    </div>
                    <div className='flex flex-col gap-2 text-[#166534] text-base md:text-lg'>
                        <label  className='font-medium'>Destination</label>
                        <input 
                            name="receiverAddress"
                            value={formData.receiverAddress}
                            onChange={handleChange}
                            className='w-full border border-gray-300 p-2 rounded text-sm md:text-base'
                        />
                    </div>
                     <div className='flex flex-col gap-2 text-[#166534] text-base md:text-lg'>
                        <label  className='font-medium'>Estimated Delivery</label>
                        <input 
                            name="estimatedDelivery"
                            value={formData.estimatedDelivery}
                            type='date'
                             min={new Date().toISOString().split("T")[0]}
                            onChange={handleChange} 
                            className='w-full border border-gray-300 p-2 rounded text-sm md:text-base'
                        />
                    </div>
                     <div className='flex flex-col gap-2 text-[#166534] text-base md:text-lg'>
                        <label  className='font-medium'>Package Description</label>
                        <input 
                            name="packageDescription"
                            value={formData.packageDescription}
                            onChange={handleChange}
                            className='w-full border border-gray-300 p-2 rounded text-sm md:text-base'
                        />
                    </div>
                     <div className='flex flex-col gap-2 text-[#166534] text-base md:text-lg'>
                        <label  className='font-medium'>Amount</label>
                        <input 
                            name="amount"
                            type='number'
                            value={formData.amount}
                            onChange={handleChange}
                            className='w-full border border-gray-300 p-2 rounded text-sm md:text-base'
                        />
                    </div>

                     <div className='flex flex-col gap-2 text-[#166534] text-base md:text-lg'>
                        <label  className='font-medium'>Status</label>
                        <select
                                name='status'
                                value={formData.status}
                                onChange={(e) => setFormData({...formData, status: e.target.value})}
                                className='w-full p-2 mb-4 border rounded text-sm md:text-base border-gray-300 '
                                >
                                {timelineSteps.map((step, idx) => (
                                    <option key={idx} value={step}>
                                    {step}
                                    </option>
                                ))}
                        </select>
                    </div>

                </div>

                <button className='bg-[#166534] hover:bg-[#187a3e] p-2 md:p-4 w-full mt-6 rounded text-white cursor-pointer'>Create Shipment</button>

                


            </form>
        </div>
    </div>
  )
}

export default CreateShipmentForm