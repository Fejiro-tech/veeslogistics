"use client"
import React, { useState } from 'react'
import Link from "next/link"
import EditModal from './EditModal'

const Shipmentable = ({shipments, onUpdate, onDelete, title, buttonText, showButton = false, }) => {

  const [selectedShipment, setSelectedShipment] = useState(null);
  const [newStatus, setNewStatus] = useState("");

  return (
    <div className='pt-10'>
      <div className='bg-white max-w-6xl mx-auto py-10 px-4 md:px-10 rounded-2xl shadow-xl  '>
        <div className='flex justify-between mb-4'>
          <h1 className=' mb-6 text-[#0E2470] font-bold text-base md:text-xl'>{title}</h1>
          <Link href="/admin/shipments" className='font-medium'>
            <button className='text-red-500 hover:text-yellow-400 text-sm md:text-base rounded font-bold underline'>
              {buttonText}
            </button>
          </Link>
        </div>

        <div className='overflow-x-auto custom-scrollbar'>
          <table className='min-w-175 md:w-full whitespace-nowrap '>
            <thead>
              <tr className='text-left text-[#0E2470] text-base md:text-lg border-b border-gray-300'>
                <th className='pb-3 pr-10'>Tracking ID</th>
                <th className='pb-3 pr-10'>Sender</th>
                <th className='pb-3 pr-10'>Receiver</th>
                <th className='pb-3 pr-10'>Status</th>
                <th className='pb-3 pr-10'>Created</th>
                {showButton && <th className='pb-3 pr-10'>Action</th>}
              </tr>
            </thead>
            <tbody>
              {shipments.map((shipment, idx) => (
                <tr key={idx} className='text-sm md:text-base'>
                  <td className='py-3 pr-10'>{shipment.trackingId}</td>
                  <td className='py-3 pr-10'>{shipment.sender.name}</td>
                  <td className='py-3 pr-10'>{shipment.receiver.name}</td>
                  <td className='py-3 pr-10'>{shipment.status}</td>
                  <td className='py-3 pr-10'>
                    {new Date(shipment.created_at).toLocaleDateString('en-GB', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric'
                    })}
                  </td>
                  

                  {showButton &&
                    <>
                      <td className='py-3'>
                        <button
                          className='border border-blue-300 bg-blue-200 rounded px-4'
                          onClick={() => {
                            setSelectedShipment(shipment)
                            setNewStatus(shipment.status) // prefill dropdown
                          }}
                        >
                          Edit
                        </button>
                      </td>
                      <td className='py-3'>
                        <button
                          className='border border-blue-300 bg-blue-200 rounded px-4'
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
      </div>
    </div>
  )
}

export default Shipmentable