"use client"

import * as React from "react"
import { SliderProps } from "@radix-ui/react-slider"
import { motion } from "framer-motion"

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

interface MaxLengthSelectorProps {
  defaultValue: SliderProps["defaultValue"]
}

export function MaxLengthSelector({ defaultValue }: MaxLengthSelectorProps) {
  const [value, setValue] = React.useState(defaultValue)

  return (
    <div className="grid gap-2 pt-2">
      <HoverCard openDelay={200}>
        <HoverCardTrigger asChild>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.9, delay: 1.25 }}
          >
            <div className="flex items-center justify-between">
              <Label className="pb-2 " htmlFor="maxlength">
                Useless slider.
              </Label>
              <span className="w-12 rounded-md border border-transparent px-2 py-0.5 text-right text-sm text-muted-foreground hover:border-border">
                {value}
              </span>
            </div>
            <Slider
              id="maxlength"
              max={4000}
              defaultValue={value}
              step={10}
              onValueChange={setValue}
              className="[&_[role=slider]] mt-1 pt-1:h-4 [&_[role=slider]]:w-4"
              aria-label="Maximum Length"
            />
          </motion.div>
        </HoverCardTrigger>
        <HoverCardContent
          align="start"
          className="w-[260px] text-sm"
          side="left"
        >
          I also dont know why.
        </HoverCardContent>
      </HoverCard>
    </div>
  )
}
