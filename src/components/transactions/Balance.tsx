// BalanceDisplay.tsx
import React from "react";

interface BalanceDisplayProps {
    totalDeposits: number;
    totalWithdrawals: number;
}

const BalanceDisplay: React.FC<BalanceDisplayProps> = ({ totalDeposits, totalWithdrawals }) => {
    const dept = totalDeposits - totalWithdrawals;

    return (
        <div>
            <h2>Balance</h2>
            <p>Total Deposits: ${totalDeposits}</p>
            <p>Total Withdrawals: ${totalWithdrawals}</p>
            <p>Dept: ${dept}</p>
        </div>
    );
};

export default BalanceDisplay;
