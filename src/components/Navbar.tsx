import Link from 'next/link'
import { useRouter } from 'next/router'
import classnames from 'classnames'

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
    <nav className="flex flex-row items-center justify-end gap-5 h-12">
      <NavLink href="/" name="Home" />
      <NavLink href="/#section-experience" name="Experience" />
      <NavLink href="/#section-portfolio" name="Portfolio" />
      <NavLink href="/#section-contacts" name="Contacts" />
    </nav>
  )
}
