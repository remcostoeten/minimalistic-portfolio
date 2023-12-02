'use client'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { auth, signOut } from '@/core/(database)/firebase';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu';

export default function UserAvatar() {
    const [user, setUser] = useState<any>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    if (loading) {
        return (
            <div className="skeleton w-20 scale-75 h-20 rounded-full shrink-0"></div>
        );
    }

    const currentUser = getAuth().currentUser;

    if (!currentUser) {
        return null;
    }

    const photoURL = currentUser?.photoURL || '';

    return (
        <>
            {user && (
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <div className="avatar">
                            <div className="w-20 rounded">
                                <Image className='rounded-full scale-75' src={photoURL} alt={currentUser.displayName} width={90} height={90} />
                            </div>
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem><span onClick={signOut}>Sign out</span></DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )}
        </>
    );
}

