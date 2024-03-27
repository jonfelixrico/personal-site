'use client'

import { ReactNode, createContext, useContext, useState } from "react";
import { Section } from "./section.enum";

type StateType = ReturnType<typeof useState<Section>>

const ActiveSectionContext = createContext<null | StateType>(null)

export function ActiveSectionProvider ({
  children
}: {
  children: ReactNode
}) {
  const state = useState<Section>()
  return <ActiveSectionContext.Provider value={state}>
    {children}
  </ActiveSectionContext.Provider>
}

export function useActiveSelection(): StateType {
  return useContext(ActiveSectionContext) ?? [undefined, () => {}]
}
