'use client'

import Image from 'next/image'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useInterval, useMeasure } from 'react-use'
import range from 'lodash/range'
import { useImmer } from 'use-immer'

/**
 * Implements a perpetually-cycling carousel of icons.
 */
export default function IconCarousel({
  icons,
  iconSize = 100,
  gap = 25,
}: {
  icons: string[]
  iconSize?: number
  gap?: number
}) {
  const [ref, { width }] = useMeasure<HTMLDivElement>()

  const [iconPositions, setIconPositions] = useImmer(range(0, icons.length))
  const moveFirstIconToLast = useCallback(() => {
    setIconPositions((indexes) => {
      const idx = indexes.shift()
      indexes.push(idx as number)
    })
  }, [setIconPositions])

  const iconCount = useMemo(
    () => Math.ceil(width / iconSize) + 1, // The +1 is a buffer
    [width, iconSize],
  )
  const iconsToRender = useMemo(() => {
    return iconPositions.map((idx) => icons[idx]).slice(0, iconCount)
  }, [iconCount, icons, iconPositions])

  // This is for animating the carousel
  const [offset, setOffset] = useState(0)
  useInterval(() => {
    setOffset((offset) => offset + 1)
  }, 25)

  useEffect(() => {
    // Once the first item has been hidden, move it to the end of the list
    if (offset >= iconSize + gap) {
      moveFirstIconToLast()
      setOffset(0)
    }
  }, [offset, moveFirstIconToLast, setOffset, iconSize, gap])

  return (
    <div className="w-full select-none" ref={ref}>
      <div className="overflow-hidden" style={{ width }}>
        <div
          className="flex flex-row"
          style={{
            transform: `translateX(${-offset}px)`,
          }}
        >
          {iconsToRender.map((iconSrc, index) => (
            <div
              key={iconSrc}
              style={{
                width: iconSize,
                height: iconSize,
                marginRight: index < iconCount - 1 ? gap : 0,
              }}
              className="flex-none relative"
            >
              {/* We're not giving this a proper alt because this component is purely for presentaiton only */}
              <Image
                fill
                src={iconSrc}
                alt=""
                draggable="false"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
