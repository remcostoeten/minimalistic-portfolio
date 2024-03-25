"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@nextui-org/react"
import { motion } from "framer-motion"
import { toast } from "sonner"

import { GhostButton } from "../core/buttons"
import Flexer from "../core/layout/Flexer"

export default function Greeting() {
  useEffect(() => {
    const timer = setTimeout(() => {
      toast("Site is under constructions", {
        description: "And is strictly for testing purposes only.",
        duration: 2000,
      })
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, x: 10, y: 15 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ delay: 0.7, duration: 1, type: "spring", stiffness: 25 }}
    >
      <Flexer useMotion gap="10">
        <motion.h3
          className="border-box pb-[32px] text-gray-100 block font-sans text-[28px]  leading-9 tracking-tighter whitespace-pre-wrap break-words antialiased w-[600px]"
          initial={{ opacity: 0, x: 5, y: 15 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{
            delay: 0.7,
            duration: 2,
            type: "spring",
            stiffness: 100,
          }}
        >
          Some slogan that should be very deep and motivational but deep down we
          know we all think they are cringe.
        </motion.h3>
        <Button className="w-fit geist" variant="ghost">
          <Link href="#contact">Get in touch</Link>
        </Button>
      </Flexer>
    </motion.div>
  )
}
