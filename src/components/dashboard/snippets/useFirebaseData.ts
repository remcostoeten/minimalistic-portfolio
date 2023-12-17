import { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { db } from '@/core/(database)/firebase';

export default function useFirebaseData(collectionName) {
    const [data, setData] = useState([]);

    useEffect(() => {
        db.collection(collectionName).get().then((querySnapshot) => {
            const data = querySnapshot.docs.map(doc => doc.data());
            setData(data);
        });
    }, [collectionName]);

    return data;
}