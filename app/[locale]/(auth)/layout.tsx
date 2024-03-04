import React from 'react';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authConfig } from '@/lib/auth';

export default async function AuthLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const session = await getServerSession(authConfig);
	if (session) return redirect("/");

	return (
		<>
			{children}
		</>
	)
}
