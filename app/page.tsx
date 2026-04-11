import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import CategoriesSection from '../components/CategoriesSection'
import ContentSection from '../components/ContentSection'
import CTASection from '../components/CTASection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="w-full bg-black">
      <HeroSection />
      <AboutSection />
      <CategoriesSection />
      <ContentSection />
      <CTASection />
      <Footer />
    </main>
  )
}
