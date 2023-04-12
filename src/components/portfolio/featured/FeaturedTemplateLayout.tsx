import { useResizeDetector } from 'react-resize-detector'
import { ConditionallyRender } from '@/components/ConditionallyRender'
import Image from 'next/image'
import Card from '@/components/Card'
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
  iconClass?: string
}

export default function FeaturedTemplateLayout(props: {
  details: ReactNode
  projectName: string
  imageSrc: string
  techList: Tech[]
}) {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-6 col-start-1 flex flex-col justify-center gap-3 row-start-1 z-10">
        <div className="text-2xl text-accent">{props.projectName}</div>
        <Card className="p-3">{props.details}</Card>
        <div className="flex flex-row gap-3">
          {props.techList.map(({ iconSrc, iconClass, name }) => (
            <IconWithTooltip
              src={iconSrc}
              tooltipLabel={name}
              iconClass={iconClass}
              className="relative h-6 w-6"
              key={name}
            />
          ))}
        </div>
      </div>

      <FitWidthImage
        src={props.imageSrc}
        alt={`Preview of ${props.projectName}`}
        className="col-start-5 col-span-8 flex flex-col justify-center row-start-1"
      />
    </div>
  )
}
