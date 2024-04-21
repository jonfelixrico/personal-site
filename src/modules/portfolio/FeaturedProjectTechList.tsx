'use client'
import TechChipAnimated from '@/modules/common/TechChipAnimated'
import useVisibleOnce from '@/modules/common/visible-once.hook'
import { Project } from '@/modules/portfolio/data/project.interface'
import { useRef } from 'react'

export default function FeaturedProjectTechList({
  tech,
}: Pick<Project, 'tech'>) {
  const techListRef = useRef<HTMLDivElement>(null)
  const isVisible = useVisibleOnce(techListRef)

  return (
    <div>
      <div className="text-xs mb-1">Relevant technologies:</div>
      <div className="flex flex-row gap-2 flex-wrap" ref={techListRef}>
        {tech.map(({ icon, label }, index) => (
          <TechChipAnimated
            isVisible={isVisible}
            delay={index * 100}
            src={icon}
            label={label}
            key={label}
          />
        ))}
      </div>
    </div>
  )
}
