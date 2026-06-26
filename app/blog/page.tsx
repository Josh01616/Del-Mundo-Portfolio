import { BlogList } from "@/components/sections/blog-list"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Blog - Josh Matthew R. del Mundo",
  description: "Thoughts on web development, JavaScript, React, and modern development practices.",
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <BlogList />
      <Footer />
    </main>
  )
}
