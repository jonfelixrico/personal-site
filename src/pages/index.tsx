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
      <div className="relative">
        <div className="absolute h-full w-full">
          <ContactsOverlay classNames="sticky h-screen w-screen py-5 px-8 top-0" />
        </div>

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
      </div>

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

      <div
        className="scrollbar-invisible scroll-smooth overflow-auto h-screen relative"
        ref={scrollRef}
      >
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
        <main>
          <Sections onVisibleSectionChange={setActiveSection} />
        </main>
      </div>
    </>
  )
}
