"use server"

import { z } from "zod"
import { google } from "googleapis"

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  message: z.string().min(1, "Message is required"),
})

// Function to create Gmail API client
function getGmailClient() {
  const oauth2Client = new google.auth.OAuth2(
    process.env.GMAIL_CLIENT_ID,
    process.env.GMAIL_CLIENT_SECRET,
    "https://developers.google.com/oauthplayground",
  )

  oauth2Client.setCredentials({
    refresh_token: process.env.GMAIL_REFRESH_TOKEN,
  })

  return google.gmail({ version: "v1", auth: oauth2Client })
}

// Function to create email content
function createEmail(name: string, email: string, message: string) {
  const contentType = "text/html; charset=utf-8"
  const gmailUser = process.env.GMAIL_USER || "info@elysian-innovations.com"
  const toEmail = "info@elysian-innovations.com"

  const emailLines = [
    `From: Contact Form <${gmailUser}>`,
    `To: ${toEmail}`,
    `Subject: New Contact Form Submission from ${name}`,
    "MIME-Version: 1.0",
    `Content-Type: ${contentType}`,
    "",
    `<div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">`,
    `  <h2 style="color: #0ea5e9;">New Contact Form Submission</h2>`,
    `  <p><strong>Name:</strong> ${name}</p>`,
    `  <p><strong>Email:</strong> ${email}</p>`,
    `  <p><strong>Message:</strong></p>`,
    `  <div style="background-color: #f9fafb; padding: 15px; border-radius: 5px; margin-top: 10px;">`,
    `    ${message.replace(/\n/g, "<br>")}`,
    `  </div>`,
    `</div>`,
  ]

  return Buffer.from(emailLines.join("\r\n"))
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "")
}

export async function sendEmail(formData: FormData) {
  try {
    // Validate form data
    const validatedFields = formSchema.parse({
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    })

    // Get Gmail client
    const gmail = getGmailClient()

    // Create email content
    const raw = createEmail(validatedFields.name, validatedFields.email, validatedFields.message)

    // Send email using Gmail API
    await gmail.users.messages.send({
      userId: "me",
      requestBody: {
        raw,
      },
    })

    return { success: true }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false, error: "Failed to send email" }
  }
}
