"use client"

import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from "@/lib/animations"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { use } from "react"

const team = [
  { name: "Alex Chen", role: "President", image: "/placeholder.svg" },
  { name: "Maya Patel", role: "Vice President", image: "/placeholder.svg" },
  { name: "Jordan Lee", role: "Tech Lead", image: "/placeholder.svg" },
]

export default function Team() {
  return (
    <section id="team" className="py-20">
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          <h2 className="text-3xl font-bold mb-4 text-center">Meet the Team</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10">
            {team.map((member, i) => (
              <motion.div key={i} variants={fadeIn}>
                <Card className="overflow-hidden text-center">
                  <div className="relative h-48">
                    <Image src={member.image} alt={member.name} fill className="object-cover" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
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
