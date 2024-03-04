import React from 'react';
import Favorites from '@/components/myAccount/Favorites';
import { authConfig } from '@/lib/auth';
import { getServerSession } from "next-auth/next";
import { Session } from '@/types/session';

export const metadata = {
    title: 'Favorites',
    description: 'Page Description',
};

export default async function FavoritesPage() {
    const session: Session | null = await getServerSession(authConfig);

    return <Favorites session={session ? session : null} />
}
