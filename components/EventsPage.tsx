// pages/events.tsx
"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import { fadeIn } from "@/lib/animations";
import { events, noEvent } from "@/components/Detail/upcomingEvents"; 

export default function EventsPage() {
  const eventsToDisplay = events.length > 0 ? events : [noEvent]; // Use noEvent if events array is empty

  return (
    <section id="events" className="py-24 bg-muted/10">
      <h2 className="text-3xl font-extrabold text-center mb-12 tracking-tight">
        Upcoming Events
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {eventsToDisplay.map((event) => (
          <motion.div
            key={event.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="bg-background border-white/20 shadow-xl rounded-2xl p-6 flex flex-col justify-between transition-all hover:shadow-2xl"
          >
            <div>
              <h3 className="text-2xl font-semibold text-blue-550 mb-2">{event.title}</h3>
              <p className="text-sm text-gray-400 mb-1">{event.date} {event.time}</p>
              <p className="text-sm text-gray-400 mb-4">{event.location}</p>
              <p className="text-sm text-gray-400">{event.description}</p>
            </div>

            {event.registrationLink && (
              <div className="mt-6">
                <Link
                  href={event.registrationLink}
                  className="inline-block text-sm px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition"
                >
                  Register Now
                </Link>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
