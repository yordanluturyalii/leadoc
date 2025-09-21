import Button from "@/features/shared/components/Button"
import { X } from "lucide-react"
import PackContainer from "./PackContainer"
import { useStoreModal } from "@/features/shared/hooks/useStoreModal";

const PricingModal = () => {
    const { pricingOpen, setPricingOpen } = useStoreModal();
    return (
        <div className={`fixed inset-0 z-50 ${pricingOpen ? 'flex' : 'hidden'} items-center justify-center`}>
            <div className="absolute inset-0 bg-[#050505]/25"></div>

            <div className="relative bg-white p-7 rounded-xl shadow-lg z-10">
                <div className="flex justify-between items-center mb-8">
                    <span className="text-[20px] font-semibold">Buy Credits As Needed</span>
                    <Button isDark={false} isDisable={false} type="button" className="p-3 cursor-pointer" handleClick={() => setPricingOpen(!pricingOpen)}>
                        <X width={20} height={20} />
                    </Button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <PackContainer name="Mini Pack" credit={75} price={5} onClick={() => console.log('halo')} />
                    <PackContainer name="Medium Pack" credit={265} price={15} onClick={() => console.log('halo')} />
                    <PackContainer name="Mega Pack" credit={1000} price={50} onClick={() => console.log('halo')} />
                </div>
            </div>
        </div>
    )
}

export default PricingModal
