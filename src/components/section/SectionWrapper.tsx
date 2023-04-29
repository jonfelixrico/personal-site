import { ReactNode, useEffect, useRef } from 'react'
import { useIntersection } from 'react-use'

export function SectionWrapper({
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
