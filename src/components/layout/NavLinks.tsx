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
    <>
      {LINKS.map(({ section, label }) => (
        <NavLink
          section={section}
          label={label}
          isActive={section === props.activeSection}
          key={section}
        />
      ))}
    </>
  )
}
