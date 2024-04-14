'use client'

import Image from 'next/image'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useInterval, useMeasure } from 'react-use'
import range from 'lodash/range'
import { useImmer } from 'use-immer'

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

  const [indexes, setIndexes] = useImmer(range(0, icons.length))
  const doRotation = useCallback(() => {
    setIndexes((indexes) => {
      const idx = indexes.shift()
      indexes.push(idx as number)
    })
  }, [setIndexes])

  const viewportCount = useMemo(
    () => Math.ceil(width / iconSize),
    [width, iconSize],
  )
  const viewportIcons = useMemo(() => {
    return indexes.map((idx) => icons[idx]).slice(0, viewportCount)
  }, [viewportCount, icons, indexes])

  const [offset, setOffset] = useState(0)
  useInterval(() => {
    setOffset((offset) => offset + 1)
  }, 25)

  useEffect(() => {
    console.log(offset)
    if (offset >= iconSize + gap) {
      doRotation()
      setOffset(0)
    }
  }, [offset, doRotation, setOffset, iconSize, gap])

  return (
    <div className="w-full select-none" ref={ref}>
      <div className="overflow-hidden flex flex-row" style={{ width }}>
        {viewportIcons.map((iconSrc, index) => (
          <div
            key={iconSrc}
            style={{
              width: iconSize,
              height: iconSize,
              marginRight: index < viewportCount - 1 ? gap : 0,
              transform: `translateX(${-offset}px)`,
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
