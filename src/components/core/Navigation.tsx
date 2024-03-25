"use client"

import Link from "next/link"
import { motion } from "framer-motion"

const links = [
  { name: "Home", hash: "/" },
  { name: "About", hash: "#about" },
  { name: "Projects", hash: "#projects" },
  { name: "Contact", hash: "#contact" },
  { name: "Blackjack", hash: "/blackjack" },
]

export default function Navigation({ link, index }) {
  return (
    <motion.nav
      initial={{
        opacity: 0,
        y: 10,
      }}
      transition={{
        duration: 0.4,
        delay: 0.8,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className="gap-4 menu-items items-center justify-start flex flex-row flex-nowrap h-auto  relative w-full p-0"
    >
      <motion.ul
        variants={{
          show: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        initial="hidden"
        animate="show"
        className="flex gap-4"
      >
        {links.map((link, index) => (
          <motion.li
            variants={{
              hidden: {
                opacity: 0,
                y: 10,
                x: 5,
              },
              show: {
                opacity: 1,
                y: 0,
                x: 0,
                transition: {
                  duration: 0.4,
                  delay: 0.8,
                },
              },
            }}
            key={index}
          >
            <Link href={link.hash} className="text-base  text-white">
              {link.name}
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </motion.nav>
  )
}
