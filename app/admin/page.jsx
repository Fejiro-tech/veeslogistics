"use client"
import { useEffect, useState } from 'react'
import StatsCard from '../components/admin/StatsCard'
import Shipmentable from '../components/admin/Shipmentable'
import Link from 'next/link'
import { getFilteredShipments } from '../utils/shipmentFilter' 

const Page = () => {
  const [shipments, setShipments] = useState([])
  const [loading, setLoading] = useState(true)
  const [statusFilter, setStatusFilter] = useState(null)

  useEffect(() => {
    const fetchShipments = async () => {
      const res = await fetch("/api/shipments")
      const data = await res.json()
      setShipments(Array.isArray(data.shipments) ? data.shipments : [])
      setLoading(false)
    }
    fetchShipments()
  }, [])

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>

  const stats = {
    total: shipments.length,
    pending: shipments.filter(s => s.status === "Shipment Created").length,
    inTransit: shipments.filter(
      s => ["Picked up by rider", "In Transit", "Out for Delivery"].includes(s.status)
    ).length,
    delivered: shipments.filter(s => s.status === "Delivered").length,
  }

  const filteredShipments = getFilteredShipments(shipments, statusFilter).slice(0, 5)
  


  return (
    <div className='min-h-screen'>
      <div className='px-6 md:px-10 lg:px-16 py-20'>
        <div className='max-w-6xl mx-auto bg-white px-4 md:px-6 py-6 shadow-lg rounded-2xl '>
          <div className='flex justify-between'>
            <h1 className='text-lg md:text-xl font-bold text-[#0E2470]'>Overview</h1>
            <Link href="/admin/create" className='font-medium'>
              <button className='rounded text-red-500 hover:text-yellow-400 text-sm md:text-base font-bold underline cursor-pointer '>
                + Create Shipment
              </button>
            </Link>
          </div>

          <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 py-10 relative'>
            <StatsCard
              label="Total Shipments"
              value={stats.total}
              type="total"
              onClick={() => setStatusFilter(null)}
            />
            <StatsCard
              label="Pending"
              value={stats.pending}
              type="pending"
              onClick={() => setStatusFilter("pending")}
            />
            <StatsCard
              label="In Transit"
              value={stats.inTransit}
              type="inTransit"
              onClick={() => setStatusFilter("inTransit")}
            />
            <StatsCard
              label="Delivered"
              value={stats.delivered}
              type="delivered"
              onClick={() => setStatusFilter("delivered")}
            />
          </div>
        </div>

        <Shipmentable
          shipments={filteredShipments}
          title={
            statusFilter === null ? "Recent Shipments" :
            statusFilter === "pending" ? "Pending Shipments" :
            statusFilter === "inTransit" ? "In Transit Shipments" :
            "Delivered Shipments"
          }
          buttonText="View All"
          showButton={false}
        />
      </div>
    </div>
  )
}

export default Page