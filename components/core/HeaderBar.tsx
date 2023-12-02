
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

const NavItem = ({ href, label }) => (
    <li>
        <Link href={href}>
            <a className="text-lg font-medium hover:underline">{label}</a>
        </Link>
    </li>
);

export default function HeaderBar() {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    const [isSticky, setIsSticky] = useState(false);

    const checkScroll = () => {
        setIsSticky(window.scrollY > 50);
        console.log(window.scrollY)
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
                    <Link href='' className="flex items-center list-none">
                        <Logo />
                        <span className="ml-2 text-xl font-semibold">Divjesschuiver</span>
                    </Link >
                    <ul className="flex gap-4 items-center">
                        <NavItem href="/dashboard" label="Dashboard" />
                        <NavItem href="#articles" label="Articles" />
                        <NavItem href="#about" label="About" />
                        <li>
                            <Dropdown />
                        </li>
                    </ul>
                    <Button variant='white'>
                        {isLoggedIn ? (
                            <span onClick={() => auth.signOut()}>Log out</span>
                        ) : (
                            <Link href='/signin'>
                                <a>Log in</a>
                            </Link>
                        )}
                    </Button>
                </div>
            </nav>
        </>
    );
}