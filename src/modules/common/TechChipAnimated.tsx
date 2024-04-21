import TechChip, { TechChipProps } from '@/modules/common/TechChip'
import cnBind from 'classnames/bind'
import style from './TechChipAnimated.module.scss'

const classnames = cnBind.bind(style)

export default function TechChipAnimated({
  isVisible,
  delay = 0,
  className,
  ...techChipProps
}: TechChipProps & {
  isVisible?: boolean
  delay?: number
}) {
  return (
    <TechChip
      {...techChipProps}
      className={classnames(
        className,
        {
          [style['not-visible']]: !isVisible,
        },
        style['animated-tech-chip'],
        `delay-[${delay}ms]`,
      )}
    />
  )
}
