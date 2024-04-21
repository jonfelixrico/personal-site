import TechChip, { TechChipProps } from '@/modules/common/TechChip'
import cnBind from 'classnames/bind'
import style from './TechChipAnimated.module.scss'

const classnames = cnBind.bind(style)

export default function TechChipAnimated({
  isVisible,
  delay = 0,
  ...techChipProps
}: TechChipProps & {
  isVisible?: boolean
  delay?: number
}) {
  return (
    <div
      className={classnames(
        {
          [style['not-visible']]: !isVisible,
        },
        style['animated-tech-chip'],
      )}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      <TechChip {...techChipProps} />
    </div>
  )
}
