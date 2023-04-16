import { NavbarSectionId } from '@/model/navbar-section-id.enum'
import classnames from 'classnames'

interface NavLink {
  section: keyof typeof NavbarSectionId
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

export default function Navbar(props: {
  className?: string
  activeSection?: string
}) {
  return (
    <nav
      className={classnames(
        'flex flex-row items-center justify-end gap-4',
        props.className
      )}
    >
      {LINKS.map(({ section, label }) => (
        <a
          href={`#${NavbarSectionId[section]}`}
          key={section}
          className={classnames('text-accent', {
            'underline underline-offset-8':
              NavbarSectionId[section] == props.activeSection,
          })}
        >
          {label}
        </a>
      ))}
    </nav>
  )
}
