import { ReactNode } from 'react'
import classnames from 'classnames'

export default function Card(props: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={classnames(
        'rounded-lg shadow-md overflow-hidden bg-white',
        props.className
      )}
    >
      {props.children}
    </div>
  )
}
