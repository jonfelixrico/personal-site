import Link from 'next/link'
import styles from '@/styles/Navbar.module.scss'
import cnFactory from 'classnames/bind'
import { useRouter } from 'next/router'

const classnames = cnFactory.bind(styles)

function NavLink(props: { href: string; name: string }) {
  const router = useRouter()
  const isActive = router.asPath === props.href

  return (
    <Link href={props.href}>
      <div
        className={classnames('text-accent', {
          'underline underline-offset-8': isActive,
        })}
      >
        {props.name}
      </div>
    </Link>
  )
}

export default function Navbar() {
  return (
    <nav
      className={classnames(
        'flex flex-row items-center justify-end gap-5',
        styles.navbar
      )}
    >
      <NavLink href="/" name="Home" />
      <NavLink href="/#section-experience" name="Experience" />
      <NavLink href="/#section-portfolio" name="Portfolio" />
      <NavLink href="/#section-contacts" name="Contacts" />
    </nav>
  )
}
