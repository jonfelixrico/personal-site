import { ReactNode } from 'react'

export function FakeComment(props: { children?: ReactNode }) {
  return <>&#47;&#47;&nbsp;{props.children}</>
}
