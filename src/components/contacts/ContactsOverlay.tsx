import Image from 'next/image'
import classnames from 'classnames'
interface ContactItemData {
  src: string
  href: string
  label: string
}

const ITEMS: ContactItemData[] = [
  {
    src: 'icons/github.svg',
    href: 'https://github.com/jonfelixrico',
    label: 'GitHub',
  },
  {
    src: 'icons/linkedin.svg',
    href: 'https://www.linkedin.com/in/jonfelixrico',
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
      <div
        className={classnames(
          'text-orientation-vertical',
          'pointer-events-auto cursor-pointer'
        )}
        onClick={promptEmail}
      >
        {EMAIL}
      </div>
    </div>
  )
}
