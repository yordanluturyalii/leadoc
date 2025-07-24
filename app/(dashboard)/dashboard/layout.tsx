import React from "react";

export default function DashboardLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="bg-white min-h-screen w-full h-full p-3">
            {children}
        </div>
    )
}