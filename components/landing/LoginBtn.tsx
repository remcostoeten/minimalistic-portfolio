'use client'
import { auth } from '@/core/(database)/firebase';
import Link from 'next/link'
import React, { useState } from 'react'
import { Button } from '../ui/button';

export default function SignInBtn() {
    const isLoggedIn = auth.currentUser;

    return (
        <>
            <Button className='bg-white !text-black hover:bg-white/90' variant='secondary'>
                <Link href="signin" className="style-70">
                    <p>{isLoggedIn ? 'Logout' : 'Login'}</p>
                </Link>
                <div className="style-72">
                    <div className="style-73">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 256 256"
                            focusable="false"
                            color="var(--token-a5634a3e-d7fd-42f9-9a88-14274d3a57cf, rgb(245, 245, 245))"
                            className="style-74"
                        >
                            <g
                                color="var(--token-a5634a3e-d7fd-42f9-9a88-14274d3a57cf, rgb(245, 245, 245))"
                                className="style-75"
                            >
                                <path
                                    d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"
                                    className="style-76"
                                />
                            </g>
                        </svg>
                    </div>
                </div>
            </Button >
        </>
    )
}
