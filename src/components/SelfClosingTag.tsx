import { createElement, ReactNode } from 'react'

export default function SelfClosingTag(props: {
  children?: ReactNode
  className?: string
  tag?: string
}) {
  return createElement(
    props.tag ?? 'div',
    {
      className: props.className,
    },
    <>&lt;{props.children}&nbsp;/&gt;</>
  )
}
