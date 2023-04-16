import { useResizeDetector } from 'react-resize-detector'
import { ConditionallyRender } from '@/components/ConditionallyRender'
import Image from 'next/image'
import { ReactNode } from 'react'
import classnames from 'classnames'
import IconWithTooltip from '@/components/IconWithTooltip'

function FitWidthImage(props: {
  src: string
  alt: string
  className?: string
}) {
  const { width, ref } = useResizeDetector({
    handleHeight: false,
  })
  const height = width ? width / (16 / 9) : undefined

  return (
    <div className={classnames(props.className, 'relative')} ref={ref}>
      <ConditionallyRender render={!!height}>
        <Image
          width={width}
          height={height}
          src={props.src}
          alt={`Preview of ${props.alt}`}
          quality={90}
          priority
          className="object-fill"
        />
      </ConditionallyRender>
    </div>
  )
}

interface Tech {
  iconSrc: string
  name: string
}

export function FeaturedLinkIcon(props: { src: string; alt: string }) {
  return (
    <div className="w-10 h-10 relative">
      <Image fill src={props.src} alt={props.alt} />
    </div>
  )
}

export function FeaturedLayout(props: {
  details: ReactNode
  title: string
  imageSrc: string
  techList: Tech[]
  side?: ReactNode
}) {
  return (
    <div className="grid grid-cols-12">
      <div className="md:col-span-6 md:col-start-1 col-span-12 flex flex-col justify-center gap-3 row-start-1 z-10">
        <div className="flex flex-row items-center gap-3">
          <h5 className="text-2xl text-accent">{props.title}</h5>
          {props.side}
        </div>
        <div className="rounded-lg overflow-hidden bg-app-2 shadow-md">
          <FitWidthImage
            src={props.imageSrc}
            alt={`Preview of ${props.title}`}
            className="md:hidden w-full"
          />
          <div className="p-3">{props.details}</div>
        </div>
        <div className="flex flex-row gap-3">
          {props.techList.map(({ iconSrc, name }) => (
            <IconWithTooltip
              src={iconSrc}
              tooltipLabel={name}
              className="relative h-10 w-10"
              key={name}
            />
          ))}
        </div>
      </div>

      <div className="md:block hidden col-start-5 col-span-8 row-start-1 rounded-lg overflow-hidden">
        <FitWidthImage
          src={props.imageSrc}
          alt={`Preview of ${props.title}`}
          className="w-full"
        />
      </div>
    </div>
  )
}
