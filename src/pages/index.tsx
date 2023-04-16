import Head from 'next/head'
import ContactsOverlay from '@/components/contacts/ContactsOverlay'
import Navbar from '@/components/layout/Navbar'
import HomeContent from '@/components/section/HomeContent'
import { useState } from 'react'

export default function Home() {
  const [activeSection, setActiveSection] = useState<null | string>(null)

  return (
    <>
      <Head>
        <title>Jon Felix Rico • Home</title>
      </Head>

      <header className="h-16 fixed w-screen z-10">
        <Navbar
          className="h-full w-full"
          activeSection={activeSection ?? undefined}
        />
      </header>
      <main className="relative">
        <ContactsOverlay classNames="absolute w-full h-full py-5 px-8" />
        <HomeContent
          className="h-screen overflow-auto scroll-smooth scrollbar-invisible"
          onVisibleSectionChange={setActiveSection}
        />
      </main>
    </>
  )
}
