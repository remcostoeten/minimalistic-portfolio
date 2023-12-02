'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { auth } from "@/core/(database)/firebase";

export default function useAuthRedirect(redirectIfAuthed = false, redirectUrl = '/') {
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user && redirectIfAuthed) {
                router.push(redirectUrl);
            } else if (!user && !redirectIfAuthed) {
                router.push(redirectUrl);
            }
        });

        return () => unsubscribe();
    }, [router, redirectIfAuthed, redirectUrl]);
