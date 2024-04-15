import TechChip from '@/modules/portfolio/TechChip'

export default function SkillFooterItem({
  title,
  items,
}: {
  title: string
  items: {
    label: string
    src: string
  }[]
}) {
  return (
    <div className="rounded bg-app-3 gap-2 p-2 flex flex-col">
      <div className="text-xs">{title}</div>
      <div className="flex flex-row flex-wrap gap-2">
        {items.map(({ label, src }, index) => (
          <TechChip key={index} label={label} src={src} />
        ))}
      </div>
    </div>
  )
}
