import { SectionAboutMe } from '@/components/sections/SectionAboutMe'
import { SectionContacts } from '@/components/sections/SectionContacts'
import { SectionExperience } from '@/components/sections/SectionExperience'
import { SectionHome } from '@/components/sections/SectionHome'
import { SectionShowcase } from '@/components/sections/SectionShowcase'

export default function Home() {
  return (
    <main>
      <div className="mx-auto max-w-screen-lg px-5">
        <div className="border-b">
          <SectionHome />
        </div>

        <div className="border-b">
          <SectionAboutMe />
        </div>

        <div className="border-b">
          <SectionExperience />
        </div>

        <div className="border-b">
          <SectionShowcase />
        </div>

        <div className="border-b">
          <SectionContacts />
        </div>
      </div>
    </main>
  )
}
