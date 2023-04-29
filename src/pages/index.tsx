import Head from 'next/head'
import ContactsOverlay from '@/components/contacts/ContactsOverlay'
import NavLinks from '@/components/layout/NavLinks'
import HomeContent from '@/components/section/HomeContent'
import { useRef, useState } from 'react'
import { useScroll } from 'react-use'
import { Section } from '@/models/section.enum'
import NavbarLayout from '@/components/layout/NavbarLayout'

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
        <ContactsOverlay
          classNames="absolute w-full h-full py-5 px-8"
          hidden={activeSection === Section.CONTACTS}
        />
        <div
          className="h-screen overflow-auto scroll-smooth scrollbar-invisible"
          ref={scrollRef}
        >
          <HomeContent onVisibleSectionChange={setActiveSection} />
        </div>
      </main>
    </>
  )
}
