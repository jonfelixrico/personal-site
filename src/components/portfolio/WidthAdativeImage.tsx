import Image from 'next/image'
import { useState } from 'react'

export default function WidthAdaptiveImage(props: {
  src: string
  alt: string
  width: number
}) {
  const [aspectRatio, setAspectRatio] = useState(1)

  function getAspectRatio({ naturalWidth, naturalHeight }: HTMLImageElement) {
    setAspectRatio(naturalWidth / naturalHeight)
  }

  return (
    <Image
      width={props.width}
      height={props.width / aspectRatio}
      src={props.src}
      alt={props.alt}
      onLoadingComplete={getAspectRatio}
    />
  )
}
