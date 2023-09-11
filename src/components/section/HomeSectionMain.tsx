import { ContactInfo } from '@/models/contact-info'
import { LinkButton } from '../common/LinkButton'

const ITEMS = [
  {
    iconSrc: 'icons/github.svg',
    href: ContactInfo.GITHUB,
    label: 'GitHub',
  },
  {
    iconSrc: 'icons/linkedin.svg',
    href: ContactInfo.LINKEDIN,
    label: 'LinkedIn',
  },
  {
    iconSrc: 'icons/email.svg',
    href: `mailto:${ContactInfo.EMAIL}`,
    label: 'Email',
  },
]

export default function HomeSectionMain() {
  return (
    <div
      className="h-screen
      flex flex-col justify-center
      bg-app-2"
    >
      <div className="section-width section-px gap-10 flex flex-col">
        <div className="font-semibold">
          <div
            className="
            text-white
            text-6xl sm:text-7xl md:text-8xl"
          >
            Jon Felix Rico,
          </div>
          <div
            className="
            text-primary font-mono
            text-4xl sm:text-6xl md:text-7xl lg:text-8xl"
          >
            &lt;web-developer/&gt;
          </div>
        </div>

        <div className="lg:w-5/6 text-xl">
          I&apos;m a web developer specializing in front-end technologies
          for&nbsp;
          <a target="_blank" href="https://www.azeus.com">
            Azeus Systems
          </a>
          . During my downtime, I like building full-stack apps as my pet
          project or tinkering with tech.
        </div>

        <div className="flex flex-row flex-wrap gap-2 items-start">
          {ITEMS.map(({ href, label, iconSrc }, index) => (
            <LinkButton
              icon={iconSrc}
              label={label}
              href={href}
              key={index}
              className="text-xl font-medium"
            />
          ))}
        </div>
      </div>
    </div>
  )
}
