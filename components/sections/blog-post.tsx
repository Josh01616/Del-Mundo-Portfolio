"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

interface BlogPostProps {
  post: {
    id: number
    title: string
    description: string
    content: string
    slug: string
    publishedAt: string
    readTime: string
    tags: string[]
    featured: boolean
  }
}

export function BlogPost({ post }: BlogPostProps) {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.description,
          url: window.location.href,
        })
      } catch (error) {
        // Fallback to copying URL
        navigator.clipboard.writeText(window.location.href)
      }
    } else {
      // Fallback to copying URL
      navigator.clipboard.writeText(window.location.href)
    }
  }

  return (
    <div className="pt-16">
      <article className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground transition-colors" asChild>
              <Link href="/blog">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Link>
            </Button>
          </motion.div>

          {/* Article Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="flex flex-wrap items-center gap-4 mb-6">
              {post.featured && (
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  Featured
                </Badge>
              )}
              <div className="flex items-center text-sm text-muted-foreground gap-4">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </div>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              {post.title}
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed mb-8 text-pretty">{post.description}</p>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="border-border/50 text-muted-foreground">
                    {tag}
                  </Badge>
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={handleShare}
                className="border-border/50 hover:border-primary/50 bg-transparent"
              >
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </motion.header>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-lg prose-invert max-w-none"
          >
            <div
              className="text-foreground leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: post.content
                  .replace(/^# (.+)$/gm, '<h1 class="text-3xl font-bold text-foreground mb-6 mt-8">$1</h1>')
                  .replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold text-foreground mb-4 mt-8">$1</h2>')
                  .replace(/^### (.+)$/gm, '<h3 class="text-xl font-bold text-foreground mb-3 mt-6">$1</h3>')
                  .replace(/\*\*(.+?)\*\*/g, '<strong class="text-primary font-semibold">$1</strong>')
                  .replace(/`([^`]+)`/g, '<code class="bg-muted px-2 py-1 rounded text-sm font-mono">$1</code>')
                  .replace(
                    /```(\w+)?\n([\s\S]*?)```/g,
                    '<pre class="bg-muted p-4 rounded-lg overflow-x-auto my-6"><code class="text-sm font-mono">$2</code></pre>',
                  )
                  .replace(/^- (.+)$/gm, '<li class="mb-2">$1</li>')
                  .replace(/(<li.*<\/li>)/s, '<ul class="list-disc list-inside mb-6 space-y-2">$1</ul>')
                  .replace(/\n\n/g, '</p><p class="mb-6">')
                  .replace(/^(?!<[h|u|p|c])(.+)$/gm, '<p class="mb-6">$1</p>'),
              }}
            />
          </motion.div>

          {/* Article Footer */}
          <motion.footer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 pt-8 border-t border-border/50"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Josh Matthew R. del Mundo</h3>
                <p className="text-muted-foreground text-sm">
                  Full Stack Developer specializing in JavaScript, React, and Next.js
                </p>
              </div>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-border/50 hover:border-primary/50 bg-transparent"
                  asChild
                >
                  <Link href="/blog">More Posts</Link>
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  className="bg-primary text-primary-foreground hover:glow transition-all duration-300"
                  asChild
                >
                  <Link href="#contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
          </motion.footer>
        </div>
      </article>
    </div>
  )
}
