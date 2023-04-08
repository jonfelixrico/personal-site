import { ReactNode } from 'react'

/**
 * Coming from a Vue background, I find the way to write conditionals in React to be so FILTHY.
 * This is to make things easier on the eyes.
 *
 * @param props
 * @returns
 */
export default function ConditionallyRender(props: {
  /**
   * Render the component?
   */
  render?: boolean
  /**
   * The component in question
   */
  children: ReactNode
}) {
  if (props.render && props.children) {
    /*
     * Need to wrap with fragments since VSCode is complaining that just returning ReactNode is
     * not a valid JSX component.
     */
    return <>{props.children}</>
  }

  // Can't just return undefined for the reasons above. Looks like it's JSXElement | null.
  return null
}
