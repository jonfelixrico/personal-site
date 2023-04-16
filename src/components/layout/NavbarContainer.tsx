import { ReactNode } from 'react'
import ScrollSpy from 'react-ui-scrollspy'

export enum NavbarSectionIds {
  HOME = 'section-home',
  EXPERIENCE = 'section-experience',
  PORTFOLIO = 'section-portfolio',
  CONTACTS = 'section-contacts',
}

interface NavLink {
  section: keyof typeof NavbarSectionIds
  label: string
}

const LINKS: NavLink[] = [
  {
    section: 'HOME',
    label: 'Home',
  },
  {
    section: 'EXPERIENCE',
    label: 'Experience',
  },
  {
    section: 'PORTFOLIO',
    label: 'Portfolio',
  },
  {
    section: 'CONTACTS',
    label: 'Contacts',
  },
]

export default function NavbarContainer(props: {
  children?: ReactNode
  mainClassName?: string
}) {
  return (
    <div>
      <header>
        <nav
          className="flex flex-row items-center justify-end gap-5
          h-12 fixed w-screen px-8 z-10"
        >
          {LINKS.map(({ section, label }) => (
            <a
              href={`#${NavbarSectionIds[section]}`}
              data-to-scrollspy-id={NavbarSectionIds[section]}
              key={section}
            >
              {label}
            </a>
          ))}
        </nav>
      </header>
      <main className={props.mainClassName}>
        <ScrollSpy useBoxMethod>{props.children}</ScrollSpy>
      </main>
    </div>
  )
}
