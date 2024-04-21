'use client'
import TechChipAnimated from '@/modules/common/TechChipAnimated'
import useVisibleOnce from '@/modules/common/visible-once.hook'
import { Project } from '@/modules/portfolio/data/project.interface'
import { useRef } from 'react'

export default function FeaturedProjectTechList({
  tech,
}: Pick<Project, 'tech'>) {
  const ref = useRef<HTMLDivElement>(null)
  const visible = useVisibleOnce(ref)

  return (
    <div>
      <div className="text-xs mb-1">Relevant technologies:</div>
      <div className="flex flex-row gap-2 flex-wrap" ref={ref}>
        {tech.map(({ icon, label }, index) => (
          <TechChipAnimated
            isVisible={visible}
            delay={index * 50}
            src={icon}
            label={label}
            key={label}
          />
        ))}
      </div>
    </div>
  )
}
