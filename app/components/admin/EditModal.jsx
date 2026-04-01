import React from 'react'

const EditModal = ({ newStatus, setNewStatus, onClose, onUpdate, selectedShipment, setSelectedShipment }) => {

  const timelineSteps = [
        "Shipment Created",
        "Picked up by rider",
        "In Transit",
        "Out for Delivery",
        "Delivered",
    
    ];

  return (
    <div className='fixed inset-0 bg-black/40 flex items-center justify-center'>
      <div className='bg-white p-6 rounded-lg w-full max-w-md'>
        <h1 className='text-lg font-bold mb-4'>Update Shipment Status</h1>

        <select
          value={newStatus}
          onChange={(e) => setNewStatus(e.target.value)}
          className='w-full p-2 mb-4 border rounded'
        >
          {timelineSteps.map((step, idx) => (
            <option key={idx} value={step}>
              {step}
            </option>
          ))}
        </select>

        <div className='flex justify-between '>
          <button
            onClick={onClose}
            className='px-4 py-2 border rounded'
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onUpdate(selectedShipment.trackingId, newStatus);
              setSelectedShipment(null);
            }}
            className='px-4 py-2 bg-blue-500 text-white rounded'
          >
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

export default EditModal