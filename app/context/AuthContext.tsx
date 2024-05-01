"use client";

import { SessionProvider } from "next-auth/react";

interface AuthContextProviderProps {
    children: React.ReactNode;
}

export default function AuthContext({ children }: AuthContextProviderProps) {
    return <SessionProvider>{children}</SessionProvider>;
}
