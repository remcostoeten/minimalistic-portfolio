import prisma from '@/prisma/prisma';
import { toast } from 'sonner'

export async function getTodos() {
    try {
        const todos = await prisma.todo.findMany()
        return { todos }
    } catch (error) {
        return { error }
    }
}

type Todo = {
    id: number;
    title: string;
    category: string;
    done: boolean;
};

type CreateTodoResult = { task: Todo } | { error: any };

export async function createTodo(
    title: string,
    category: string
): Promise<CreateTodoResult> {
    try {
        const task = await prisma.todo.create({ data: { title, category } });
        return { task };
    } catch (error) {
        return { error };
        toast.error("dwadd");
    }
}

export async function updateTodoStatus(id: number, done: boolean) {
    try {
        const task = await prisma.todo.update({ where: { id }, data: { done } })
        return { task }
    } catch (error) {
        return { error }
    }
}

export async function deleteTodoById(id: number) {
    try {
        const task = await prisma.todo.delete({ where: { id } })
        return { task }
    } catch (error) {
        return { error }
    }
}