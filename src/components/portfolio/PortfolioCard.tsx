import { ReactNode } from 'react'
import classNames from 'classnames'

export default function PortfolioCard(props: {
  left: ReactNode
  right: ReactNode
  larger: 'left' | 'right'
}) {
  if (props.larger === 'left') {
    return (
      <div className="grid grid-col-5 rounded-lg drop-shadow-md">
        <div className={props.larger === 'left' ? 'row-span-3' : 'row-span-2'}>
          {props.left}
        </div>
        <div className="row-auto">{props.right}</div>
      </div>
    )
  }

  return
}
