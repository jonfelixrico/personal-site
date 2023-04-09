import { createElement, ReactNode } from 'react'

export default function SelfClosingTag(props: {
  children?: ReactNode
  classNames?: string
  tag?: string
}) {
  return <>&lt;{props.children}&nbsp;/&gt;</>
}
