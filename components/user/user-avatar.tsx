'use client'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { auth, signOut } from '@/core/(database)/firebase';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu';

export default function UserAvatar() {
    const [user, setUser] = useState(null);
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
            <div className="animate-pulse relative bg-transparent h-[90px] w-[90px]">
                <div className="absolute animate-pulse rounded-full bg-gray-200 h-[70px] w-[70px]"></div>
            </div>

        );
    }

    return (
        <>
            {user && (
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Image className='rounded-full scale-75' src={user.photoURL} alt={user.displayName} width={90} height={90} />
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
    )
}