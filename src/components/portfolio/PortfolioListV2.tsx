import { ReactNode } from 'react'
import { useResizeDetector } from 'react-resize-detector'

export default function PortfolioListV2() {
  const { width, ref } = useResizeDetector({
    handleHeight: false,
  })
  const heightStyle = {
    height: `${width}px`,
  }

  return (
    <div className="grid grid-cols-2 gap-3">
      <div ref={ref} style={heightStyle}>
        a
      </div>
      <div style={heightStyle}>b</div>
      <div style={heightStyle}>c</div>
      <div style={heightStyle}>d</div>
      <div style={heightStyle}>e</div>
    </div>
  )
}
