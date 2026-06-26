"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Code2, Cpu, Database, Monitor, Wrench } from "lucide-react"
import { motion } from "framer-motion"

const skillCategories = [
  {
    id: 1,
    title: "Software Engineering",
    icon: "Code2",
    description: "Core languages across full-stack and systems development",
    skills: ["Python", "TypeScript", "JavaScript", "Java", "PHP"],
  },
  {
    id: 2,
    title: "Frontend Development",
    icon: "Monitor",
    description: "Interfaces that are fast, accessible, and production-ready",
    skills: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: 3,
    title: "Backend & Databases",
    icon: "Database",
    description: "Server-side systems, APIs, and data persistence",
    skills: ["Supabase", "Firebase", "MySQL", "SQL", "REST APIs"],
  },
  {
    id: 4,
    title: "AI & Computer Vision",
    icon: "Cpu",
    description: "Applied AI for real-world clinical and operational use cases",
    skills: ["OpenCV", "MediaPipe", "Fuzzy Logic", "Computer Vision", "Decision Support Systems"],
  },
  {
    id: 5,
    title: "Developer Tools",
    icon: "Wrench",
    description: "Tools used throughout every development workflow",
    skills: ["Git", "GitHub", "VS Code", "Figma"],
  },
  {
    id: 6,
    title: "Quality Assurance",
    icon: "CheckCircle2",
    description: "Professional experience in high-volume content and brand QA",
    skills: ["Content Auditing", "Brand Compliance", "Creative Review", "Cross-functional Collaboration"],
  },
]

const icons = {
  CheckCircle2,
  Code2,
  Cpu,
  Database,
  Monitor,
  Wrench,
}

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Technical Capabilities
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Grouped by domain — from full-stack engineering to applied AI.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = icons[category.icon as keyof typeof icons]

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass border-border/50 hover:border-primary/30 hover:glow-soft transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-xl font-bold text-foreground">{category.title}</CardTitle>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{category.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="border-border/50 text-foreground">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
