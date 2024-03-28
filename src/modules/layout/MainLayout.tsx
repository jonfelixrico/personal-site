'use client'

import NavLinks from '@/modules/layout/NavLinks'
import { ReactNode, useRef } from 'react'
import { useScroll } from 'react-use'
import NavbarLayout from '@/modules/layout/NavbarLayout'
import manifest from 'package.json'
import { useActiveSection } from './ActiveSectionContext'

const NAVBAR_HEIGHT = 54

export default function MainLayout({ children }: { children: ReactNode }) {
  const [activeSection] = useActiveSection()

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
          <NavLinks activeSection={activeSection} />
        </NavbarLayout>
      </header>

      <main>{children}</main>

      <footer className="p-2 flex flex-col items-center text-sm">
        <div>v{manifest.version}</div>
        <a href="https://github.com/jonfelixrico/personal-site" target="_blank">
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
