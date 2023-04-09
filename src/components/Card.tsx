import { ReactNode } from 'react'

export default function Card(props: { children: ReactNode }) {
  return (
    <div className="rounded-lg shadow-md overflow-hidden bg-white">
      {props.children}
    </div>
  )
}
