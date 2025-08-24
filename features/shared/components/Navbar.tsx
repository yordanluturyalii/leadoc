'use client'

import Button from "@/features/shared/components/Button"
import React from "react"
import { useStoreModal } from "../hooks/useStoreModal"
import { useQuery } from "@tanstack/react-query"
import { api } from "../hooks/useApi"

type NavbarProps = {
  title: React.ReactNode
}

const Navbar = ({ title }: NavbarProps) => {
  const { isPending, error, data } = useQuery({
    queryKey: ['me'],
    queryFn: async () => {
      const response = await api.get('/api/user/me');
      return response.data;
    },
    retry: 1,
    staleTime: 5 * 60 * 1000
  });
  const { profileOpen, setProfileOpen, pricingOpen, setPricingOpen } = useStoreModal();
  return (
    <nav className="w-full h-12 bg-whiterounded-lg px-4 py-3 flex justify-between items-center">
      {title}
      <div className="flex gap-2">
        <Button isDark={false} type="button" handleClick={() => setPricingOpen(!pricingOpen)} icon={"/coins.svg"} isDisable={false} className="px-2 py-[7px] cursor-pointer">
          {data?.data?.user?.coin || 0} Credits
        </Button>
        <Button isDark={false} type="button" handleClick={() => setProfileOpen(!profileOpen)} icon={"/user-circle.svg"} isDisable={false} className="px-2 py-[7px] cursor-pointer" />
      </div>
    </nav>
  )
}

export default Navbar