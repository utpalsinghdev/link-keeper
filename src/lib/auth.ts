/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextAuthOptions } from 'next-auth'
import { JWT } from 'next-auth/jwt';
import Credentials from 'next-auth/providers/credentials';
interface LoginCredentials {
    email?: string;
    password?: string;
}
export const authOptions: NextAuthOptions = {
    pages: {
        signIn: "/login"
    },
    secret: process.env.SECRET,
    session: {
        strategy: "jwt",
    },
    providers: [
        Credentials({
            type: "credentials",
            credentials: {},
            async authorize(credentials) {
                try {
                    const { email, password }: LoginCredentials = credentials || {};
                    const res = await fetch(
                        `${process.env.NEXT_PUBLIC_API_URL}api/auth/login`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            email,
                            password,
                        }),
                    }
                    );
                    const resBody = await res.json();

                    return resBody.data.user;

                } catch (error: any) {
                    console.error(error);
                    throw new Error(error.message);

                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.email = (user as any).email;
                token.username = (user as any).username;
                token.is_verified = (user as any).is_verified;
                token.auth = (user as any).token.Authorization
            }

            return token as JWT;
        },
        async session({ session, token }) {

            if (token) {
                session.user = token;
            }
            return session;
        },



    }
}