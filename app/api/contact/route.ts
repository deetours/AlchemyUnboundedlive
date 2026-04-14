import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { name, email, message } = body

  // Validation
  if (!name || !email || !message) {
    return NextResponse.json(
      { error: 'Missing required fields' },
      { status: 400 }
    )
  }

  // Email validation (basic)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { error: 'Invalid email address' },
      { status: 400 }
    )
  }

  // Message length validation
  if (message.length < 10) {
    return NextResponse.json(
      { error: 'Message must be at least 10 characters' },
      { status: 400 }
    )
  }

  // Option 1: Send via Resend (requires RESEND_API_KEY env variable)
  const resendApiKey = process.env.RESEND_API_KEY
  if (resendApiKey) {
    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: 'noreply@alchemyunbounded.com',
          to: process.env.CONTACT_EMAIL_TO || 'contact@alchemyunbounded.com',
          replyTo: email,
          subject: `New inquiry from ${name}`,
          html: `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
          `,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to send email via Resend')
      }

      return NextResponse.json(
        { success: true, message: 'Message sent successfully. We\'ll be in touch soon.' },
        { status: 200 }
      )
    } catch (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send message. Please try again.' },
        { status: 500 }
      )
    }
  }

  // Option 2: Fallback (no email service configured yet - just log)
  console.log('Contact form submission (no email service configured):', {
    name,
    email,
    message,
    timestamp: new Date().toISOString(),
  })

  return NextResponse.json(
    {
      success: true,
      message: 'Message received. We\'ll get back to you soon.'
    },
    { status: 200 }
  )
}
