import { revalidatePath } from "next/cache"
import { createTodo, deleteTodoById, updateTodoStatus } from "@/core/utillities/todo"

export async function createTodoAction(title: string, category: string) {
    const todo = {
        title: title,
        category: category,
    }

    await createTodo(title, category)
    revalidatePath("/")
}

export async function updateTodoStatusAction(id: number, done: boolean) {
    await updateTodoStatus(id, done)
    revalidatePath("/")
}

export async function deleteTodoAction(id: number) {
    await deleteTodoById(id)
    revalidatePath("/")
}