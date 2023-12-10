
'use client';
import { phoneNumber } from '@/config/data';
import Link from 'next/link';
import { useCallback, useState } from 'react';
import Logo from './Logo';
import { auth } from '@/core/(database)/firebase';
import { Button } from '@ui/button';
import { SubTitle } from './Typography';
import React from 'react';
const SwappingWords = React.lazy(() => import('../effects/SwappingWords'));

export default function HeaderBar() {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    const [isSticky, setIsSticky] = useState(false);
    const isLoggedIn = auth.currentUser;

    const handleSignOut = useCallback(() => {
        auth.signOut();
    }, []);

    return (
        <>
            <nav className={`header-bar navbar mt-10 ${isSticky ? 'sticky' : ''}`}>
                <div className="flex justify-between items-center py-5  w-full">
                    <Link href='/' className="gap-4 flex items-center list-none">
                        <Logo />
                        <SubTitle isGeist>
                            <SwappingWords
                                words={[
                                    'Remco Stoeten',
                                    'A simple divjesschuiver 🚀',
                                    'Recovering magento dev 🏆',
                                    'Master of unfinished projects 🎯'
                                ]}
                            />
                        </SubTitle>
                    </Link >
                    <ul className="flex gap-4 items-center">
                        <li>
                            <Link href="/dashboard">
                                <span className="text-lg font-medium hover:underline" >Dashboard</span >
                            </Link>
                        </li>
                        <li>
                            <Link href="#articles">
                                <span className="text-lg font-medium hover:underline" >Articles</span >
                            </Link>
                        </li>
                        <li>
                            <Link href="#about">
                                <span className="text-lg font-medium hover:underline" >About</span >
                            </Link>
                        </li>
                        <li>
                            <Link href="/blackjack">
                                <span className="text-lg font-medium hover:underline" >Blackjack</span >
                            </Link>
                        </li>
                    </ul>
                    <Button variant='white'>
                        {isLoggedIn ? (
                            <span onClick={handleSignOut}>Log out</span>
                        ) : (
                            <Link href='/signin'>
                                Log in
                            </Link>
                        )}
                    </Button>
                </div>
            </nav >
        </>
    )
}