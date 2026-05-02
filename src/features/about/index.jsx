import Sidebar from '../../components/Sidebar'
import AboutSection from './AboutSection'
import SkillsGrid from './SkillsGrid'
import ContactForm from './ContactForm'

export default function AboutPage() {
  return (
    <div className="flex pt-20 min-h-screen">
      <Sidebar />
      <main className="flex-1 py-12 px-6 md:px-12">
        <AboutSection />
        <SkillsGrid />
        <ContactForm />
      </main>
    </div>
  )
}
