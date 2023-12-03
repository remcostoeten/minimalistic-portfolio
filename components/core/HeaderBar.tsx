
'use client';
import { phoneNumber } from '@/config/data';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Dropdown from './Dropdown';
import Logo from './Logo';
import { toast } from 'sonner';
import { auth } from '@/core/(database)/firebase';
import { Warning } from '@mui/icons-material';
import { Button } from '@ui/button';

export default function HeaderBar() {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    const [isSticky, setIsSticky] = useState(false);

    const checkScroll = () => {
        setIsSticky(window.scrollY > 50);
    };

    useEffect(() => {
        window.addEventListener('scroll', checkScroll);
        return () => {
            window.removeEventListener('scroll', checkScroll);
        };
    }, []);

    const isLoggedIn = auth.currentUser;

    useEffect(() => {
        setTimeout(() => {
            toast('A work in progress!', {
                className: 'toasti',
                description: 'Far from finished and full of experimental bugs.',
                duration: 5000,
                icon: <Warning />,
            });
        }, 5000);
    }, [])

    return (
        <>
            <nav className={`header-bar navbar mt-10 ${isSticky ? 'sticky' : ''}`}>
                <div className="flex justify-between items-center p-5 w-full">
                    <Link href='/' className="flex items-center list-none">
                        <Logo />
                        <span className="ml-2 text-xl font-semibold">Divjesschuiver</span>
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
                            <Dropdown />
                        </li>
                    </ul>
                    <Button variant='white'>
                        {isLoggedIn ? (
                            <span onClick={() => auth.signOut()}>Log out</span>
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