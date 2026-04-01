"use client"
import Shipmentable from '../../components/admin/Shipmentable'
import { shipmentData } from '../../data/shipment'
import { useShipment } from '../../context/ShipmentContext'
import Protected from '../../components/admin/Protected'
import { useEffect, useState } from 'react'

const page = () => {

  const [shipments, setShipments] = useState([]);

const fetchShipments = async () => {
  try {
    const res = await fetch("/api/shipments")
    const data = await res.json()
    console.log("First shipment:", data[0]) 
    setShipments(Array.isArray(data) ? data : [])  // ✅ only once
  } catch (err) {
    console.error("Failed to fetch shipments:", err)
    setShipments([])
  }
}

useEffect(() => {
  fetchShipments()
}, [])

  const handleUpdate = async (trackingId, newStatus) => {
    const res = await fetch(`/api/shipments/${trackingId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status: newStatus }),
  })

  if (res.ok) {
    await fetchShipments()
  }
}

  const handleDelete = async (trackingId) => {
  const res = await fetch(`/api/shipments/${trackingId}`, {
    method: "DELETE"
  })
  const data = await res.json()
  console.log("Delete response:", data, "Status:", res.status)  // ✅ add this
  fetchShipments();
}

  return (

    <div className='min-h-screen bg-[#1D4DB5]/30 p-20'>
      <Shipmentable 
        shipments={shipments}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
        title="Shipments"
        showButton={true}
      />
    </div>
  )
}

export default page