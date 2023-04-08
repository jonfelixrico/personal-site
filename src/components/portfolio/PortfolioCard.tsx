import { ReactNode } from 'react'

export function Content(props: {
  details: ReactNode
  preview: ReactNode
  reverse?: boolean
}) {
  if (!props.reverse) {
    return (
      <>
        <div className="col-span-3">{props.preview}</div>
        <div className="col-span-2">{props.details}</div>
      </>
    )
  }

  return (
    <>
      <div className="col-span-2">{props.details}</div>
      <div className="col-span-3">{props.preview}</div>
    </>
  )
}

export default function PortfolioCard(props: {
  details: ReactNode
  preview: ReactNode
  reverse?: boolean
}) {
  return (
    <div className="grid grid-cols-5 grid-rows-1 rounded-lg shadow-md overflow-hidden bg-white">
      <Content
        details={props.details}
        preview={props.preview}
        reverse={props.reverse}
      />
    </div>
  )
}
