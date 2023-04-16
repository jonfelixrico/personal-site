import classnames from 'classnames'

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

export default function Navbar(props: { className?: string }) {
  return (
    <nav
      className={classnames(
        'flex flex-row items-center justify-end gap-50',
        props.className
      )}
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
  )
}
