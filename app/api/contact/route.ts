import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, budget, message, website } = body

    // Honeypot spam protection
    if (website) {
      return NextResponse.json({ error: "Spam detected" }, { status: 400 })
    }

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Here you would typically send the email using a service like Resend, Nodemailer, etc.
    // For now, we'll just log the data and return success
    console.log("Contact form submission:", {
      name,
      email,
      budget,
      message,
      timestamp: new Date().toISOString(),
    })

    // Simulate email sending (replace with actual email service)
    const emailData = {
      to: "hello@joshdelmundo.com", // TODO: Replace with real email
      from: "noreply@joshdelmundo.dev", // Replace with your domain
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Budget/Role:</strong> ${budget || "Not specified"}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <hr>
        <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
      `,
    }

    // TODO: Implement actual email sending
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send(emailData)

    return NextResponse.json({ success: true, message: "Message sent successfully" })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
