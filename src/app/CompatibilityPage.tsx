'use client'

/*
 * This "page" only exists because we migrated to the app router. To make our pre-app code
 * compatible, we will turn the entire app into 'use client' for now.
 *
 * TODO restructure the app to have client and server components
 */

import ContactsOverlay from '@/modules/contacts/ContactsOverlay'
import NavLinks from '@/modules/layout/NavLinks'
import { useRef, useState } from 'react'
import { useScroll } from 'react-use'
import NavbarLayout from '@/modules/layout/NavbarLayout'
import { SectionWrapper } from '@/modules/section/SectionWrapper'
import HomeSectionMain from '@/modules/section/HomeSectionMain'
import HomeSectionSkills from '@/modules/section/HomeSectionSkills'
import HomeSectionPortfolio from '@/modules/section/HomeSectionPortfolio'
import { Section } from '@/modules/layout/section.enum'
import manifest from 'package.json'

const NAVBAR_HEIGHT = 54

function Sections(props: { onVisibleSectionChange?: (id: string) => void }) {
  return (
    <>
      <SectionWrapper
        id={Section.HOME}
        onVisible={props.onVisibleSectionChange}
      >
        <HomeSectionMain />
      </SectionWrapper>

      <ContactsOverlay>
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
      </ContactsOverlay>
    </>
  )
}

export default function CompatibilityPage() {
  const [activeSection, setActiveSection] = useState<null | string>(null)

  const scrollRef = useRef<HTMLDivElement>(null)
  const { y } = useScroll(scrollRef)

  return (
    <div
      className="scrollbar-invisible scroll-smooth overflow-auto h-screen relative"
      /*
        * This is to compensate for the navbar potentially blocking some of the content when navigating to sections
        * via fragment links (e.g. portfolio-website.com/#some-section)
        */
      style={{ scrollPaddingTop: `${NAVBAR_HEIGHT}px` }}
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
  )
}