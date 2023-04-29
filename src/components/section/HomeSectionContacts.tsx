import Image from 'next/image'

function ContactCard(props: { label: string; src: string }) {
  return (
    <div className="bg-app-2 rounded-lg p-4">
      <div className="flex flex-row gap-3 items-center justify-center">
        <Image src={props.src} alt="" height="50" width="50" />
        <div className="text-2xl">{props.label}</div>
      </div>
    </div>
  )
}

export default function HomeSectionContacts() {
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
        />

        <ContactCard label="jonfelixrico@gmail.com" src="icons/email.svg" />

        <ContactCard label="github.com/jonfelixrico" src="icons/github.svg" />
      </div>
    </div>
  )
}
