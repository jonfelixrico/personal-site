import { createElement, ReactNode } from 'react'

export default function FakeElement(props: {
  children?: ReactNode
  name: string
  className?: string
  tag?: string
}) {
  if (!props.children) {
    return createElement(
      props.tag ?? 'div',
      {
        className: props.className,
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
      &lt;{props.name}&gt;{props.children}&lt;/{props.name}&gt;
    </>
  )
}
