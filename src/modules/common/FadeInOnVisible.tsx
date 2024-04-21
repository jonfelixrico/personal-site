'use client'

import useVisibleOnce from '@/modules/common/visible-once.hook'
import style from './FadeInOnVisible.module.scss'
import cnBind from 'classnames/bind'

const classnames = cnBind.bind(style)

import { ReactNode, useRef } from 'react'

export default function FadeInOnVisible({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  const visible = useVisibleOnce(ref)

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
