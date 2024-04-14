import Image from 'next/image'
import styles from './LinkButton.module.scss'
import bindableCf from 'classnames/bind'

const classnames = bindableCf.bind(styles)

export function LinkButton({
  href,
  icon,
  label,
  className,
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
        'inline-flex flex-row items-center gap-2',
      )}
    >
      <div
        style={{
          width: '1em',
          height: '1em',
        }}
        className="relative"
      >
        <Image src={icon} fill alt="" />
      </div>
      <div>{label}</div>
    </a>
  )
}
