'use client'

import Button from "@/features/shared/components/Button"
import React from "react"
import { useStoreModal } from "../hooks/useStoreModal"

type NavbarProps = {
  title: React.ReactNode
}

const Navbar = ({ title }: NavbarProps) => {
  const { profileOpen, setProfileOpen, pricingOpen, setPricingOpen } = useStoreModal();
  return (
    <nav className="w-full h-12 bg-whiterounded-lg px-4 py-3 flex justify-between items-center">
      {title}
      <div className="flex gap-2">
        <Button isDark={false} type="button" handleClick={() => setPricingOpen(!pricingOpen)} icon={"/coins.svg"} isDisable={false} children={"10 Credits"} className="px-2 py-[7px]" />
        <Button isDark={false} type="button" handleClick={() => setProfileOpen(!profileOpen)} icon={"/user-circle.svg"} isDisable={false} className="px-2 py-[7px]" />
      </div>
    </nav>
  )
}

export default Navbar