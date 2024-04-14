'use client'

import Image from 'next/image'
import { useMemo } from 'react'
import { useMeasure } from 'react-use'

export default function TechCarousel({
  icons,
  iconSize,
}: {
  icons: string[]
  iconSize: number
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
    <div className="w-full" ref={ref}>
      <div className="overflow-clip flex flex-row gap-x-7" style={{ width }}>
        {viewportIcons.map((iconSrc) => (
          <div key={iconSrc}>
            {/* We're not giving this a proper alt because this component is purely for presentaiton only */}
            <Image width={iconSize} height={iconSize} src={iconSrc} alt="" />
          </div>
        ))}
      </div>
    </div>
  )
}
