import { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { db } from '../firebase';

interface FirestoreState {
    loading: boolean;
    error: string | null;
    postData: (collection: string, data: Record<string, unknown>) => Promise<void>;
}

export function useFirestore(): FirestoreState {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const postData = async (collection: string, data: Record<string, unknown>) => {
        setLoading(true);
        try {
            await db.collection(collection).add(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return { postData, loading, error };
}