"use client"
"use client"

import * as React from "react"
import {
    ArrowDownIcon,
    ArrowRightIcon,
    ArrowUpIcon,
    CheckCircledIcon,
    CircleIcon,
    CrossCircledIcon,
    DotsHorizontalIcon,
    QuestionMarkCircledIcon,
    StopwatchIcon,
} from "@radix-ui/react-icons"
import { type ColumnDef } from "@tanstack/react-table"
import { toast } from "sonner"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { DataTable } from "@/components/data-table/data-table"
import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header"

const labels: {
    value: Transaction["title"]
    label: string
}[] = [
        {
            value: "bug",
            label: "Bug",
        },
        {
            value: "feature",
            label: "Feature",
        },
        {
            value: "documentation",
            label: "Documentation",
        },
    ]

interface Transaction {
    status: any
    id: number;
    title: string;
    amount: number;
    category: string;
}

interface TransactionsTableShellProps {
    data: Transaction[];
    pageCount: number;
}

export function TransactionsTableShell({ data, pageCount }: TransactionsTableShellProps) {

    const [isPending, startTransition] = React.useTransition()

    const [selectedRowIds, setSelectedRowIds] = React.useState<number[]>([])
    const columns = React.useMemo<ColumnDef<Transaction, unknown>[]>(
        () => [
            {
                id: "select",
                header: ({ table }) => (
                    <Checkbox
                        checked={table.getIsAllPageRowsSelected()}
                        onCheckedChange={(value) => {
                            table.toggleAllPageRowsSelected(!!value)
                            setSelectedRowIds((prev) =>
                                prev.length === data.length ? [] : data.map((row) => row.id)
                            )
                        }}
                        aria-label="Select all"
                        className="translate-y-[2px]"
                    />
                ),
                cell: ({ row }) => (
                    <Checkbox
                        checked={row.getIsSelected()}
                        onCheckedChange={(value) => {
                            row.toggleSelected(!!value)
                            setSelectedRowIds((prev) =>
                                value
                                    ? [...prev, row.original.id]
                                    : prev.filter((id) => id !== row.original.id)
                            )
                        }}
                        aria-label="Select row"
                        className="translate-y-[2px]"
                    />
                ),
                enableSorting: false,
                enableHiding: false,
            },
            {
                accessorKey: "code",
                header: ({ column }) => (
                    <DataTableColumnHeader column={column} title="Transaction" />
                ),
                cell: ({ row }) => (
                    <div className="w-[80px]">{row.getValue("code")}</div>
                ),
                enableSorting: false,
                enableHiding: false,
            },
            {
                accessorKey: "title",
                header: ({ column }) => (
                    <DataTableColumnHeader column={column} title="Title" />
                ),
                cell: ({ row }) => (
                    <div className="w-[80px]">{row.getValue("title")}</div>
                ),
                enableSorting: false,
                enableHiding: false,
            },
            // Add more columns as needed
        ],
        [data, setSelectedRowIds]
    );

    return (
        <DataTable
            columns={columns}
            data={data}
            pageCount={pageCount}
            advancedFilter={false}
            filterableColumns={[
                {
                    id: "status",
                    title: "Status",
                    options: data.map((transaction) => ({
                        label: transaction.status ? transaction.status[0]?.toUpperCase() + transaction.status.slice(1) : '', value: transaction.status,
                    })),
                },
                {
                    id: "category",
                    title: "Category",
                    options: data.map((transaction) => ({
                        label: transaction.status ? transaction.status[0]?.toUpperCase() + transaction.status.slice(1) : '', value: transaction.category,
                    })),
                },
            ]}
            searchableColumns={[
                {
                    id: "title",
                    title: "titles",
                },
            ]}
            floatingBar={true}
            deleteRowsAction={setSelectedRowIds}
        />
    );
}