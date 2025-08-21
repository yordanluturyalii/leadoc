import Button from '@/features/shared/components/Button';
import React from 'react'

type PackContainerProps = {
    name: string;
    price: number;
    credit: number;
    onClick: () => void
}

const PackContainer = ({ name, price, credit, onClick }: PackContainerProps) => {
    return (
        <div className='bg-white w-[280px] h-auto p-4 flex flex-col gap-10 justify-between border border-neutral-200 rounded-xl'>
            <div className="flex flex-col gap-1">
                <span className='text-title-sm font-semibold text-neutral-900'>{name}</span>
                <span className='text-neutral-600 text-body-xl font-medium'>{credit} Credits</span>
            </div>
            <div className="flex flex-col gap-1">
                <span className='text-title-md text-neutral-900'>${price}</span>
                <Button isDark={true} isDisable={false} type='button' handleClick={onClick} className='py-2'>
                    Buy Now
                </Button>
            </div>
        </div>
    )
}

export default PackContainer