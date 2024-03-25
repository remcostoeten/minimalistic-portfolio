import React, { useMemo } from "react"
import { useFilters, useTable } from "react-table"

import { Button } from "../ui/button"
import { Card } from "../ui/card"
import { Input } from "../ui/input"

interface Transaction {
  id?: string
  amount?: number
  type?: "deposit" | "withdrawal"
  timestamp?: Date
  date?: string
}

interface TransactionListProps {
  transactions: Transaction[]
  onClearTransaction: (transactionId: string) => void
  onClearAllTransactions: () => void
}

const TransactionList: React.FC<TransactionListProps> = ({
  transactions,
  onClearTransaction,
  onClearAllTransactions,
}) => {
  const data = useMemo(() => transactions, [transactions])

  const columns = useMemo(
    () => [
      {
        Header: "Date",
        accessor: "date",
        Filter: DefaultColumnFilter,
      },
      {
        Header: "Type",
        accessor: "type",
        Filter: DefaultColumnFilter,
      },
      {
        Header: "Amount",
        accessor: "amount",
        Filter: DefaultColumnFilter,
      },
      {
        Header: "Actions",
        accessor: "id",
        Cell: ({ value }) => (
          <button onClick={() => onClearTransaction(value)}>Clear</button>
        ),
        disableFilters: true,
      },
    ],
    [onClearTransaction]
  )

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useFilters)

  return (
    <Card className="overflow-x-auto">
      <h2 className="mb-4 text-lg font-semibold text-gray-700">Transactions</h2>
      <table
        {...getTableProps()}
        className="w-full text-sm text-gray-500 whitespace-nowrap divide-y divide-gray-200 border-b border-gray-200"
      >
        <thead className="bg-gray-50">
          {headerGroups.map((headerGroup) => (
            <tr
              {...headerGroup.getHeaderGroupProps()}
              className="text-left font-medium text-gray-700"
            >
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {column.render("Header")}
                  <div>{column.canFilter ? column.render("Filter") : null}</div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody
          {...getTableBodyProps()}
          className="bg-white divide-y divide-gray-200"
        >
          {rows.map((row) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()} className="hover:bg-gray-50">
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} className="px-6 py-4">
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            )
          })}
        </tbody>
      </table>
      <Button onClick={onClearAllTransactions} className="mt-4">
        Clear All Transactions
      </Button>
    </Card>
  )
}

function DefaultColumnFilter({
  column: { filterValue, preFilteredRows, setFilter },
}) {
  const count = preFilteredRows.length

  return (
    <Input
      value={filterValue || ""}
      onChange={(e) => {
        setFilter(e.target.value || undefined)
      }}
      placeholder={`Search ${count} records...`}
    />
  )
}

export default TransactionList
