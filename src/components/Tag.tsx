import { createElement, ReactNode } from 'react'

export default function Tag(props: {
  children?: ReactNode
  name: string
  className?: string
  tag?: string
}) {
  return createElement(
    props.tag ?? 'div',
    {
      className: props.className,
    },
    <>
      &lt;{props.name}&gt;{props.children}&lt;/{props.name}&gt;
    </>
  )
}
