import Link from 'next/link'
import styles from '@/styles/Navbar.module.scss'
import cnFactory from 'classnames/bind'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'

const classNames = cnFactory.bind(styles)

function NavLink(props: { href: string; children: ReactNode }) {
  const router = useRouter()
  const isActive = router.asPath === props.href

  return (
    <Link
      href={props.href}
      className={classNames('navlink', { active: isActive })}
    >
      {props.children}
    </Link>
  )
}

export default function Navbar() {
  return (
    <nav
      className={classNames(
        'flex flex-row items-center justify-end gap-5',
        styles.navbar
      )}
    >
      <NavLink href="/">Home</NavLink>
      <NavLink href="/portfolio">Portfolio</NavLink>
    </nav>
  )
}
