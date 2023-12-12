import { useEffect, useState } from 'react';
import { db } from '@/core/(database)/firebase';
import { onSnapshot, collection, getDocs } from 'firebase/firestore';

interface FetchOptions {
  optionsCollection: string;
}

interface FetchResult {
  loading: boolean;
  data: any[];
  error: string | null;
}

export function useFirebaseFetch(options: FetchOptions): FetchResult {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, options.optionsCollection));
        const fetchedData = querySnapshot.docs.map((doc) => doc.data());
        setData(fetchedData);
        setData(fetchedData);
        setLoading(false);
      } catch (error) {
        setError('Error fetching data');
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      // Cleanup logic if needed
    };
  }, [options.optionsCollection]);

  return { loading, data, error };
}

