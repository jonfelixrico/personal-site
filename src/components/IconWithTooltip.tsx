import Image from 'next/image'
import Tooltip from 'rc-tooltip'

export default function IconWithTooltip(props: {
  src: string
  alt?: string
  tooltipLabel: string
  className?: string
}) {
  return (
    <Tooltip
      overlay={<span>{props.tooltipLabel}</span>}
      trigger={['click', 'hover']}
      placement="top"
      mouseLeaveDelay={0}
    >
      <div className="relative h-6 w-6 cursor-help">
        <Image
          alt={props.alt ?? props.tooltipLabel}
          src={props.src}
          fill
          className={props.className}
        />
      </div>
    </Tooltip>
  )
}
