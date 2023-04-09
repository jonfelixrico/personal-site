import Image from 'next/image'

export interface TechStackItemData {
  iconSrc: string
  name: string
  testimony: string
}

export default function TechStackItem(props: TechStackItemData) {
  return (
    <div>
      <div className="flex flex-row gap-3 items-center mb-2">
        <div className="relative h-10 w-10">
          <Image alt={`Icon of ${props.name}`} src={props.iconSrc} fill />
        </div>

        <div className="text-xl font-semibold">{props.name}</div>
      </div>
      <div className="flex flex-row gap-3">
        <div>
          <div className="w-10" />
        </div>
        <div className="flex-grow">{props.testimony}</div>
      </div>
    </div>
  )
}
