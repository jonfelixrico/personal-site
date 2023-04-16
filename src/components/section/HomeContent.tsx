import { NavbarSectionIds } from '../layout/Navbar'
import HomeSectionContacts from './HomeSectionContacts'
import HomeSectionExperience from './HomeSectionExperience'
import HomeSectionMain from './HomeSectionMain'
import HomeSectionPortfolio from './HomeSectionPortfolio'

export default function HomeContent(props: { className?: string }) {
  return (
    <div className={props.className}>
      <section id={NavbarSectionIds.HOME}>
        <HomeSectionMain />
      </section>

      <section id={NavbarSectionIds.EXPERIENCE}>
        <HomeSectionExperience />
      </section>

      <section id={NavbarSectionIds.PORTFOLIO}>
        <HomeSectionPortfolio />
      </section>

      <section id={NavbarSectionIds.CONTACTS}>
        <HomeSectionContacts className="mx-auto max-w-screen-lg min-h-screen section-px" />
      </section>
    </div>
  )
}
