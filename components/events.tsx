"use client"

import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from "@/lib/animations"
import { Card } from "@/components/ui/card"
import Image from "next/image"

const events = [
  {
    title: "ElevatHub Orientation: A New Beginning!",
    description: "Our orientation session was a great success! 🎉 From insightful discussions to interactive sessions, we introduced our mission of empowering students with career guidance, skill development, and placement preparation.",
    tags: ["AI", "Education"],
    image: "/placeholder.svg",
  },
  {
    title: "Smart Campus",
    description: "Optimizes energy usage with IoT.",
    tags: ["IoT", "Green Tech"],
    image: "/placeholder.svg",
  },
  // add more event in the same format 
]

export default function Events() {
  return (
    <section id="events" className="py-20 bg-muted/50">
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          <h2 className="text-3xl font-bold mb-4 text-center">Featured Events</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {events.map((event, i) => (
              <motion.div key={i} variants={fadeIn} whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                <Card className="overflow-hidden h-full flex flex-col group">
                  <div className="relative h-48">
                    <Image src={event.image} alt={event.title} fill className="object-cover" />
                  </div>
                  <div className="p-4">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {event.tags.map((tag, j) => (
                        <span key={j} className="px-2 py-1 text-xs rounded-full bg-blue-500/10 text-blue-500">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-lg font-bold mb-1">{event.title}</h3>
                    <p className="text-muted-foreground text-sm">{event.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
