'use client';
import { NewThought } from "@/components/dashboard/snippets/NewSnippet";
import Contributions from "@/components/data/github/GithubContributions";
import { Button } from "@/components/ui/button"
import { GITHUB_ACCOUNTS } from "@/core/(database)/github";
import { UndoIcon, CameraIcon, ArrowRightIcon } from "lucide-react";
import { useState } from "react"

export default function Page() {
    const [clear, setClear] = useState(false)

    const clearInput = () => {
        setClear(true)
    }

    return (
        <>
            <NewThought />
            <div className='space-y-10'>
                {GITHUB_ACCOUNTS?.filter((account) => account?.is_active).map(
                    (account, index) => (
                        <Contributions
                            key={index}
                            username={account?.username}
                            type={account?.type}
                            endpoint={account?.endpoint}
                        />
                    )
                )}
            </div>   <div className="bg-[#1A1A1A] rounded-lg overflow-hidden">
                <div className="p-4">
                    <div className="text-white font-semibold text-lg">New Post</div>
                </div>
                <div className="bg-[#333333] p-4 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <UndoIcon onClick={clearInput} className="text-white" />
                        <CameraIcon className="text-white" />
                        <Button className="text-white bg-transparent hover:bg-[#444444]">More ▾</Button>
                    </div>
                    <ArrowRightIcon className="text-white" />
                </div>
            </div></>
    )
}

