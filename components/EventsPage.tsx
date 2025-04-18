"use client"

import { motion } from "framer-motion";
import Link from "next/link";
import { fadeIn, staggerContainer } from "@/lib/animations";


const events = [
  {
    id: 1,
    title: "event name will be disclose soon please wait ...",
    date: "date",
    time: "time ",
    location: "location ",
    description:
      "description: ",
    registrationLink: "registration link",
  },  
  {
    id:2,
    title: "event name will be disclose soon please wait ...",
    date: "date",
    time: "time ",
    location: "location ",
    description:
      "description: ",
    registrationLink: "registration link",
  },

];

export default function EventsPage() {
  return (
    <section id="events" className="py-20 bg-muted/50" style={{ backgroundColor: 'var(--secondary-bg-color)', color: 'var(--secondary-text-color)' }}>
  <h2 className="text-3xl font-bold mb-4 text-center" style={{ color: 'var(--primary-text-color)' }}>Upcomming Events</h2>
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 ml-7 mr-7">
    {events.map((event) => (
      <motion.div
        key={event.id}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
        className="p-6 overflow-hidden h-full flex flex-col group dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg"

        style={{ backgroundColor: 'var(--primary-bg-color)', color: 'var(--primary-text-color)' }}
      >
        <h3 className="text-lg font-bold mb-1">{event.title}</h3>
        <p className="text-sm mb-4">{event.date}</p>
        <p className="text-sm mb-4">{event.time}</p>
        <p className="text-lg mb-4">{event.location}</p>
        <p className="text-sm mb-6  text-gray-400">{event.description}</p>
        <Link href={event.registrationLink} className="text-blue-500 hover:text-blue-700">Register Now</Link>
      </motion.div>
    ))}
  </div>
</section>
  );
}
