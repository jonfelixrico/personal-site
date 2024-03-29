'use client'

import { ReactNode, useEffect, useRef } from 'react'
import { useIntersection } from 'react-use'
import { Section } from './section.enum'
import { useActiveSection } from './ActiveSectionContext'

export function SectionWrapper({
  id,
  children,
}: {
  id: Section
  children: ReactNode
}) {
  const { setIntersectionData } = useActiveSection()
  const ref = useRef(null)
  const intersection = useIntersection(ref, {
    threshold: [0, 0.25, 0.5, 0.75, 1],
  })

  useEffect(() => {
    if (!intersection) {
      return
    }

    setIntersectionData(id, intersection.intersectionRatio)
  }, [intersection, id, setIntersectionData])

  return (
    <section ref={ref} id={id}>
      {children}
    </section>
  )
}
