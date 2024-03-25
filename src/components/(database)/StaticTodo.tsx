"use client"

import React, { useEffect, useRef, useState } from "react"
import { Checkbox, Textarea } from "@nextui-org/react"
import { toast } from "sonner"

import { GhostButton } from "../core/buttons"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

interface Todo {
  title: string
  notes: string
  checked: boolean
  focused: boolean
  open: boolean
}

export default function StaticTodo() {
  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    toast.success("WiP, experimenting")
  }, [])

  const focusItem = (index: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo, i) => ({
        ...todo,
        open: false,
        focused: i === index,
      }))
    )
  }

  const openItem = (index: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo, i) => ({
        ...todo,
        focused: false,
        open: i === index,
      }))
    )
    setTimeout(() => {
      const titleField = document.getElementById(`titleField${index}`)
      titleField && titleField.focus()
    }, 10)
  }

  const defocusItems = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => ({
        ...todo,
        focused: false,
        open: false,
      }))
    )
  }

  const removeItem = (index: number) => {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index))
    setTimeout(() => defocusItems(), 10)
  }

  const addItem = () => {
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        title: "",
        notes: "",
        checked: false,
        focused: false,
        open: false,
      },
    ])
    setTimeout(() => openItem(todos.length), 10)
  }

  return (
    <div className="min-w-screen min-h-screen bg-gray-800 flex items-center justify-center px-5 py-5">
      <div
        className="w-full mx-auto rounded-lg border border-gray-700 p-8 lg:py-12 lg:px-14 text-gray-300"
        style={{ maxWidth: 800 }}
        data-x-data="app()"
        data-x-init="addItem()"
      >
        <div className="mb-10">
          <h1 className="text-2xl font-bold">
            <i className="mdi mdi-star text-yellow-300 text-3xl leading-none align-bottom"></i>{" "}
            Todos
          </h1>
        </div>
        <div className="mb-10">
          {todos.length ? (
            <ul onClick={defocusItems} className="-mx-1">
              {todos.map((item, index) => (
                <li
                  onClick={() => focusItem(index)}
                  onDoubleClick={() => openItem(index)}
                  className={`px-2 py-2 rounded transition-all flex text-md ${
                    item.focused ? "bg-indigo-800" : ""
                  } ${
                    item.open
                      ? "bg-gray-700 shadow-lg px-4 py-4 my-10 -mx-2"
                      : "mb-1 cursor-pointer"
                  }`}
                  key={index}
                >
                  <div className="flex-none w-10 leading-none">
                    <Checkbox
                      type="checkbox"
                      checked={item.checked}
                      onClick={() => {
                        item.checked = !item.checked
                      }}
                    />
                  </div>
                  <div className="flex-grow max-w-full">
                    <div className="w-full leading-none">
                      <h3
                        className={`text-md leading-none truncate w-full pr-10 ${
                          item.title.length ? "text-gray-300" : "text-gray-500"
                        }`}
                        data-x-text="item.title||'New todo...'"
                        data-x-show="!item.open"
                      >
                        {item.title || "New todo..."}
                      </h3>
                      <Input
                        type="text"
                        data-x-show="item.open"
                        className="text-md w-full bg-transparent text-gray-300 leading-none focus:outline-none mb-2"
                        data-x-model="item.title"
                        id={`titleField${index}`}
                        placeholder="New todo..."
                      />
                    </div>
                    <div className="w-full" data-x-show="item.open">
                      <Textarea
                        className="text-md w-full bg-transparent text-gray-300 leading-tight focus:outline-none"
                        rows={10}
                        data-x-model="item.notes"
                        placeholder="Notes"
                      ></Textarea>
                    </div>
                    <div
                      className="w-full flex justify-end"
                      data-x-show="item.open"
                    >
                      <GhostButton onClick={() => removeItem(index)}>
                        <i className="mdi mdi-trash-can-outline"></i>
                      </GhostButton>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No todos</p>
          )}
        </div>
        <div className="flex justify-center">
          <Button
            className="py-1 px-10 border border-gray-800 hover:border-gray-700 rounded leading-none focus:outline-none text-xl"
            onClick={addItem}
          >
            Add todo <i className="mdi mdi-plus"></i>
          </Button>
        </div>
      </div>
    </div>
  )
}
