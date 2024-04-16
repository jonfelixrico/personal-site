import { ContactInfo } from '@/modules/contacts/contact-info'
import { LinkButton } from '@/modules/common/LinkButton'
import { ICON_EMAIL, ICON_GITHUB, ICON_LINKEDIN } from '@/modules/common/icons'
import { TechIconCarousel } from '@/modules/about/TechIconCarousel'

const ITEMS = [
  {
    iconSrc: ICON_GITHUB,
    href: ContactInfo.GITHUB,
    label: 'GitHub',
  },
  {
    iconSrc: ICON_LINKEDIN,
    href: ContactInfo.LINKEDIN,
    label: 'LinkedIn',
  },
  {
    iconSrc: ICON_EMAIL,
    href: `mailto:${ContactInfo.EMAIL}`,
    label: 'Email',
  },
]

export default function SectionMain() {
  return (
    <div className="h-screen flex flex-col bg-app-2">
      <div className="flex-auto flex flex-col justify-center">
        <div className="section-width section-px gap-10 flex flex-col">
          <h1 className="font-semibold">
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
          </h1>

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

      <div className="flex-none bg-app-3">
        <TechIconCarousel />
      </div>
    </div>
  )
}
