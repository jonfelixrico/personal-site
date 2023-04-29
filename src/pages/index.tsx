import Head from 'next/head'
import ContactsOverlay from '@/components/contacts/ContactsOverlay'
import NavLinks from '@/components/layout/NavLinks'
import { useRef, useState } from 'react'
import { useScroll } from 'react-use'
import NavbarLayout from '@/components/layout/NavbarLayout'
import { SectionWrapper } from '@/components/section/SectionWrapper'
import HomeSectionMain from '@/components/section/HomeSectionMain'
import HomeSectionSkills from '@/components/section/HomeSectionSkills'
import HomeSectionPortfolio from '@/components/section/HomeSectionPortfolio'
import ContactsSection from '@/components/contacts/ContactsSection'
import { Section } from '@/models/section.enum'

function Sections(props: { onVisibleSectionChange?: (id: string) => void }) {
  return (
    <>
      <SectionWrapper
        id={Section.HOME}
        onVisible={props.onVisibleSectionChange}
      >
        <HomeSectionMain />
      </SectionWrapper>

      <SectionWrapper
        id={Section.SKILLS}
        onVisible={props.onVisibleSectionChange}
      >
        <HomeSectionSkills />
      </SectionWrapper>

      <SectionWrapper
        id={Section.PORTFOLIO}
        onVisible={props.onVisibleSectionChange}
      >
        <HomeSectionPortfolio />
      </SectionWrapper>

      <SectionWrapper
        id={Section.CONTACTS}
        onVisible={props.onVisibleSectionChange}
      >
        <ContactsSection />
      </SectionWrapper>
    </>
  )
}

const NAVBAR_HEIGHT = 54

export default function Home() {
  const [activeSection, setActiveSection] = useState<null | string>(null)

  const scrollRef = useRef<HTMLDivElement>(null)
  const { y } = useScroll(scrollRef)

  return (
    <>
      <Head>
        <title>Jon Felix Rico • Home</title>
      </Head>

      <div>
        <header
          className="fixed w-screen z-10"
          style={{ height: `${NAVBAR_HEIGHT}px` }}
        >
          <NavbarLayout
            transparent={y <= NAVBAR_HEIGHT}
            className="h-full w-full absolute flex flex-row items-center gap-4 justify-between sm:justify-end px-8"
          >
            <NavLinks activeSection={activeSection ?? undefined} />
          </NavbarLayout>
        </header>
        <main className="relative overflow-hidden">
          <ContactsOverlay classNames="absolute w-full h-full py-5 px-8" />
          <div
            className="h-screen overflow-auto scroll-smooth scrollbar-invisible"
            ref={scrollRef}
          >
            <Sections onVisibleSectionChange={setActiveSection} />
          </div>
        </main>
      </div>
    </>
  )
}
