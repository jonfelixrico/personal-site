import { NavbarSectionId } from '@/models/navbar-section-id.enum'
import bindableCf from 'classnames/bind'
import styles from './Navbar.module.scss'

const classnames = bindableCf.bind(styles)

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
  transparent?: boolean
}) {
  return (
    <nav
      className={classnames(
        'flex flex-row items-center justify-end gap-4',
        'px-8',
        props.className,

        'navbar',
        { 'shadow-md': !props.transparent, transparent: props.transparent }
      )}
    >
      {LINKS.map(({ section, label }) => (
        <a
          href={`#${section}`}
          key={section}
          className={classnames('text-white font-semibold', {
            'underline underline-offset-8': section == props.activeSection,
          })}
        >
          {label}
        </a>
      ))}
    </nav>
  )
}
