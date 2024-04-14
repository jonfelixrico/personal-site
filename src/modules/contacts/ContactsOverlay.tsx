import Image from 'next/image'
import classnames from 'classnames'
import { ContactInfo } from '@/modules/contacts/contact-info'
import { ReactNode } from 'react'
import { ICON_GITHUB, ICON_LINKEDIN } from '@/modules/common/icons'

function ContactItem(props: { src: string; href: string; label: string }) {
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

function ContactGroup() {
  return (
    <div className="hidden lg:flex flex-row justify-between items-end pointer-events-none">
      <div className={classnames('flex flex-col gap-4')}>
        <ContactItem
          href={ContactInfo.GITHUB}
          src={ICON_GITHUB}
          label="GitHub"
        />
        <ContactItem
          href={ContactInfo.LINKEDIN}
          src={ICON_LINKEDIN}
          label="LinkedIn"
        />
      </div>
      <a
        className={classnames(
          'text-orientation-vertical',
          'pointer-events-auto cursor-pointer',
          'text-white',
        )}
        href={`mailto:${ContactInfo.EMAIL}`}
        target="_blank"
      >
        {ContactInfo.EMAIL}
      </a>
    </div>
  )
}

export default function ContactsOverlay({ children }: { children: ReactNode }) {
  return (
    <div className="relative">
      <div className="absolute h-full w-full pointer-events-none">
        <div className="sticky w-full h-screen py-5 px-8 top-0 flex flex-col justify-end">
          <ContactGroup />
        </div>
      </div>

      {children}
    </div>
  )
}
