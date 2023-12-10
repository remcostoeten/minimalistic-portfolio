'use client';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/navigation';
import { doc, getDoc, runTransaction, serverTimestamp, setDoc } from 'firebase/firestore';
import { auth, firestore } from '@/core/(database)/firebase';

type CreateCommunityModalProps = {
    open: boolean;
    handleClose: () => void;
};

const CreateCommunityModal: React.FC<CreateCommunityModalProps> = ({ open, handleClose }) => {
    const [user] = useAuthState(auth);
    const [communityName, setCommunityNames] = useState('');
    const [charsRemaining, setCharsRemaining] = useState(21);
    const [communityType, setCommunityType] = useState('public');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenuOpen = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length > 21) return;
        setCommunityNames(e?.target.value);
        setCharsRemaining(21 - e?.target.value.length);
    };

    const onCommunityTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCommunityType(e.target.name);
    };

    const handleCreateCommunity = async () => {
        if (error) setError('');
        // Validation
        const format = /[ `!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?~]/;
        if (format.test(communityName) || communityName.length < 3) {
            return setError(
                'Community names must be between 3–21 characters, and can only contain letters, numbers, or underscores.'
            );
        }

        try {
            setLoading(true);

            if (!user) {
                throw new Error('You must be signed in to create a community');
            }

            const communityDocRef = doc(firestore, 'communities', communityName);

            await runTransaction(firestore, async (transaction) => {
                const communityDoc = await transaction.get(communityDocRef);

                if (communityDoc.exists()) {
                    throw new Error(`Sorry, r/${communityName} is  taken. Try another.`);
                }

                // Create community in firestore
                transaction.set(communityDocRef, {
                    creatorId: user?.uid,
                    createdAt: serverTimestamp(),
                    numberOfMembers: 1,
                    privacyType: communityType,
                });

                const userDocRef = doc(
                    firestore,
                    `users/${user?.uid}/communitySnippets`,
                    communityName
                );

                transaction.set(userDocRef, {
                    communityId: communityName,
                    isModerator: true,
                });

                toggleMenuOpen();
                handleClose();
                router.push(`r/${communityName}`);
            });
        } catch (error: any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-2xl font-bold mb-4">Create a community</h2>
                <div className="w-full max-w-md bg-white p-4 rounded shadow">
                    <label className="block">
                        <span className="text-gray-700">Name</span>
                        <input className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" type="text" value={communityName} onChange={handleChange} />
                        <span className="text-gray-500 text-sm">{charsRemaining} characters remaining</span>
                        <span className="text-red-500 text-sm">{error}</span>
                    </label>
                    <div className="mt-4">
                        <span className="text-gray-700">Community Type</span>
                        <div className="mt-2">
                            <label className="inline-flex items-center">
                                <input type="radio" className="form-radio" name="communityType" value="public" checked={communityType === 'public'} onChange={onCommunityTypeChange} />
                                <span className="ml-2">Public</span>
                            </label>
                            <label className="inline-flex items-center ml-6">
                                <input type="radio" className="form-radio" name="communityType" value="restricted" checked={communityType === 'restricted'} onChange={onCommunityTypeChange} />
                                <span className="ml-2">Restricted</span>
                            </label>
                            <label className="inline-flex items-center ml-6">
                                <input type="radio" className="form-radio" name="communityType" value="private" checked={communityType === 'private'} onChange={onCommunityTypeChange} />
                                <span className="ml-2">Private</span>
                            </label>
                        </div>
                    </div>
                    <div className="mt-6">
                        <button className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={handleCreateCommunity}>Create Community</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CreateCommunityModal;
