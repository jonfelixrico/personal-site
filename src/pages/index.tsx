import SectionAboutMe from '@/components/home/SectionAboutMe'
import SectionContacts from '@/components/home/SectionContacts'
import SectionExperience from '@/components/home/SectionExperience'
import SectionHome from '@/components/home/SectionHome'
import SectionShowcase from '@/components/home/SectionShowcase'

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
