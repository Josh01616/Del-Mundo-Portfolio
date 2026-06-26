"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, MapPin, Clock, Send, CheckCircle, AlertCircle, Download } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`)
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nBudget/Role: ${formData.budget || "Not specified"}\n\nMessage:\n${formData.message}`
      )
      window.location.href = `mailto:joshmatthew.delmundo.16@gmail.com?subject=${subject}&body=${body}`
      setSubmitStatus("success")
      setFormData({ name: "", email: "", budget: "", message: "" })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Let's Build Something Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Open to full-time roles, contract work, and freelance projects. I respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Start a Conversation</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm currently open to Software Engineer positions, systems development contracts, and freelance project
                work. If you have a real problem that needs a software solution, I'd like to hear about it.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email</h4>
                  {/* TODO: Replace with real email */}
                  <Link
                    href="mailto:[TODO: josh's real email]"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    joshmatthew.delmundo.16@gmail.com
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Location</h4>
                  <p className="text-muted-foreground">Philippines (Asia/Manila)</p>
                  <p className="text-sm text-muted-foreground">Open to remote and hybrid work</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Response Time</h4>
                  <p className="text-muted-foreground">Usually within 24 hours</p>
                  <p className="text-sm text-muted-foreground">Monday - Friday, 9 AM - 6 PM PHT</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-border/50">
              <Button
                variant="outline"
                className="w-full sm:w-auto border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground hover:glow transition-all duration-300 bg-primary/5"
                asChild
              >
                <Link href="/cv.pdf" target="_blank">
                  <Download className="h-4 w-4 mr-2" />
                  Download Resume
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="glass border-border/50 hover:border-primary/30 hover:glow-soft transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">Send a Message</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium text-foreground">
                        Name *
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                        className="bg-input border-border/50 focus:border-primary/50 focus:ring-primary/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        className="bg-input border-border/50 focus:border-primary/50 focus:ring-primary/20"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget" className="text-sm font-medium text-foreground">
                      Project Budget / Role Type
                    </Label>
                    <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                      <SelectTrigger className="bg-input border-border/50 focus:border-primary/50 focus:ring-primary/20">
                        <SelectValue placeholder="Select budget range or role type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="full-time">Full-time Position</SelectItem>
                        <SelectItem value="part-time">Part-time Position</SelectItem>
                        <SelectItem value="contract">Contract Work</SelectItem>
                        <SelectItem value="under-5k">Project: Under $5,000</SelectItem>
                        <SelectItem value="5k-15k">Project: $5,000 - $15,000</SelectItem>
                        <SelectItem value="15k-plus">Project: $15,000+</SelectItem>
                        <SelectItem value="consultation">Consultation</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium text-foreground">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project, timeline, and any specific requirements..."
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      required
                      rows={5}
                      className="bg-input border-border/50 focus:border-primary/50 focus:ring-primary/20 resize-none"
                    />
                  </div>

                  {/* Honeypot field for spam protection */}
                  <input type="text" name="website" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground hover:glow transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>

                  {/* Status Messages */}
                  {submitStatus === "success" && (
                    <div className="flex items-center gap-2 p-3 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400">
                      <CheckCircle className="h-4 w-4" />
                      <span className="text-sm">Message sent successfully! I'll get back to you soon.</span>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400">
                      <AlertCircle className="h-4 w-4" />
                      <span className="text-sm">Failed to send message. Please try again or email me directly.</span>
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
