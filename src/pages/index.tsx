import Head from 'next/head'
import ContactsOverlay from '@/components/contacts/ContactsOverlay'
import Navbar from '@/components/layout/Navbar'
import HomeContent from '@/components/section/HomeContent'
import { useRef, useState } from 'react'
import { useWindowSize } from 'react-use'
import { useScrollYWithDirection } from '@/hooks/useScrollYWithDirection'
import { NavbarSectionId } from '@/models/navbar-section-id.enum'

const NAVBAR_HEIGHT = 54

export default function Home() {
  const [activeSection, setActiveSection] = useState<null | string>(null)

  const scrollRef = useRef<HTMLDivElement>(null)
  const { y, direction } = useScrollYWithDirection(scrollRef)

  const { height } = useWindowSize()

  return (
    <>
      <Head>
        <title>Jon Felix Rico • Home</title>
      </Head>

      <header
        className="fixed w-screen z-10"
        style={{ height: `${NAVBAR_HEIGHT}px` }}
      >
        <Navbar
          className="h-full w-full absolute"
          activeSection={activeSection ?? undefined}
          transparent={y <= NAVBAR_HEIGHT}
          retracted={direction === 'down' && y > height / 3}
        />
      </header>
      <main className="relative">
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
