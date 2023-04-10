import { createElement, ReactNode } from 'react'
import classnames from 'classnames'

function Tag(props: { children: ReactNode }) {
  return <>&lt;{props.children}&gt;</>
}

export default function FakeElement(props: {
  children?: ReactNode
  name: ReactNode
  className?: string
  tagClass?: string

  /**
   * Defaults to `div`
   */
  as?: 'div' | 'span'
}) {
  if (!props.children) {
    return createElement(
      props.as ?? 'div',
      {
        className: classnames(props.className, props.tagClass),
      },
      <Tag>{props.name}&nbsp;/</Tag>
    )
  }

  return createElement(
    props.as ?? 'div',
    {
      className: props.className,
    },
    <>
      <span className={props.tagClass}>
        <Tag>{props.name}</Tag>
      </span>
      {props.children}
      <span className={props.tagClass}>
        <Tag>/{props.name}</Tag>
      </span>
    </>
  )
}
