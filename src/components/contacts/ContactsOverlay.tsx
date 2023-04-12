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

const EMAIL = 'jonfelixrico.work@gmail.com'

function ContactItem(props: ContactItemData) {
  function promptOpenNewTab() {
    // TODO add comfirmation
    window.open(props.href)
  }

  return (
    <div
      className="relative h-6 w-6 pointer-events-auto cursor-pointer"
      role="link"
      onClick={promptOpenNewTab}
    >
      <Image alt={props.label} src={props.src} fill />
    </div>
  )
}

export default function ContactsOverlay(props: { classNames?: string }) {
  function promptEmail() {
    // TODO add dialog for constent
    window.open(`mailto:${EMAIL}`)
  }

  return (
    <div
      className={classnames(
        props.classNames,
        'flex flex-row justify-between items-end pointer-events-none'
      )}
    >
      <div className="flex flex-col gap-4">
        {ITEMS.map(({ src, href, label }, index) => (
          <ContactItem href={href} src={src} label={label} key={index} />
        ))}
      </div>
      <div
        className="text-orientation-vertical pointer-events-auto cursor-pointer"
        onClick={promptEmail}
      >
        {EMAIL}
      </div>
    </div>
  )
}
