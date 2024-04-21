import Image from 'next/image'
import cnBind from 'classnames/bind'
import style from './TechChip.module.scss'

const classnames = cnBind.bind(style)

export default function TechChip({
  src,
  label,
}: {
  src: string
  label: string
}) {
  return (
    <div
      className={classnames(
        'flex flex-row gap-x-1 items-center bg-app-2 px-2 py-1 rounded-lg text-sm font-semibold',
        style['chip'],
      )}
    >
      <div
        className="relative"
        style={{
          height: '1.75em',
          width: '1.75em',
        }}
      >
        <Image
          fill
          src={src}
          alt={`Icon of ${label}`}
          className="object-contain"
        />
      </div>
      <div>{label}</div>
    </div>
  )
}
