"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";

export default function About() {
  return (
    <section id="about" className="relative py-28 bg-background overflow-hidden">
      {/* Soft gradient background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 pointer-events-none" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-20 items-center relative z-10"
      >
        {/* Text Content */}
        <motion.div variants={fadeIn}>
          <div className="mb-6 inline-block px-4 py-1 bg-purple-500/10 text-purple-500 dark:text-purple-400 rounded-full text-sm font-medium border border-purple-500/20">
            Who We Are
          </div>
          <h2 className="text-4xl md:text-1xl font-bold tracking-tight leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-fuchsia-500">
            ElevatHub: From Vision to Reality
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            ElevatHub is a movement to turn potential into power — we bridge the gap between academic theory and practical excellence.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            We run immersive events, simulate real-world interviews, and connect students directly with industry mentors.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Whether you're preparing for your first internship or final placements — we’re your launchpad.
          </p>
          <p className="text-lg text-gray-800 dark:text-zinc-100 font-semibold">
            Join us. Learn. Adapt. <span className="text-purple-500">Elevate.</span>
          </p>
        </motion.div>

        {/* Image Content */}
        <motion.div
          variants={fadeIn}
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 dark:border-white/10 backdrop-blur-md bg-white/10 dark:bg-white/5">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 z-0" />
            <img
              src="/images/extra.png"
              alt="ElevatHub Visual"
              className="relative z-10 object-cover w-full h-[420px] md:h-[500px] transition-all duration-300 ease-in-out"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
