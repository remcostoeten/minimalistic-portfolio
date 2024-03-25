"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"

type CardHeaderProps = {
  title?: string
  button?: string
  toggleCardbody?: any
}

export default function CardHeader({
  title,
  button,
  toggleCardbody,
}: CardHeaderProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
    toggleCardbody()
  }

  return (
    <div className="bg-dash border-b border-dash rounded-t flex justify-between items-center p-4">
      <div className="flex items-center space-x-4">
        <CodeIcon className="text-white h-6 w-6" />
        <h1 className="text-white font-semibold">{title}</h1>
      </div>
      <div className="flex items-center space-x-4">
        <div className="bg-orange-500 rounded-full h-3 w-3" />
        <ChevronUpIcon
          onClick={handleToggle}
          className={`text-white h-6 w-6 transform ${isOpen ? "rotate-180" : ""}`}
        />
      </div>
    </div>
  )
}

// ... rest of the code
function CodeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}

function ChevronUpIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m18 15-6-6-6 6" />
    </svg>
  )
}
