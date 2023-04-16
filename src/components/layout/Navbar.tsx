import { NavbarSectionId } from '@/models/navbar-section-id.enum'
import bindableCf from 'classnames/bind'
import styles from './Navbar.module.scss'

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
      key={section}
      className={classnames('nav-link', {
        active: isActive,
      })}
    >
      {label}
    </a>
  )
}

export default function Navbar(props: {
  className?: string
  activeSection?: string
  transparent?: boolean
}) {
  return (
    <nav
      className={classnames(
        'flex flex-row items-center justify-end gap-4',
        'px-8',
        props.className,

        'nav-bar',
        { transparent: props.transparent }
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
