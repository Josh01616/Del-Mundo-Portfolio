"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"

const stats = [
  { value: "3+", label: "Systems Built" },
  { value: "91.2%", label: "AI Model Accuracy" },
  { value: "40+", label: "Active Platform Users" },
]

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-8 sm:px-12 lg:px-16 pt-28 lg:pt-0 relative overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center justify-items-center">
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4"
            >
              Technology Builder
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
                Building
                <br />
                <span className="text-glow bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Real-World Systems
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4 mb-8 max-w-2xl text-lg sm:text-xl text-muted-foreground text-justify"
            >
             
              <p>
                Collaborating directly with executive stakeholders and multidisciplinary teams, I deliver digital solutions that create measurable impact. My technical expertise spans Next.js, TypeScript, Python, Supabase, and OpenCV, driven by a strong commitment to building systems that improve workflows, decision-making, and user experiences.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex w-full max-w-xl justify-center lg:justify-start mb-8"
            >
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`px-4 sm:px-6 ${index > 0 ? "border-l border-border/30" : ""}`}
                >
                  <div className="text-2xl sm:text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center gap-4 mb-8"
            >
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:glow transition-all duration-300 group"
                asChild
              >
                <Link href="#projects">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-border/50 hover:border-primary/50 hover:glow-soft transition-all duration-300 bg-transparent"
                asChild
              >
                <Link href="#contact">Get In Touch</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center space-x-6"
            >
              <Link
                href="https://github.com/joshdelmundo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground hover:glow-soft transition-all duration-300 p-2 rounded-full"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/del-mundo-josh-720689326/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground hover:glow-soft transition-all duration-300 p-2 rounded-full"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              {/* TODO: Replace with real email */}
              <Link
                href="mailto:[TODO: josh's real email]"
                className="text-muted-foreground hover:text-foreground hover:glow-soft transition-all duration-300 p-2 rounded-full"
              >
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </Link>
            </motion.div>
          </div>

          <div className="flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                {/* Glow effect behind photo */}
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl scale-110"></div>

                {/* Glass panel effect */}
                <div className="relative w-full h-full rounded-full overflow-hidden glass-panel border border-border/20 bg-background/70">
                  <Image
                    src="/professional-headshot-of-a-developer.png"
                    alt="Josh Matthew R. del Mundo - Developer"
                    fill
                    sizes="(min-width: 1024px) 24rem, 20rem"
                    className="object-cover object-[50%_18%]"
                    priority
                  />
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/30 rounded-full blur-sm"></div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-primary/20 rounded-full blur-md"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
