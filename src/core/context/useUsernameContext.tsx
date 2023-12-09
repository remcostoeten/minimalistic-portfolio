'use client';
import { createContext, useState } from 'react';

type UsernameContextType = {
    username: string;
    setUsername: (username: string) => void;
};

export const UsernameContext = createContext<UsernameContextType | undefined>(undefined);
export function UsernameProvider({ children }) {
    const [username, setUsername] = useState('');

    return (
        <UsernameContext.Provider value={{ username, setUsername }}>
            {children}
        </UsernameContext.Provider>
    );
}
