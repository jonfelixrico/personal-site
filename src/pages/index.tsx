import HomeSectionAboutMe from '@/components/home/HomeSectionAboutMe'
import HomeSectionContacts from '@/components/home/HomeSectionContacts'
import HomeSectionExperience from '@/components/home/HomeSectionExperience'
import HomeSectionMain from '@/components/home/HomeSectionMain'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Jon Felix Rico | Home</title>
      </Head>

      <main className="snap-y snap-mandatory overflow-y-auto h-screen">
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
      </main>
    </>
  )
}
