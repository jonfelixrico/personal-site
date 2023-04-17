import Head from 'next/head'
import ContactsOverlay from '@/components/contacts/ContactsOverlay'
import Navbar from '@/components/layout/Navbar'
import HomeContent from '@/components/section/HomeContent'
import { useEffect, useRef, useState } from 'react'
import { useScroll, useWindowSize } from 'react-use'

const NAVBAR_HEIGHT = 54

export default function Home() {
  const [activeSection, setActiveSection] = useState<null | string>(null)

  const scrollRef = useRef<HTMLDivElement>(null)
  const { y } = useScroll(scrollRef)

  const [history, setHistory] = useState([0, 0])
  useEffect(() => {
    setHistory((state) => {
      return [state[1], y]
    })
  }, [y, setHistory])

  const { height } = useWindowSize()

  const isGoingDown = history[1] > history[0]

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
          retracted={isGoingDown && y > height / 3}
        />
      </header>
      <main className="relative">
        <ContactsOverlay classNames="absolute w-full h-full py-5 px-8" />
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
