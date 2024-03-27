import { Metadata } from 'next'
import MainLayout from '@/modules/layout/MainLayout'
import { SectionWrapper } from '@/modules/layout/SectionWrapper'
import { Section } from '@/modules/layout/section.enum'
import HomeSectionMain from '@/modules/section/HomeSectionMain'
import ContactsOverlay from '@/modules/contacts/ContactsOverlay'
import HomeSectionSkills from '@/modules/section/HomeSectionSkills'
import HomeSectionPortfolio from '@/modules/section/HomeSectionPortfolio'

export const metadata: Metadata = {
  title: 'Jon Felix Rico • Home',
}

export default function Home() {
  return <MainLayout>
    <SectionWrapper
        id={Section.HOME}
      >
        <HomeSectionMain />
      </SectionWrapper>

      <ContactsOverlay>
        <SectionWrapper
          id={Section.SKILLS}
        >
          <HomeSectionSkills />
        </SectionWrapper>

        <SectionWrapper
          id={Section.PORTFOLIO}
        >
          <HomeSectionPortfolio />
        </SectionWrapper>
      </ContactsOverlay>
  </MainLayout>
}
