"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building, GraduationCap } from "lucide-react"
import { motion } from "framer-motion"

const experiences = [
  {
    id: 1,
    role: "Quality Assurance Specialist",
    company: "Cloud Campaign",
    location: "Remote",
    duration: "January 2026 - Present",
    type: "Professional Experience",
    description:
      "Supported 70+ client brands across a high-volume digital marketing agency environment. Responsible for maintaining content quality, brand compliance, and creative consistency across a diverse client portfolio spanning multiple industries.",
    responsibilities: [
      "Audited content for 70+ client brands for quality and brand compliance",
      "Reviewed creative assets across Healthcare, Medical Aesthetics, HVAC, Home Services, Luxury Design, and Professional Services industries",
      "Produced social media content aligned with individual brand guidelines",
      "Collaborated cross-functionally to maintain quality standards at scale",
      "Applied attention to detail and systematic review processes in a fast-paced, high-volume environment",
    ],
    technologies: [
      "Content Auditing",
      "Brand Compliance",
      "Creative Asset Review",
      "Social Media",
      "Cross-functional Collaboration",
    ],
    achievements: [
      "Supported 70+ client brands across 6+ distinct industries simultaneously",
      "Maintained quality standards across high-volume content production pipeline",
    ],
  },
]

const education = {
  degree: "Bachelor of Science in Computer Science",
  school: "Cavite State University - Main Campus : University name",
  duration: "August 2026: Graduation year",
  status: "Undergraduate",
  highlights: [
    "Built AI/Computer Vision systems applied to clinical healthcare rehabilitation",
    "Developed full-stack business management platforms for engineering firms",
    "Applied systems analysis and software engineering principles to real operational problems",
  ],
}

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Experience & Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            A track record of delivering real software for real organizations.
          </p>
        </motion.div>

        <div className="relative mb-16">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute left-6 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block glow-soft"></div>

                <Card className="glass border-border/50 hover:border-primary/30 hover:glow-soft transition-all duration-300 md:ml-16">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                          {experience.type}
                        </Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1" />
                          {/* TODO: Add dates */}
                          {experience.duration}
                        </div>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-1" />
                        {experience.location}
                      </div>
                    </div>
                    <CardTitle className="text-2xl font-bold text-foreground">{experience.role}</CardTitle>
                    <CardDescription className="flex items-center text-lg text-muted-foreground">
                      <Building className="h-4 w-4 mr-2" />
                      {experience.company}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{experience.description}</p>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-2">
                        {experience.responsibilities.map((responsibility) => (
                          <li key={responsibility} className="text-sm text-muted-foreground flex items-start">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                        Key Achievements
                      </h4>
                      <div className="grid gap-2">
                        {experience.achievements.map((achievement) => (
                          <div key={achievement} className="text-sm text-primary font-medium">
                            {achievement}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="border-border/50 text-muted-foreground">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-foreground mb-8">Education</h3>
          <Card className="glass border-border/50 hover:border-primary/30 hover:glow-soft transition-all duration-300">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 w-fit">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <Badge variant="secondary" className="mb-3 bg-primary/10 text-primary border-primary/20">
                    {education.status}
                  </Badge>
                  <CardTitle className="text-2xl font-bold text-foreground mb-2">{education.degree}</CardTitle>
                  <CardDescription className="text-lg text-muted-foreground">
                    {/* TODO: University name */}
                    {education.school}
                  </CardDescription>
                  <div className="flex items-center text-sm text-muted-foreground mt-2">
                    <Calendar className="h-4 w-4 mr-1" />
                    {/* TODO: Graduation year */}
                    {education.duration}
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {education.highlights.map((highlight) => (
                  <li key={highlight} className="text-sm text-muted-foreground flex items-start">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
