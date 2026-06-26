"use client"

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

export function BlogPostPageClient({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  return <div>{post ? post.title : "Post not found"}</div>
} // Adding explicit named export to resolve import error
