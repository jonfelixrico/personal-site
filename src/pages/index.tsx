import HomeSectionContacts from '@/components/home-section/HomeSectionContacts'
import HomeSectionExperience from '@/components/home-section/experience/HomeSectionExperience'
import HomeSectionMain from '@/components/home-section/HomeSectionMain'
import Head from 'next/head'
import HomeSectionPortfolio from '@/components/home-section/HomeSectionPortfolio'
import ContactsOverlay from '@/components/contacts/ContactsOverlay'
import NavbarContainer, {
  NavbarSectionIds,
} from '@/components/layout/NavbarContainer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Jon Felix Rico • Home</title>
      </Head>

      <NavbarContainer>
        {/* TODO return this */}
        {/* <ContactsOverlay classNames="absolute w-full h-full py-5 px-8" /> */}

        <section id={NavbarSectionIds.HOME}>
          <HomeSectionMain />
        </section>

        <section id={NavbarSectionIds.EXPERIENCE}>
          <HomeSectionExperience />
        </section>

        <section id={NavbarSectionIds.PORTFOLIO}>
          <HomeSectionPortfolio />
        </section>

        <section id={NavbarSectionIds.CONTACTS}>
          <HomeSectionContacts className="mx-auto max-w-screen-lg min-h-screen section-px" />
        </section>
      </NavbarContainer>
    </>
  )
}
