'use client';

import { useState } from 'react';

import { AdminHero, EditPrices, Login } from '@components/admin';

export default function Admin() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const adminPass = process.env['NEXT_PUBLIC_ADMIN_PASS'];

    const handleSubmit = (pass: string) => {
        if (pass === adminPass) {
            setIsLoggedIn(true);
        }
    };

    return (
        <>
            <AdminHero />
            {!isLoggedIn ? <Login handleSubmit={handleSubmit} /> : <EditPrices />}
        </>
    );
}
