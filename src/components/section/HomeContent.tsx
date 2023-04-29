import { ReactNode, useEffect, useRef } from 'react'
import HomeSectionContacts from './HomeSectionContacts'
import HomeSectionSkills from './HomeSectionSkills'
import HomeSectionMain from './HomeSectionMain'
import HomeSectionPortfolio from './HomeSectionPortfolio'
import { useIntersection } from 'react-use'
import { Section } from '@/models/section.enum'
import ContactsSection from '../contacts/ContactsSection'

function SectionWrapper({
  id,
  onVisible,
  children,
}: {
  id: string
  children?: ReactNode
  onVisible?: (id: string) => void
}) {
  const ref = useRef(null)
  const intersection = useIntersection(ref, {
    root: null,
    rootMargin: '0px',
    threshold: [0.75, 1],
  })

  const ratio = intersection?.intersectionRatio ?? 0
  useEffect(() => {
    if (onVisible) {
      onVisible(id)
    }
  }, [onVisible, ratio, id])

  return (
    <section ref={ref} id={id}>
      {children}
    </section>
  )
}

export default function HomeContent(props: {
  onVisibleSectionChange?: (id: string) => void
}) {
  return (
    <>
      <SectionWrapper
        id={Section.HOME}
        onVisible={props.onVisibleSectionChange}
      >
        <HomeSectionMain />
      </SectionWrapper>

      <SectionWrapper
        id={Section.SKILLS}
        onVisible={props.onVisibleSectionChange}
      >
        <HomeSectionSkills />
      </SectionWrapper>

      <SectionWrapper
        id={Section.PORTFOLIO}
        onVisible={props.onVisibleSectionChange}
      >
        <HomeSectionPortfolio />
      </SectionWrapper>

      <SectionWrapper
        id={Section.CONTACTS}
        onVisible={props.onVisibleSectionChange}
      >
        <ContactsSection />
      </SectionWrapper>
    </>
  )
}
