import Navbar from "./Navbar"
import RepoCard from "./RepoCard"

const Dashboard = () => {
    return (
        <>
            <Navbar />
            <div className="w-full h-[calc(100vh-84px)] bg-neutral-50 border border-neutral-100 px-3 mt-1 pb-3 rounded-2xl">
                <div className="w-full h-auto px-2 mt-2 sm:px-3 sm:mt-3 bg-white rounded-2xl border border-neutral-100">
                    <div className="p-3 md:p-4 flex flex-col gap-1">
                        <h1 className="text-neutral-900 text-title-xxs font-semibold">Connected Repositories</h1>
                        <span className="text-body-md font-medium text-neutral-500">All your connected GitHub repositories</span>
                    </div>  
                    <div className="grid p-3 md:p-4 gap-3 grid-cols-1 sm:grid-cols-3 lg:grid-cols-5">
                        <RepoCard name="budi" visibility="Private" status={false} updatedAt={new Date("2025-03-14")} />
                        <RepoCard name="budi" visibility="Private" status={true} />
                        <RepoCard name="budi" visibility="Private" status={false} updatedAt={new Date("2025-03-15")} />
                        <RepoCard name="budi" visibility="Private" status={true} />
                        <RepoCard name="budi" visibility="Private" status={false} updatedAt={new Date("2025-02-29")} />
                        <RepoCard name="budi" visibility="Private" status={true} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard