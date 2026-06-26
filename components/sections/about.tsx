"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Building2, Brain, GraduationCap, Users } from "lucide-react"
import { motion } from "framer-motion"

const pillars = [
  {
    title: "Business Systems",
    description:
      "Full-stack platforms for real organizations — project tracking, document workflows, approval routing, and operational analytics.",
    icon: Building2,
  },
  {
    title: "AI Applications",
    description:
      "Computer vision and decision support systems with measurable clinical accuracy. Python, OpenCV, MediaPipe, and Fuzzy Logic.",
    icon: Brain,
  },
  {
    title: "Operational Platforms",
    description:
      "Resource management and reservation systems scaled to institutional use. Real-time availability, automated notifications, multi-user support.",
    icon: Users,
  },
]

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">ABOUT</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Engineering Software That Works in the Real World
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
              <p>
                My work spans the full stack: from architecting Supabase-backed business platforms to building Python
                computer vision pipelines validated by licensed physical therapists. I've collaborated directly with
                CEOs, Vice CEOs, Senior Engineers, and clinical professionals to turn complex requirements into working
                software.
              </p>
            </div>

            <Card className="glass border-border/50 mt-8 max-w-md">
              <CardContent className="p-5 flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Computer Science · Undergraduate</p>
                  {/* TODO: University name here */}
                  <p className="text-sm text-muted-foreground">Cavite State University - Main Campus</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass border-border/50 hover:border-primary/30 hover:glow-soft transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 h-fit">
                        <pillar.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">{pillar.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
