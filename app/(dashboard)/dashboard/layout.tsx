import Navbar from "@/features/dashboard/components/Navbar";
import React from "react";

export default function DashboardLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="bg-white min-h-screen w-full max-w-screen h-full p-3">
            <Navbar />
            <div className="w-full h-[calc(100vh-84px)] bg-neutral-50 border border-neutral-100 px-3 mt-1 pb-3 rounded-2xl">
                {children}
            </div>
        </div>
    )
}