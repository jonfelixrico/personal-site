import Link from 'next/link'
import styles from '@/styles/Navbar.module.scss'
import cnFactory from 'classnames/bind'

const classNames = cnFactory.bind(styles)

export default function Navbar() {
  return (
    <div
      className={classNames(
        'flex flex-row items-center justify-end gap-5 p-2',
        styles.navbar
      )}
    >
      <Link href="/">Home</Link>
      <Link href="/portfolio">Portfolio</Link>
    </div>
  )
}
