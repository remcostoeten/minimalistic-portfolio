'use client'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { auth, signOut } from '@/core/(database)/firebase';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { SkeletonBar } from '../loaders/Skeleton';

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
            <>
                <div className='flex gap-0.5 justify-center'>
                    <div className='flex flex-col gap-1 items-end justify-center'>
                        <div className="skeleton w-[125px] h-3"></div>
                        <div className="skeleton w-[100px] h-3"></div>
                    </div>
                    <div className="skeleton w-20 scale-75 h-20 rounded-full shrink-0"></div>
                </div>
            </>
        );
    }

    const currentUser = getAuth().currentUser;

    if (!currentUser) {
        return null;
    }

    const photoURL = currentUser?.photoURL || '';
    const displayName = currentUser?.displayName || '';
    const subTitle = 'Frontend developer' || '';

    return (
        <>
            {user && (
                <div className="flex gap-2">
                    <div className='flex flex-col gap-0.5 justify-center'>
                        <div className="text-base font-bold text-right">
                        {loading ? <SkeletonBar height={4} width='100%' /> : displayName}
                        </div>
                        <p className="text-xs text-muted-foreground text-right">
                            {loading ? <SkeletonBar height={4} width='100%' /> : subTitle}
                        </p>
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <div className="avatar">
                                <div className="w-14 rounded">
                                    {loading ?
                                        <>
                                            <div className='flex gap-0.5 justify-center'>
                                                <div className="skeleton w-20 scale-75 h-20 rounded-full shrink-0"></div>
                                                <div className="skeleton w-20 scale-75 h-20 rounded-full shrink-0"></div>
                                                <div className="skeleton w-20 scale-75 h-20 rounded-full shrink-0"></div>
                                            </div>
                                            <div className="skeleton w-20 scale-75 h-20 rounded-full shrink-0"></div>
                                        </>
                                        :
                                        <Image className="rounded-full scale-75" src={photoURL} alt={currentUser.displayName} width={90} height={90} />
                                    }
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
                </div>
            )}
        </>
    );
}