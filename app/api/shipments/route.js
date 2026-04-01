import { supabaseAdmin } from "../../lib/supabaseAdmin"
// GET all shipments
export async function GET() {
  const { data, error } = await supabaseAdmin
    .from("shipments")
    .select("*")

  if (error) return new Response(JSON.stringify({ message: error.message }), { status: 500 })

  return new Response(JSON.stringify(data), { status: 200 })
}

// POST new shipment
export async function POST(req) {
  const body = await req.json()

  const newShipment = {
    trackingId: `TRK-${Date.now()}`,
    status: "Shipment Created",
    estimatedDelivery: body.estimatedDelivery,
    packageDescription: body.packageDescription,
    sender: {
      name: body.senderName,
      phone: body.senderPhone,
      origin: body.senderOrigin,
    },
    receiver: {
      name: body.receiverName,
      phone: body.receiverPhone,
      address: body.receiverAddress,
    },
    timeline: [
      {
        status: "Shipment Created",
        time: new Date().toLocaleTimeString(),
        date: new Date().toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }),
        location: body.senderOrigin,
      },
    ],
  }

  const { data, error } = await supabaseAdmin
    .from("shipments")
    .insert([newShipment])

  if (error) return new Response(JSON.stringify({ message: error.message }), { status: 500 })

  return new Response(JSON.stringify(data), { status: 201 })
}