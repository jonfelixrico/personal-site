import HomeSectionAboutMe from '@/components/home/HomeSectionAboutMe'
import HomeSectionContacts from '@/components/home/HomeSectionContacts'
import HomeSectionExperience from '@/components/home/HomeSectionExperience'
import HomeSectionMain from '@/components/home/HomeSectionMain'

export default function Home() {
  return (
    <main>
      <div className="mx-auto max-w-screen-lg px-5">
        <div className="border-b">
          <HomeSectionMain />
        </div>

        <div className="border-b">
          <HomeSectionAboutMe />
        </div>

        <div className="border-b">
          <HomeSectionExperience />
        </div>

        <div className="border-b">
          <HomeSectionContacts />
        </div>
      </div>
    </main>
  )
}
