import classnames from 'classnames'
import Image from 'next/image'

interface ContactItemData {
  src: string
  href: string
  label: string
}

const ITEMS: ContactItemData[] = [
  {
    src: 'icons/github.svg',
    href: 'https://github.com',
    label: 'GitHub',
  },
  {
    src: 'icons/linkedin.svg',
    href: 'https://linkedin.com',
    label: 'LinkedIn',
  },
]

function ContactItem(props: ContactItemData) {
  return (
    <div className="relative h-6 w-6 pointer-events-auto">
      <Image alt={props.label} src={props.src} fill />
    </div>
  )
}

export default function ContactsOverlay(props: { classNames?: string }) {
  return (
    <div
      className={classnames(
        props.classNames,
        'flex flex-column justify-start items-end pointer-events-none'
      )}
    >
      <div className="flex flex-col gap-4">
        {ITEMS.map(({ src, href, label }, index) => (
          <ContactItem href={href} src={src} label={label} key={index} />
        ))}
      </div>
    </div>
  )
}
