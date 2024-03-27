import { ReactNode, createContext, useContext, useState } from "react";

type StateType = ReturnType<typeof useState<string>>

const ActiveSectionContext = createContext<null | StateType>(null)

export function ActiveSectionProvider ({
  children
}: {
  children: ReactNode
}) {
  const state = useState<string>()
  return <ActiveSectionContext.Provider value={state}>
    {children}
  </ActiveSectionContext.Provider>
}

export function useActiveSelection(): StateType {
  return useContext(ActiveSectionContext) ?? ['', () => {}]
}
