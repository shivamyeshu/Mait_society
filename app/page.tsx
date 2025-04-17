import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Projects from "@/components/events"
import Team from "@/components/Team"
import EventsPage from "@/components/EventsPage"
import ContactSponsorPage from "@/components/SponsorPage"
// import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <EventsPage/>
      <Team />
      < ContactSponsorPage/>
      {/* <Footer/> */}

    </>
  )
}
