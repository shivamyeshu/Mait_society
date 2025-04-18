import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Projects from "@/components/events"
import Team from "@/components/Team"
import EventsPage from "@/components/EventsPage"
import ContactSponsorPage from "@/components/SponsorPage"
import StudentRegistrationPage from "@/components/StudentRegistrationPage";
import Footer from "@/components/Footer"

export default function Home() {
  if (typeof window !== "undefined") {
  console.log(
    "%cDeveloped by Shivam Kumar \n%chttps://github.com/shivamyeshu \n%chttps://www.linkedin.com/in/shivam-yeshu/",
    "color: #fff; background: #111; font-size: 16px; padding: 8px; font-weight: bold;",
    "color: #007acc; font-size: 14px;"
  );
}
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <EventsPage/>
      <Team />
      < StudentRegistrationPage />
      < ContactSponsorPage/>
      <Footer/>
    </>
  )
}
