"use client"

import { motion } from "framer-motion";
import Link from "next/link";

const events = [
  {
    id: 1,
    title: "Industry Connect Webinar",
    date: "May 10, 2025",
    time: "3:00 PM – 5:00 PM",
    location: "Online (Zoom)",
    description:
      "Join us for an insightful webinar with industry professionals from top tech companies. Learn about the latest trends in the IT sector and gain valuable tips on career progression and skill development.",
    registrationLink: "#",
  },
  {
    id: 2,
    title: "Mock Interview Sessions",
    date: "May 15, 2025",
    time: "10:00 AM – 4:00 PM",
    location: "MAIT Campus (Room 203, Building B)",
    description:
      "ElevatHub is hosting mock interview sessions with industry experts to help students gain real-world interview experience. Get personalized feedback to boost your confidence and prepare for placements.",
    registrationLink: "#",
  },
  // {
  //   id: 3,
  //   title: "Resume Building & Career Guidance Workshop",
  //   date: "May 20, 2025",
  //   time: "11:00 AM – 1:00 PM",
  //   location: "MAIT Campus (Auditorium)",
  //   description:
  //     "Learn how to craft a standout resume and gain insights into career development strategies. This workshop will cover everything from resume formatting to interview tips.",
  //   registrationLink: "#",
  // },
  // {
  //   id: 4,
  //   title: "ElevatHub Orientation 2025",
  //   date: "March 22, 2025",
  //   time: "9:00 AM – 12:00 PM",
  //   location: "MAIT Campus (Hall 1)",
  //   description:
  //     "Our successful launch event introduced new members to ElevatHub’s mission, vision, and upcoming initiatives. The event featured networking opportunities, industry talks, and interactive sessions with mentors.",
  //   photosLink: "#",
  // },
];

export default function EventsPage() {
  return (
    <div className="py-20 container">
      <h1 className="text-4xl font-bold text-center mb-12">Upcoming Events</h1>
      <div className="grid md:grid-cols-2 gap-12">
        {events.map((event) => (
          <motion.div
            key={event.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white shadow-lg rounded-xl p-6"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            <h3 className="text-3xl font-bold text-zinc-800">{event.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{event.date}</p>
            <p className="text-sm text-gray-600 mb-4">{event.time}</p>
            <p className="text-lg text-gray-600 mb-4">{event.location}</p>
            <p className="text-gray-700 mb-6">{event.description}</p>
          </motion.div>

        ))}
      </div>
    </div>
  );
}
