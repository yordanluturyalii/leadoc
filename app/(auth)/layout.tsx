import { ReactNode } from "react";

export default function AuthLayout({
    children
}: Readonly<{ children: ReactNode }>) {
    return (
        <main className="w-full h-screen bg-neutral-100 py-5 px-3 md:p-5">
            {children}
        </main>
    )
}