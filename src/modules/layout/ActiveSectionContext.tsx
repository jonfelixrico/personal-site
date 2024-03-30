'use client'

import { ReactNode, createContext, useCallback, useContext, useMemo } from 'react'
import { Section } from './section.enum'
import { useImmer } from 'use-immer'
import maxBy from 'lodash/maxBy'

type IntersectionMap = Record<string, {
  sectionId: Section,
  ratio: number
}>
type SetIntersectionData = (sectionId: Section, ratio: number) => void
type ContextType = {
  setIntersectionData: SetIntersectionData,
  activeSection: Section | null
}

const ActiveSectionContext = createContext<null | ContextType>(null)

export function ActiveSectionProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useImmer<IntersectionMap>({})

  const setIntersectionData = useCallback((sectionId: Section, ratio: number) => {
    setState(map => {
      map[sectionId] = {
        sectionId,
        ratio
      } 
    })
  }, [setState])

  const activeSection = useMemo(() => {
    return maxBy(Object.values(state), entry => entry.ratio)?.sectionId ?? null 
  }, [state])

  return (
    <ActiveSectionContext.Provider value={{
      activeSection,
      setIntersectionData
    }}>
      {children}
    </ActiveSectionContext.Provider>
  )
}

export function useActiveSection(): ContextType {
  return useContext(ActiveSectionContext) ?? {
    activeSection: null,
    setIntersectionData: () => {}
  }
}
