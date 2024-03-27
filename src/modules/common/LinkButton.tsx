'use client'

import { useMeasure } from 'react-use'
import styles from './LinkButton.module.scss'
import bindableCf from 'classnames/bind'
import Image from 'next/image'

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
  const [labelRef, { height: labelHeight }] = useMeasure<HTMLDivElement>()
  
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
      <div style={{
        minHeight: labelHeight || '1em',
        minWidth: labelHeight || '1em'
      }}>
        <Image src={icon} alt={label} width={labelHeight} height={labelHeight} />
      </div>
      <div ref={labelRef}>{label}</div>
    </a>
  )
}
