'use client';

import { formatDistanceToNow } from "date-fns"
import Link from "next/link";

type RepoCardProps = {
    name: string;
    visibility: "Private" | "Public";
    status: boolean;
    updatedAt?: Date;
    url: string;
}

const RepoCard = ({ name, visibility, status, updatedAt, url }: RepoCardProps) => {
    return (
        <Link href={`/dashboard/generate-readme/${url}`} className="border border-neutral-100 bg-white flex flex-col gap-3 justify-between w-full sm:h-[118px] h-28 p-3 rounded-xl cursor-pointer">
            <div className="flex flex-col">
                <h1 className="text-neutral-900 font-semibold text-body-xl">{name}</h1>
                <span className="text-neutral-500 text-body-sm font-medium">{visibility} repository</span>
            </div>
            <div className="flex flex-col">
                {
                    status ? (
                        <span className="text-neutral-500 text-body-sm font-medium">No Readme</span>
                    ) : (
                        <span className="text-blue-600 text-body-sm font-medium">Readme available</span>
                    )
                }
                {
                    updatedAt ? (
                        <span className="text-body-sm font-medium text-neutral-500">Last Sync <span className="text-neutral-800">{formatDistanceToNow(new Date(updatedAt), {addSuffix: true})}</span></span>
                    ) : (
                        <span className="text-neutral-500 text-body-sm font-medium">No sync data available</span>
                    )
                }
            </div>
        </Link>
    )
}

export default RepoCard