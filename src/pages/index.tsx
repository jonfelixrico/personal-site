import HomeSectionContacts from '@/components/home-section/HomeSectionContacts'
import HomeSectionExperience from '@/components/home-section/experience/HomeSectionExperience'
import HomeSectionMain from '@/components/home-section/HomeSectionMain'
import Head from 'next/head'
import HomeSectionPortfolio from '@/components/home-section/HomeSectionPortfolio'
import ContactsOverlay from '@/components/contacts/ContactsOverlay'
import Navbar from '@/components/layout/Navbar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Jon Felix Rico • Home</title>
      </Head>

      <div>
        <header className="h-12 fixed w-screen px-8 z-10">
          <Navbar className="h-full w-full" />
        </header>
        <main className="relative">
          <ContactsOverlay classNames="absolute w-full h-full py-5 px-8" />

          <div className="h-screen overflow-auto">
            <section id="section-main">
              <HomeSectionMain />
            </section>

            <section id="section-experience">
              <HomeSectionExperience />
            </section>

            <section id="section-portfolio">
              <HomeSectionPortfolio />
            </section>

            <section id="section-contacts">
              <HomeSectionContacts className="mx-auto max-w-screen-lg min-h-screen section-px" />
            </section>
          </div>
        </main>
      </div>
    </>
  )
}
