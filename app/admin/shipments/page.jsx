"use client"
import Shipmentable from '../../components/admin/Shipmentable'
import { useEffect, useState } from 'react'

const Page = () => {
  const [shipments, setShipments] = useState([])
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
    try {
      const res = await fetch(`/api/shipments/${trackingId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      })
      if (res.ok) fetchShipments(page)
    } catch (err) {
      console.error("Failed to update shipment:", err)
    }
  }

  // Delete shipment
  const handleDelete = async (trackingId) => {
    try {
      const res = await fetch(`/api/shipments/${trackingId}`, { method: "DELETE" })
      const data = await res.json()
      console.log("Delete response:", data, "Status:", res.status)
      fetchShipments(page)
    } catch (err) {
      console.error("Failed to delete shipment:", err)
    }
  }

  return (
    <div className='min-h-screen bg-[#1D4DB5]/30 px-6 py-20'>
      <Shipmentable 
        shipments={shipments}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
        title="Shipments"
        showButton={true}
      />

      {/* Pagination controls */}
      <div className="flex justify-between mt-4">
        <button
          onClick={() => setPage(prev => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Previous
        </button>

        <span>Page {page} of {totalPages}</span>

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