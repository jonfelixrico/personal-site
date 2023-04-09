import { ConditionallyRender } from '@/components/ConditionallyRender'
import Image from 'next/image'

export interface TechSubItem {
  iconSrc: string
  name: string
}

export interface TechStackItemProps {
  iconSrc: string
  name: string
  testimony: string
  items?: TechSubItem[]
}

function SubItem(props: TechSubItem) {
  return (
    <div className="relative h-8 w-8">
      <Image alt={`Icon of ${props.name}`} src={props.iconSrc} fill />
    </div>
  )
}

export default function TechStackItem(props: TechStackItemProps) {
  return (
    <div className="grid grid-cols-12 gap-2">
      <div className="relative">
        <Image alt={`Icon of ${props.name}`} src={props.iconSrc} fill />
      </div>
      <div className="col-span-11 flex flex-row justify-between items-center">
        <div className="text-xl font-semibold">{props.name}</div>

        <ConditionallyRender render={!!props.items?.length}>
          <div className="flex flex-row gap-1">
            {props.items?.map((item) => (
              <SubItem
                iconSrc={item.iconSrc}
                name={item.name}
                key={item.name}
              />
            ))}
          </div>
        </ConditionallyRender>
      </div>

      <div className="col-start-2 col-span-11">{props.testimony}</div>
    </div>
  )
}
