import { useResizeDetector } from 'react-resize-detector'
import { ConditionallyRender } from '@/components/ConditionallyRender'
import Image from 'next/image'
import Card from '@/components/Card'
import { ReactNode } from 'react'
import classnames from 'classnames'

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

export default function FeaturedTemplateLayout(props: {
  details: ReactNode
  projectName: string
  imageSrc: string
  footer?: ReactNode
}) {
  return (
    <div className="grid grid-cols-12">
      <div className="md:col-span-6 md:col-start-1 col-span-12 flex flex-col justify-center gap-3 row-start-1 z-10">
        <div className="text-2xl text-accent">{props.projectName}</div>
        <Card>
          <FitWidthImage
            src={props.imageSrc}
            alt={`Preview of ${props.projectName}`}
            className="md:hidden w-full"
          />
          <div className="p-3">{props.details}</div>
        </Card>
        {props.footer}
      </div>

      <div className="md:block hidden col-start-5 col-span-8 row-start-1">
        <FitWidthImage
          src={props.imageSrc}
          alt={`Preview of ${props.projectName}`}
          className="w-full"
        />
      </div>
    </div>
  )
}
