import HomeSectionContacts from '@/components/home-section/HomeSectionContacts'
import HomeSectionExperience from '@/components/home-section/experience/HomeSectionExperience'
import HomeSectionMain from '@/components/home-section/HomeSectionMain'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Jon Felix Rico • Home</title>
      </Head>

      <div className="snap-y snap-proximity overflow-y-auto h-screen">
        <section className="snap-always snap-start h-screen">
          <HomeSectionMain className="h-full mx-auto max-w-screen-lg" />
        </section>

        <div className="snap-always snap-start">
          <section>
            <HomeSectionExperience className="mx-auto max-w-screen-lg min-h-screen" />
          </section>
          <section>
            <HomeSectionContacts className="mx-auto max-w-screen-lg min-h-screen" />
          </section>
        </div>
      </div>
    </>
  )
}
