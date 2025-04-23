import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Projects from "@/components/events"
import Team from "@/components/Team"
import EventsPage from "@/components/EventsPage"
import ContactSponsorPage from "@/components/SponsorPage"
// import StudentRegistrationPage from "@/components/StudentRegistrationPage";
import Footer from "@/components/Footer"
// import BackgroundCanvas from "@/components/BackgroundCanvas";
import AnimatedBackground from "@/components/AnimatedBackground"; 


export default function Home() {
   
  return ( 
    <>
    <AnimatedBackground/>
       {/* <BackgroundCanvas/> */}
      <Header />
      <Hero />
      <About />
      <Projects />
      <EventsPage/>
      <Team />
      {/* < StudentRegistrationPage /> */}
      < ContactSponsorPage/>
      <Footer/>
    </>
  )
}
