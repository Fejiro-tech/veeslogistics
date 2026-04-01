export const shipmentData = [
  {
    trackingId: "TRK-2024-98761",
    status: "Delivered",
    estimatedDelivery: "March 10",

    sender: {
      name: "John Doe",
      origin: "Lagos Island",
      destination: "Ketu"
    },

    receiver: {
      name: "Jane Smith",
      address: "5 Effurun Street"
    },

    timeline: [
      {
        time: "9:00 AM",
        status: "Shipment Created",
        location: "Warri Central Hub"
      },
      {
        time: "9:45 AM",
        status: "Picked up by rider",
        location: "Warri Central Hub"
      },
      {
        time: "10:30 AM",
        status: "Out for delivery",
        location: "Approaching Effurun"
      },
      {
        time: "12:00 PM",
        status: "In Transit",
        location: "Effurun, Delta State"
      },
      {
        time: "3:00 PM",
        status: "Delivered",
        location: "Effurun, Delta State"
      }
    ]
  },

  {
    trackingId: "TRK-2024-98713",
    status: "In Transit",
    estimatedDelivery: "March 10",

    sender: {
      name: "John Doe",
      origin: "Lagos Island",
      destination: "Ketu"
    },

    receiver: {
      name: "Jane Smith",
      address: "5 Effurun Street"
    },

    timeline: [
      {
        time: "9:00 AM",
        status: "Shipment Created",
        location: "Warri Central Hub"
      },
      {
        time: "9:45 AM",
        status: "Picked up by rider",
        location: "Warri Central Hub"
      },
      {
        time: "Now",
        status: "In Transit",
        location: "Approaching Effurun"
      }
    ]
  },

  {
    trackingId: "TRK-2024-98745",
    status: "Shipment Created",
    estimatedDelivery: "March 10",

    sender: {
      name: "John Doe",
      origin: "Lagos Island",
      destination: "Ketu"
    },

    receiver: {
      name: "Jane Smith",
      address: "5 Effurun Street"
    },

    timeline: [
      {
        time: "9:00 AM",
        status: "Shipment Created",
        location: "Warri Central Hub"
      }
    ]
  },

  {
    trackingId: "TRK-2024-98865",
    status: "Out for Delivery",
    estimatedDelivery: "March 10",

    sender: {
      name: "John Doe",
      origin: "Lagos Island",
      destination: "Ketu"
    },

    receiver: {
      name: "Jane Smith",
      address: "5 Effurun Street"
    },

    timeline: [
      {
        time: "9:00 AM",
        status: "Shipment Created",
        location: "Warri Central Hub"
      },
      {
        time: "Now",
        status: "Out for Delivery",
        location: "Approaching Effurun"
      }
    ]
  }
];