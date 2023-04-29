import { useResizeDetector } from 'react-resize-detector'
import { ConditionallyRender } from '@/components/ConditionallyRender'
import Image from 'next/image'
import { ReactNode } from 'react'
import IconWithTooltip from '@/components/IconWithTooltip'
import styles from './FeaturedTemplates.module.scss'
import bindableCf from 'classnames/bind'

const classnames = bindableCf.bind(styles)

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
          quality={100}
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

export function LinkButton(props: {
  icon?: ReactNode
  label: string
  href: string
  className?: string
}) {
  return (
    <a
      href={props.href}
      target="_blank"
      className={classnames(
        styles['link-button'],
        props.className,
        'rounded-md bg-app-1 overflow-hidden px-2 py-1',
        'inline-flex flex-row items-center gap-2'
      )}
    >
      {props.icon}
      <span className="font-medium text-sm">{props.label}</span>
    </a>
  )
}

export function FeaturedLayout(props: {
  details: ReactNode
  title: string
  imageSrc: string
  techList: Tech[]
  bottom?: ReactNode
}) {
  return (
    <div className="grid grid-cols-12 isolate">
      <div
        className="
        lg:col-span-6 lg:col-start-1
        md:col-span-7 md:col-start-1
        col-span-12 row-start-1 
        flex flex-col justify-center gap-4
        z-10"
      >
        <h5 className="text-4xl text-accent font-medium">{props.title}</h5>
        <div className="rounded-lg overflow-hidden bg-app-1 shadow-md p-3 relative">
          <Image
            className="absolute object-cover object-center opacity-10 grayscale md:hidden"
            src={props.imageSrc}
            alt={`Preview of ${props.title}`}
            fill
            draggable="false"
          />

          <div className="relative">
            <div className="mb-5">{props.details}</div>
            <div>
              <div className="text-xs mb-1">Tech involved:</div>
              <div className="flex flex-row gap-3">
                {props.techList.map(({ iconSrc, name }) => (
                  <IconWithTooltip
                    src={iconSrc}
                    tooltipLabel={name}
                    className="relative
                    h-6 w-6
                    md:h-8 md:w-8"
                    key={name}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div>{props.bottom}</div>
      </div>

      <div
        className="
        md:block hidden
        col-start-5 col-span-8 row-start-1
        rounded-lg overflow-hidden"
      >
        <FitWidthImage
          src={props.imageSrc}
          alt={`Preview of ${props.title}`}
          className="w-full"
        />
      </div>
    </div>
  )
}
