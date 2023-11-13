import React, { useMemo } from 'react';
import { useTable, useFilters } from 'react-table';

interface Transaction {
    id?: string;
    amount?: number;
    type?: "deposit" | "withdrawal";
    timestamp?: Date;
    date?: string;
}

interface TransactionListProps {
    transactions: any;
    onClearTransaction: (transactionId: string) => void;
    onClearAllTransactions: () => void;
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions, onClearTransaction, onClearAllTransactions }) => {
    const data = useMemo(() => transactions, [transactions]);

    const columns = useMemo(() => [
        {
            Header: 'Date',
            accessor: 'date',
            Filter: DefaultColumnFilter,
        },
        {
            Header: 'Type',
            accessor: 'type',
            Filter: DefaultColumnFilter,
        },
        {
            Header: 'Amount',
            accessor: 'amount',
            Filter: DefaultColumnFilter,
        },
        {
            Header: 'Actions',
            accessor: 'id',
            Cell: ({ value }) => <button onClick={() => onClearTransaction(value)}>Clear</button>,
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
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>
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
                                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <button onClick={onClearAllTransactions}>Clear All Transactions</button>
        </div>
    );
};

function DefaultColumnFilter({
    column: { filterValue, preFilteredRows, setFilter },
}) {
    const count = preFilteredRows.length;

    return (
        <input
            value={filterValue || ''}
            onChange={e => {
                setFilter(e.target.value || undefined);
            }}
            placeholder={`Search ${count} records...`}
        />
    );
}

export default TransactionList;