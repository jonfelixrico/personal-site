import { Metadata } from 'next'
import MainLayout from '@/modules/layout/MainLayout'
import { SectionWrapper } from '@/modules/layout/SectionWrapper'
import { Section } from '@/modules/layout/section.enum'
import SectionAbout from '@/modules/about/SectionAbout'
import ContactsOverlay from '@/modules/contacts/ContactsOverlay'
import SectionSkills from '@/modules/skills/SectionSkills'
import SectionPortfolio from '@/modules/portfolio/SectionPortfolio'
import { ActiveSectionProvider } from '@/modules/layout/ActiveSectionContext'

export const metadata: Metadata = {
  title: 'Jon Felix Rico • Home',
}

export default function Home() {
  return (
    <ActiveSectionProvider>
      <MainLayout>
        <SectionWrapper id={Section.HOME}>
          <SectionAbout />
        </SectionWrapper>

        <ContactsOverlay>
          <SectionWrapper id={Section.SKILLS}>
            <SectionSkills />
          </SectionWrapper>

          <SectionWrapper id={Section.PORTFOLIO}>
            <SectionPortfolio />
          </SectionWrapper>
        </ContactsOverlay>
      </MainLayout>
    </ActiveSectionProvider>
  )
}
