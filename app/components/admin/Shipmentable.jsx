"use client";
import React, { useState } from "react";
import Link from "next/link";
import EditModal from "./EditModal";

const Shipmentable = ({
  shipments,
  onUpdate,
  onDelete,
  title,
  buttonText,
  showButton = false,
  updatingId,
}) => {
  const [selectedShipment, setSelectedShipment] = useState(null);
  const [newStatus, setNewStatus] = useState("");

  const getStatusClass = (status) => {
    switch (status) {
      case "Shipment Created":
        return "bg-red-100 text-red-500";
      case "Delivered":
        return "bg-green-100 text-green-500";
      default:
        return "bg-yellow-100 text-yellow-500";
    }
  };

  return (
    <div className="pt-10">
      <div className="bg-white md:max-w-6xl mx-auto md:py-10 px-4 md:px-10 py-10 rounded-2xl shadow-xl">
        {/* Header */}
        <div className="flex justify-between mb-6 md:mb-4 border-b border-white/20">
          <h1 className="mb-2 md:mb-6 text-[#18753c] font-bold text-base md:text-xl">
            {title}
          </h1>

          <Link
            href="/admin/shipments"
            className="font-medium text-red-500 hover:text-yellow-400 text-sm md:text-base rounded font-bold underline"
          >
            {buttonText}
          </Link>
        </div>

        {/* TABLE (Desktop) */}
        <div className="overflow-x-auto custom-scrollbar hidden md:block">
          <table className="min-w-175 md:w-full whitespace-nowrap">
            <thead>
              <tr className="text-left text-[#166534] text-base md:text-lg border-b border-gray-300">
                <th className="pb-3 pr-10">Tracking ID</th>
                <th className="pb-3 pr-10">Sender</th>
                <th className="pb-3 pr-10">Receiver</th>
                <th className="pb-3 pr-10">Created</th>
                <th className="pb-3 pr-10">Amount</th>
                <th className="pb-3 pr-10">Status</th>
                {showButton && <th className="pb-3 pr-10">Action</th>}
              </tr>
            </thead>

            <tbody>
              {shipments.map((shipment) => (
                <tr
                  key={shipment.trackingId}
                  className="text-sm md:text-base border-b border-green-200"
                >
                  <td className="py-3 pr-10">{shipment.trackingId}</td>
                  <td className="py-3 pr-10">{shipment.sender.name}</td>
                  <td className="py-3 pr-10">{shipment.receiver.name}</td>

                  <td className="py-3 pr-10">
                    {new Date(shipment.created_at).toLocaleDateString(
                      "en-GB",
                      {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      }
                    )}
                  </td>

                  <td className="py-3 pr-10">₦{shipment.amount}</td>

                  <td className="py-3 pr-10">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-bold ${getStatusClass(
                        shipment.status
                      )}`}
                    >
                      {shipment.status}
                    </span>
                  </td>

                  {showButton && (
                    <>
                      <td className="py-3 pr-10">
                        <button
                          className="border border-[#166534] bg-[#166534]/30 rounded px-4"
                          onClick={() => {
                            setSelectedShipment(shipment);
                            setNewStatus(shipment.status);
                          }}
                        >
                          {updatingId === shipment.trackingId ? <span className="animate-pulse">Updating...</span> : "Edit"}
                        </button>
                      </td>

                      <td className="py-3">
                        <button
                          className="border border-[#166534] bg-[#166534]/40 rounded px-4"
                          onClick={() => onDelete(shipment.trackingId)}
                        >
                          Delete
                        </button>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* MOBILE VIEW */}
        <div className="space-y-6 md:hidden">
          {shipments.map((shipment) => (
            <div
              key={shipment.trackingId}
              className="space-y-2 bg-white max-w-md rounded-xl py-4 px-4 shadow-md border border-gray-200"
            >
              <p className="font-semibold">
                Tracking ID: {shipment.trackingId}
              </p>

              <p className="text-sm">
                <span className="font-medium text-[#166534]">Sender:</span>{" "}
                {shipment.sender.name}
              </p>

              <p className="text-sm">
                <span className="font-medium text-[#166534]">Receiver:</span>{" "}
                {shipment.receiver.name}
              </p>

              <p className="text-sm">
                <span className="font-medium text-[#166534]">Status:</span>{" "}
                <span
                  className={`px-3 py-1 rounded-full text-sm font-bold ${getStatusClass(
                    shipment.status
                  )}`}
                >
                  {shipment.status}
                </span>
              </p>

              <p className="text-sm">
                <span className="font-medium text-[#166534]">Created: </span> 
                  {new Date(shipment.created_at).toLocaleDateString(
                    "en-GB",
                    {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    }
                  )}
              </p>

              <p className="text-sm">
                <span className="font-medium text-[#166534]">Amount:</span> ₦
                {shipment.amount}
              </p>

              {showButton && (
                <div className="py-3 space-x-2">
                  <button
                    className="border border-[#166534] bg-[#166534]/30 rounded px-4"
                    onClick={() => {
                      setSelectedShipment(shipment);
                      setNewStatus(shipment.status);
                    }}
                  >
                    {updatingId === shipment.trackingId ? <span className="animate-pulse">Updating...</span> : "Edit"}
                  </button>

                  <button
                    className="border border-[#166534] bg-[#166534]/40 rounded px-4"
                    onClick={() => onDelete(shipment.trackingId)}
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {selectedShipment && (
          <EditModal
            newStatus={newStatus}
            setNewStatus={setNewStatus}
            selectedShipment={selectedShipment}
            setSelectedShipment={setSelectedShipment}
            onUpdate={onUpdate}
          />
        )}
      </div>
    </div>
  );
};

export default Shipmentable;