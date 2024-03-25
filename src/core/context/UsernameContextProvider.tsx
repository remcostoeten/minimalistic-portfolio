import { createContext, ReactNode } from "react"

// Create a context for the username
export const UsernameContext = createContext("")

// Create a provider component for the UsernameContext
export const UsernameProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <UsernameContext.Provider value={""}>{children}</UsernameContext.Provider>
  )
}
