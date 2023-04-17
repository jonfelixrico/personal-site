import { RefObject, useEffect, useState } from 'react'
import { useScroll } from 'react-use'

export function useScrollYWithDirection(ref: RefObject<HTMLElement>) {
  const { y } = useScroll(ref)

  const [history, setHistory] = useState([0, 0])
  useEffect(() => {
    setHistory((state) => {
      return [state[1], y]
    })
  }, [y, setHistory])

  return {
    y,
    direction: history[1] > history[0] ? 'down' : 'up',
  }
}
