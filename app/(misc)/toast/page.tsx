'use client';
import { useState } from 'react';
import { toast } from 'sonner';

const ToastTestPage = () => {
    const [message, setMessage] = useState('');

    const showToast = () => {
        toast(message);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter a message"
                className="mb-4 p-2 border border-gray-300 rounded"
            />
            <button
                onClick={showToast}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Show Toast
            </button>
        </div>
    );
};

export default ToastTestPage;