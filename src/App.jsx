import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ApartmentsSection from './components/ApartmentsSection'
import AmenitiesSection from './components/AmenitiesSection'
import DifferentialsSection from './components/DifferentialsSection'
import LocationSection from './components/LocationSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ApartmentsSection />
        <AmenitiesSection />
        <DifferentialsSection />
        <LocationSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

export default App
