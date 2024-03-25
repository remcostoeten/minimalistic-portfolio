// components/Icon.js
import React from "react"

type IconProps = {
  src: string | any
  alt: string
  width?: number
  height?: number
  name?: string
}

const Icon = ({ src, alt, ...props }: IconProps) => {
  return <img src={`icons/${src}.svg`} alt={alt} {...props} />
}

export default Icon
