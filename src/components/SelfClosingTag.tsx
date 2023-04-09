import { ReactNode } from 'react'

export default function SelfClosingTag(props: { children?: ReactNode }) {
  return <>&lt;{props.children}&nbsp;&gt;</>
}
