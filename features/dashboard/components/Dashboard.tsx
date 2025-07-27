'use client';

import Button from "@/features/shared/components/Button";
import RepoCard from "./RepoCard"
import { useEffect, useState } from "react";

const Dashboard = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const isConnected = false;

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);
    return (
        <div className="w-full px-3 md:px-4 pb-3 md:pb-4">
            {
                loading ? (
                    <div className="flex flex-col items-center gap-2 justify-center w-full h-[180px] bg-neutral-50 border border-dashed border-neutral-200 rounded-lg">
                        <span className="text-neutral-500 text-body-md font-medium">LOADING...</span>
                        <span className="text-neutral-900 text-body-md font-medium">Fetching your repositories from GitHub.</span>
                    </div>
                ) :
                    isConnected ? (
                        <div className="grid gap-3 grid-cols-1 sm:grid-cols-3 lg:grid-cols-5">
                            <RepoCard name="budi" visibility="Private" status={false} updatedAt={new Date("2025-03-14")} handleClick={() => alert("Hello World")} />
                            <RepoCard name="budi" visibility="Private" status={true} handleClick={() => alert("Hello World")} />
                            <RepoCard name="budi" visibility="Private" status={false} updatedAt={new Date("2025-03-15")} handleClick={() => alert("Hello World")} />
                            <RepoCard name="budi" visibility="Private" status={true} handleClick={() => alert("Hello World")} />
                            <RepoCard name="budi" visibility="Private" status={false} updatedAt={new Date("2025-02-29")} handleClick={() => alert("Hello World")} />
                            <RepoCard name="budi" visibility="Private" status={true} handleClick={() => alert("Hello World")} />
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center w-full h-[180px] bg-neutral-50 border border-dashed border-neutral-200 rounded-lg">
                            <span className="text-neutral-900 text-body-xl font-semibold">Connect Github</span>
                            <span className="text-neutral-500 text-body-md font-medium">Connect GitHub to start syncing and documenting your repositories.</span>
                            <Button isDark={false} type="button" handleClick={() => alert("Connect GitHub")} icon={"/github.png"} isDisable={false} className="px-3 py-2 mt-4" children={"Connect To Github"} />
                        </div>
                    )
            }
        </div>
    )
}

export default Dashboard