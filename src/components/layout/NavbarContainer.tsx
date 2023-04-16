import { ReactNode } from 'react'
import ScrollSpy from 'react-ui-scrollspy'

export enum NavbarSectionIds {
  HOME = 'section-home',
  EXPERIENCE = 'section-experience',
  PORTFOLIO = 'section-portfolio',
  CONTACTS = 'section-contacts',
}

export default function NavbarContainer(props: {
  children?: ReactNode
  mainClassName?: string
}) {
  return (
    <div>
      <header>
        <nav className="'flex flex-row items-center justify-end gap-5">
          <a href={`#${NavbarSectionIds.HOME}`}>Home</a>
          <a href={`#${NavbarSectionIds.EXPERIENCE}`}>Experience</a>
          <a href={`#${NavbarSectionIds.PORTFOLIO}`}>Portfolio</a>
          <a href={`#${NavbarSectionIds.CONTACTS}`}>Contacts</a>
        </nav>
      </header>
      <main className={props.mainClassName}>
        <ScrollSpy>{props.children}</ScrollSpy>
      </main>
    </div>
  )
}
