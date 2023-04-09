import HomeSectionAboutMe from '@/components/home-section/HomeSectionAboutMe'
import HomeSectionContacts from '@/components/home-section/HomeSectionContacts'
import HomeSectionExperience from '@/components/home-section/HomeSectionExperience'
import HomeSectionMain from '@/components/home-section/HomeSectionMain'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Jon Felix Rico • Home</title>
      </Head>

      <div className="snap-y snap-mandatory overflow-y-auto h-screen">
        <section className="mx-auto max-w-screen-lg snap-always snap-start">
          <HomeSectionMain />
        </section>
        <section className="mx-auto max-w-screen-lg snap-always snap-start">
          <HomeSectionAboutMe />
        </section>
        <section className="mx-auto max-w-screen-lg snap-always snap-start">
          <HomeSectionExperience />
        </section>
        <section className="mx-auto max-w-screen-lg snap-always snap-start">
          <HomeSectionContacts />
        </section>
      </div>
    </>
  )
}
