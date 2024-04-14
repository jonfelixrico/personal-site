'use client'

import Image from 'next/image'
import { useMemo } from 'react'
import { useMeasure } from 'react-use'

export default function TechCarousel({
  icons,
  iconSize = 100,
  gap = 25,
}: {
  icons: string[]
  iconSize?: number
  gap?: number
}) {
  const [ref, { width }] = useMeasure<HTMLDivElement>()

  const viewportCount = useMemo(
    () => Math.ceil(width / iconSize),
    [width, iconSize],
  )

  const viewportIcons = useMemo(() => {
    return icons.slice(0, viewportCount)
  }, [viewportCount, icons])

  return (
    <div className="w-full select-none" ref={ref}>
      <div className="overflow-clip flex flex-row" style={{ width }}>
        {viewportIcons.map((iconSrc, index) => (
          <div
            key={iconSrc}
            style={{
              width: iconSize,
              height: iconSize,
              marginRight: index < viewportCount - 1 ? gap : 0,
            }}
            className="flex-none relative"
          >
            {/* We're not giving this a proper alt because this component is purely for presentaiton only */}
            <Image fill src={iconSrc} alt="" draggable="false" />
          </div>
        ))}
      </div>
    </div>
  )
}
