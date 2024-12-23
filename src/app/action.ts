/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"

import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "OPTIONS" | "HEAD";
export interface ApiCallParams {
    url: string;
    method: HttpMethod;
    body: any | null;
}

export async function apiCall({ url, method, body = null }: ApiCallParams) {
    const base_url = process.env.NEXT_PUBLIC_API_URL;

    const session = await getServerSession(authOptions);

    const token = session?.user ? `Bearer ${session.user.auth}` : '';

    const headers = {
        "Content-Type": "application/json",
        Authorization: token,
    };

    const options: RequestInit = {
        method,
        headers,
        body: body ? JSON.stringify(body) : undefined,
    };

    const response = await fetch(
        `${base_url}${url}`, options);
    return response.json();
}
