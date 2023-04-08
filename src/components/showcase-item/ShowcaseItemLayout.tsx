import { ReactNode } from 'react'

export default function ShowcaseItemLayout(props: {
  /**
   * Defaults to "left"
   */
  previewPosition: 'left' | 'right'
  /**
   * Preview of the item to showcase
   */
  preview: ReactNode
  /**
   * Element holding the details of the item being showcased
   */
  details: ReactNode
}) {
  if (props.previewPosition === 'left') {
    return (
      <div className="grid grid-cols-3 gap-3">
        <div className="col-span-2 flex flex-row justify-end">
          {props.preview}
        </div>
        <div className="flex flex-row justify-start">{props.details}</div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-3 gap-3">
      <div className="flex flex-row justify-end">{props.details}</div>
      <div className="flex flex-row justify-start col-span-2">
        {props.preview}
      </div>
    </div>
  )
}
