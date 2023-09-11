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
import { Section } from '@/types/section.enum'
import manifest from 'package.json'

function Sections(props: { onVisibleSectionChange?: (id: string) => void }) {
  return (
    <>
      <div className="relative">
        <div className="absolute h-full w-full">
          <ContactsOverlay classNames="sticky h-screen w-screen py-5 px-8 top-0 pointer-events-none" />
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
        <footer className="p-2 flex flex-col items-center text-sm">
          <div>v{manifest.version}</div>
          <a
            href="https://github.com/jonfelixrico/personal-site"
            target="_blank"
          >
            Built by <span className="font-semibold">Jon Felix Rico</span>
          </a>
          {/* For compliance with Icons8 */}
          <a href="https://icons8.com" target="_blank">
            Icons from <span className="font-semibold">Icons8</span>
          </a>
        </footer>
      </div>
    </>
  )
}
