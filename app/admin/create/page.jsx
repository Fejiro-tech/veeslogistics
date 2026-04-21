'use client'
import { useState } from 'react'
import CreateShipmentForm from '../../components/admin/CreateShipmentForm'
import { useRouter } from 'next/navigation'
import toast, { Toaster } from 'react-hot-toast'

const Page = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    senderName: "",
    senderPhone: "",
    receiverName: "",
    receiverPhone: "",
    receiverAddress: "",
    senderOrigin: "",
    estimatedDelivery: "",
    packageDescription: "",
    status: "Shipment Created"
  })

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/shipments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),       
      })

      if (!res.ok) throw new Error(`HTTP error: ${res.status}`)

      await res.json();
      toast.success("Shipment created successfully!")
      router.push("/admin/shipments")     
    } catch (err) {
      console.error("Failed to create shipment:", err.message)
      toast.error(`Failed to create shipment: ${err.message}`)
    }
  }

  return (
    <div className='min-h-screen py-20 px-8'>
      <CreateShipmentForm
        handleSubmit={handleSubmit}
        formData={formData}
        setFormData={setFormData}
      />
    </div>
  )
}

export default Page