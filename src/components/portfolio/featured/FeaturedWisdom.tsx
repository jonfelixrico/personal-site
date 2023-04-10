import { useResizeDetector } from 'react-resize-detector'
import { ConditionallyRender } from '@/components/ConditionallyRender'
import Image from 'next/image'
import IconWithTooltip from '@/components/IconWithTooltip'
import cnFactory from 'classnames/bind'
import styles from './TechStack.module.scss'
import Card from '@/components/Card'

const classnames = cnFactory.bind(styles)

export default function FeaturedWisdom() {
  const { width, ref } = useResizeDetector({
    handleHeight: false,
  })

  const height = width ? width / (16 / 9) : undefined

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-6 col-start-1 flex flex-col justify-center gap-3 row-start-1 z-10">
        <div className="text-2xl text-accent">Wisdom Bot</div>

        <Card className="p-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          sollicitudin et tortor vel ullamcorper. Praesent dolor massa, dapibus
          vel sollicitudin vulputate, ultricies vel libero.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          sollicitudin et tortor vel ullamcorper. Praesent dolor massa, dapibus
          vel sollicitudin vulputate, ultricies vel libero.
        </Card>

        <div className={classnames('flex flex-row gap-3', styles['tech-list'])}>
          <IconWithTooltip
            src="tech-stack/quasar-framework.svg"
            tooltipLabel="Quasar Framework"
          />
          <IconWithTooltip src="tech-stack/vue-js.svg" tooltipLabel="Vue.js" />
          <IconWithTooltip
            src="tech-stack/typescript.svg"
            tooltipLabel="TypeScript"
          />
          <IconWithTooltip
            src="tech-stack/nest-js.svg"
            tooltipLabel="Nest.js"
          />
          <IconWithTooltip
            src="tech-stack/discord-js.svg"
            tooltipLabel="Discord.js"
          />
          <IconWithTooltip
            src="tech-stack/spring-boot.svg"
            tooltipLabel="Spring Boot"
          />
          <IconWithTooltip src="tech-stack/java.svg" tooltipLabel="Java" />
          <IconWithTooltip
            src="tech-stack/eventstoredb.svg"
            tooltipLabel="EventStoreDB"
          />
          <IconWithTooltip
            src="tech-stack/mongodb.svg"
            tooltipLabel="MongoDB"
          />
        </div>
      </div>

      <div
        className="col-start-5 col-span-8 flex flex-col justify-center row-start-1"
        ref={ref}
      >
        <ConditionallyRender render={!!height}>
          <Image
            width={width}
            height={height}
            src="/portfolio/wisdom/panel/home.png"
            alt="Test"
            quality={90}
            priority
            className="object-fill"
          />
        </ConditionallyRender>
      </div>
    </div>
  )
}
