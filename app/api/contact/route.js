import { supabaseAdmin } from "../../lib/supabaseAdmin";
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req) {

    const body = await req.json();
    const { name, email, message } = body;

    if(!name || !email || !message) {
        return Response.json({ error: "All fields required" }, { status: 400 });
    }

    const {error} = await supabaseAdmin
        .from("contact_messages")
        .insert([{name, email, message}]);

    if (error) {
        return Response.json({ error: error.message }, { status: 500 })
    }
    
    await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "goldejiro@gmail.com",
        subject: "New Contact Message",
        html: `
            <h2>New Messages</h2>
            <p><strong> Name: </strong> ${name}</p>
            <p><strong> Email: </strong> ${email}</p>
            <p><strong> Message: </strong> ${message}</p>
        `
    });

    // auto reply to user
    await resend.emails.send({
        from: "Swift Logistics <onboarding@resend.dev>",
        to: email,
        subject: "We received your message",
        html: `
            <h2>Hello ${name},</h2>
            <p>Thank you for contacting <strong>Swift Logistics</strong>.</p>

            <p>We have received your message and our team will get back to you shortly.</p>

            <hr/>

            <p><strong>Your Message:</strong></p>
            <p>${message}</p>

            <br/>

            <p>Best regards, <br/>Swift Logistics Team</p>
        `
    })

    return Response.json({ message: "Message sent successfully."})
}