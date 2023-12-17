import { Badge } from "@/components/ui/badge"

export default function Component() {
    return (
        <aside className=" w-max text-white border-l-1 bg-[#121212] border-zinc-800 border-r-1 min-h-screen">
            <div className="flex items-center justify-between p-4">
                <div className="flex items-center border border-zinc-800     p-2 rounded-lg">
                    <SearchIcon className="text-[#5e5ce6] mr-2" />
                    <input
                        aria-label="Search"
                        className="bg-transparent flex-1 text-white placeholder-gray-400 border-none focus:ring-0"
                        placeholder="Search .."
                        type="text"
                    />
                    <button className="ml-2 bg-[#3a3a3c] text-white px-3 py-1 rounded-lg">
                        <PlusIcon className="text-white" />
                    </button>
                </div>
            </div>
            <div className="overflow-y-auto">
                <div className="p-4 space-y-4">
                    <div className="border p-4 rounded-lg space-y-2 bg-[##151817] border-neutral-800">
                        <div className="flex items-center space-x-2">
                            <TextIcon className="text-gray-400 w-6 h-6" />
                            <span className="text-sm font-semibold">React Component</span>
                        </div>
                        <p className="text-gray-400 text-xs">Sample React component</p>
                        <Badge className="text-xs" variant="secondary">
                            Programming
                        </Badge>
                    </div>
                </div>
            </div>
        </aside >
    )
}

function PlusIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
        </svg>
    )
}


function TextIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M17 6.1H3" />
            <path d="M21 12.1H3" />
            <path d="M15.1 18H3" />
        </svg>
    )
}

function SearchIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
        </svg>
    )
}
