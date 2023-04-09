import Image from 'next/image'

export interface TechStackItemData {
  iconSrc: string
  name: string
  testimony: string
}

export default function TechStackItem(props: TechStackItemData) {
  return (
    <div className="grid grid-cols-12 gap-2">
      <div className="relative">
        <Image alt={`Icon of ${props.name}`} src={props.iconSrc} fill />
      </div>
      <div className="col-span-10">
        <div className="text-xl font-semibold">{props.name}</div>
      </div>

      <div className="col-start-2 col-span-10">{props.testimony}</div>
    </div>
  )
}
