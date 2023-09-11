import styles from './LinkButton.module.scss'
import bindableCf from 'classnames/bind'

const classnames = bindableCf.bind(styles)

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
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={props.icon} alt={props.label} />
      <span className="font-medium text-sm">{props.label}</span>
    </a>
  )
}
