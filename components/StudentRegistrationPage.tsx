"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function StudentRegistrationPage() {
  return (
    <section
      id="Register"
      className="min-h-screen py-24 bg-background text-foreground flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-3xl text-center border rounded-2xl shadow-xl p-10 bg-muted/30"
      >
        <h1 className="text-4xl font-bold mb-4"> Fill the registriation form as a student to Join ElevatHub Today</h1>
        <p className="text-muted-foreground text-base mb-8">
          Are you passionate about technology, innovation, and career development? Join ElevatHub to access resources, networking opportunities, and skill-building activities. Be part of a vibrant community dedicated to your success.
        </p>
        <p className="text-muted-foreground mb-6">
          Fill out the form below to join the society and start your journey with us. We'll reach out to you soon!
        </p>
        <Button asChild>
          <a
            href="https://forms.gle/YOUR_GOOGLE_FORM_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base"
          >
            Register via Google Form (for Students)
          </a>
        </Button>
      </motion.div>
    </section>
  );
}
