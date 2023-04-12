import IconWithTooltip from '@/components/IconWithTooltip'

interface Tech {
  iconSrc: string
  name: string
  iconClass?: string
}

export default function FeaturedTemplateTechList(props: { items: Tech[] }) {
  return (
    <div className="flex flex-row gap-3">
      {props.items.map(({ iconSrc, iconClass, name }) => (
        <IconWithTooltip
          src={iconSrc}
          tooltipLabel={name}
          iconClass={iconClass}
          className="relative h-6 w-6"
          key={name}
        />
      ))}
    </div>
  )
}
