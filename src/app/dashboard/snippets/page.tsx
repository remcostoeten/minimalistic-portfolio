import AllSnippets from '@/components/dashboard/snippets/AllSnippets'
import CategoryForm from '@/components/dashboard/snippets/CreateSnippetCategory'
import NewSnippet from '@/components/dashboard/snippets/NewSnippet'
import React from 'react'

export default function page() {
    return (
        <>
            <AllSnippets />
            <CategoryForm />
            <NewSnippet />
        </>
    )
}
