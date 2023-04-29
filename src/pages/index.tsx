import Head from 'next/head'
import ContactsOverlay from '@/components/contacts/ContactsOverlay'
import NavLinks from '@/components/layout/NavLinks'
import HomeContent from '@/components/section/HomeContent'
import { useRef, useState } from 'react'
import { useScroll } from 'react-use'
import { NavbarSectionId } from '@/models/navbar-section-id.enum'

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
        <NavLinks
          className="h-full w-full absolute"
          activeSection={activeSection ?? undefined}
          transparent={y <= NAVBAR_HEIGHT}
        />
      </header>
      <main className="relative overflow-hidden">
        <ContactsOverlay
          classNames="absolute w-full h-full py-5 px-8"
          hidden={activeSection === NavbarSectionId.CONTACTS}
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
