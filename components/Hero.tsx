"use client";

import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { fadeIn, staggerContainer } from "@/lib/animations";

export default function Hero() {
  return (
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
            Society of MAIT
          </motion.div>
          <motion.h1
            variants={fadeIn}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600"
          >
            ElevatHub
          </motion.h1>
          <motion.p
            variants={fadeIn}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Society for Enhancing Skills for Placements and Internships
          </motion.p>
          <motion.div
            variants={fadeIn}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
        <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfZqt69S6gws_-SX7RVYMh25J88VH8iCwHUP1QjwTk-Y8j1Pw/viewform?isSkipped=1&pli=1 "
            target="_blank"
            rel="noopener noreferrer"
            >
            <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
                Join us as a student
            </Button>
        </a>

            <Button size="lg" variant="outline">
              Explore Projects
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
