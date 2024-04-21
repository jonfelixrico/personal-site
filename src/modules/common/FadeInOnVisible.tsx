'use client'

import style from './FadeInOnVisible.module.scss'
import cnBind from 'classnames/bind'
import range from 'lodash/range'

const classnames = cnBind.bind(style)

import { ReactNode, useEffect, useMemo, useRef, useState } from 'react'
import { useIntersection } from 'react-use'

export default function FadeInOnVisible({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const [visible, setIsVisible] = useState(false)

  const ref = useRef<HTMLDivElement>(null)
  const obs = useIntersection(ref, {
    threshold: range(0, 11).map((val) => val * 0.1),
  })
  const intersectionRatio = useMemo(() => obs?.intersectionRatio ?? 0, [obs])
  useEffect(() => {
    if (intersectionRatio > 0) {
      setIsVisible(true)
    }
  }, [intersectionRatio, setIsVisible])

  return (
    <div
      ref={ref}
      className={classnames(
        style['container'],
        {
          [style['not-visible']]: !visible,
        },
        className,
      )}
    >
      {children}
    </div>
  )
}
