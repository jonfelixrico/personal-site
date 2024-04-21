import { RefObject, useEffect, useMemo, useState } from 'react'
import { useIntersection } from 'react-use'

export default function useVisibleOnce<T extends HTMLElement>(
  ref: RefObject<T>,
) {
  const [visible, setIsVisible] = useState(false)

  const obs = useIntersection(ref, {
    threshold: 0.1,
  })
  const intersectionRatio = useMemo(() => obs?.intersectionRatio ?? 0, [obs])
  useEffect(() => {
    if (intersectionRatio > 0) {
      setIsVisible(true)
    }
  }, [intersectionRatio, setIsVisible])

  return visible
}
