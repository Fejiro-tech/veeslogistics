import { supabaseAdmin } from "../../lib/supabaseAdmin"
// GET all shipments
export async function GET(req) {
  try {
    // Read query params for pagination
    const url = new URL(req.url);
    const page = parseInt(url.searchParams.get("page")) || 1; // default page 1
    const limit = parseInt(url.searchParams.get("limit")) || 10; // default 10 per page
    const from = (page - 1) * limit;
    const to = from + limit - 1;

    // Fetch shipments with ordering and pagination
    const { data, error, count } = await supabaseAdmin
      .from("shipments")
      .select("*", { count: "exact" }) // count is needed to calculate total pages
      .order("created_at", { ascending: false })
      .range(from, to);

    if (error) throw error;

    return new Response(
      JSON.stringify({
        shipments: data,
        total: count,
        page,
        limit,
        totalPages: Math.ceil(count / limit),
      }),
      { status: 200 }
    );
  } catch (err) {
    return new Response(JSON.stringify({ message: err.message }), { status: 500 });
  }
}
// POST new shipment
export async function POST(req) {
  const body = await req.json()

  const formattedDate = body.estimatedDelivery
        ? new Date(body.estimatedDelivery).toISOString()
        : null;

  const newShipment = {
    trackingId: `TRK-${Date.now()}`,
    status: "Shipment Created",
    estimatedDelivery: formattedDate,
    packageDescription: body.packageDescription,
    amount: body.amount,

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