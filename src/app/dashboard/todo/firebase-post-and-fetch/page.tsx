'use client'
import { NewCategory } from "./NewCategory";
import { NewItemInCategory } from "./NewItemInCategory";
import { CategoriesList } from "./DisplayCategory";
import DisplayItemInCategory from "./DisplayItemInCategory";
import Link from "next/link";
import { auth } from "@/core/(database)/firebase";

export default function Page() {
    const user = auth.currentUser;
    const admin = user?.email === process.env.NEXT_PUBLIC_ADMIN_EMAIL;
    if (!admin) {
        return (
            <div className="flex flex-col items-center ">
                <h1 className="text-2xl font-bold">You are not authorized to access this page.</h1>
                <Link href="/dashboard" className="text-blue-500 hover:underline">Go back to dashboard
                </Link>
            </div>
        );
    }

    return (
        <>
            <div className="flex  items-start gap-4">
                <NewItemInCategory />
                <NewCategory />
            </div>
            <CategoriesList />
            <DisplayItemInCategory />
        </>
    );
}