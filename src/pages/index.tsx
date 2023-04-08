import HomeSectionAboutMe from '@/components/home/HomeSectionAboutMe'
import HomeSectionContacts from '@/components/home/HomeSectionContacts'
import HomeSectionExperience from '@/components/home/HomeSectionExperience'
import HomeSectionMain from '@/components/home/HomeSectionMain'

export default function Home() {
  return (
    <main>
      <div className="mx-auto max-w-screen-lg">
        <HomeSectionMain />
        <HomeSectionAboutMe />
        <HomeSectionExperience />
        <HomeSectionContacts />
      </div>
    </main>
  )
}
