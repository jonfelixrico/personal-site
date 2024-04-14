'use client'

import IconCarousel from '@/modules/about/IconCarousel'
import * as TECH_ICONS from '@/modules/common/tech-icons'
import { useScreen } from '@/modules/common/use-screen.hook'
import { useMemo } from 'react'

export function TechIconCarousel() {
  const screen = useScreen()
  const props = useMemo(() => {
    if (screen.gt.md) {
      return {
        iconSize: 100,
        gap: 25,
      }
    }

    if (screen.gt.sm) {
      return {
        iconSize: 75,
        gap: 20,
      }
    }

    return {
      iconSize: 50,
      gap: 10,
    }
  }, [screen])

  return (
    <div className="py-3">
      <IconCarousel
        {...props}
        // We want to apply sorting to make the render sequence consistent/predictable
        // TODO use toSorted (prefered); using sort only for now since Vercel builds are failing if toSorted is used
        icons={Object.values(TECH_ICONS).sort((a, b) => a.localeCompare(b))}
      />
    </div>
  )
}
