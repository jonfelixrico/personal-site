'use client'

import { ReactNode, useEffect, useRef } from 'react'
import { useIntersection } from 'react-use'
import { Section } from './section.enum'
import { useActiveSelection } from './ActiveSectionContext'

export function SectionWrapper({
  id,
  children
}: {
  id: Section
  children: ReactNode
}) {
  const setActiveSection = useActiveSelection()[1]
  const ref = useRef(null)
  const intersection = useIntersection(ref, {
    root: null,
    rootMargin: '0px',
    threshold: [0.75, 1],
  })

  useEffect(() => {
    setActiveSection(id)
  }, [setActiveSection, intersection, id])

  return (
    <section ref={ref} id={id}>
      {children}
    </section>
  )
}
