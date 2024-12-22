/* eslint-disable @typescript-eslint/no-unused-vars */
import { DefaultSession, DefaultUser } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
    interface Session {
        user?: JWT;
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        id: string;
        email: string;
        username: string;
        is_verified: boolean;
        auth: string;
    }
}
