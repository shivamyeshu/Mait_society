"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function SponsorPage() {
  return (
    <section
      id="sponsor"
      className="min-h-screen py-24 bg-background text-foreground flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-3xl text-center border rounded-2xl shadow-xl p-10 bg-muted/30"
      >
        <h1 className="text-4xl font-bold mb-4">Partner with ElevatHub</h1>
        <p className="text-muted-foreground text-lg mb-8">
        ElevatHub is seeking collaborations with organizations and companies committed to empowering students through technology, innovation, and growth.
        </p>
        <p className="text-muted-foreground mb-6">
        If you're interested in sponsoring our events or partnering with us, please fill out the form below, and we'll get in touch with you soon.
        </p>
        <Button asChild>
          <a
            href="https://forms.gle/YOUR_GOOGLE_FORM_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base"
          >
            Sponsor us 
          </a>
        </Button>
      </motion.div>
    </section>
  );
}
