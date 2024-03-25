import { useContext, useState } from "react"

import { UsernameContext } from "./UsernameContextProvider"

export function useUsername() {
  const context = useContext(UsernameContext)

  if (context === undefined) {
    throw new Error("useUsername must be used within a UsernameProvider")
  }

  const [username, setUsername] = useState(context)

  return [username, setUsername]
}
