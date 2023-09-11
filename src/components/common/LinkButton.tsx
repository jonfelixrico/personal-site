import { useMeasure } from 'react-use'
import styles from './LinkButton.module.scss'
import bindableCf from 'classnames/bind'
import Image from 'next/image'

const classnames = bindableCf.bind(styles)

export function LinkButton(props: {
  icon: string
  label: string
  href: string
  className?: string
}) {
  const [labelRef, { height }] = useMeasure<HTMLSpanElement>()

  return (
    <a
      href={props.href}
      target="_blank"
      className={classnames(
        styles['link-button'],
        props.className,
        'rounded-md bg-app-1 overflow-hidden px-2 py-1',
        'inline-flex flex-row items-center gap-2'
      )}
    >
      <Image
        src={props.icon}
        alt={props.label}
        width={height}
        height={height}
      />
      <span ref={labelRef} className="font-medium text-sm">
        {props.label}
      </span>
    </a>
  )
}
