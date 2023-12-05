import { createContext } from "react"

interface AppContextProps {
  isTypescript: boolean
  setIsTypescript: (val: boolean) => void
  componentName: string
  setComponentName: (val: string) => void
  showNotification: boolean
  setShowNotification: (val: boolean) => void
  isClientComponent: boolean
  setIsClientComponent: (val: boolean) => void
  wrapInFunctionComponent: boolean
  setWrapInFunctionComponent: (val: boolean) => void
  typeOrInterface: boolean
  setTypeOrInterface: (val: boolean) => void
}

export const AppContext = createContext<AppContextProps | undefined>(undefined)
