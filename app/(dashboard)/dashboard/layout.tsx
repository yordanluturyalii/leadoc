import Navbar from "@/features/dashboard/components/Navbar";
import React from "react";

export default function DashboardLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="bg-white min-h-screen w-full max-w-screen h-full p-3">
            <Navbar />
            <div className="w-full h-[calc(100vh-84px)] bg-neutral-50 border border-neutral-100 px-3 mt-1 pb-3 rounded-2xl">
                <div className="w-full h-auto px-2 mt-2 sm:px-3 sm:mt-3 bg-white rounded-2xl border border-neutral-100">
                    <div className="p-3 md:p-4 flex flex-col gap-1">
                        <h1 className="text-neutral-900 text-title-xxs font-semibold">Connected Repositories</h1>
                        <span className="text-body-md font-medium text-neutral-500">All your connected GitHub repositories</span>
                    </div>  
                    {children}
                </div>
            </div>
        </div>
    )
}