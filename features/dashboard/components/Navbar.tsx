'use client'

import Button from "@/features/shared/components/Button"
import Image from "next/image"

const Navbar = () => {
  return (
    <nav className="w-full h-12 bg-white border border-neutral-200 rounded-lg px-4 py-3 flex justify-between items-center">
        <Image src={"/leadoc-logo.svg"} alt="Leadoc" width={110} height={24} />
        <div className="flex gap-2">
            <Button isDark={false} type="button" handleClick={() => {}} icon={"/coins.svg"} isDisable={false} children={"10 Credits"} className="p-2" />
            <Button isDark={false} type="button" handleClick={() => {}} icon={"/user-circle.svg"} isDisable={false} className="p-2" />
        </div>
    </nav>
  )
}

export default Navbar