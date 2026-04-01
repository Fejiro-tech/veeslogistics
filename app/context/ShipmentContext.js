"use client";
import { createContext, useContext, useState } from "react";
import { shipmentData } from "../data/shipment";
import { useRouter } from "next/navigation";

const ShipmentContext = createContext();

export const ShipmentProvider = ({ children }) => {
  const [shipments, setShipments] = useState(shipmentData);
  const router = useRouter();

 const updatedShipments = (trackingId, newStatus) => {
  setShipments((prev) =>
    prev.map((item) => {
      if (item.trackingId === trackingId) {
        return {
          ...item,
          status: newStatus,
          timeline: [
            ...item.timeline,
            {
              status: newStatus,
              time: new Date().toLocaleTimeString(),
              location: item.receiver.address, 
            },
          ],
        };
      }
      return item;
    })
  );
};

  const deleteShipment = (trackingId) => {
    const confirmDelete = confirm("Delete this shipment?");
    if (!confirmDelete) return;

    setShipments(shipments.filter((item) => item.trackingId !== trackingId));
  };

  const handleTrack = (trackingId) => {
    if (!trackingId) {
      alert("Enter tracking ID");
      return;
    }
    router.push(`/track/${trackingId}`);
  };


  const createShipment = (newShipment) => {
    setShipments((prev) => [...prev, newShipment])
  }


  return (
    <ShipmentContext.Provider
      value={{ shipments, updatedShipments, deleteShipment, handleTrack, createShipment }}
    >
      {children}
    </ShipmentContext.Provider>
  );
};

export const useShipment = () => useContext(ShipmentContext);