import React from "react";

interface ConfirmDialogProps {
    onConfirm: () => void;
    onCancel: () => void;
}

export const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
    onConfirm,
    onCancel,
}) => {
    return (
        <div>
            <p>Are you sure you want to delete this transaction?</p>
            <button onClick={onConfirm}>Yes</button>
            <button onClick={onCancel}>No</button>
        </div>
    );
};
