'use client'

import { ReactNode, useEffect, useMemo, useRef } from 'react'
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
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  })

  const intersectionRatio = useMemo(() => {
    const rawRatio = intersection?.intersectionRatio ?? 0
    return parseFloat(rawRatio.toFixed(2))
  }, [intersection])

  useEffect(() => {
    setIntersectionData(id, intersectionRatio)
  }, [intersectionRatio, id, setIntersectionData])

  return (
    <section ref={ref} id={id}>
      {children}
    </section>
  )
}
