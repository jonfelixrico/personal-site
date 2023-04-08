import { ReactNode } from 'react'
import ConditionallyRender from '../ConditionallyRender'

interface ShowcaseItemProps {
  previewPosition: 'left' | 'right'
  preview: ReactNode
  details: ReactNode
}

export default function ShowcaseItemLayout(props: ShowcaseItemProps) {
  return (
    <div className="grid grid-cols-3 gap-3">
      <ConditionallyRender render={props.previewPosition === 'right'}>
        {props.details}
      </ConditionallyRender>

      <div className="col-span-2">{props.preview}</div>

      <ConditionallyRender render={props.previewPosition === 'left'}>
        {props.details}
      </ConditionallyRender>
    </div>
  )
}
