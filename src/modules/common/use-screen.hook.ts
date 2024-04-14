import findLastIndex from 'lodash/findLastIndex'
import { useMemo } from 'react'
import { useWindowSize } from 'react-use'

type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
interface BreakpointEntry {
  breakpoint: Breakpoint
  dimensions: number
}

/*
 * sm-xl breakpoint values are from https://v1.tailwindcss.com/docs/breakpoints
 * The rest are from https://react-bootstrap.netlify.app/docs/layout/breakpoints/#available-breakpoints
 *
 * TODO find a way to extract the sm-xl breakpoint programmatically
 */
const SORTED_BREAKPOINTS: BreakpointEntry[] = [
  {
    breakpoint: 'xs',
    dimensions: 0,
  },
  {
    breakpoint: 'sm',
    dimensions: 640,
  },
  {
    breakpoint: 'md',
    dimensions: 768,
  },
  {
    breakpoint: 'lg',
    dimensions: 1024,
  },
  {
    breakpoint: 'xl',
    dimensions: 1280,
  },
  {
    breakpoint: 'xxl',
    dimensions: 1400,
  },
]

function generateBoolMap(): Record<Breakpoint, boolean> {
  return {
    xs: false,
    sm: false,
    md: false,
    lg: false,
    xl: false,
    xxl: false,
  }
}

/**
 * Util for detecting what bootstrap breakpoint the screen is currently in.
 * Based the mechanism on https://quasar.dev/options/screen-plugin#screen-api
 */
export function useScreen() {
  const { width } = useWindowSize()

  const bpIdx = useMemo(
    () => findLastIndex(SORTED_BREAKPOINTS, (bp) => width >= bp.dimensions),
    [width],
  )

  const gtMap = useMemo(() => {
    const map = generateBoolMap()

    for (let i = 0; i < SORTED_BREAKPOINTS.length - 1; i++) {
      map[SORTED_BREAKPOINTS[i].breakpoint] = i < bpIdx
    }

    return map
  }, [bpIdx])

  const ltMap = useMemo(() => {
    const map = generateBoolMap()

    for (let i = 0; i < SORTED_BREAKPOINTS.length - 1; i++) {
      map[SORTED_BREAKPOINTS[i].breakpoint] = i > bpIdx
    }

    return map
  }, [bpIdx])

  const isMap = useMemo(() => {
    const map = generateBoolMap()

    const bp = SORTED_BREAKPOINTS[bpIdx]
    map[bp.breakpoint] = true

    return map
  }, [bpIdx])

  return useMemo(() => {
    return {
      ...isMap,
      gt: gtMap,
      lt: ltMap,
    }
  }, [gtMap, ltMap, isMap])
}
