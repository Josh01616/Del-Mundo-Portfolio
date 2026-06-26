import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "Josh Matthew R. del Mundo — Software Engineer · Business Systems & AI",
  description:
    "Computer Science undergraduate and Software Engineer specializing in Business Systems, AI Applications, and Computer Vision. Built real-world platforms for engineering firms, healthcare professionals, and institutions in the Philippines.",
  keywords: [
    "Josh Matthew del Mundo",
    "Software Engineer Philippines",
    "Full Stack Developer",
    "Business Systems Developer",
    "AI Applications",
    "Computer Vision",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Supabase",
    "OpenCV",
    "MediaPipe",
    "Systems Analyst",
    "Freelance Developer Philippines",
  ],
  authors: [{ name: "Josh Matthew R. del Mundo" }],
  creator: "Josh Matthew R. del Mundo",
  openGraph: {
    title: "Josh Matthew R. del Mundo — Software Engineer · Business Systems & AI",
    description:
      "CS undergraduate who builds business platforms, AI applications, and computer vision tools for real stakeholders — CEOs to clinical therapists.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Josh Matthew R. del Mundo — Software Engineer · Business Systems & AI",
    description:
      "CS undergraduate who builds business platforms, AI applications, and computer vision tools for real stakeholders.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
