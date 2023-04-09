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
        <section className="snap-normal snap-start border-b">
          <div className="mx-auto max-w-screen-lg ">
            <HomeSectionMain />
          </div>
        </section>
        <section className="snap-normal snap-start border-b">
          <div className="mx-auto max-w-screen-lg ">
            <HomeSectionExperience />
          </div>
        </section>
        <section className="snap-normal snap-start">
          <div className="mx-auto max-w-screen-lg ">
            <HomeSectionContacts />
          </div>
        </section>
      </div>
    </>
  )
}
