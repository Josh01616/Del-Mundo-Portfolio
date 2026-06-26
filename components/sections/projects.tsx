"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

type Project = {
  id: number
  title: string
  tagline: string
  problem: string
  solution: string
  stack: string[]
  outcomes: string[]
  stakeholders: string[]
  role: string
  featured: boolean
  liveUrl: string | null
  githubUrl: string | null
}

const projects: Project[] = [
  {
    id: 1,
    title: "GYG Power Systems — Business Management Platform",
    tagline: "A full business operations platform for an engineering firm.",
    problem:
      "GYG Power Systems, an engineering firm in Quezon City, needed a unified digital platform to manage projects, route document approvals, and generate operational analytics — replacing manual processes.",
    solution:
      "Built a full-stack business management system from the ground up using Next.js, TypeScript, and Supabase. The platform centralizes project tracking, document management, multi-level approval workflows, and provides real-time operational analytics to leadership.",
    stack: ["Next.js", "TypeScript", "Supabase", "SQL", "Tailwind CSS"],
    outcomes: [
      "Deployed and actively used by engineering firm leadership",
      "Serves CEO, Vice CEO, and Senior Design Engineer",
      "Replaced manual document and approval processes",
      "Provides real-time operational analytics dashboard",
    ],
    stakeholders: ["CEO", "Vice CEO", "Senior Design Engineer"],
    role: "Full-Stack Developer",
    featured: true,
    liveUrl: null,
    githubUrl: null, // TODO: add if applicable
  },
  {
    id: 2,
    title: "Frozen Shoulder Rehabilitation — AI Decision Support System",
    tagline: "Computer vision system for clinical shoulder rehabilitation assessment.",
    problem:
      "Physical therapists lacked objective, consistent tools for assessing posture compensation and range-of-motion during frozen shoulder rehabilitation — assessments relied entirely on manual, subjective observation.",
    solution:
      "Built a Python-based computer vision decision support system using OpenCV and MediaPipe for real-time skeletal tracking, combined with Fuzzy Logic for clinical decision output. The system automates posture compensation detection and ROM assessment with validated accuracy.",
    stack: ["Python", "OpenCV", "MediaPipe", "Fuzzy Logic", "Computer Vision"],
    outcomes: [
      "91.2% posture compensation detection accuracy",
      "86.4% range-of-motion assessment accuracy",
      "Validated with 5 licensed Physical Therapists",
      "Tested with 5 healthy participants and 2 shoulder pathology patients",
    ],
    stakeholders: ["5 Physical Therapists", "5 Healthy Participants", "2 Shoulder Pathology Patients"],
    role: "Lead Developer",
    featured: true,
    liveUrl: null,
    githubUrl: null, // TODO: add if applicable
  },
  {
    id: 3,
    title: "Resource Hive — Institutional Resource Management",
    tagline: "Reservation system and resource management platform for professors.",
    problem:
      "Faculty members at an institution had no efficient way to manage, reserve, or track shared resources — leading to scheduling conflicts and underutilization.",
    solution:
      "Built a resource management platform with real-time availability tracking, reservation workflows, and automated notifications. Designed for institutional scale with multi-user support.",
    stack: ["HTML/CSS", "Real-Time Updates", "Automated Notifications", "Bootstrap", "Javascript"],
    outcomes: [
      "Actively used by 40+ professors",
      "Eliminated scheduling conflicts through real-time availability",
      "Automated notification system reduces manual coordination",
    ],
    stakeholders: ["40+ Professors"],
    role: "Full-Stack Developer",
    featured: false,
    liveUrl: null,
    githubUrl: null,
  },
]

function ActionLinks({ project }: { project: Project }) {
  if (!project.liveUrl && !project.githubUrl) {
    return <span className="text-sm text-muted-foreground">Private / Internal System</span>
  }

  return (
    <div className="flex flex-wrap gap-3">
      {project.liveUrl && (
        <Button
          variant="default"
          className="bg-primary text-primary-foreground hover:glow transition-all duration-300"
          asChild
        >
          <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4 mr-2" />
            Live Demo
          </Link>
        </Button>
      )}
      {project.githubUrl && (
        <Button
          variant="outline"
          className="border-border/50 hover:border-primary/50 bg-transparent hover:glow-soft transition-all duration-300"
          asChild
        >
          <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="h-4 w-4 mr-2" />
            Source Code
          </Link>
        </Button>
      )}
    </div>
  )
}

function ProjectContent({ project }: { project: Project }) {
  return (
    <CardContent className="p-6 sm:p-8 flex flex-col justify-center">
      <Badge variant="secondary" className="mb-4 w-fit bg-primary/10 text-primary border-primary/20">
        {project.role}
      </Badge>
      <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-3 group-hover:text-glow transition-colors">
        {project.title}
      </h3>
      <p className="text-lg text-muted-foreground mb-6">{project.tagline}</p>

      <div className="grid gap-5 mb-6">
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-2 uppercase tracking-wide">The Problem</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">{project.problem}</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-2 uppercase tracking-wide">The Solution</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">{project.solution}</p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6 mb-6">
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">Outcomes</h4>
          <ul className="space-y-2">
            {project.outcomes.map((outcome) => (
              <li key={outcome} className="text-sm text-muted-foreground flex items-start">
                <ArrowRight className="h-3.5 w-3.5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                {outcome}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">Stakeholders</h4>
          <div className="flex flex-wrap gap-2">
            {project.stakeholders.map((stakeholder) => (
              <Badge key={stakeholder} variant="outline" className="border-border/50 text-muted-foreground">
                {stakeholder}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.stack.map((tech) => (
          <Badge key={tech} variant="outline" className="border-border/50 text-foreground">
            {tech}
          </Badge>
        ))}
      </div>

      <ActionLinks project={project} />
    </CardContent>
  )
}

function ProjectVisual({ project }: { project: Project }) {
  return (
    <div className="min-h-64 lg:min-h-full p-6 sm:p-8 flex items-center justify-center bg-primary/[0.03] border-b lg:border-b-0 lg:border-r border-border/50">
      <div className="w-full max-w-md">
        <div className="glass border border-border/50 rounded-lg p-5 glow-soft">
          <div className="flex items-center justify-between mb-6">
            <Badge variant="outline" className="border-primary/30 text-primary">
              Project {project.id}
            </Badge>
            <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              {project.featured ? "Featured" : "Selected"}
            </span>
          </div>
          <div className="space-y-3">
            {project.outcomes.slice(0, 3).map((outcome) => (
              <div key={outcome} className="rounded-md border border-border/50 bg-background/40 p-3">
                <p className="text-sm text-foreground">{outcome}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.slice(0, 3).map((tech) => (
              <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function Projects() {
  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Selected Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Real systems built for real organizations. Every project listed here is deployed and used by actual
            stakeholders.
          </p>
        </motion.div>

        <div className="grid gap-8 mb-10">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="glass border-border/50 hover:border-primary/30 hover:glow-soft transition-all duration-500 overflow-hidden group">
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                  <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                    <ProjectVisual project={project} />
                  </div>
                  <ProjectContent project={project} />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass border-border/50 hover:border-primary/30 hover:glow-soft transition-all duration-300 overflow-hidden group">
                {/* TODO: add stack here */}
                <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-0">
                  <ProjectVisual project={project} />
                  <ProjectContent project={project} />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
