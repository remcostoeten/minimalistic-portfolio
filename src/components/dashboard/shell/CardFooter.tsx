import Link from "next/link"
import { GitCommitIcon } from "lucide-react"
import { Drawer } from "vaul"

import { Button } from "@/components/ui/button"

type CardFooterProps = {
  href?: string
  button?: string
}

export default function CardFooter({ href, button }: CardFooterProps) {
  return (
    <Drawer.Root shouldScaleBackground>
      <footer className="bg-[#1a1a1a] border-dash border-t p-4 flex justify-between rounded-b">
        <div className="flex items-center space-x-6">
          <Link className="flex items-center space-x-2 text-white" href="#">
            <GitCommitIcon className="h-5 w-5" />
            <Drawer.Trigger asChild>
              <span>Repository settings</span>
            </Drawer.Trigger>
          </Link>
          <Drawer.Portal>
            <Drawer.Overlay className="fixed inset-0 bg-black/40" />
            <Drawer.Content className="z-[999] fixed bottom-0 left-0 right-0 mt-24 flex h-[96%] flex-col rounded-t-[10px] bg-[#151515]">
              <Drawer.Close className="text-white text-xl">Close</Drawer.Close>
            </Drawer.Content>
          </Drawer.Portal>
        </div>
        <div className="flex space-x-2">
          <Link href={href} target="_blank">
            <Button className="border bg-transparent border-white text-white flex items-center space-x-2">
              {button}
            </Button>
          </Link>
        </div>
      </footer>
    </Drawer.Root>
  )
}
