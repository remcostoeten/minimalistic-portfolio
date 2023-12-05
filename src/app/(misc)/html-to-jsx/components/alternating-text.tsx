"use client"

import React, { useEffect, useRef } from "react"
const Typewriter: React.FC = () => {
  const typedRef = useRef<HTMLSpanElement | null>(null)

  // useEffect(() => {
  //   if (typedRef.current) {
  //     const options = {
  //       strings: ["JSX.", "TSX."],
  //       typeSpeed: 100,
  //       startDelay: 0,
  //       backSpeed: 60,
  //       backDelay: 2000,
  //       loop: true,
  //       cursorChar: "|",
  //       contentType: "html",
  //     }

  //     const typed = new Typed(typedRef.current, options)

  //     return () => {
  //       typed.destroy()
  //     }
  //   }
  // }, [])

  return (
    <span className="type-wrap">
      <span
        ref={typedRef}
        style={{ whiteSpace: "pre" }}
        className="typed"
      ></span>
    </span>
  )
}

export default Typewriter
