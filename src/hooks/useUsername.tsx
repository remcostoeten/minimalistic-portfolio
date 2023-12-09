import { UsernameContext } from '@/core/context/useUsernameContext';
import { useContext } from 'react';

export function useUsername() {
    const context = useContext(UsernameContext);

    if (context === undefined) {
        throw new Error('useUsername must be used within a UsernameProvider');
    }

    return context;
}