"use client"

import { createTodoAction } from "@/core/actions/TodoActions"
import { zodResolver } from "@hookform/resolvers/zod"
import { cn } from "@nextui-org/react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const todoFormSchema = z.object({
  title: z.string().nonempty({ message: "Title is required" }),
  category: z.any().optional(),
  date: z.date().optional(),
})

type TodoFormValues = z.infer<typeof todoFormSchema>

const defaultValues: Partial<TodoFormValues> = {
  title: "",
  category: "",
  date: undefined,
}

export function TodoForm() {
  const form = useForm<TodoFormValues>({
    resolver: zodResolver(todoFormSchema),
    defaultValues,
  })

  async function onSubmit(data: TodoFormValues) {
    try {
      const title = data?.title
      const category = data?.category
      const date = data?.date
      if (!title || typeof title !== "string") return

      await createTodoAction(title, category)

      toast.success("Todo created successfully")

      form.reset()
    } catch (error) {
      toast.error("nope.jpg")
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex items-end gap-4"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="w-full max-w-lg">
              <FormLabel>Create a New Todo</FormLabel>
              <FormControl>
                <Input placeholder="todo" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem className="w-full max-w-lg">
              <FormLabel>Category</FormLabel>
              <FormControl>
                <Input placeholder="category" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="w-full max-w-lg">
              <FormLabel>Date</FormLabel>
              <FormControl>
                {/* @ts-ignore */}
                <Popover>
                  {/* @ts-ignore */}
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[280px] justify-start text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  {/* @ts-ignore */}
                  <PopoverContent className="w-auto p-0">
                    <FormField
                      control={form.control}
                      name="date"
                      render={({ field }) => (
                        <FormItem className="w-full flex flex-col max-w-lg">
                          <FormLabel>Date</FormLabel>
                          <FormControl>
                            <Popover>
                              <PopoverTrigger asChild>
                                <Button
                                  variant={"outline"}
                                  className={cn(
                                    "w-[280px] justify-start text-left font-normal",
                                    !field.value && "text-muted-foreground"
                                  )}
                                >
                                  <CalendarIcon className="mr-2 h-4 w-4" />
                                  {field.value ? (
                                    format(field.value, "PPP")
                                  ) : (
                                    <span>Pick a date</span>
                                  )}
                                </Button>
                              </PopoverTrigger>
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={(value: Date | undefined) => {
                                  if (value) {
                                    field.onChange(value)
                                  }
                                }}
                                initialFocus
                              />
                            </Popover>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit">Submit</Button>
                    <Button type="submit">Submit</Button>
                  </PopoverContent>
                </Popover>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
