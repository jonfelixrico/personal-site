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
    threshold: [0, 0.25, 0.5, 0.75, 1],
  })

  const intersectionRatio = useMemo(() => {
    if (!intersection) {
      return null
    }

    return parseFloat(intersection.intersectionRatio.toFixed(2))
  }, [intersection])

  useEffect(() => {
    if (intersectionRatio == null) {
      return
    }

    setIntersectionData(id, intersectionRatio)
  }, [intersectionRatio, id, setIntersectionData])

  return (
    <section ref={ref} id={id}>
      {children}
    </section>
  )
}
