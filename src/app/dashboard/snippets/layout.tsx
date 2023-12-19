import AllSnippets from '@/components/dashboard/snippets/AllSnippets'
import CategoryForm from '@/components/dashboard/snippets/CreateSnippetCategory'
import NewSnippet from '@/components/dashboard/snippets/NewSnippet'
import React from 'react'

export default function SnippetLayout({ children }) {
    return (
        <div className='flex gap-2 '>
            <AllSnippets />
            <div className='flex flex-col space-y-4'>
                {children}
            </div>
        </div>
    )
}
