/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import styles from './LinkButton.module.scss'
import bindableCf from 'classnames/bind'

const classnames = bindableCf.bind(styles)

export function LinkButton({
  href,
  icon,
  label,
  className
}: {
  icon: string
  label: string
  href: string
  className?: string
}) { 
  return (
    <a
      href={href}
      target="_blank"
      className={classnames(
        styles['link-button'],
        className,
        'rounded-md bg-app-1 overflow-hidden px-2 py-1',
        'inline-flex flex-row items-center gap-2'
      )}
    >
      {/*
        We're doing aria hidden here since we already have the label to provide the screen reader context

        We're not using Next's Image component here since we expect that icons used here are SVGs. Next does
        leaves them as is and does not apply any optimization.

        The main reason why we're not using Next.js image component, though, is it does not accept em values for the width and height.
      */}
      <img src={icon} aria-hidden="true" style={{
        // We're going with 1em because we want the icon to have the same height as the text.
        width: '1.5em',
        height: '1.5em'
      }} />
      <div>{label}</div>
    </a>
  )
}
