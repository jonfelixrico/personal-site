import { ConditionallyRender } from '@/components/ConditionallyRender'
import Image from 'next/image'

export interface TechSubItem {
  iconSrc: string
  name: string
}

export interface Tech {
  iconSrc: string
  name: string
  testimony: string
  items?: TechSubItem[]
}

function SubItem({ tech }: { tech: TechSubItem }) {
  return (
    <div className="relative h-6 w-6">
      <Image alt={`Icon of ${tech.name}`} src={tech.iconSrc} fill />
    </div>
  )
}

export default function TechStackItem({ tech }: { tech: Tech }) {
  return (
    <div className="grid grid-cols-12 gap-2">
      <div className="relative">
        <Image alt={`Icon of ${tech.name}`} src={tech.iconSrc} fill />
      </div>
      <div className="col-span-11 flex flex-row justify-between items-center">
        <div className="text-xl font-semibold">{tech.name}</div>

        <ConditionallyRender render={!!tech.items?.length}>
          <div className="flex flex-row gap-1">
            {tech.items?.map((data) => SubItem({ tech: data }))}
          </div>
        </ConditionallyRender>
      </div>

      <div className="col-start-2 col-span-11">{tech.testimony}</div>
    </div>
  )
}
