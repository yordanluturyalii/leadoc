'use client'

import Button from "@/features/shared/components/Button"
import React from "react"

type NavbarProps = {
  title: React.ReactNode
}

const Navbar = ({ title }: NavbarProps) => {
  return (
    <nav className="w-full h-12 bg-whiterounded-lg px-4 py-3 flex justify-between items-center">
      {title}
      <div className="flex gap-2">
        <Button isDark={false} type="button" handleClick={() => { }} icon={"/coins.svg"} isDisable={false} children={"10 Credits"} className="p-2" />
        <Button isDark={false} type="button" handleClick={() => { }} icon={"/user-circle.svg"} isDisable={false} className="p-2" />
      </div>
    </nav>
  )
}

export default Navbar