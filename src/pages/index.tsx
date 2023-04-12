import HomeSectionContacts from '@/components/home-section/HomeSectionContacts'
import HomeSectionExperience from '@/components/home-section/experience/HomeSectionExperience'
import HomeSectionMain from '@/components/home-section/HomeSectionMain'
import Head from 'next/head'
import HomeSectionPortfolio from '@/components/home-section/HomeSectionPortfolio'
import ContactsOverlay from '@/components/contacts/ContactsOverlay'

export default function Home() {
  return (
    <>
      <Head>
        <title>Jon Felix Rico • Home</title>
      </Head>

      <div className="relative">
        <ContactsOverlay classNames="absolute w-full h-full py-5 px-8" />

        <div className="h-screen overflow-auto">
          <section
            className="snap-always snap-start h-screen bg-card"
            id="section-main"
          >
            <HomeSectionMain className="h-full mx-auto max-w-screen-lg" />
          </section>

          <section id="section-experience">
            <HomeSectionExperience className="mx-auto max-w-screen-lg min-h-screen" />
          </section>

          <section id="section-portfolio">
            <HomeSectionPortfolio className="mx-auto max-w-screen-lg min-h-screen" />
          </section>

          <section id="section-contacts">
            <HomeSectionContacts className="mx-auto max-w-screen-lg min-h-screen" />
          </section>
        </div>
      </div>
    </>
  )
}
