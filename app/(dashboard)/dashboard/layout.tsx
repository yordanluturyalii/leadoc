'use client';

import Button from "@/features/shared/components/Button";
import Navbar from "@/features/shared/components/Navbar";
import ProfileModal from "@/features/dashboard/components/ProfileModal";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import PricingModal from "@/features/dashboard/components/PricingModal";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function DashboardLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    const pathname = usePathname()
    const router = useRouter()

    const isDashboardRoot = pathname === '/dashboard'
    const queryClient = new QueryClient()

    return (

        <QueryClientProvider client={queryClient}>
            <div className="bg-white min-h-screen w-full max-w-screen h-full p-3 relative">
                <PricingModal />
                <Navbar title={
                    !isDashboardRoot ?
                        <Button isDark={false} type="button" handleClick={() => router.push('/dashboard')} icon={"/arrow-left.svg"} isDisable={false} className="p-2" children={"Dashboard"} /> :
                        <Image src={"/leadoc-logo.svg"} alt="Leadoc" width={110} height={24} />
                } />
                <div className="w-full h-[calc(100vh-84px)] overflow-y-auto bg-neutral-50 border border-neutral-100 px-3 mt-2 pb-3 rounded-2xl relative">
                    <ProfileModal />
                    {children}
                </div>
            </div>
        </QueryClientProvider>
    )
}