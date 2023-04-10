import Link from 'next/link'
import styles from '@/styles/Navbar.module.scss'
import cnFactory from 'classnames/bind'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import FakeElement from './fake-code/FakeElement'

const classnames = cnFactory.bind(styles)

function NavLink(props: { href: string; name: string }) {
  const router = useRouter()

  if (router.asPath !== props.href) {
    return (
      <Link href={props.href} className="font-semibold text-accent">
        <FakeElement name={props.name} />
      </Link>
    )
  }

  return (
    <Link href={props.href} className="font-semibold text-accent">
      <FakeElement
        name={
          <span>
            {props.name} <span className="text-accent-2">active</span>
          </span>
        }
      />
    </Link>
  )
}

export default function Navbar() {
  return (
    <nav
      className={classnames(
        'flex flex-row items-center justify-end gap-5 font-mono',
        styles.navbar
      )}
    >
      <NavLink href="/" name="home" />
      <NavLink href="/portfolio" name="portfolio" />
    </nav>
  )
}
