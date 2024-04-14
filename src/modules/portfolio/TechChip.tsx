import Image from 'next/image'

export default function TechChip({
  src,
  label,
}: {
  src: string
  label: string
}) {
  return (
    <div className="flex flex-row gap-x-1 items-center">
      <div
        className="relative"
        style={{
          height: '1.25em',
          width: '1.25em',
        }}
      >
        <Image fill src={src} alt={`Icon of ${label}`} />
      </div>
      <div>{label}</div>
    </div>
  )
}
