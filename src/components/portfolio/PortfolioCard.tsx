import { ReactNode } from 'react'
import classNames from 'classnames'

export default function PortfolioCard(props: {
  left: ReactNode
  right: ReactNode
  larger: 'left' | 'right'
}) {
  return (
    <div className="grid grid-cols-5 grid-rows-1 rounded-lg drop-shadow-md">
      <div className={props.larger === 'left' ? 'col-span-3' : 'col-span-2'}>
        {props.left}
      </div>
      <div className="col-auto">{props.right}</div>
    </div>
  )
}
