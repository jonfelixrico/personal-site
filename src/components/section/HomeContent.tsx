import { ReactNode, useEffect, useRef } from 'react'
import HomeSectionContacts from './HomeSectionContacts'
import HomeSectionExperience from './HomeSectionExperience'
import HomeSectionMain from './HomeSectionMain'
import HomeSectionPortfolio from './HomeSectionPortfolio'
import { useIntersection } from 'react-use'
import { NavbarSectionId } from '@/model/navbar-section-id.enum'

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
    threshold: 0.5,
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
  className?: string
  onVisibleSectionChange?: (id: string) => void
}) {
  return (
    <div className={props.className}>
      <SectionWrapper
        id={NavbarSectionId.HOME}
        onVisible={props.onVisibleSectionChange}
      >
        <HomeSectionMain />
      </SectionWrapper>

      <SectionWrapper
        id={NavbarSectionId.EXPERIENCE}
        onVisible={props.onVisibleSectionChange}
      >
        <HomeSectionExperience />
      </SectionWrapper>

      <SectionWrapper
        id={NavbarSectionId.PORTFOLIO}
        onVisible={props.onVisibleSectionChange}
      >
        <HomeSectionPortfolio />
      </SectionWrapper>

      <SectionWrapper
        id={NavbarSectionId.CONTACTS}
        onVisible={props.onVisibleSectionChange}
      >
        <HomeSectionContacts className="mx-auto max-w-screen-lg min-h-screen Section-px" />
      </SectionWrapper>
    </div>
  )
}
