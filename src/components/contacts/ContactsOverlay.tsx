import Image from 'next/image'
import classnames from 'classnames'
import { ContactInfo } from '@/models/contact-info'
interface ContactItemData {
  src: string
  href: string
  label: string
}

const ITEMS: ContactItemData[] = [
  {
    src: 'icons/github.svg',
    href: ContactInfo.GITHUB,
    label: 'GitHub',
  },
  {
    src: 'icons/linkedin.svg',
    href: ContactInfo.LINKEDIN,
    label: 'LinkedIn',
  },
]

function ContactItem(props: ContactItemData) {
  return (
    <a
      className="relative h-6 w-6 pointer-events-auto cursor-pointer"
      role="link"
      href={props.href}
      target="_blank"
    >
      <Image alt={props.label} src={props.src} fill />
    </a>
  )
}

export default function ContactsOverlay(props: { classNames?: string }) {
  return (
    <div
      className={classnames(
        props.classNames,
        // show for large screens, hide for smaller screens
        'hidden lg:flex',
        'flex-row justify-between items-end pointer-events-none'
      )}
    >
      <div className={classnames('flex flex-col gap-4')}>
        {ITEMS.map(({ src, href, label }, index) => (
          <ContactItem href={href} src={src} label={label} key={index} />
        ))}
      </div>
      <a
        className={classnames(
          'text-orientation-vertical',
          'pointer-events-auto cursor-pointer',
          'text-white'
        )}
        href={`mailto:${ContactInfo.EMAIL}`}
        target="_blank"
      >
        {ContactInfo.EMAIL}
      </a>
    </div>
  )
}
