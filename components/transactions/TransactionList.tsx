import React, { useMemo } from 'react';
import { useTable, useFilters } from 'react-table';
import { Checkbox } from '../ui/checkbox';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { GhostButton } from '../core/buttons';

interface Transaction {
    id?: string;
    amount?: number;
    type?: "deposit" | "withdrawal";
    timestamp?: Date;
    date?: string;
}

interface TransactionListProps {
    transactions: Transaction[];
    onClearTransaction: (transactionId: string) => void;
    onClearAllTransactions: () => void;
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions, onClearTransaction, onClearAllTransactions }) => {
    const data = useMemo(() => transactions, [transactions]);

    const columns = useMemo(() => [
        {
            Header: (
                <div className="items-top flex space-x-2">
                    <Checkbox id="terms1" />
                    <div className="grid gap-1.5 leading-none">
                        <label
                            htmlFor="terms1"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Accept terms and conditions
                        </label>
                        <p className="text-sm text-muted-foreground">
                            You agree to our Terms of Service and Privacy Policy.
                        </p>
                    </div>
                </div>
            ),
            accessor: 'date',
            Filter: DefaultColumnFilter,
        },
        {
            Header: (
                <div className="flex items-center gap-x-3">
                    <span>Type</span>
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <button className="flex items-center gap-x-2">
                            <span>Status</span>
                            <svg
                                className="h-3"
                                viewBox="0 0 10 11"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {/* SVG Path for Status Icon */}
                            </svg>
                        </button>
                    </div>
                </div>
            ),
            accessor: 'type',
            Filter: DefaultColumnFilter,
        },
        {
            Header: (
                <div className="flex items-center gap-x-3">
                    <span>Amount</span>
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <B className="flex items-center gap-x-2">
                            <span>Role</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-4 h-4"
                            >
                                {/* SVG Path for Role Icon */}
                            </svg>
                        </B>
                    </div>
                </div>
            ),
            accessor: 'amount',
            Filter: DefaultColumnFilter,
        },
        {
            Header: 'Actions',
            accessor: 'id',
            Cell: ({ value }) => (
                <button
                    className="flex items-center gap-x-2"
                    onClick={() => onClearTransaction(value)}
                >
                    <span>Clear</span>
                </button>
            ),
            disableFilters: true,
        },
    ], [onClearTransaction]);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data }, useFilters);

    return (
        <div>
            <h2>Transactions</h2>
            <table {...getTableProps()} className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <thead className="bg-gray-50 dark:bg-gray-800">
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()} className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    {column.render('Header')}
                                    <div>{column.canFilter ? column.render('Filter') : null}</div>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => (
                                    <td {...cell.getCellProps()} className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        {cell.render('Cell')}
                                    </td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <Button onClick={onClearAllTransactions} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">Clear All Transactions</Button>
        </div>
    );
};

function DefaultColumnFilter({
    column: { filterValue, preFilteredRows, setFilter },
}) {
    const count = preFilteredRows.length;

    return (
        <Input
            value={filterValue || ''}
            onChange={e => {
                setFilter(e.target.value || undefined);
            }}
            placeholder={`Search ${count} records...`}
            className="px-2 py-1 border border-gray-300 rounded"
        />
    );
}

export default TransactionList;
