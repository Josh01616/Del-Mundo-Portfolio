"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

// Sample blog posts data - in a real app, this would come from MDX files or a CMS
const blogPosts = [
  {
    id: 1,
    title: "Optimizing Next.js Images for Better Performance",
    description:
      "Learn how to leverage Next.js Image component and modern image formats to improve your web app's loading speed and user experience.",
    content: `
# Optimizing Next.js Images for Better Performance

Images often account for the largest portion of a web page's payload. In this post, we'll explore how to optimize images in Next.js applications for better performance and user experience.

## The Next.js Image Component

The \`next/image\` component provides automatic optimization features:

\`\`\`jsx
import Image from 'next/image'

export function OptimizedImage() {
  return (
    <Image
      src="/hero-image.jpg"
      alt="Hero image"
      width={800}
      height={600}
      priority
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,..."
    />
  )
}
\`\`\`

## Key Optimization Techniques

### 1. Responsive Images
Use the \`sizes\` prop to serve different image sizes based on viewport:

\`\`\`jsx
<Image
  src="/responsive-image.jpg"
  alt="Responsive image"
  width={800}
  height={600}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
\`\`\`

### 2. Modern Image Formats
Next.js automatically serves WebP and AVIF formats when supported by the browser.

### 3. Lazy Loading
Images are lazy-loaded by default, except when using the \`priority\` prop.

## Results

By implementing these optimizations, I achieved:
- **45% reduction** in image payload size
- **28% improvement** in Largest Contentful Paint (LCP)
- **Better Core Web Vitals** scores across all metrics

## Conclusion

Proper image optimization is crucial for modern web applications. Next.js provides excellent tools out of the box, but understanding how to use them effectively makes all the difference.
    `,
    slug: "optimizing-nextjs-images",
    publishedAt: "2024-01-15",
    readTime: "5 min read",
    tags: ["Next.js", "Performance", "Images", "Web Vitals"],
    featured: true,
  },
  {
    id: 2,
    title: "Practical Tailwind CSS Patterns for Modern UIs",
    description:
      "A collection of useful Tailwind CSS patterns and utilities that I use regularly in production applications.",
    content: `
# Practical Tailwind CSS Patterns for Modern UIs

After building numerous projects with Tailwind CSS, I've collected some practical patterns that consistently deliver great results.

## Glass Morphism Effect

Create modern glass-like components:

\`\`\`css
.glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
\`\`\`

## Responsive Grid Patterns

\`\`\`html
<!-- Auto-fit grid -->
<div class="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
  <!-- Grid items -->
</div>

<!-- Responsive columns -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <!-- Grid items -->
</div>
\`\`\`

## Custom Utilities

Add these to your \`globals.css\`:

\`\`\`css
@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
  
  .text-pretty {
    text-wrap: pretty;
  }
  
  .glow {
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
  }
}
\`\`\`

## Conclusion

These patterns have saved me countless hours and consistently produce polished results. The key is building a personal library of proven patterns.
    `,
    slug: "tailwind-css-patterns",
    publishedAt: "2024-01-08",
    readTime: "4 min read",
    tags: ["Tailwind CSS", "CSS", "UI/UX", "Patterns"],
    featured: false,
  },
  {
    id: 3,
    title: "Building Accessible React Components",
    description:
      "Essential accessibility practices for React components, including ARIA attributes, keyboard navigation, and screen reader support.",
    content: `
# Building Accessible React Components

Accessibility should be a fundamental consideration in every React component we build. Here's how to ensure your components work for everyone.

## Essential ARIA Attributes

\`\`\`jsx
function Button({ children, onClick, disabled, ...props }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}
\`\`\`

## Keyboard Navigation

\`\`\`jsx
function Modal({ isOpen, onClose, children }) {
  useEffect(() => {
    if (isOpen) {
      const handleEscape = (e) => {
        if (e.key === 'Escape') onClose()
      }
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  return isOpen ? (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50"
    >
      {children}
    </div>
  ) : null
}
\`\`\`

## Screen Reader Support

Always provide meaningful labels and descriptions:

\`\`\`jsx
<input
  type="email"
  id="email"
  aria-label="Email address"
  aria-describedby="email-help"
  required
/>
<div id="email-help" className="sr-only">
  Enter your email address to receive updates
</div>
\`\`\`

## Testing Accessibility

Use tools like:
- axe-core for automated testing
- Screen readers for manual testing
- Keyboard-only navigation testing

## Conclusion

Accessibility isn't optional—it's essential. By building these practices into your workflow, you create better experiences for all users.
    `,
    slug: "accessible-react-components",
    publishedAt: "2024-01-01",
    readTime: "6 min read",
    tags: ["React", "Accessibility", "A11y", "Best Practices"],
    featured: false,
  },
]

export function BlogList() {
  const featuredPosts = blogPosts.filter((post) => post.featured)
  const otherPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Development Notes
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Thoughts on web development, JavaScript, React, and modern development practices. Sharing what I learn
              along the way.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-foreground mb-8">Featured Posts</h2>
            </motion.div>

            <div className="grid gap-8">
              {featuredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="glass border-border/50 hover:border-primary/30 hover:glow-soft transition-all duration-300 overflow-hidden group">
                    <div className="grid lg:grid-cols-3 gap-0">
                      <div className="lg:col-span-2">
                        <CardHeader className="pb-4">
                          <div className="flex items-center gap-4 mb-3">
                            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                              Featured
                            </Badge>
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
                          <CardTitle className="text-2xl lg:text-3xl font-bold text-foreground group-hover:text-glow transition-colors">
                            {post.title}
                          </CardTitle>
                          <CardDescription className="text-muted-foreground text-lg leading-relaxed">
                            {post.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex flex-wrap gap-2 mb-6">
                            {post.tags.map((tag) => (
                              <Badge key={tag} variant="outline" className="border-border/50 text-muted-foreground">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <Button
                            variant="default"
                            className="bg-primary text-primary-foreground hover:glow transition-all duration-300 group"
                            asChild
                          >
                            <Link href={`/blog/${post.slug}`}>
                              Read Article
                              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                          </Button>
                        </CardContent>
                      </div>
                      <div className="lg:col-span-1 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center p-8">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                            <span className="text-2xl font-bold text-primary">{post.title.charAt(0)}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">Featured Article</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-foreground mb-8">All Posts</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass border-border/50 hover:border-primary/30 hover:glow-soft transition-all duration-300 h-full group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center text-sm text-muted-foreground gap-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(post.publishedAt).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          })}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </div>
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-glow transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground line-clamp-3">{post.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="outline" className="border-border/50 text-muted-foreground text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {post.tags.length > 2 && (
                        <Badge variant="outline" className="border-border/50 text-muted-foreground text-xs">
                          +{post.tags.length - 2}
                        </Badge>
                      )}
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-border/50 hover:border-primary/50 bg-transparent group"
                      asChild
                    >
                      <Link href={`/blog/${post.slug}`}>
                        Read More
                        <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
