"use client"
import React from 'react'
import { Toaster } from "@/components/ui/sonner"
import { SessionProvider } from 'next-auth/react'
const Provider = ({ children }: { children: React.ReactNode }) => {
    return <SessionProvider>
        {children}
        <Toaster richColors />
    </SessionProvider>
}

export default Provider