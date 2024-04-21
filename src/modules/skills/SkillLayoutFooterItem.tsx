'use client'

import TechChipAnimated from '@/modules/common/TechChipAnimated'
import useVisibleOnce from '@/modules/common/visible-once.hook'
import { useRef } from 'react'

export default function SkillLayoutFooterItem({
  title,
  items,
}: {
  title: string
  items: {
    label: string
    src: string
  }[]
}) {
  const ref = useRef<HTMLDivElement>(null)
  const visible = useVisibleOnce(ref)

  return (
    <div ref={ref} className="rounded bg-app-3 gap-2 p-2 flex flex-col">
      <div className="text-xs">{title}</div>
      <div className="flex flex-row flex-wrap gap-2">
        {items.map(({ label, src }, index) => (
          <TechChipAnimated
            key={index}
            label={label}
            src={src}
            delay={100 * index}
            isVisible={visible}
          />
        ))}
      </div>
    </div>
  )
}
