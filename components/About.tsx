"use client"

import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from "@/lib/animations"

export default function About() {
  return (
    <section id="about" className="py-20 container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="grid md:grid-cols-2 gap-12 items-start ml-4 "
      >
        <motion.div variants={fadeIn}>
          <h2 className="text-3xl font-bold mb-6">ElevatHub: From Vision to Reality</h2>
          <p className="text-muted-foreground mb-4">
            ElevatHub is a society dedicated to enhancing skills for placements and internships. We bridge the gap
            between academic learning and industry expectations by offering mentorship, training, and networking
            opportunities.
          </p>
          <p className="text-muted-foreground mb-4">
            Founded by a group of passionate individuals, ElevatHub aims to empower students through structured
            guidance, real-world simulations, and industry connections.
          </p>
          <p className="text-muted-foreground mb-4">
            Our first milestone event—an engaging orientation session—introduced students to ElevatHub’s mission and
            upcoming initiatives including mock interviews, resume workshops, and career guidance from industry
            professionals.
          </p>
          <p className="text-muted-foreground">
            Join us as we continue to Learn, Adapt, and Elevate careers to new heights!
          </p>
        </motion.div>

        <motion.div variants={fadeIn}>
          <img
              src="/images/extra.png "
              alt="ElevatHub Logo"
              className="max-h-full max-w-full object-contain rounded-2xl overflow-hidden border border-muted bg-muted flex items-center justify-center "
            />
        </motion.div>

      </motion.div>
    </section>
  )
}
