"use client"

import React, { useEffect, useState } from "react"
import { fadeScaleUp, GridIn, smoothFadeUp } from "@/core/utillities/animations"
import { m } from "framer-motion"

import { WorkExperience } from "@/core/config/experience"

export default function ExperienceItems() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true)
    }, 333)
    return () => clearTimeout(timeout)
  }, [])

  const highlightVariants = {
    initial: {
      borderColor: "transparent",
    },
    animate: {
      borderColor: "#3182CE",
    },
  }

  return (
    <m.div
      className="grid gap-4 overflow-hidden highlighted !border-0"
      variants={GridIn}
      initial="initial"
      animate={show ? "animate" : "initial"}
    >
      {WorkExperience.map((work, index) => (
        <m.div
          key={index}
          className={`self-stretch  highligted  grid--card dark:grid--card dark:border-dark  flex w-full flex-col grid--card-inner  border p-card-inner card-inner rounded-card-inner ${
            work.highlight ? "highlighted" : ""
          }`}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{}}
        >
          <div className="flex w-full flex-grow flex-row max-md:max-w-full items-baseline justify-start gap-12">
            <time
              className="libre experience-title text-16"
              style={{ whiteSpace: "nowrap" }}
            >
              <span className="font-[600]">{work.date}</span>
            </time>
            <div
              className="sub-title text-16 leading-25"
              style={{ whiteSpace: "nowrap" }}
            >
              <span className="libre font-[600]">{work.company}</span> <br />{" "}
              {work.title} <br />
            </div>
          </div>
        </m.div>
      ))}
    </m.div>
  )
}
