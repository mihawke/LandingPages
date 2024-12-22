import BlogSection from "./components/BlogSection"
import DiscoverSection from "./components/DiscoverSection"
import FAQSection from "./components/FAQSection"
import Footer from "./components/Footer"
import MapSection from "./components/MapSection"
import { Navbar } from "./components/Navbar"
import PersonalizeSection from "./components/PersonalizeSection"
import SectionOne from "./components/SectionOne"
import SectionTwo from "./components/SectionTwo"
import ServiceSection from "./components/ServiceSection"
import Testimonials from "./components/Testimonials"
import VideoPlayer from "./components/VideoPlayer"

const GymFluencer = () => {
  return (
    <div className='flex flex-1 flex-col'>
      <Navbar />
      <SectionOne />
      <SectionTwo />
      <VideoPlayer />
      <ServiceSection/>
      <DiscoverSection/>
      <PersonalizeSection/>
      <Testimonials/>
      <MapSection/>
      <BlogSection/>
      <FAQSection/>
      <Footer/>
    </div>
  )
}

export default GymFluencer