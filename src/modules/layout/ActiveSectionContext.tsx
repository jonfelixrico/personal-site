import { ReactNode, createContext, useContext, useState } from "react";

const ActiveSectionContext = createContext<null | ReturnType<typeof useState<string>>>(null)

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

export function useActiveSelection() {
  return useContext(ActiveSectionContext)
}
