import { AboutMeSection } from '@/components/about-me-section'
import { ContactsSection } from '@/components/contacts-section'
import { ExperienceSection } from '@/components/experience-section'
import { HomeSection } from '@/components/home-section'
import { ShowcaseSection } from '@/components/showcase-section'

export default function Home() {
  return (
    <main>
      <div className="mx-auto max-w-screen-lg px-5">
        <div className="border-b">
          <HomeSection />
        </div>

        <div className="border-b">
          <AboutMeSection />
        </div>

        <div className="border-b">
          <ExperienceSection />
        </div>

        <div className="border-b">
          <ShowcaseSection />
        </div>

        <div className="border-b">
          <ContactsSection />
        </div>
      </div>
    </main>
  )
}
