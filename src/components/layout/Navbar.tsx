import { NavbarSectionId } from '@/model/navbar-section-id.enum'
import classnames from 'classnames'

interface NavLink {
  section: NavbarSectionId
  label: string
}

const LINKS: NavLink[] = [
  {
    section: NavbarSectionId.HOME,
    label: 'Home',
  },
  {
    section: NavbarSectionId.EXPERIENCE,
    label: 'Experience',
  },
  {
    section: NavbarSectionId.PORTFOLIO,
    label: 'Portfolio',
  },
  {
    section: NavbarSectionId.CONTACTS,
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
          href={`#${section}`}
          key={section}
          className={classnames('text-accent', {
            'underline underline-offset-8': section == props.activeSection,
          })}
        >
          {label}
        </a>
      ))}
    </nav>
  )
}
