import Image from 'next/image'
import Tooltip from 'rc-tooltip'
import classnames from 'classnames'

export default function IconWithTooltip(props: {
  src: string
  alt?: string
  tooltipLabel: string
  className?: string
  iconClass?: string
}) {
  return (
    <Tooltip
      overlay={<span>{props.tooltipLabel}</span>}
      trigger={['click', 'hover']}
      placement="top"
      mouseLeaveDelay={0}
    >
      <div className={classnames('relative cursor-pointer', props.className)}>
        <Image
          alt={props.alt ?? props.tooltipLabel}
          src={props.src}
          fill
          className={props.iconClass}
        />
      </div>
    </Tooltip>
  )
}
