"use client"
import { useState } from "react";
import { useShipment } from "../../context/ShipmentContext"; // adjust path if needed
import { useRouter } from "next/navigation";

const TrackingCard = () => {
  const [trackingId, setTrackingId] = useState("");
 const router = useRouter()

 const handleTrack = () => {
  if (!trackingId) {
    alert("Enter Tracking ID");
    return;
  }

router.push(`/track/${trackingId}`)
 }

  return (
    <div>
      <div className='flex gap-3 items-center justify-center'>
        <input 
          type='text'
          value={trackingId}
          onChange={(e) => setTrackingId(e.target.value)}
          placeholder='Enter Tracking ID..'
          className='bg-white w-[70%] p-2 md:p-4 rounded-lg placeholder:text-green-400 outline-0 border  focus:border-2 focus:border-yellow-400 text-[#166534] text-sm md:text-base'
        />
        <button 
          onClick={handleTrack} // call context function
          className='bg-[#166534] py-2 md:py-4 px-8 rounded-lg border border-white text-white font-medium text-sm md:text-base'
        >
          Track
        </button>
      </div>
    </div>
  )
}

export default TrackingCard