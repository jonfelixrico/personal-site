'use client'

import { ReactNode, useEffect, useMemo, useRef } from 'react'
import { useIntersection } from 'react-use'
import { Section } from './section.enum'
import { useActiveSection } from './ActiveSectionContext'

export function SectionWrapper({
  id,
  children
}: {
  id: Section
  children: ReactNode
}) {
  const [activeSelection, setActiveSelection] = useActiveSection()
  const ref = useRef(null)
  const intersection = useIntersection(ref, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  })

  const isIntesecting = useMemo(() => {
    return intersection?.isIntersecting ?? false
  }, [intersection])

  useEffect(() => {
    if (isIntesecting && id !== activeSelection) {
      setActiveSelection(id)
    }
  }, [setActiveSelection, activeSelection, isIntesecting, id])

  return (
    <section ref={ref} id={id}>
      {children}
    </section>
  )
}
