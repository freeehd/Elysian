"use client"

import type React from "react"

import { useState } from "react"
import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"
import { FadeInSection } from "@/components/FadeInSection"
import { sendEmail } from "@/app/actions/send-email"

export default function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formData = new FormData()
      formData.append("name", name)
      formData.append("email", email)
      formData.append("message", message)

      const result = await sendEmail(formData)

      if (result.success) {
        toast({
          title: "Message Sent",
          description: "We've received your message and will get back to you soon.",
        })

        setName("")
        setEmail("")
        setMessage("")
      } else {
        throw new Error(result.error || "Failed to send message")
      }
    } catch (error) {
      console.error("Error sending message:", error)
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 dark:from-rich-black-100 dark:to-rich-black-200 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-teal/5 dark:bg-teal/5 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-caribbean/5 dark:bg-caribbean/5 blur-3xl"></div>
      </div>

      <div className="h-28"></div>

      <main className="container mx-auto py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInSection>
          <h1 className="text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            Get in <span className="bg-gradient-to-r from-teal to-caribbean bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-center text-lg mb-16 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We'd love to hear from you. Please fill out the form below or reach out to us directly through our contact
            information.
          </p>
        </FadeInSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <FadeInSection>
            <div className="bg-white dark:bg-rich-black-200/70 rounded-xl shadow-lg p-8 border border-gray-100 dark:border-rich-black-300">
              <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="bg-gray-50 dark:bg-rich-black-300/50 border-gray-200 dark:border-rich-black-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <Input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-gray-50 dark:bg-rich-black-300/50 border-gray-200 dark:border-rich-black-300"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="bg-gray-50 dark:bg-rich-black-300/50 border-gray-200 dark:border-rich-black-300 min-h-[150px]"
                    placeholder="How can we help you?"
                    rows={5}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-teal to-caribbean hover:from-teal-600 hover:to-caribbean-600 text-white transition-all duration-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </FadeInSection>

          <div className="space-y-8">
            <FadeInSection>
              <div className="bg-white dark:bg-rich-black-200/70 rounded-xl shadow-lg p-8 border border-gray-100 dark:border-rich-black-300">
                <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Contact Information</h2>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <div className="mt-1 bg-teal/10 dark:bg-teal/20 p-2 rounded-full">
                      <Mail className="w-5 h-5 text-teal dark:text-teal-400" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                      <a
                        href="mailto:info@elysian-innovations.com"
                        className="text-gray-700 dark:text-gray-300 hover:text-teal dark:hover:text-teal-400 transition-colors"
                      >
                        info@elysian-innovations.com
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="bg-gradient-to-r from-teal to-caribbean rounded-xl shadow-lg p-8 text-white">
                <h2 className="text-2xl font-semibold mb-4">Ready to Transform Your Business?</h2>
                <p className="mb-6 text-white/90">
                  Let's discuss how our innovative solutions can help you achieve your goals and stay ahead of the
                  competition.
                </p>
                <Button
                  className="bg-white text-teal hover:bg-gray-100 hover:text-caribbean transition-all duration-300"
                  asChild
                >
                  <a href="/services">Explore Our Services</a>
                </Button>
              </div>
            </FadeInSection>
          </div>
        </div>
      </main>
    </div>
  )
}
