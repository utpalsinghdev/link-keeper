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
                        `${process.env.NEXT_API_URL}api/auth/login`, {
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


                    return resBody.session.User;

                } catch (error: any) {
                    console.error(error);
                    throw new Error(error.message);

                }
            },
        }),
    ],
    callbacks: {

        async session({ session, token, user }) {
            console.log({ token })
            session.user = user;
            return session;
        },
        async jwt({ token, session }) {
            if (session) {
                token = { ...token, ...session };
            }
            return token as JWT;
        }


    }
}