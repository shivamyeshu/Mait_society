"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { AnimatePresence, motion } from "framer-motion"
import { Moon, Sun, Menu, X, Github, Twitter, Linkedin, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Page transition effect
  const pageVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  }

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  // For theme toggle to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={pageVariants}
      className="min-h-screen bg-background transition-colors duration-500"
    >
      {/* Header */}
      <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-background/80 border-b">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="flex items-center">
                <div className="relative w-8 h-8 mr-2 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500"></div>
                <span className="font-bold text-xl tracking-tight">society name</span>
              </Link>
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="flex items-center gap-6"
            >
              {["About", "Projects", "Events", "Team", "Join"].map((item, i) => (
                <motion.div key={i} variants={fadeIn}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-sm font-medium transition-colors hover:text-primary"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={fadeIn}>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="ml-2 relative overflow-hidden"
                >
                  <motion.div
                    initial={false}
                    animate={{
                      y: theme === "dark" ? 0 : -30,
                      opacity: theme === "dark" ? 1 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <Sun className="h-4 w-4" />
                  </motion.div>
                  <motion.div
                    initial={false}
                    animate={{
                      y: theme === "dark" ? 30 : 0,
                      opacity: theme === "dark" ? 0 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <Moon className="h-4 w-4" />
                  </motion.div>
                </Button>
              </motion.div>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="mr-2">
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="relative overflow-hidden"
            >
              <motion.div
                initial={false}
                animate={{
                  y: theme === "dark" ? 0 : -30,
                  opacity: theme === "dark" ? 1 : 0,
                }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Sun className="h-4 w-4" />
              </motion.div>
              <motion.div
                initial={false}
                animate={{
                  y: theme === "light" ? 30 : 0,
                  opacity: theme === "light" ? 0 : 1,
                }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Moon className="h-4 w-4" />
              </motion.div>
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-b"
          >
            <div className="container py-4 flex flex-col space-y-4">
              {["About", "Projects", "Events", "Team", "Join"].map((item, i) => (
                <Link
                  key={i}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium transition-colors hover:text-primary py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-pattern" />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
          </div>

          <div className="container relative z-10 py-24 md:py-32 lg:py-40">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.div
                variants={fadeIn}
                className="inline-block mb-6 px-6 py-2 border border-purple-500/30 rounded-full text-sm font-medium text-purple-500 dark:text-purple-400 bg-purple-500/10"
              >
                Society of mait 
              </motion.div>

              <motion.h1
                variants={fadeIn}
                className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600"
              >
                society name
              </motion.h1>

              <motion.p variants={fadeIn} className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Where innovation meets community. Building the future, one project at a time.
              </motion.p>

              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  Join Us
                </Button>
                <Button size="lg" variant="outline">
                  Explore Projects
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              transition={{ duration: 1.5 }}
              className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              transition={{ duration: 1.5, delay: 0.2 }}
              className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              transition={{ duration: 1.5, delay: 0.4 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"
            />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeIn} className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6">About the Society</h2>
              <p className="text-muted-foreground mb-6">
                description 
              </p>
              <p className="text-muted-foreground mb-6">
                descriprtion 
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-blue-500">n+</span>
                  <span className="text-sm text-muted-foreground">Active Members</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-purple-500">n+</span>
                  <span className="text-sm text-muted-foreground">Projects Completed</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-blue-500">n+</span>
                  <span className="text-sm text-muted-foreground">Events Hosted</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-purple-500">n</span>
                  <span className="text-sm text-muted-foreground">Awards Won</span>
                </div>
              </div>
            </motion.div>
            <motion.div variants={fadeIn} className="order-1 md:order-2">
              <div className="relative h-[400px] rounded-2xl overflow-hidden border border-muted">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Tech society members collaborating"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-muted/50">
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-4">
                Featured Projects
              </motion.h2>
              <motion.p variants={fadeIn} className="text-muted-foreground max-w-2xl mx-auto">
                Explore some of our innovative projects created by our talented members, showcasing our technical
                expertise and creativity.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {[
                {
                  title: "AI Study Assistant",
                  description:
                    "An AI-powered study assistant that helps students organize notes and prepare for exams.",
                  image: "/placeholder.svg?height=400&width=600",
                  tags: ["AI", "Education", "Web App"],
                },
                {
                  title: "Smart Campus",
                  description: "IoT solution for monitoring and optimizing energy usage across campus buildings.",
                  image: "/placeholder.svg?height=400&width=600",
                  tags: ["IoT", "Sustainability", "Hardware"],
                },
                {
                  title: "AR Campus Tour",
                  description: "Augmented reality tour guide for new students and visitors to navigate the campus.",
                  image: "/placeholder.svg?height=400&width=600",
                  tags: ["AR", "Mobile", "UX Design"],
                },
              ].map((project, i) => (
                <motion.div key={i} variants={fadeIn} whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                  <Card className="overflow-hidden h-full flex flex-col group">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.tags.map((tag, j) => (
                          <span
                            key={j}
                            className="px-2 py-1 text-xs font-medium rounded-full bg-blue-500/10 text-blue-500 dark:bg-blue-500/20 dark:text-blue-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
                      <Button variant="ghost" className="self-start">
                        Learn more →
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center mt-12"
            >
              <Button variant="outline" size="lg">
                View All Projects
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Events Section */}
        <section id="events" className="py-20 container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-4">
              Upcoming Events
            </motion.h2>
            <motion.p variants={fadeIn} className="text-muted-foreground max-w-2xl mx-auto">
            descriprtion of the events   
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            {[
              {
                title: "Annual Hackathon 2023",
                date: "November 15-17, 2023",
                description: "48-hour hackathon focused on developing solutions for sustainable smart cities.",
                image: "/placeholder.svg?height=300&width=600",
              },
              {
                title: "Workshop: Intro to Machine Learning",
                date: "October 25, 2023",
                description: "Hands-on workshop covering the basics of machine learning with practical examples.",
                image: "/placeholder.svg?height=300&width=600",
              },
            ].map((event, i) => (
              <motion.div key={i} variants={fadeIn} whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                <Card className="overflow-hidden flex flex-col md:flex-row h-full group">
                  <div className="relative h-48 md:h-auto md:w-1/3 overflow-hidden">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6 md:w-2/3 flex flex-col">
                    <div className="mb-2 text-sm font-medium text-purple-500 dark:text-purple-400">{event.date}</div>
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <p className="text-muted-foreground mb-4 flex-grow">{event.description}</p>
                    <Button className="self-start">Register Now</Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mt-12"
          >
            <Button variant="outline" size="lg">
              View All Events
            </Button>
          </motion.div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-20 bg-muted/50">
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-4">
                Core Team
              </motion.h2>
              <motion.p variants={fadeIn} className="text-muted-foreground max-w-2xl mx-auto">
                Meet the dedicated individuals who lead our society and drive our mission forward.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {[
                { name: "Alex Chen", role: "President", image: "/placeholder.svg?height=400&width=400" },
                { name: "Maya Patel", role: "Vice President", image: "/placeholder.svg?height=400&width=400" },
                { name: "Jordan Lee", role: "Technical Lead", image: "/placeholder.svg?height=400&width=400" },
                { name: "Taylor Kim", role: "Events Coordinator", image: "/placeholder.svg?height=400&width=400" },
              ].map((member, i) => (
                <motion.div key={i} variants={fadeIn} whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                  <Card className="overflow-hidden text-center group">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold">{member.name}</h3>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Join Us Section */}
        <section id="join" className="py-20 container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
              <p className="text-muted-foreground mb-6">
                Become a part of our vibrant community of tech enthusiasts, innovators, and problem-solvers. Whether
                you're a beginner or an expert, there's a place for you at society name.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-blue-500/20 p-1.5 rounded-full text-blue-500">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M5 13L9 17L19 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Access to Workshops & Events</h3>
                    <p className="text-sm text-muted-foreground">
                      Participate in exclusive workshops, hackathons, and networking events.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-blue-500/20 p-1.5 rounded-full text-blue-500">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M5 13L9 17L19 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Mentorship Opportunities</h3>
                    <p className="text-sm text-muted-foreground">
                      Learn from experienced peers and industry professionals.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-blue-500/20 p-1.5 rounded-full text-blue-500">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M5 13L9 17L19 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Project Collaboration</h3>
                    <p className="text-sm text-muted-foreground">
                      Work on real-world projects and build your portfolio.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Apply to Join</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="first-name" className="text-sm font-medium">
                        First Name
                      </label>
                      <Input id="first-name" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="last-name" className="text-sm font-medium">
                        Last Name
                      </label>
                      <Input id="last-name" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="john.doe@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="major" className="text-sm font-medium">
                      Major/Field of Study
                    </label>
                    <Input id="major" placeholder="Computer Science" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Why do you want to join?
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us a bit about yourself and why you're interested in joining society name..."
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    Submit Application
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-muted/50">
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-4">
                Get in Touch
              </motion.h2>
              <motion.p variants={fadeIn} className="text-muted-foreground max-w-2xl mx-auto">
                Have questions or want to collaborate? Reach out to us and we'll get back to you as soon as possible.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="max-w-md mx-auto"
            >
              <Card className="p-6">
                <form className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="contact-name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input id="contact-name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="contact-email" type="email" placeholder="your.email@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input id="contact-subject" placeholder="What's this about?" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea id="contact-message" placeholder="Your message..." rows={4} />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-12 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <Link href="/" className="flex items-center mb-4">
                <div className="relative w-8 h-8 mr-2 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500"></div>
                <span className="font-bold text-xl tracking-tight">society name</span>
              </Link>
              <p className="text-muted-foreground mb-4 max-w-md">
                society name is a student-led technical society dedicated to fostering innovation, collaboration, and technical
                excellence.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" asChild>
                  <Link href="#">
                    <Twitter className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link href="#">
                    <Instagram className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link href="#">
                    <Github className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link href="#">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="#events" className="text-muted-foreground hover:text-foreground transition-colors">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="#team" className="text-muted-foreground hover:text-foreground transition-colors">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="#join" className="text-muted-foreground hover:text-foreground transition-colors">
                    Join Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-muted-foreground">Email: abcd@abcd.edu</li>
                <li className="text-muted-foreground">Phone: (123) 456-7890</li>
                <li className="text-muted-foreground">Address: Tech Building, University Campus</li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()}  Society. All rights reserved.
              </p>
              <p className="text-sm text-muted-foreground">
                Created by{" "}
                <a
                  href="https://www.linkedin.com/in/shivam-yeshu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-purple-500 dark:text-purple-400 underline underline-offset-4 hover:text-purple-600 dark:hover:text-purple-300"
                >
                  Shivam Yeshu
                </a>
              </p>
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </motion.div>
  )
}
