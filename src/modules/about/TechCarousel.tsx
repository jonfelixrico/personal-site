'use client'

import Image from 'next/image'
import { useMemo } from 'react'

export default function TechCarousel({
  icons,
  iconSize,
  containerWidth,
}: {
  icons: string[]
  iconSize: number
  containerWidth: number
}) {
  const viewportCount = useMemo(
    () => Math.ceil(containerWidth / iconSize),
    [containerWidth, iconSize],
  )

  const viewportIcons = useMemo(() => {
    return icons.slice(0, viewportCount)
  }, [viewportCount, icons])

  return (
    <>
      {viewportIcons.map((iconSrc) => (
        <div key={iconSrc}>
          {/* We're not giving this a proper alt because this component is purely for presentaiton only */}
          <Image width={iconSize} height={iconSize} src={iconSrc} alt="" />
        </div>
      ))}
    </>
  )
}
