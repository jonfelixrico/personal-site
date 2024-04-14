import Image from 'next/image'

export default function TechChip({
  src,
  label,
}: {
  src: string
  label: string
}) {
  return (
    <div className="flex flex-row gap-x-1 items-center bg-app-2 px-2 py-1 rounded-lg text-sm font-semibold">
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
