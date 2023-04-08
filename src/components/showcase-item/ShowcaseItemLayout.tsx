import { ReactNode } from 'react'
import ConditionallyRender from '@components/ConditionallyRender'

export default function ShowcaseItemLayout(props: {
  /**
   * Defaults to "left"
   */
  previewPosition?: 'left' | 'right'
  /**
   * Preview of the item to showcase
   */
  preview: ReactNode
  /**
   * Description of the item to showcase
   */
  details: ReactNode
}) {
  return (
    <div className="grid grid-cols-3 gap-3">
      <ConditionallyRender render={props.previewPosition === 'right'}>
        {props.details}
      </ConditionallyRender>

      <div className="col-span-2">{props.preview}</div>

      <ConditionallyRender
        render={!props.previewPosition || props.previewPosition === 'left'}
      >
        {props.details}
      </ConditionallyRender>
    </div>
  )
}
