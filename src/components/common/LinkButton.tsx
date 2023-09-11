import { useMeasure } from 'react-use'
import styles from './LinkButton.module.scss'
import bindableCf from 'classnames/bind'
import Image from 'next/image'
import { ReactNode } from 'react'

const classnames = bindableCf.bind(styles)

function ImageWrapper(props: {
  src: string
  alt: string
  children: ReactNode
}) {
  const [labelRef, { height }] = useMeasure<HTMLDivElement>()

  return (
    <>
      <Image src={props.src} alt={props.alt} width={height} height={height} />
      <div ref={labelRef}>{props.children}</div>
    </>
  )
}

export function LinkButton(props: {
  icon: string
  label: string
  href: string
  className?: string
}) {
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
      <ImageWrapper src={props.icon} alt={props.label}>
        <span className="font-medium text-sm">{props.label}</span>
      </ImageWrapper>
    </a>
  )
}
