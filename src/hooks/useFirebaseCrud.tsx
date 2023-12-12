import { Input } from '@/components/ui/input'
import React, { useState } from 'react';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '@/core/(database)/firebase';

interface CrudItem {
  id: string;
}


interface UseCrudOptions<T> {
  collectionName: string;
  transformData?: any;
}

export function useCrud<T extends CrudItem>({ collectionName, transformData }: UseCrudOptions<T>) {
  const [error, setError] = useState<string | null>(null);

  const deleteItem = async (itemId: string) => {
    try {
      await deleteDoc(doc(db, collectionName, itemId));
    } catch (error) {
      console.error('Error deleting item:', error);
      setError('Error deleting item');
    }
  };

  const editItem = async (itemId: string, updatedData: T) => {
    console.log('Collection name:', collectionName);
    console.log('Item ID:', itemId);
    try {
      const transformedData = transformData ? transformData(updatedData) : updatedData;
      await updateDoc(doc(db, collectionName, itemId), transformedData);
    } catch (error) {
      console.error('Error updating item:', error);
      setError('Error updating item');
    }
  };

  const clearError = () => setError(null);

  return {
    deleteItem,
    editItem,
    error,
    clearError,
  };
}

