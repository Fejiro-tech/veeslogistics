"use client";
import Timeline from "./Timeline";
import TrackingCard from "../landing/TrackingCard";
import { useShipment } from "../../context/ShipmentContext";

const TrackingDetails = ({ shipment }) => {

  if (!shipment || !shipment.sender) return <p className="py-32 text-center">Shipment not found</p>;

  return (
    <div className="py-32 w-full min-h-screen px-8">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl py-20 px-4 md:px-10 mb-6">
        <div className="flex md:items-center flex-col md:flex-row md:justify-between mb-4">
          <h2 className="text-base md:text-2xl font-bold text-[#1535A0]">
            {shipment.trackingId}
          </h2>
          <p className="text-sm text-gray-500">
            Estimated Delivery: {shipment.estimatedDelivery}
          </p>
        </div>

        <hr className="border-gray-300 mb-4" />

        {/* Sender + Receiver */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="md:border-r border-gray-300 md:pr-6 mb-6 md:mb-0">
            <div className="flex justify-between">
              <p className="text-sm text-gray-400 mb-1">Sender:</p>
              <p className="font-medium text-gray-800 mb-3">{shipment.sender.name}</p>
            </div>
            <div className="flex justify-between mb-2">
              <p className="text-sm text-gray-400">Origin:</p>
              <p className="font-medium text-gray-800">{shipment.sender.origin}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-sm text-gray-400">Parcel Description:</p>
              <p className="font-medium text-gray-800">{shipment.packageDescription}</p>
            </div>
          </div>

          <div className="md:pl-6">
            <div className="flex justify-between">
              <p className="text-sm text-gray-400 mb-1">Receiver:</p>
              <p className="font-medium text-gray-800 mb-3">{shipment.receiver.name}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-sm text-gray-400">Address:</p>
              <p className="font-medium text-gray-800">{shipment.receiver.address}</p>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Pass the correct timeline array */}
      <Timeline timeline={shipment.timeline} />

      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl py-4 px-4 md:px-10 flex flex-col md:flex-row md:justify-between md:items-center gap-2">
        <p>Track another shipment</p>
        <TrackingCard className="flex-1" />
      </div>
    </div>
  );
};

export default TrackingDetails;