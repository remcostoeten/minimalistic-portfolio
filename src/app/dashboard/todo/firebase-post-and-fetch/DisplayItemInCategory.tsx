'use client';
import { useEffect, useState } from 'react';
import { collection, deleteDoc, doc, onSnapshot, query } from 'firebase/firestore';
import { db } from '@/core/(database)/firebase';
import { SkeletonBar } from '@/components/loaders/Skeleton';
import { toast } from 'sonner';

export default function DisplayItemInCategory() {

  // Define a state to hold the items
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, 'items'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data() });
      });
      setItems(items);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await deleteDoc(doc(db, "items", id));
      toast.success('Item deleted successfully.');
    } catch (error) {
      toast.error("Something went wrong.");
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[450px]">
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">Name</th>
                <th scope="col" className="py-3 px-6">Price</th>
                <th scope="col" className="py-3 px-6">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
              {(loading ? Array.from({ length: 5 }) : items).map((item, index) => (
                <tr key={loading ? index : item.id}>
                  <td className='py-3 px-6'>{loading ? <SkeletonBar height={4} /> : item.name}</td>
                  <td className='py-3 px-6'>{loading ? <SkeletonBar height={2} /> : item.price}</td>
                  <td className="py-3 px-6">
                    {!loading && <button onClick={() => handleDelete(item.id)}>Delete</button>}
                  </td>
                </tr>
              ))}
            </tbody>
            {/* <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
              {loading && (
                <tr>
                  <td className='py-3 px-6'>
                    <SkeletonBar height={4} />
                  </td>
                  <td className='py-3 px-6'>
                    <SkeletonBar height={4} />
                  </td>
                  <td className='py-3 px-6'>
                    <SkeletonBar height={4} />
                  </td>
                </tr>
              ) : <>

              {items.map((item) => (
                <tr key={item.id}>
                  <td className='py-3 px-6'>{loading ? <SkeletonBar height={4} /> : item.name}</td>
                  <td className='py-3 px-6'>{loading ? <SkeletonBar height={2} /> : item.price}</td>
                  <td className="py-3 px-6">
                    {!loading && <button onClick={() => handleDelete(item.id)}>Delete</button>}
                  </td>
                </tr>
              ))}
              </>
            </tbody> */}
          </table>
        </div>
      </div>
    </div>
  );
}