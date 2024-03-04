/* eslint-disable react-hooks/rules-of-hooks */
import { authService } from "@/services/auth.service";
import { cookies } from "next/headers";
import { Awaitable, NextAuthOptions, User, getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { JWT } from "next-auth/jwt";
import { redirect, useRouter } from "next/navigation";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { Session } from "@/types/session";


export const authConfig: NextAuthOptions = ({
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				email: { label: "Email", type: "text" },
				password: { label: "Password", type: "password" },
				locale: { label: "locale", type: "text" }
			},
			async authorize(credentials, req) {
				try {
					const response = await authService.login(
						credentials?.email,
						credentials?.password,
						req.body?.locale
					);

					const { data, success, message } = response as Session;

					if (success && data) {
						const { _token, ...rest } = data;
						return { ...rest, token: _token } as unknown as Awaitable<User>;
					} else if (!success && message) {
						throw new Error(message); // Throw an error to be caught below
					}

					return null;
				} catch (error) {
					// Handle the error here
					console.error("Error during login:", error);
					throw new Error(`${error}`); // Throw a generic error message
				}
			},
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
		}),
	],
	session: { strategy: "jwt" },
	callbacks: {
		async session({ session, token }) {
			const sanitizedToken = Object.keys(token).reduce((p, c) => {
				// strip unnecessary properties
				if (c !== "iat" && c !== "exp" && c !== "jti") {
					return { ...p, [c]: token[c] };
				} else {
					return p;
				}
			}, {});

			return { ...session, user: sanitizedToken };
		},
		async jwt({ user, token }) {
			if (typeof user !== "undefined") {
				return user as unknown as JWT;
			}
			return token;
		},
	},
	pages: {
		signIn: "/login",
	},
});

export async function loginIsRequiredServer() {
	const session = await getServerSession(authConfig);
	if (!session) return redirect("/login");
}

export function loginIsRequiredClient() {
	if (typeof window !== "undefined") {
		try {
			const session = useSession();
			const router = useRouter();
			if (!session) router.push("/login");
		} catch (error) {
			// Handle the error here or use a global error handler
			console.error("Error in loginIsRequiredClient:", error);
			// Optionally, you might want to redirect to an error page or show a user-friendly message
		}
	}
}

export function getAccessTokenCookie() {
	const nextCookies = cookies(); // Get cookies object
	const token = nextCookies.get("access_token")?.value;
	return token;
}

if (typeof window !== "undefined") {
	// Global error handler (placeholder, implement according to your needs)
	window.onerror = function (message, source, lineno, colno, error) {
		console.error("Global error handler:", error);
		// Optionally, you can log the error or perform other actions here
		return true;
	};
}