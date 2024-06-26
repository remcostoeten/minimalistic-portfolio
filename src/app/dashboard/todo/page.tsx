"use client"

import { getTodos } from "@/core/utillities/todo"
import { Todo } from "@prisma/client"

import IndividualTask from "@/components/todos/IndividualTodo"
import { TodoForm } from "@/components/todos/todo-form"
import TodoList from "@/components/todos/todo-list"

export default async function IndexPage() {
  const { todos } = await getTodos()

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Beautifully Todto App.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Create your Todo list.
        </p>
      </div>
      <IndividualTask />
      <TodoForm />
      <ul className="flex h-full w-full flex-col overflow-hidden bg-popover text-popover-foreground rounded-lg border shadow-md">
        {todos?.map((todo: Todo) => <TodoList key={todo?.id} todo={todo} />)}
      </ul>
    </section>
  )
}
