import { Fragment } from "react"
import { deleteTodoAction } from "@/core/actions/TodoActions"

import { Button, buttonVariants } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DropdownTodo({ id }: { id: number }) {
  const deleteTodo = () => deleteTodoAction(id)
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">...</Button>
      </DropdownMenuTrigger>
      {/* @ts-ignore */}
      <DropdownMenuContent className="w-56">
        {/* <DropdownMenuItem>Edit</DropdownMenuItem> */}
        <Fragment>
          <DropdownMenuItem onClick={deleteTodo}>Delete</DropdownMenuItem>
        </Fragment>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
