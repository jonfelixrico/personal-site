import Image from 'next/image'
import { ReactNode } from 'react'

function ContactCard(props: { children?: ReactNode }) {
  return <div className="bg-app-2 rounded-lg p-4">{props.children}</div>
}

export default function HomeSectionContacts() {
  return (
    <div
      className="section-width section-px min-h-screen
      pt-20 pb-10"
    >
      <div className="mb-5">
        <div className="text-5xl font-semibold text-primary">Contacts</div>
        <div className="text-secondary text-2xl">Let&apos;s get in touch!</div>
      </div>

      <div className="flex flex-col gap-4 items-stretch max-w-lg mx-auto">
        <ContactCard>
          <div className="flex flex-row gap-3 items-center">
            <Image src="icons/linkedin.svg" alt="" height="50" width="50" />
            <div className="flex-grow text-center">
              <a className="text-2xl">linkedin.com/in/jonfelixrico</a>
            </div>
          </div>
        </ContactCard>

        <ContactCard>
          <div className="flex flex-row gap-3 items-center">
            <Image src="icons/github.svg" alt="" height="50" width="50" />
            <div className="flex-grow text-center">
              <a className="text-2xl">github.com/jonfelixrico</a>
            </div>
          </div>
        </ContactCard>

        <ContactCard>
          <div className="flex flex-row gap-3 items-center">
            <Image src="icons/email.svg" alt="" height="50" width="50" />
            <div className="flex-grow text-center">
              <a className="text-2xl">jonfelixrico@gmail.com</a>
            </div>
          </div>
        </ContactCard>
      </div>
    </div>
  )
}
