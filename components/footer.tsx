import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Josh Matthew R. del Mundo</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Software Engineer specializing in Business Systems, AI Applications, and Operational Platforms. Based in
              the Philippines, open to remote opportunities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide">Quick Links</h4>
            <nav className="space-y-2">
              <Link
                href="#home"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </Link>
              <Link
                href="#about"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </Link>
              <Link
                href="#projects"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Projects
              </Link>
              <Link
                href="#experience"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Experience
              </Link>
              <Link
                href="#skills"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Skills
              </Link>
              <Link
                href="/blog"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Blog
              </Link>
              <Link
                href="#contact"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide">Connect</h4>
            <div className="flex items-center space-x-4 mb-4">
              <Link
                href="https://github.com/Josh01616"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground hover:glow-soft transition-all duration-300 p-2 rounded-full"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/del-mundo-josh-720689326/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground hover:glow-soft transition-all duration-300 p-2 rounded-full"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              {/* TODO: Replace with real email */}
              <Link
                href="mailto:[TODO: josh's real email]"
                className="text-muted-foreground hover:text-foreground hover:glow-soft transition-all duration-300 p-2 rounded-full"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
              <ThemeToggle />
            </div>
            <p className="text-xs text-muted-foreground">
              Available for remote and hybrid opportunities
              <br />
              Based in Philippines (Asia/Manila)
            </p>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Josh Matthew R. del Mundo. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">Built with Next.js, Tailwind CSS, and deployed on Vercel</p>
        </div>
      </div>
    </footer>
  )
}
