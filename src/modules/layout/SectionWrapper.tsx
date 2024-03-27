'use client'

import { ReactNode, useEffect, useMemo, useRef } from 'react'
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
  const [activeSelection, setActiveSelection] = useActiveSelection()
  const ref = useRef(null)
  const intersection = useIntersection(ref, {
    root: null,
    rootMargin: '0px',
    threshold: [0, 0.25, 0.5, 0.75, 1],
  })

  const isIntesecting = useMemo(() => {
    console.log(intersection)
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
