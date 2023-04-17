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

function NavLink({ section, label }: NavLinkData & { isActive?: boolean }) {
  return (
    <div className={classnames('nav-link relative')}>
      <div className={classnames('indicator-container')}>
        <div className={classnames('indicator')} />
      </div>
      <a href={`#${section}`} key={section}>
        {label}
      </a>
    </div>
  )
}

export default function Navbar(props: {
  className?: string
  activeSection?: string
  transparent?: boolean
  retracted?: boolean
}) {
  return (
    <nav
      className={classnames(
        'flex flex-row items-center gap-4',
        'justify-between sm:justify-end',
        'px-8',
        props.className,

        'nav-bar',
        { transparent: props.transparent, retracted: props.retracted }
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
