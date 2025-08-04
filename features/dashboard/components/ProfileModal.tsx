import Image from 'next/image'
import Link from 'next/link'
import { useStoreModal } from '../../shared/hooks/useStoreModal'

const ProfileModal = () => {
    const {profileOpen, setPricingOpen, pricingOpen} = useStoreModal();
    return (
        <div className={`w-60 h-auto bg-white border border-neutral-200 rounded-xl ${profileOpen ? 'flex' : 'hidden'} flex-col fixed right-6 top-20`}>
            <div className="p-3 border-b border-neutral-100">
                <span className='text-neutral-900 text-body-md font-medium'>johndoe@gmail.com</span>
            </div>
            <div className="p-3 flex flex-col gap-1 border-b border-neutral-100">
                <span className='text-neutral-500 text-body-md font-medium'>Credits</span>
                <div className="flex justify-between">
                    <div className="flex gap-2">
                        <Image src={'/credits-icon.svg'} alt='image coin' width={18} height={18} />
                        <span className='text-body-md font-semibold text-neutral-900'>10</span>
                    </div>
                    <button className='text-purple-600 text-body-md font-bold cursor-pointer' onClick={() => setPricingOpen(!pricingOpen)}>Buy More</button>
                </div>
            </div>
            <div className="px-3 py-2.5">
                <Link href={"/dashboard/profile"} className='text-neutral-900 text-body-md font-medium'>Account settings</Link>
            </div>
            <div className="px-3 py-2.5">
                <Link href={'/'} className='text-neutral-900 text-body-md font-medium'>Give feedback</Link>
            </div>
            <div className="px-3 py-2.5">
                <button className='text-red-600 text-body-md font-medium cursor-pointer'>Logout</button>
            </div>
        </div>
    )
}

export default ProfileModal