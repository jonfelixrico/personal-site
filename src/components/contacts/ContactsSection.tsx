import Image from 'next/image'
import styles from './ContactsSection.module.scss'
import bindableCf from 'classnames/bind'

const classnames = bindableCf.bind(styles)

function ContactCard(props: { label: string; src: string; href: string }) {
  return (
    <a
      className={classnames(
        'bg-app-2 rounded-lg p-4 cursor-pointer',
        styles['contact-card']
      )}
      href={props.href}
      target="_blank"
    >
      <div className="flex flex-row gap-3 items-center justify-center">
        <Image src={props.src} alt="" height="50" width="50" />
        <div className="text-2xl">{props.label}</div>
      </div>
    </a>
  )
}

export default function ContactsSection() {
  return (
    <div
      className="section-width section-px min-h-screen
      pt-20 pb-10 flex flex-col"
    >
      <div className="mb-5">
        <div className="text-5xl font-semibold text-primary">Contacts</div>
        <div className="text-secondary text-2xl">Let&apos;s get in touch!</div>
      </div>

      <div
        className="flex-grow
        flex flex-col gap-4 items-stretch
        justify-center
        lg:justify-start
        md:max-w-lg md:mx-auto"
      >
        <ContactCard
          label="linkedin.com/in/jonfelixrico"
          src="icons/linkedin.svg"
          href="https://www.linkedin.com/in/jonfelixrico/"
        />

        <ContactCard
          label="jonfelixrico@gmail.com"
          src="icons/email.svg"
          href="mailto:jonfelixrico@gmail.com"
        />

        <ContactCard
          label="github.com/jonfelixrico"
          src="icons/github.svg"
          href="https://github.com/jonfelixrico"
        />
      </div>
    </div>
  )
}
