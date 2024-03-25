// @ts-nocheck
"use client"

import React from "react"
import { motion, MotionValue } from "framer-motion"
import ts from "typescript"

const Wrapper = (props: {
  children:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | React.PromiseLikeOfReactNode
    | null
    | undefined
}) => {
  return <span className="word-wrapper">{props.children}</span>
}

const tagMap = {
  paragraph: "p",
  heading1: "h1",
  heading2: "h2",
}

const AnimatedCharacters = (props: { text: string; type: string | number }) => {
  const item = {
    hidden: {
      y: "200%",
      color: "#FFF",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
    },
    visible: {
      y: 0,
      color: "#FFF",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
    },
  }

  const splitWords = props.text.split(" ")

  const words: any[] = []

  for (const [, item] of splitWords.entries()) {
    words.push(item.split(""))
  }

  words.map((word) => {
    return word.push("\u00A0")
  })

  const Tag = tagMap[props.type]

  return (
    <Tag>
      {words.map((word, index) => {
        return (
          <Wrapper key={index}>
            {words[index]
              .flat()
              .map(
                (
                  element:
                    | string
                    | number
                    | boolean
                    | React.ReactElement<
                        any,
                        string | React.JSXElementConstructor<any>
                      >
                    | Iterable<React.ReactNode>
                    | React.ReactPortal
                    | React.PromiseLikeOfReactNode
                    | MotionValue<number>
                    | MotionValue<string>
                    | null
                    | undefined,
                  index: React.Key | null | undefined
                ) => {
                  return (
                    <span
                      style={{
                        overflow: "hidden",
                        display: "inline-block",
                      }}
                      key={index}
                    >
                      <motion.span
                        style={{ display: "inline-block" }}
                        variants={item}
                      >
                        {element}
                      </motion.span>
                    </span>
                  )
                }
              )}
          </Wrapper>
        )
      })}
      w{" "}
    </Tag>
  )
}

export default AnimatedCharacters
