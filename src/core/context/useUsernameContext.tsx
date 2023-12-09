import { createContext, useContext, ReactNode } from 'react';

// Create a context for the username
const UsernameContext = createContext('');

// Create a provider component for the UsernameContext
export const UsernameProvider: React.FC = ({ children }: { children?: ReactNode }) => {
    return (
        <UsernameContext.Provider value={''}>
            {children}
        </UsernameContext.Provider>
    );
}