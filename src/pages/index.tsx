import { ContactsSection } from '@/components/contacts-section'
import { ExperienceSection } from '@/components/experience-section'
import { HomeSection } from '@/components/home-section'
import { ShowcaseSection } from '@/components/showcase-section'

export default function Home() {
  return (
    <main className="bg-gray-500">
      <div className="mx-auto bg-white" style={{ maxWidth: '1200px' }}>
        <HomeSection />
        <ExperienceSection />
        <ShowcaseSection />
        <ContactsSection />
      </div>
    </main>
  )
}
