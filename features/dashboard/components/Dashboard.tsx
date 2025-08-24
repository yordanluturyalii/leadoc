'use client';

import Button from "@/features/shared/components/Button";
import RepoCard from "./RepoCard";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/features/shared";

const Dashboard = () => {
    const { isPending, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: async () => {
            const response = await api.get('/api/user/repositories');
            return response.data;
        },
        retry: 1,
        staleTime: 5 * 60 * 1000
    })

    const isConnected = data?.message && data?.data && data?.data?.length > 0;
    const hasGithubConnection = data?.data && !data?.error;
    const repositories = data?.data || [];

    const handleGithub = () => {
        window.location.replace("http://localhost:3001/api/auth");
    }

    const handleRepoClick = (repo: any) => {
        window.location.href = `/dashboard/generate-readme`;
    };

    const renderContent = () => {
        if (isPending) {
            return (
                <div className="flex flex-col items-center gap-2 justify-center w-full h-[180px] bg-neutral-50 border border-dashed border-neutral-200 rounded-lg">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-neutral-900"></div>
                    <span className="text-neutral-500 text-body-md font-medium">LOADING...</span>
                    <span className="text-neutral-900 text-body-md font-medium">Fetching your repositories from GitHub.</span>
                </div>
            );
        }

        if (!isConnected) {
            <div className="flex flex-col items-center justify-center w-full h-[180px] bg-neutral-50 border border-dashed border-neutral-200 rounded-lg">
                <span className="text-neutral-900 text-body-xl font-semibold">Connect Github</span>
                <span className="text-neutral-500 text-body-md font-medium">Connect GitHub to start syncing and documenting your repositories.</span>
                <Button
                    isDark={false}
                    type="button"
                    handleClick={() => handleGithub()}
                    icon={"/github.png"}
                    isDisable={false}
                    className="px-3 py-2 mt-4"
                    children="Connect To Github"
                />
            </div>
        }

        if (error) {
            return (
                <div className="flex flex-col items-center gap-2 justify-center w-full h-[180px] bg-red-50 border border-dashed border-red-200 rounded-lg">
                    <span className="text-red-500 text-body-md font-medium">ERROR</span>
                    <span className="text-red-900 text-body-md font-medium">
                        {error.message || 'Failed to fetch repositories'}
                    </span>
                    <Button
                        isDark={true}
                        type="button"
                        handleClick={() => ""}
                        isDisable={false}
                        className="px-3 py-2 mt-2"
                        children="Try Again"
                    />
                </div>
            );
        }

        if (!hasGithubConnection) {
            return (
                <div className="flex flex-col items-center justify-center w-full h-[180px] bg-neutral-50 border border-dashed border-neutral-200 rounded-lg">
                    <span className="text-neutral-900 text-body-xl font-semibold">Connect Github</span>
                    <span className="text-neutral-500 text-body-md font-medium">Connect GitHub to start syncing and documenting your repositories.</span>
                    <Button
                        isDark={false}
                        type="button"
                        handleClick={() => handleGithub()}
                        icon={"/github.png"}
                        isDisable={false}
                        className="px-3 py-2 mt-4"
                        children="Connect To Github"
                    />
                </div>
            );
        }

        if (hasGithubConnection && repositories.length === 0) {
            return (
                <div className="flex flex-col items-center justify-center w-full h-[180px] bg-neutral-50 border border-dashed border-neutral-200 rounded-lg">
                    <span className="text-neutral-900 text-body-xl font-semibold">No Repositories Found</span>
                    <span className="text-neutral-500 text-body-md font-medium">You don't have any repositories yet. Create one on GitHub to get started.</span>
                    <div className="flex gap-2 mt-4">
                        <Button
                            isDark={true}
                            type="button"
                            handleClick={() => ""}
                            isDisable={false}
                            className="px-3 py-2"
                            children="Refresh"
                        />
                        <Button
                            isDark={false}
                            type="button"
                            handleClick={() => window.open('https://github.com/new', '_blank')}
                            isDisable={false}
                            className="px-3 py-2"
                            children="Create Repository"
                        />
                    </div>
                </div>
            );
        }

        return (
            <div className="grid gap-3 grid-cols-1 sm:grid-cols-3 lg:grid-cols-5">
                {repositories.map((repo: any) => (
                    <RepoCard
                        key={repo.id}
                        name={repo.name}
                        visibility={repo.visibility ? "Private" : "Public"}
                        status={repo.hasReadme || false}
                        updatedAt={repo.updatedAt ? new Date(repo.updatedAt) : undefined}
                        handleClick={() => handleRepoClick(repo)}
                    />
                ))}
            </div>
        );
    };

    return (
        <div className="w-full">
            <div className="w-full h-auto px-2 mt-2 pb-4 sm:px-4 sm:mt-4 bg-white rounded-2xl border border-neutral-100">
                <div className="my-4 lg:my-4 flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-neutral-900 text-title-xxs font-semibold">Connected Repositories</h1>
                            <span className="text-body-md font-medium text-neutral-500">
                                All your connected GitHub repositories
                            </span>
                        </div>
                    </div>
                </div>

                {renderContent()}
            </div>
        </div>
    )
}

export default Dashboard