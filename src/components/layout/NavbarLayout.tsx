import bindableCf from 'classnames/bind'
import styles from './NavbarLayout.module.scss'
import { ReactNode } from 'react'

const classnames = bindableCf.bind(styles)

export default function NavbarLayout(props: {
  className?: string
  activeSection?: string
  transparent?: boolean
  children?: ReactNode
}) {
  return (
    <nav
      className={classnames(props.className, styles['nav-bar'], {
        [styles['transparent']]: props.transparent,
      })}
    >
      {props.children}
    </nav>
  )
}
