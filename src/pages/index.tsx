import HomeSectionAboutMe from '@/components/home/HomeSectionAboutMe'
import HomeSectionContacts from '@/components/home/HomeSectionContacts'
import HomeSectionExperience from '@/components/home/HomeSectionExperience'
import HomeSectionMain from '@/components/home/HomeSectionMain'

export default function Home() {
  return (
    <main className="snap-y snap-mandatory overflow-y-auto h-screen">
      <div className="mx-auto max-w-screen-lg snap-always snap-start">
        <HomeSectionMain />
      </div>
      <div className="mx-auto max-w-screen-lg snap-always snap-start">
        <HomeSectionAboutMe />
      </div>
      <div className="mx-auto max-w-screen-lg snap-always snap-start">
        <HomeSectionExperience />
      </div>
      <div className="mx-auto max-w-screen-lg snap-always snap-start">
        <HomeSectionContacts />
      </div>
    </main>
  )
}
