import { createElement, ReactNode } from 'react'
import classnames from 'classnames'

export default function FakeElement(props: {
  children?: ReactNode
  name: ReactNode
  className?: string
  tagClass?: string
  tag?: string
}) {
  if (!props.children) {
    return createElement(
      props.tag ?? 'div',
      {
        className: classnames(props.className, props.tagClass),
      },
      <>&lt;{props.name}&nbsp;/&gt;</>
    )
  }

  return createElement(
    props.tag ?? 'div',
    {
      className: props.className,
    },
    <>
      <span className={props.tagClass}>&lt;{props.name}&gt;</span>
      <span>{props.children}</span>
      <span className={props.tagClass}>&lt;/{props.name}&gt;</span>
    </>
  )
}
