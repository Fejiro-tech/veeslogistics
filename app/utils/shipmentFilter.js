
export const getFilteredShipments = (shipments, status) => {
  if (!status) return shipments

  const inTransitStatuses = ["Picked up by rider", "In Transit", "Out for Delivery"]

  if (status === "pending") return shipments.filter(s => s.status === "Shipment Created")
  if (status === "inTransit") return shipments.filter(s => inTransitStatuses.includes(s.status))
  if (status === "delivered") return shipments.filter(s => s.status === "Delivered")

  return shipments
}