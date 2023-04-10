import { useResizeDetector } from 'react-resize-detector'
import { ConditionallyRender } from '@/components/ConditionallyRender'
import Image from 'next/image'

export default function FeaturedWisdom() {
  const { width, ref } = useResizeDetector({
    handleHeight: false,
  })

  const height = width ? width / (16 / 9) : undefined

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4 flex flex-col justify-center gap-3">
        <div className="text-2xl">Wisdom Bot</div>

        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          sollicitudin et tortor vel ullamcorper. Praesent dolor massa, dapibus
          vel sollicitudin vulputate, ultricies vel libero.
        </div>

        <div className="flex flex-row gap-3">
          <div className="h-8 w-8 relative">
            <Image alt="test" src="tech-stack/vue-js.svg" fill />
          </div>
          <div className="h-8 w-8 relative">
            <Image alt="test" src="tech-stack/react.svg" fill />
          </div>
          <div className="h-8 w-8 relative">
            <Image alt="test" src="tech-stack/angular.svg" fill />
          </div>
        </div>
      </div>
      <div className="col-span-8 flex flex-col justify-center" ref={ref}>
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
