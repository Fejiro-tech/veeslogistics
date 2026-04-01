import { supabaseAdmin } from "../../../lib/supabaseAdmin"

// GET one shipment

export async function GET(req, { params }) {
  const { trackingId } = await params  // ✅ fixed

  const { data, error } = await supabaseAdmin
    .from("shipments")
    .select("*")
    .eq("trackingId", trackingId)
    .single()

  if (error || !data) {
    return new Response(JSON.stringify({ message: "Shipment not found" }), { status: 404 })
  }

  return new Response(JSON.stringify(data), { status: 200 })
}

// PATCH / update status
export async function PATCH(req, { params }) {
  const { trackingId } = await params
  const body = await req.json()

  const { data: existing, error: fetchError } = await supabaseAdmin
    .from("shipments")
    .select("timeline")
    .eq("trackingId", trackingId)
    .single()

  if (fetchError || !existing) return new Response(JSON.stringify({ message: "Not found" }), { status: 404 })

  const updatedTimeline = existing.timeline.some(t => t.status === body.status)
    ? existing.timeline
    : [
        ...existing.timeline,
        {
          status: body.status,
          time: new Date().toLocaleTimeString(),
          date: new Date().toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }),
          location: body.location || "",
        },
      ]

  const { data, error } = await supabaseAdmin
    .from("shipments")
    .update({ status: body.status, timeline: updatedTimeline })
    .eq("trackingId", trackingId)
    .select()
    .single()

  if (error) return new Response(JSON.stringify({ message: error.message }), { status: 500 })

  return new Response(JSON.stringify(data))
}

// DELETE shipment
export async function DELETE(req, { params }) {
  const { trackingId } = await params

  const { error } = await supabaseAdmin
    .from("shipments")
    .delete()
    .eq("trackingId", trackingId)

  if (error) return new Response(JSON.stringify({ message: error.message }), { status: 500 })

  return new Response(JSON.stringify({ message: "Deleted" }))
}