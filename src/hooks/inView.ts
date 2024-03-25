import { useEffect } from "react"
import { useActiveSectionContext } from "@/core/utillities/SectionObserver"
import { useInView } from "react-intersection-observer"

import { SectionName } from "@/core/types/types"

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold,
  })
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext()

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName)
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName])

  return {
    ref,
  }
}
