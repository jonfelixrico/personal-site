import { NavbarSectionId } from '@/models/navbar-section-id.enum'
import bindableCf from 'classnames/bind'
import styles from './NavLinks.module.scss'

const classnames = bindableCf.bind(styles)

interface NavLinkData {
  section: NavbarSectionId
  label: string
}

const LINKS: NavLinkData[] = [
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

function NavLink({
  section,
  label,
  isActive,
}: NavLinkData & { isActive?: boolean }) {
  return (
    <a
      href={`#${section}`}
      className={classnames(styles['nav-link'], {
        active: isActive,
      })}
    >
      {label}
    </a>
  )
}

export default function NavLinks(props: {
  className?: string
  activeSection?: string
}) {
  return (
    <nav
      className={classnames(
        'flex flex-row items-center gap-4',
        'justify-between sm:justify-end',
        'px-8'
      )}
    >
      {LINKS.map(({ section, label }) => (
        <NavLink
          section={section}
          label={label}
          isActive={section === props.activeSection}
          key={section}
        />
      ))}
    </nav>
  )
}
