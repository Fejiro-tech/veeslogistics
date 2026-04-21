"use client";
import TrackingDetails from "@/app/components/tracking/TrackingDetails";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";  // ✅ add this

export default function Page() {
  const { trackingId } = useParams()  // ✅ get trackingId from URL
  const [shipment, setShipment] = useState(null);

  useEffect(() => {
  const trackShipment = async () => {
    const res = await fetch(`/api/shipments/${trackingId}`);
    const data = await res.json();
    setShipment(data)
  }
    if (trackingId) trackShipment();

  }, [trackingId])

  if (!shipment) return (
    <div className="bg-white min-h-screen w-full flex items-center justify-center">
      <p className="text-center">Loading...</p>
    </div>
  )

  return (
    <div className=" min-h-screen w-full">
      <div className="pt-[5%]">
        <TrackingDetails shipment={shipment} />
      </div>
    </div>
  )
}