'use client'

import classNames from 'classnames'
import Image from 'next/image'
import { useResizeDetector } from 'react-resize-detector'
import { If, Then } from 'react-if'

export default function FitWidthImage(props: {
  src: string
  alt: string
  className?: string
}) {
  const { width, ref } = useResizeDetector({
    handleHeight: false,
  })
  const height = width ? width / (16 / 9) : undefined

  return (
    <div className={classNames(props.className, 'relative')} ref={ref}>
      <If condition={!!height}>
        <Then>
          <Image
            width={width}
            height={height}
            src={props.src}
            alt={`Preview of ${props.alt}`}
            quality={100}
            priority
            className="object-fill"
          />
        </Then>
      </If>
    </div>
  )
}