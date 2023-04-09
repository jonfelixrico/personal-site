import { ConditionallyRender } from '@/components/ConditionallyRender'
import Image from 'next/image'

export interface TechStackSubItemData {
  iconSrc: string
  name: string
}

export interface TechStackItemData {
  iconSrc: string
  name: string
  testimony: string
  subItems?: TechStackSubItemData[]
}

function SubItem(props: TechStackSubItemData) {
  return (
    <div className="relative h-6 w-6">
      <Image alt={`Icon of ${props.name}`} src={props.iconSrc} fill />
    </div>
  )
}

export default function TechStackItem(props: TechStackItemData) {
  return (
    <div className="grid grid-cols-12 gap-2">
      <div className="relative">
        <Image alt={`Icon of ${props.name}`} src={props.iconSrc} fill />
      </div>
      <div className="col-span-11 flex flex-row justify-between items-center">
        <div className="text-xl font-semibold">{props.name}</div>

        <ConditionallyRender render={!!props.subItems?.length}>
          <div className="flex flex-row gap-1">
            {props.subItems?.map(SubItem)}
          </div>
        </ConditionallyRender>
      </div>

      <div className="col-start-2 col-span-11">{props.testimony}</div>
    </div>
  )
}
