"use client"
import React, { useState } from 'react'
import Link from "next/link"
import EditModal from './EditModal'
import { div } from 'framer-motion/client'

const Shipmentable = ({shipments, onUpdate, onDelete, title, buttonText, showButton = false, isUpdating }) => {

  const [selectedShipment, setSelectedShipment] = useState(null);
  const [newStatus, setNewStatus] = useState("");

  return (
    <div className='pt-10'>
      <div className='md:bg-white max-w-6xl mx-auto md:py-10 px-4 md:px-10 rounded-2xl shadow-xl  '>
        <div className='flex justify-between mb-6 md:mb-4 border-b border-white/20'>
          <h1 className=' mb-2 md:mb-6 text-white md:text-[#166534] font-bold text-base md:text-xl '>{title}</h1>
          <Link href="/admin/shipments" className='font-medium'>
            <button className='text-red-500 hover:text-yellow-400 text-sm md:text-base rounded font-bold underline'>
              {buttonText}
            </button>
          </Link>
        </div>

        <div className='overflow-x-auto custom-scrollbar hidden md:block'>
          <table className='min-w-175 md:w-full whitespace-nowrap '>
            <thead>
              <tr className='text-left text-[#166534] text-base md:text-lg border-b border-gray-300'>
                <th className='pb-3 pr-10'>Tracking ID</th>
                <th className='pb-3 pr-10'>Sender</th>
                <th className='pb-3 pr-10'>Receiver</th>
                <th className='pb-3 pr-10'>Created</th>
                <th className='pb-3 pr-10'>Amount</th>
                <th className='pb-3 pr-10'>Status</th>
                {showButton && <th className='pb-3 pr-10'>Action</th>}
              </tr>
            </thead>
            <tbody>
              {shipments.map((shipment, idx) => (
                <tr key={idx} className='text-sm md:text-base'>
                  <td className='py-3 pr-10'>{shipment.trackingId}</td>
                  <td className='py-3 pr-10'>{shipment.sender.name}</td>
                  <td className='py-3 pr-10'>{shipment.receiver.name}</td>
                  <td className='py-3 pr-10'>
                    {new Date(shipment.created_at).toLocaleDateString('en-GB', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric'
                    })}
                  </td>
                  <td className='py-3 pr-10'>{"\u20A6"}{shipment.amount}</td>
                  <td className='py-3 pr-10'>{shipment.status}</td>
                  

                  {showButton &&
                    <>
                      <td className='py-3'>
                        <button
                          className='border border-[#166534] bg-[#166534]/30 rounded px-4'
                          onClick={() => {
                            setSelectedShipment(shipment)
                            setNewStatus(shipment.status) // prefill dropdown
                          }}
                        >
                          {isUpdating ? <span className="animate-pulse">Updating...</span> : "Edit"}
                        </button>
                      </td>
                      <td className='py-3'>
                        <button
                          className='border border-[#166534] bg-[#166534]/40 rounded px-4'
                          onClick={() => {
                            onDelete(shipment.trackingId)
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </>
                  }
                </tr>
              ))}
            </tbody>
          </table>

          {selectedShipment && (
            <EditModal
              newStatus={newStatus} // current status
              setNewStatus={setNewStatus}
              selectedShipment={selectedShipment}
              setSelectedShipment={setSelectedShipment}
              onUpdate={onUpdate}

            />
          )}

        </div>

        <div className='space-y-6 md:hidden ' >
          {shipments.map((shipment, idx) => (
            <div key={idx} className='space-y-2 bg-white max-w-md  rounded-xl py-4 px-4 shadow '>
              <p className='font-semibold'>Tracking ID: {shipment.trackingId}</p>

              <p className='text-sm'>
                  <span className='font-medium text-[#166534]'>Sender:</span> {shipment.sender.name}
              </p>
              <p className='text-sm'>
                  <span className='font-medium text-[#166534]'>Receiver:</span> {shipment.receiver.name}
              </p>
              <p className='text-sm'>
                  <span className='font-medium text-[#166534]'>Status:</span> {shipment.status}
              </p>
              <p className='text-sm'>
                  <span className='font-medium text-[#166534]'>Sender:</span> {shipment.sender.name}
              </p>
              <p className='text-sm'>
                  <span className='font-medium text-[#166534]'>Amount:</span> {shipment.amount}
              </p>

              {showButton &&
                    <>
                      <div className='py-3 space-x-2'>
                        <button
                          className='border border-[#166534] bg-[#166534]/30 rounded px-4'
                          onClick={() => {
                            setSelectedShipment(shipment)
                            setNewStatus(shipment.status) // prefill dropdown
                          }}
                        >
                         {isUpdating ? <span className="animate-pulse">Updating...</span> : "Edit"}
                        </button>

                        <button
                          className='border border-[#166534] bg-[#166534]/40 rounded px-4'
                          onClick={() => {
                            onDelete(shipment.trackingId)
                          }}
                        >
                          Delete
                        </button>
                      </div>
                     
                    </>
                  }

                  {selectedShipment && (
                    <EditModal
                      newStatus={newStatus} // current status
                      setNewStatus={setNewStatus}
                      selectedShipment={selectedShipment}
                      setSelectedShipment={setSelectedShipment}
                      onUpdate={onUpdate}

                    />
                  )}
                      
              
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Shipmentable