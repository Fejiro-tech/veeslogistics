"use client"
import toast from 'react-hot-toast'
import Shipmentable from '../../components/admin/Shipmentable'
import { useEffect, useState } from 'react'

const Page = () => {
  const [shipments, setShipments] = useState([])
  const [isUpdating, setIsUpdating] = useState(false);
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const limit = 10 // shipments per page
  

  // Fetch shipments with pagination
  const fetchShipments = async (currentPage = 1) => {
    try {
      const res = await fetch(`/api/shipments?page=${currentPage}&limit=${limit}`)
      const data = await res.json()
      setShipments(data.shipments || [])
      setTotalPages(data.totalPages || 1)
    } catch (err) {
      console.error("Failed to fetch shipments:", err)
      setShipments([])
    }
  }

  useEffect(() => {
    fetchShipments(page)
  }, [page])

  // Update shipment status
  const handleUpdate = async (trackingId, newStatus) => {
    setIsUpdating(true);

    try {
      const res = await fetch(`/api/shipments/${trackingId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      })
      toast.success("Status updated successfully")
      if (res.ok) fetchShipments(page)
    } catch (err) {
      console.error("Failed to update shipment:", err)
      toast.error("Failed to update this shipment", err.message)
    }
    setIsUpdating(false);
  }

  // Delete shipment
  const handleDelete = async (trackingId) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this shipment?")

    if(!isConfirmed) return;
    
    try {
      const res = await fetch(`/api/shipments/${trackingId}`, { method: "DELETE" })
      const data = await res.json()
      toast.success("Shipment deleted")
      
      fetchShipments(page)
    } catch (err) {
      console.error("Failed to delete shipment:", err)
      toast.error("Failed to delete this shipment", err.message)
    }
  }

  return (
    <div className='min-h-screen px-6 py-20'>
      <Shipmentable 
        shipments={shipments}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
        title=" All Shipments"
        showButton={true}
        isUpdating={isUpdating}
      />

      {/* Pagination controls */}
      <div className="flex justify-between mt-4 max-w-280 mx-auto px-6 md:px-0">
        <button
          onClick={() => setPage(prev => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Previous
        </button>

        <span className='text-gray-200'>Page {page} of {totalPages}</span>

        <button
          onClick={() => setPage(prev => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Page