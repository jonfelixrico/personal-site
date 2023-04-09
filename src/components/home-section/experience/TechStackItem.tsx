import Image from 'next/image'

export interface TechStackItemData {
  iconSrc: string
  name: string
  testimony: string
}

export default function TechStackItem(props: TechStackItemData) {
  return (
    <div className="flex flex-row">
      <div>
        <Image alt={`Icon of ${props.name}`} src={props.iconSrc} />
      </div>
      <div className="flex-grow">
        <div>{props.name}</div>
        <div>{props.testimony}</div>
      </div>
    </div>
  )
}
